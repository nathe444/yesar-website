import { constructionStats } from "@/lib/construction";

export function ConstructionStats() {
  return (
    <section className="c-stats" aria-label="Company figures">
      {constructionStats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center" style={{ gap: "calc(18 * var(--u))" }}>
          <p className="font-bold leading-none" style={{ fontSize: "var(--fs-64)" }}>
            {stat.value}
          </p>
          <p className="t-20 max-w-[12rem]">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
