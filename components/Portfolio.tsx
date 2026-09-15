import { businesses } from "@/lib/content";

export function Portfolio() {
  return (
    <section id="businesses" className="bg-cream">
      <div
        className="page"
        style={{
          paddingLeft: "var(--pad-grid)",
          paddingRight: "var(--pad-grid)",
          paddingBottom: "calc(193 * var(--u))",
        }}
      >
        <h2
          className="t-64 max-w-[1209px] text-ink"
          style={{ paddingLeft: "calc(18 * var(--u))" }}
        >
          A diversified portfolio, one group behind it
        </h2>
        <ul
          className="mt-[calc(63*var(--u))] grid grid-cols-1 items-start sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: "var(--gap-cards)" }}
        >
          {businesses.map((item) => (
            <li key={item.title}>
              <article
                className="folio-card flex flex-col bg-card"
                style={{
                  borderRadius: "var(--radius-card)",
                  paddingTop: "calc(45 * var(--u))",
                  paddingBottom: "calc(46 * var(--u))",
                  paddingLeft: "calc(46 * var(--u))",
                  paddingRight: "calc(52 * var(--u))",
                  gap: "calc(55 * var(--u))",
                  border: item.featured ? "1px solid var(--ink)" : undefined,
                }}
              >
                <div
                  className="flex flex-col"
                  style={{ gap: "calc(21 * var(--u))" }}
                >
                  <div
                    className="flex flex-col"
                    style={{ gap: "calc(8 * var(--u))" }}
                  >
                    <p className="t-20 font-light uppercase text-ink/40">
                      {item.unit}
                    </p>
                    <h3 className="t-35 text-ink">{item.title}</h3>
                  </div>
                  <p className="t-20 font-light text-ink/70">{item.body}</p>
                </div>
                <a
                  href="#contact"
                  className="pill w-fit border-[0.5px] border-ink/55 text-ink"
                >
                  LEARN MORE
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
