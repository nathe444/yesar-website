import Image from "next/image";
import { images } from "@/lib/content";

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
            src={images.heroAccent}
            alt=""
            width={275}
            height={158}
            className="hero-accent"
          />
          <img
            src={images.towerGlow}
            alt=""
            width={702}
            height={255}
            className="hero-glow"
          />
          <div className="hero-tower">
            <Image
              src={images.tower}
              alt=""
              width={491}
              height={736}
              priority
            />
          </div>
          <img
            src={images.heroVector}
            alt=""
            width={261}
            height={216}
            className="hero-s"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 px-5 pt-10 lg:hidden">
        <HeroCopy />
        <div className="relative mx-auto w-full max-w-[40rem] pt-[38%]">
          <img
            src={images.wordmark}
            alt="YESAR"
            width={1876}
            height={445}
            className="relative z-10 h-auto w-full"
          />
          <div
            className="pointer-events-none absolute bottom-0 z-20"
            style={{
              left: "36.94%",
              width: "26.17%",
              height: "165.25%",
            }}
          >
            <Image
              src={images.tower}
              alt=""
              width={491}
              height={736}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <img
            src={images.heroVector}
            alt=""
            width={261}
            height={216}
            className="pointer-events-none absolute z-30"
            style={{
              left: "42.09%",
              top: "35.92%",
              width: "13.92%",
              height: "28.06%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
