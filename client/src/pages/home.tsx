import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Process from "@/components/process";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";
import TrustBadges from "@/components/trust-badges";
import GeronPartner from "@/components/geron-partner";
import ShanghaiAdvantage from "@/components/shanghai-advantage";

export default function Home() {
  return (
    <div className="geron-inspired min-h-screen smooth-scroll relative scroll-snap-container bg-[#f7f9fa]">
      <Navigation />
      
      <div className="scroll-snap-section">
        <Hero />
      </div>
      
      <TrustBadges />

      <div className="scroll-snap-section">
        <About />
      </div>
      
      <div className="relative scroll-snap-section">
        <Products />
      </div>

      <ShanghaiAdvantage />

      <GeronPartner />
      
      <div className="scroll-snap-section">
        <Process />
      </div>
      
      <div className="scroll-snap-section">
        <FAQ />
      </div>
      
      <div className="scroll-snap-section">
        <Contact />
      </div>
      
      <Footer />
      <FloatingButtons />
    </div>
  );
}
