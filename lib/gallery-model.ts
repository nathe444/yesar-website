const SPECULAR_GLOSSINESS = "KHR_materials_pbrSpecularGlossiness";

type SpecularGlossiness = {
  diffuseFactor?: number[];
  diffuseTexture?: { index: number };
  glossinessFactor?: number;
};

type GlbMaterial = {
  pbrMetallicRoughness?: {
    baseColorFactor?: number[];
    baseColorTexture?: { index: number };
    metallicFactor?: number;
    roughnessFactor?: number;
  };
  extensions?: {
    KHR_materials_pbrSpecularGlossiness?: SpecularGlossiness;
  };
};

type GlbDocument = {
  materials?: GlbMaterial[];
  extensionsUsed?: string[];
  extensionsRequired?: string[];
};

function withoutSpecularGlossiness(names: string[] | undefined) {
  return names?.filter((name) => name !== SPECULAR_GLOSSINESS);
}

/** Rewrites the Sketchfab specular-glossiness materials so three.js can render them. */
export function galleryModelBuffer(source: ArrayBuffer) {
  const view = new DataView(source);
  const jsonChunkLength = view.getUint32(12, true);
  const jsonStart = 20;
  const document = JSON.parse(
    new TextDecoder().decode(new Uint8Array(source, jsonStart, jsonChunkLength)),
  ) as GlbDocument;

  for (const material of document.materials ?? []) {
    const specular = material.extensions?.KHR_materials_pbrSpecularGlossiness;
    if (!specular) continue;

    material.pbrMetallicRoughness = {
      metallicFactor: 0,
      roughnessFactor: 1 - (specular.glossinessFactor ?? 1),
      ...(specular.diffuseFactor ? { baseColorFactor: specular.diffuseFactor } : {}),
      ...(specular.diffuseTexture ? { baseColorTexture: specular.diffuseTexture } : {}),
    };
    delete material.extensions?.KHR_materials_pbrSpecularGlossiness;
    if (material.extensions && Object.keys(material.extensions).length === 0) {
      delete material.extensions;
    }
  }

  const used = withoutSpecularGlossiness(document.extensionsUsed);
  const required = withoutSpecularGlossiness(document.extensionsRequired);
  if (used && used.length > 0) document.extensionsUsed = used;
  else delete document.extensionsUsed;
  if (required && required.length > 0) document.extensionsRequired = required;
  else delete document.extensionsRequired;

  const jsonBytes = new TextEncoder().encode(JSON.stringify(document));
  const jsonPad = (4 - (jsonBytes.length % 4)) % 4;
  const paddedJsonLength = jsonBytes.length + jsonPad;
  const binHeader = jsonStart + jsonChunkLength;
  const binChunkLength = view.getUint32(binHeader, true);
  const binType = view.getUint32(binHeader + 4, true);
  const rest = new Uint8Array(source, binHeader + 8);
  const total = 28 + paddedJsonLength + rest.byteLength;
  const out = new Uint8Array(total);
  const outView = new DataView(out.buffer);

  outView.setUint32(0, view.getUint32(0, true), true);
  outView.setUint32(4, view.getUint32(4, true), true);
  outView.setUint32(8, total, true);
  outView.setUint32(12, paddedJsonLength, true);
  outView.setUint32(16, view.getUint32(16, true), true);
  out.set(jsonBytes, 20);
  out.fill(0x20, 20 + jsonBytes.length, 20 + paddedJsonLength);
  outView.setUint32(20 + paddedJsonLength, binChunkLength, true);
  outView.setUint32(24 + paddedJsonLength, binType, true);
  out.set(rest, 28 + paddedJsonLength);

  return out.buffer;
}
