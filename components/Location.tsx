const MAP_LAT = 9.000355;
const MAP_LNG = 38.767171;
const MAP_SHARE = "https://maps.app.goo.gl/8TxAfQDUFE93tqn66";
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_LAT},${MAP_LNG}&hl=en&z=17&output=embed`;
const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_LAT},${MAP_LNG}`;

export function Location() {
  return (
    <section id="location" className="bg-cream">
      <div
        className="page"
        style={{
          paddingTop: "calc(80 * var(--u))",
          paddingBottom: "calc(160 * var(--u))",
        }}
      >
        <div
          className="flex items-end justify-between gap-4"
          style={{
            paddingLeft: "var(--pad-x)",
            paddingRight: "var(--pad-x)",
          }}
        >
          <h2 className="t-64 text-ink">Our Location</h2>
          <a
            href={MAP_DIRECTIONS}
            target="_blank"
            rel="noopener noreferrer"
            className="t-20 mb-[calc(2*var(--u))] inline-flex shrink-0 items-center font-semibold text-ink"
            style={{ gap: "calc(11 * var(--u))" }}
          >
            GET DIRECTIONS
            <span aria-hidden className="text-[0.7em]">
              ›
            </span>
          </a>
        </div>

        <div
          className="relative mx-auto mt-[calc(51*var(--u))]"
          style={{
            width: "min(1040px, calc(100% - 2 * var(--pad-x)))",
          }}
        >
          <div className="map-plate">
            <div className="map-well">
              <iframe
                title="Yesar Group on Gazebo Street, Addis Ababa"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="map-embed"
                allowFullScreen
              />
              <div className="map-wash" aria-hidden />
              <div className="map-vignette" aria-hidden />
            </div>
          </div>

          <address
            className="absolute z-10 max-w-[min(100%,28rem)] not-italic text-cream"
            style={{
              left: "calc(28 * var(--u))",
              bottom: "calc(-72 * var(--u))",
              background: "var(--night-card)",
              borderRadius: "var(--radius-card)",
              padding: "calc(32 * var(--u)) calc(36 * var(--u))",
            }}
          >
            <p className="t-20 font-medium tracking-[0.08em] text-gold">
              HEAD OFFICE
            </p>
            <p className="t-35 mt-[calc(12*var(--u))] text-cream">
              Gazebo Street
            </p>
            <p className="t-20 mt-[calc(8*var(--u))] font-light text-cream/70">
              Addis Ababa, Ethiopia
            </p>
            <a
              href={MAP_SHARE}
              target="_blank"
              rel="noopener noreferrer"
              className="t-20 mt-[calc(20*var(--u))] inline-flex items-center font-semibold text-cream"
              style={{ gap: "calc(8 * var(--u))" }}
            >
              Open in Google Maps
              <span aria-hidden className="text-[0.7em]">
                ›
              </span>
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}
