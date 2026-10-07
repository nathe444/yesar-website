import type { Metadata } from "next";
import { ConstructionAbout } from "@/components/construction/About";
import { ConstructionContact } from "@/components/construction/Contact";
import { ConstructionFooter } from "@/components/construction/Footer";
import { ConstructionHero } from "@/components/construction/Hero";
import { ConstructionProjects } from "@/components/construction/Projects";
import { ConstructionSafety } from "@/components/construction/Safety";
import { ConstructionServices } from "@/components/construction/Services";
import { ConstructionStats } from "@/components/construction/Stats";
import { ConstructionWhy } from "@/components/construction/Why";

export const metadata: Metadata = {
  title: "Yesar Construction",
  description:
    "From residential developments to large-scale infrastructure, Yesar Construction delivers projects engineered to last.",
};

export default function ConstructionPage() {
  return (
    <div id="top" className="min-h-full bg-[#fff8ec] text-[#472313]">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-[#472313] focus:px-4 focus:py-2 focus:text-[#fff8ec]"
      >
        Skip to content
      </a>
      <main>
        <ConstructionHero />
        <ConstructionAbout />
        <ConstructionStats />
        <ConstructionServices />
        <ConstructionProjects />
        <ConstructionWhy />
        <ConstructionSafety />
        <ConstructionContact />
      </main>
      <ConstructionFooter />
    </div>
  );
}
