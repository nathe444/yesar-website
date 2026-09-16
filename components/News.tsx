import Image from "next/image";
import { images } from "@/lib/content";

export function News() {
  return (
    <section id="news" className="bg-cream">
      <div
        className="page"
        style={{
          paddingTop: "calc(232 * var(--u))",
          paddingBottom: "calc(232 * var(--u))",
        }}
      >
        <div
          className="flex items-end justify-between gap-4"
          style={{
            paddingLeft: "var(--pad-x)",
            paddingRight: "var(--pad-x)",
          }}
        >
          <h2 className="t-64 text-ink">News & Recognition</h2>
          <a
            href="#news"
            className="t-20 mb-[calc(2*var(--u))] inline-flex shrink-0 items-center font-semibold text-ink"
            style={{ gap: "calc(11 * var(--u))" }}
          >
            VIEW ALL NEWS
            <span aria-hidden className="text-[0.7em]">
              ›
            </span>
          </a>
        </div>

        <div
          className="news-grid mt-[calc(51*var(--u))]"
          style={{
            paddingLeft: "var(--pad-news)",
            paddingRight: "var(--pad-news)",
          }}
        >
          <article
            className="relative flex flex-col justify-end overflow-hidden"
            style={{
              height: "var(--news-left-h)",
              minHeight: "var(--news-left-h)",
              borderRadius: "var(--radius-card)",
              paddingBottom: "calc(26 * var(--u))",
              paddingLeft: "calc(28 * var(--u))",
              paddingRight: "calc(28 * var(--u))",
            }}
          >
            <Image
              src={images.apartments}
              alt="Residential balcony facade of a Yesar development"
              fill
              quality={95}
              sizes="(min-width: 1024px) 1920px, 100vw"
              className="object-cover object-[center_40%]"
            />
            <div
              className="relative z-10 bg-cream"
              style={{
                borderRadius: "calc(15 * var(--u))",
                paddingTop: "calc(61 * var(--u))",
                paddingBottom: "calc(59 * var(--u))",
                paddingLeft: "calc(62 * var(--u))",
                paddingRight: "calc(80 * var(--u))",
                minHeight: "calc(255 * var(--u))",
              }}
            >
              <p className="t-18 text-ink">PRESS RELEASE · 30/6/2025</p>
              <h3
                className="t-40 mt-[calc(27*var(--u))] max-w-[595px] text-ink"
              >
                Headline placeholder describing a recent Yesar announcement
              </h3>
            </div>
          </article>
          <div
            className="grid"
            style={{ gap: "calc(37 * var(--u))" }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                height: "var(--news-top-h)",
                minHeight: "var(--news-top-h)",
                borderRadius: "var(--radius-card)",
              }}
            >
              <Image
                src={images.aerial}
                alt="Aerial view of a Yesar mixed-use development"
                fill
                quality={95}
                sizes="(min-width: 1024px) 1600px, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div
              className="relative overflow-hidden"
              style={{
                height: "var(--news-bot-h)",
                minHeight: "var(--news-bot-h)",
                borderRadius: "var(--radius-card)",
              }}
            >
              <Image
                src={images.dining}
                alt="Dining room interior in a Yesar residence"
                fill
                quality={95}
                sizes="(min-width: 1024px) 1600px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
