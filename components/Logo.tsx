import { images } from "@/lib/content";

export function Logo({
  inverted = false,
  compact = false,
}: {
  inverted?: boolean;
  compact?: boolean;
}) {
  const src = inverted ? images.logoFooter : images.logo;
  const w = inverted ? 49 : 39;
  const h = inverted ? 42 : 34;

  return (
    <a href="#top" className="flex items-center gap-[7px] text-cream">
      <img
        src={src}
        alt=""
        width={w}
        height={h}
        className={compact ? "shrink-0" : "g-footer-mark shrink-0"}
        style={
          compact
            ? { width: "var(--logo-w)", height: "var(--logo-h)" }
            : undefined
        }
      />
      {inverted ? (
        <span className="leading-none">
          <span
            className="block font-bold text-cream"
            style={{ fontSize: "var(--fs-26)" }}
          >
            YESAR
          </span>
          <span
            className="block font-light uppercase tracking-[0.08em] text-cream"
            style={{ fontSize: "var(--fs-10)" }}
          >
            Business Group
          </span>
        </span>
      ) : (
        <span className="sr-only">Yesar Group</span>
      )}
    </a>
  );
}
