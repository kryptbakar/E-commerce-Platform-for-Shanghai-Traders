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
import PrincipalLogoBar from "@/components/principal-logo-bar";

export default function Home() {
  return (
    <div className="geron-inspired relative min-h-screen bg-[#f7f9fa] smooth-scroll">
      <Navigation />
      <Hero />
      <PrincipalLogoBar />
      <TrustBadges />
      <GeronPartner />
      <About />
      <Products />
      <ShanghaiAdvantage />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
