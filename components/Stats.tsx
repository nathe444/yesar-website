import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section aria-label="Group figures" className="bg-cream">
      <div
        className="page stats-grid"
        style={{
          paddingTop: "calc(145 * var(--u))",
          paddingBottom: "calc(275 * var(--u))",
        }}
      >
        {stats.map((item) => (
          <div key={item.label} className="text-center">
            <p
              className="font-bold text-ink"
              style={{ fontSize: "var(--fs-64)", lineHeight: 1.11 }}
            >
              {item.value}
            </p>
            <p className="t-20 mt-[calc(18*var(--u))] whitespace-nowrap uppercase text-ink">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
