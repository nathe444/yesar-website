import { images } from "@/lib/content";

export function CtaBanner() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden"
      style={{
        minHeight: "var(--cta-h)",
        backgroundImage:
          "radial-gradient(120% 140% at 88% 8%, #ffe6a3 0%, #eac769 26%, #e0b84d 39%, #d6a930 52%, #9b7435 100%)",
      }}
    >
      <img
        src={images.ctaGraphic}
        alt=""
        width={662}
        height={607}
        className="pointer-events-none absolute top-0 right-0 hidden lg:block"
        style={{
          width: "calc(662 * var(--u))",
          height: "var(--cta-h)",
          maxWidth: "none",
          objectFit: "contain",
          objectPosition: "right top",
        }}
      />
      <div
        className="page relative flex flex-col items-start justify-center"
        style={{
          minHeight: "var(--cta-h)",
          paddingLeft: "var(--pad-x)",
          paddingRight: "var(--pad-x)",
          paddingTop: "calc(82 * var(--u))",
          paddingBottom: "calc(84 * var(--u))",
          gap: "calc(60 * var(--u))",
        }}
      >
        <div
          className="flex max-w-[704px] flex-col"
          style={{ gap: "var(--gap-hero)" }}
        >
          <p className="t-20 font-light tracking-[0.18em] text-cream/70">
            FEATURED BUSINESS · CONSTRUCTION
          </p>
          <h2 className="t-64 text-cream">
            SHAPING SKYLINES, LAYING FOUNDATIONS
          </h2>
          <p className="t-20 max-w-[699px] font-light text-cream/70">
            Full-bleed visual of a flagship project. This block spotlights one
            business unit at a time — large visual, short headline, one CTA.
          </p>
        </div>
        <a
          href="#businesses"
          className="pill border-[0.5px] border-white/55 bg-cream/15 text-cream"
        >
          EXPLORE CONSTRUCTION
        </a>
      </div>
    </section>
  );
}
