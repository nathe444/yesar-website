import { constructionBadges } from "@/lib/construction";

export function ConstructionSafety() {
  return (
    <section
      id="safety"
      className="page"
      style={{ padding: "0 var(--pad-grid) calc(180 * var(--u))" }}
    >
      <div className="c-safety">
        <div
          id="quality"
          className="bg-[#f8f0e2]"
          style={{
            borderRadius: "var(--radius-card)",
            minHeight: "calc(891 * var(--u))",
            padding: "calc(67 * var(--u)) calc(49 * var(--u))",
          }}
        >
          <div className="flex max-w-[38rem] flex-col" style={{ gap: "calc(55 * var(--u))" }}>
            <div className="flex flex-col" style={{ gap: "calc(22 * var(--u))" }}>
              <div className="flex flex-col" style={{ gap: "calc(15 * var(--u))" }}>
                <p className="t-20 font-light opacity-70">S A F E T Y & Q U A L I T Y</p>
                <h2 className="t-64 c-lh-69">
                  Every site held to the same standard
                </h2>
              </div>
              <p className="t-20 font-light opacity-70">
                Safety isn&apos;t a checklist for us — it&apos;s a daily discipline. Every
                Yesar Construction site follows strict protocols, regular audits,
                and certified training programs to protect our crews and the public.
              </p>
            </div>
            <ul className="flex flex-wrap" style={{ gap: "calc(13 * var(--u)) calc(10 * var(--u))" }}>
              {constructionBadges.map((badge) => (
                <li
                  key={badge}
                  className="t-18 rounded-[40px] border border-[rgba(71,35,19,0.28)] bg-[#fff8ec] px-[calc(26*var(--u))] py-[calc(6*var(--u))]"
                >
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src="/construction/safety-tower.png"
          alt="Glass tower under construction against a blue sky"
          width={770}
          height={891}
          className="h-full w-full object-cover object-bottom"
          style={{
            borderRadius: "var(--radius-card)",
            minHeight: "calc(420 * var(--u))",
          }}
        />
      </div>
    </section>
  );
}
