import { constructionServices } from "@/lib/construction";
import { Pill } from "./Pill";

export function ConstructionServices() {
  return (
    <section
      id="services"
      className="page inset-grid"
      style={{
        paddingTop: "calc(238 * var(--u))",
        paddingBottom: "calc(200 * var(--u))",
      }}
    >
      <div
        className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center"
        style={{ marginBottom: "calc(63 * var(--u))" }}
      >
        <h2 className="t-64">End-to-end construction, under one roof</h2>
        <Pill href="#services">VIEW ALL SERVICES</Pill>
      </div>
      <div className="c-services">
        {constructionServices.map((service) => (
          <article
            key={service.index}
            className={`flex flex-col bg-[#f8f0e2] ${service.bordered ? "border border-[#472313]" : ""}`}
            style={{
              borderRadius: "var(--radius-card)",
              padding: "calc(45 * var(--u)) calc(52 * var(--u)) calc(46 * var(--u)) calc(46 * var(--u))",
            }}
          >
            <div className="flex flex-col" style={{ gap: "calc(55 * var(--u))" }}>
              <div className="flex flex-col" style={{ gap: "calc(21 * var(--u))" }}>
                <div className="flex flex-col" style={{ gap: "calc(8 * var(--u))" }}>
                  <p className="t-20 font-light opacity-40">{service.index}</p>
                  <h3 className="t-35">{service.title}</h3>
                </div>
                <p className="t-20 font-light opacity-70">{service.body}</p>
              </div>
              <Pill href="#contact">LEARN MORE</Pill>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
