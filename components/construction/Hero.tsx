import { ConstructionHeader } from "./Header";
import { Pill } from "./Pill";
import { ConstructionWordmark } from "./Wordmark";

export function ConstructionHero() {
  return (
    <div className="c-hero">
      <ConstructionHeader />
      <div className="c-hero-copy">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex min-w-0 max-w-full flex-col lg:w-[calc(583*var(--u))] lg:shrink-0" style={{ gap: "calc(24 * var(--u))" }}>
            <p className="c-eyebrow t-20 font-light opacity-70">
              Y E S A R C O N S T R U C T I O N · A Y E S A R G R O U P C O M P A N Y
            </p>
            <h1 className="t-64 text-[#472313]">WE BUILD WHAT COMMUNITIES STAND ON</h1>
          </div>
          <p className="c-hero-aside t-20 max-w-full font-light opacity-70 lg:w-[calc(527*var(--u))] lg:shrink-0">
            FROM RESIDENTIAL DEVELOPMENTS TO LARGE-SCALE INFRASTRUCTURE, YESAR
            CONSTRUCTION DELIVERS PROJECTS ENGINEERED TO LAST ON TIME, ON BUDGET,
            AND BUILT TO THE HIGHEST SAFETY STANDARD.
          </p>
        </div>
        <div className="flex flex-wrap items-center" style={{ gap: "calc(11 * var(--u))", marginTop: "calc(83 * var(--u))" }}>
          <Pill href="#contact" solid>
            BOOK A CONSULTATION
          </Pill>
          <Pill href="#projects">VIEW OUR PROJECTS</Pill>
        </div>
      </div>
      <div className="c-mark">
        <div className="c-skyline" aria-hidden>
          <img
            src="/construction/skyline.svg"
            alt=""
            width={1920}
            height={701}
            className="c-skyline-art"
          />
        </div>
        <ConstructionWordmark />
      </div>
    </div>
  );
}
