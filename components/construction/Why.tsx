import { constructionReasons } from "@/lib/construction";

export function ConstructionWhy() {
  return (
    <section className="page" style={{ padding: "0 calc(195 * var(--u)) calc(200 * var(--u))" }}>
      <div className="max-w-[54rem]" style={{ marginBottom: "calc(83 * var(--u))" }}>
        <p className="t-20 font-light opacity-70">WHY  CHOOSE US</p>
        <h2 className="t-64 c-lh-69 mt-[calc(15*var(--u))]">
          Built on reliability, backed by a group you can trust
        </h2>
      </div>
      <div className="c-why">
        {constructionReasons.map((reason) => (
          <article key={reason.index} className="flex flex-col" style={{ gap: "calc(11 * var(--u))" }}>
            <p className="t-64">{reason.index}</p>
            <h3 className="c-fs-32 font-medium">
              {reason.title}
            </h3>
            <p className="t-20 font-light opacity-70">{reason.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
