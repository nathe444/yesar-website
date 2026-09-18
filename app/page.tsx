import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Portfolio } from "@/components/Portfolio";
import { CtaBanner } from "@/components/CtaBanner";
import { News } from "@/components/News";
import { Newsletter } from "@/components/Newsletter";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-full bg-cream">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-night focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <main>
        <Hero />
        <About />
        <Stats />
        <Portfolio />
        <CtaBanner />
        <News />
        <Newsletter />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
