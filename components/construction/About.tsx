import { Pill } from "./Pill";

export function ConstructionAbout() {
  return (
    <section id="about" className="page inset-x" style={{ paddingBottom: "calc(184 * var(--u))" }}>
      <div className="c-about-grid">
        <div className="flex flex-col" style={{ gap: "calc(51 * var(--u))" }}>
          <div className="flex flex-col text-[#472313]" style={{ gap: "calc(33 * var(--u))" }}>
            <div className="flex flex-col" style={{ gap: "calc(23 * var(--u))" }}>
              <p className="t-20 font-light opacity-70">ABOUT US</p>
              <h2 className="t-64 c-lh-66">
                Two decades of building with purpose
              </h2>
            </div>
            <div
              className="t-20 flex flex-col font-light opacity-70 lg:w-[calc(584*var(--u))]"
              style={{ gap: "calc(25 * var(--u))" }}
            >
              <p>
                Yesar Construction has grown from a local contracting team into one
                of the region&apos;s trusted builders, delivering residential,
                commercial, and infrastructure projects across multiple regions.
              </p>
              <p>
                Every project is backed by the full strength of Yesar Group—
                giving our clients access to in-house engineering, manufacturing,
                and logistics support that most contractors simply don&apos;t have.
              </p>
            </div>
          </div>
          <Pill >OUR STORY</Pill>
        </div>
        <div className="flex flex-col" style={{ gap: "calc(21 * var(--u))" }}>
          <img
            src="/construction/about-sunset.png"
            alt="Construction site at sunset with a tower crane"
            width={903}
            height={360}
            className="w-full object-cover"
            style={{ aspectRatio: "903 / 360", borderRadius: "var(--radius-card)" }}
          />
          <img
            src="/construction/about-cranes.png"
            alt="Tower cranes over a concrete building frame"
            width={4096}
            height={2731}
            className="w-full object-cover"
            style={{ aspectRatio: "4096 / 2731", borderRadius: "var(--radius-card)" }}
          />
        </div>
      </div>
    </section>
  );
}
