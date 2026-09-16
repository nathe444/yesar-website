import { images } from "@/lib/content";
import { HeroMarkAnimation } from "./HeroMarkAnimation";

function HeroCopy() {
  return (
    <>
      <div className="hero-copy-left flex w-full max-w-[583px] flex-col gap-4 lg:max-w-none lg:gap-[var(--gap-hero)]">
        <p className="t-20 font-light tracking-[0.18em] text-ink/70">
          YESAR GROUP · EST. 1999
        </p>
        <h1 className="t-64 text-ink">
          ONE GROUP.
          <br />
          MANY INDUSTRIES.
          <br />
          A SINGLE VISION.
        </h1>
      </div>
      <p className="hero-copy-right t-20 w-full max-w-[515px] font-light text-ink/70 lg:max-w-none">
        From construction to energy, agriculture to logistics, Yesar builds the
        infrastructure that moves nations forward.
      </p>
    </>
  );
}

export function Hero() {
  return (
    <section
      className="page"
      style={{
        paddingTop: "calc(194 * var(--u))",
        paddingBottom: "calc(193 * var(--u))",
      }}
    >
      <div className="hero-stage hidden lg:block">
        <div className="hero-copy">
          <HeroCopy />
        </div>
        <div className="hero-mark">
          <img
            src={images.wordmark}
            alt="YESAR"
            width={1876}
            height={445}
            className="hero-wordmark"
          />
          <img
            src={images.towerGlow}
            alt=""
            width={702}
            height={255}
            className="hero-glow"
          />
          <HeroMarkAnimation
            className="hero-anim"
            media="(min-width: 1024px)"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 px-5 pt-10 lg:hidden">
        <HeroCopy />
        <div className="relative mx-auto w-full max-w-[40rem] overflow-visible pt-[38%]">
          <img
            src={images.wordmark}
            alt="YESAR"
            width={1876}
            height={445}
            className="relative z-10 h-auto w-full"
          />
          <HeroMarkAnimation
            className="hero-anim-mobile"
            media="(max-width: 1023px)"
          />
        </div>
      </div>
    </section>
  );
}
