import { footer, images } from "@/lib/content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-night text-cream">
      <div
        className="page"
        style={{
          paddingLeft: "var(--pad-footer)",
          paddingRight: "var(--pad-footer)",
          paddingTop: "calc(72 * var(--u))",
          paddingBottom: "calc(61 * var(--u))",
        }}
      >
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-[354px]">
            <Logo inverted />
            <p className="t-20 mt-[calc(34*var(--u))] font-light text-cream/50">
              {footer.blurb}
            </p>
          </div>
          <div
            className="grid grid-cols-2 sm:grid-cols-4"
            style={{ gap: "calc(87 * var(--u))" }}
          >
            <FooterCol title="OUR BUSINESSES" items={footer.businesses} />
            <FooterCol title="COMPANY" items={footer.company} careers />
            <FooterCol title="GET IN TOUCH" items={footer.touch} />
            <FooterCol title="LEGAL" items={footer.legal} />
          </div>
        </div>
        <div
          className="mt-[calc(150*var(--u))] flex gap-[10px]"
          aria-label="Social"
        >
          {images.social.map((item) => (
            <a
              key={item.label}
              href="#contact"
              className={
                item.box === 16
                  ? "inline-flex size-[calc(32*var(--u))] items-center justify-center rounded-[9px] bg-cream p-[calc(8*var(--u))]"
                  : "inline-flex size-[calc(32*var(--u))] items-center justify-center"
              }
            >
              <span className="sr-only">{item.label}</span>
              <img
                src={item.src}
                alt=""
                width={item.box}
                height={item.box}
                className={
                  item.box === 16
                    ? "size-[calc(16*var(--u))]"
                    : "size-[calc(32*var(--u))]"
                }
              />
            </a>
          ))}
        </div>
        <div className="t-20 mt-[calc(34*var(--u))] flex flex-col gap-3 font-light text-cream/50 sm:flex-row sm:items-center sm:justify-between">
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
    <div
      id={careers ? "careers" : undefined}
      className="max-w-full"
      style={{ width: "calc(160 * var(--u))" }}
    >
      <p className="t-20 font-medium">{title}</p>
      <ul className="t-20 mt-[calc(29*var(--u))] space-y-[15px] font-light text-cream/50">
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
