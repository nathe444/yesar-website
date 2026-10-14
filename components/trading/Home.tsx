import {
  tradingExports,
  tradingFooter,
  tradingImports,
  tradingPartners,
  tradingReasons,
  tradingRegions,
  tradingSocial,
  tradingStats,
} from "@/lib/trading";
import { TradingContact } from "./Contact";
import { TradingHeader } from "./Header";

export function TradingHome() {
  return (
    <div className="tr">
      <a href="#about" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[#15110f] focus:px-4 focus:py-2 focus:text-[#fff8ec]">
        Skip to content
      </a>
      <TradingHeader />
      <section className="tr-hero">
        <div className="tr-hero-copy">
          <div className="tr-hero-lead">
            <p className="tr-kicker">YESAR TRADING · A YESAR GROUP COMPANY</p>
            <h1>CONNECTING MARKETS. MOVING GOODS FORWARD.</h1>
          </div>
          <p className="tr-hero-aside">
            YESAR TRADING SOURCES, IMPORTS, AND DISTRIBUTES ESSENTIAL GOODS ACROSS
            BORDERS — BACKED BY THE RELIABILITY AND REACH OF YESAR GROUP&apos;S
            LOGISTICS AND MANUFACTURING NETWORK.
          </p>
        </div>
        <a href="#contact" className="tr-solid tr-solid-lg">
          GET IN TOUCH
        </a>
        <div className="tr-stage">
          <div className="tr-ext tr-ext-a" aria-hidden>
            <img src="/trading/95c34.png" alt="" />
          </div>
          <img
            src="/trading/c1936.png"
            alt="Yellow sofa arranged with home goods"
            width={1556}
            height={671}
            className="tr-sofa"
          />
          <div className="tr-ext tr-ext-b" aria-hidden>
            <img src="/trading/95c34.png" alt="" />
          </div>
        </div>
      </section>

      <div className="tr-gold">
        <section id="about" className="tr-about">
          <div className="tr-about-copy">
            <p className="tr-kicker">A B O U T U S</p>
            <h2 className="tr-h2 tr-h2-tight">Bridging suppliers and markets, reliably</h2>
            <p className="tr-body">
              Yesar Trading manages the sourcing, import, and distribution of goods
              that keep industries and households running — from raw materials to
              finished consumer products.
            </p>
            <p className="tr-body">
              Every project is backed by the full strength of Yesar Group— giving
              our clients access to in-house engineering, manufacturing, and
              logistics support that most contractors simply don&apos;t have.
            </p>
            <a href="#import" className="tr-line">
              LEARN MORE
            </a>
          </div>
          <img
            src="/trading/38918.png"
            alt="Stacked shipping containers at a port"
            width={826}
            height={705}
            className="tr-about-photo"
          />
        </section>
        
      </div>

      <section className="tr-stats mb-12" aria-label="Trading figures" >
          {tradingStats.map((stat) => (
            <div key={stat.label}>
              <p className="tr-stat">{stat.value}</p>
              <p className="tr-stat-label">{stat.label}</p>
            </div>
          ))}
        </section>

      <section id="import" className="tr-catalog">
        <div className="tr-catalog-head">
          <h2 className="tr-h2">What we bring into the market</h2>
          <a href="#contact" className="tr-line">
            VIEW FULL CATALOG
          </a>
        </div>
        <div className="tr-import">
          {tradingImports.map((item) => (
            <article key={item.image} className="tr-card">
              <img
                src={item.image}
                alt=""
                className={item.wide ? "tr-card-wide" : undefined}
              />
              <div className="tr-chip">
                <p>{item.category}</p>
                <p>{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="export" className="tr-catalog tr-catalog-export">
        <div className="tr-catalog-head">
          <h2 className="tr-h2">What we send to the world</h2>
          <a href="#contact" className="tr-line">
            VIEW FULL CATALOG
          </a>
        </div>
        <div className="tr-export">
          {tradingExports.map((item) => (
            <article key={item.image} className="tr-export-card">
              <img src={item.image} alt="" />
              <div className="tr-chip tr-chip-wide">
                <p>{item.category}</p>
                <p>{item.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="markets" className="tr-reach">
        <p className="tr-kicker tr-kicker-light">G L O B A L R E A C H</p>
        <h2 className="tr-h2 tr-h2-light">Where Yesar Trading operates</h2>
        <div className="tr-reach-body">
          <img
            src="/trading/3da30.svg"
            alt="World map marking Yesar Trading markets"
            width={929}
            height={508}
            className="tr-map"
          />
          <ul className="tr-regions">
            {tradingRegions.map((region, index) => (
              <li key={`${region}-${index}`}>
                <img src="/trading/73a90.svg" alt="" width={19} height={19} />
                <span>{region}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="tr-why">
        <p className="tr-kicker">W H Y C H O O S E U S</p>
        <h2 className="tr-h2">A trading partner backed by a full group</h2>
        <div className="tr-why-grid">
          {tradingReasons.map((reason) => (
            <article key={reason.index}>
              <p className="tr-index">{reason.index}</p>
              <h3>{reason.title}</h3>
              <p>{reason.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="partners" className="tr-partners">
        <p className="tr-kicker">T R U S T E D B Y</p>
        <h2 className="tr-h2">Our partners &amp; suppliers</h2>
        <div className="tr-logo-row">
          {tradingPartners.map((logo, index) => (
            <img
              key={`${logo.src}-${index}`}
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              style={{
                width: `calc(${logo.width} * var(--u))`,
                height: `calc(${logo.height} * var(--u))`,
              }}
            />
          ))}
        </div>
      </section>

      <TradingContact />

      <footer className="tr-footer">
        <div className="tr-footer-top">
          <div className="tr-footer-brand">
            <div className="tr-footer-lockup">
              <img src="/trading/62d45.svg" alt="" width={49.104} height={42.436} />
              <span>
                <strong>YESAR</strong>
                BUSINESS GROUP
              </span>
            </div>
            <p>
              One line group descriptor — reinforcing the multi-business identity
              one final time before the visitor leaves the page.
            </p>
          </div>
          <div className="tr-footer-cols">
            <div>
              <p>OUR BUSINESSES</p>
              <ul>
                {tradingFooter.businesses.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>COMPANY</p>
              <ul>
                {tradingFooter.company.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>GET IN TOUCH</p>
              <ul>
                {tradingFooter.touch.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p>LEGAL</p>
              <ul>
                {tradingFooter.legal.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="tr-footer-base">
          <div className="tr-social">
            {tradingSocial.map((item) => (
              <a
                key={item.label}
                href="#contact"
                aria-label={item.label}
                className={item.boxed ? "tr-social-box" : undefined}
              >
                <img src={item.src} alt="" width={item.boxed ? 16 : 32} height={item.boxed ? 16 : 32} />
              </a>
            ))}
          </div>
          <div className="tr-legal-row">
            <p>© 2026 Yesar Group. All rights reserved.</p>
            <p>Site Map · Accessibility</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
