import Image from "next/image";
import { images } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-night text-cream">
      <div
        className="page"
        style={{
          paddingTop: "calc(117 * var(--u))",
          paddingBottom: "calc(114 * var(--u))",
          paddingLeft: "var(--pad-grid)",
          paddingRight: "var(--pad-grid)",
        }}
      >
        <h2
          className="t-64"
          style={{ paddingLeft: "calc(18 * var(--u))" }}
        >
          ABOUT THE GROUP
        </h2>
        <div className="about-grid mt-[calc(90*var(--u))]">
          <div
            className="about-card flex flex-col bg-night-card"
            style={{
              borderRadius: "var(--radius-card)",
              paddingTop: "calc(56 * var(--u))",
              paddingBottom: "calc(55 * var(--u))",
              paddingLeft: "calc(46 * var(--u))",
              paddingRight: "calc(45 * var(--u))",
            }}
          >
            <div
              className="flex flex-col"
              style={{ gap: "calc(55 * var(--u))" }}
            >
              <div
                className="flex flex-col"
                style={{ gap: "calc(28 * var(--u))" }}
              >
                <h3 className="t-35">
                  Building industries.
                  <br />
                  Empowering communities.
                </h3>
                <div className="t-20 flex flex-col font-light text-white/70">
                  <p className="m-0">
                    Yesar Group began as a single construction outfit and has
                    grown into a diversified group operating across six
                    industries. What hasn’t changed is the standard we hold
                    ourselves to — reliability, craftsmanship, and a long-term
                    view on every venture we take on.
                  </p>
                  <p className="m-0">
                    Today, our businesses work independently but share one
                    philosophy: build things that last, and build trust with
                    every community we operate in.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="pill w-fit border-[0.5px] border-white/55 text-white"
              >
                LEARN MORE ABOUT US
              </a>
            </div>
          </div>
          <div
            className="about-photo relative overflow-hidden"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            <Image
              src={images.aboutTower}
              alt="ZHC Hotel exterior at dusk"
              fill
              quality={95}
              sizes="(min-width: 1024px) 1400px, 100vw"
              className="object-cover object-[center_60%]"
            />
          </div>
          <div
            className="about-photo relative overflow-hidden"
            style={{ borderRadius: "var(--radius-card)" }}
          >
            <Image
              src={images.lobby}
              alt="Adama Hotel side view"
              fill
              quality={95}
              sizes="(min-width: 1024px) 1400px, 100vw"
              className="object-cover object-[center_35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
