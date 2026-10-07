import { constructionFooter, constructionSocial } from "@/lib/construction";

const columns = [
  { title: "OUR BUSINESSES", items: constructionFooter.businesses },
  { title: "COMPANY", items: constructionFooter.company },
  { title: "GET IN TOUCH", items: constructionFooter.touch },
  { title: "LEGAL", items: constructionFooter.legal },
] as const;

export function ConstructionFooter() {
  return (
    <footer className="bg-[#472313] text-[#fff8ec]">
      <div className="page c-footer">
        <div className="c-footer-top">
          <div className="c-footer-brand">
            <a href="#top" className="c-footer-lockup">
              <img
                src="/construction/logo-footer.svg"
                alt=""
                width={49.1039}
                height={42.4357}
                className="c-footer-mark"
              />
              <span>
                <span className="c-footer-name">YESAR</span>
                <span className="c-footer-sub">BUSINESS GROUP</span>
              </span>
            </a>
            <p className="c-footer-blurb">
              {constructionFooter.blurb.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>
          <div className="c-footer-cols">
            {columns.map((column) => (
              <div key={column.title} className="c-footer-col">
                <p className="c-footer-title">{column.title}</p>
                <ul className="c-footer-links">
                  {column.items.map((item) => (
                    <li key={item} className={item.startsWith("0934") ? "c-footer-phone" : undefined}>
                      <a href="#contact" className="transition-opacity hover:opacity-80">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="c-footer-lower">
          <div className="c-footer-social" aria-label="Social">
            {constructionSocial.map((item) => (
              <a
                key={item.label}
                href="#contact"
                className={item.boxed ? "g-footer-icon g-footer-icon-boxed" : "g-footer-icon"}
              >
                <span className="sr-only">{item.label}</span>
                <img
                  src={item.src}
                  alt=""
                  width={item.width}
                  height={item.height}
                  className={item.boxed ? "g-footer-glyph" : "g-footer-glyph g-footer-glyph-full"}
                />
              </a>
            ))}
          </div>
          <div className="c-footer-legal">
            <p>© 2026 Yesar Group. All rights reserved.</p>
            <p>Site Map · Accessibility</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
