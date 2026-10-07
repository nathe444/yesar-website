import { footer, images } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-night text-cream">
      <div className="page g-footer">
        <div className="g-footer-top">
          <div className="g-footer-brand">
            <Logo inverted />
            <p className="g-footer-blurb t-20 font-light text-cream/50">
              {footer.blurb}
            </p>
          </div>
          <div className="g-footer-cols">
            <FooterCol title="OUR BUSINESSES" items={footer.businesses} />
            <FooterCol title="COMPANY" items={footer.company} careers />
            <FooterCol title="GET IN TOUCH" items={footer.touch} />
            <FooterCol title="LEGAL" items={footer.legal} />
          </div>
        </div>
        <div className="g-footer-social" aria-label="Social">
          {images.social.map((item) => (
            <a
              key={item.label}
              href="#contact"
              className={item.box === 16 ? "g-footer-icon g-footer-icon-boxed" : "g-footer-icon"}
            >
              <span className="sr-only">{item.label}</span>
              <img
                src={item.src}
                alt=""
                width={item.box}
                height={item.box}
                className={item.box === 16 ? "g-footer-glyph" : "g-footer-glyph g-footer-glyph-full"}
              />
            </a>
          ))}
        </div>
        <div className="g-footer-legal t-20 font-light text-cream/50">
          <p>© 2026 Yesar Group. All rights reserved.</p>
          <p>Site Map · Accessibility</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
  careers = false,
}: {
  title: string;
  items: readonly string[];
  careers?: boolean;
}) {
  return (
    <div id={careers ? "careers" : undefined} className="g-footer-col">
      <p className="t-20 font-medium">{title}</p>
      <ul className="g-footer-links t-20 font-light text-cream/50">
        {items.map((item) => (
          <li key={item}>
            <a href="#contact" className="hover:text-cream">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
