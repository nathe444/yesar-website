import type { Metadata } from "next";
import { soonUnits, type SoonUnit } from "@/lib/content";

export const metadata: Metadata = {
  title: "Coming Soon — Yesar Group",
  description: "This Yesar page will be ready soon.",
};

export default async function ComingSoonPage({
  searchParams,
}: {
  searchParams: Promise<{ unit?: string | string[] }>;
}) {
  const { unit } = await searchParams;
  const value = Array.isArray(unit) ? unit[0] : unit;
  const name =
    value && value in soonUnits ? soonUnits[value as SoonUnit] : soonUnits.trading;

  return (
    <main className="soon-fit">
      <div className="soon-wash" />
      <div className="soon-stage">
        <img
          src="/coming-soon/glow.svg"
          alt=""
          width={933.6}
          height={903.8}
          className="soon-glow"
        />
        <img
          src="/coming-soon/logo.svg"
          alt="Yesar"
          width={91.7714}
          height={79.3131}
          className="soon-logo"
        />
        <img
          src="/coming-soon/skyline.svg"
          alt=""
          width={706}
          height={229.082}
          className="soon-skyline"
        />
        <p className="soon-title">Coming Soon</p>
        <p className="soon-note">YESAR {name} page will be ready soon</p>
      </div>
    </main>
  );
}
