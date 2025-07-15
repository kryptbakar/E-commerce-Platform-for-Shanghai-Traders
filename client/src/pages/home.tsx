import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Process from "@/components/process";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";
import ParticleBackground from "@/components/particle-background";
import TrustBadges from "@/components/trust-badges";
import { ThemeToggle } from "@/components/theme-provider";
import { useState } from "react";
import ConfettiBurst from "@/components/confetti-burst";

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);

  return (
    <div className="min-h-screen smooth-scroll relative scroll-snap-container bg-textile-navy">
      <ParticleBackground />
      <ThemeToggle />
      <Navigation />
      
      <div className="scroll-snap-section">
        <Hero />
      </div>
      
      <TrustBadges />
      
      <div className="scroll-snap-section">
        <About />
      </div>
      
      {/* Morphing Blob Section with Products */}
      <div className="relative py-20 overflow-hidden scroll-snap-section">
        <div className="absolute inset-0">
          <div className="morphing-blob w-96 h-96 absolute top-1/2 left-1/4 transform -translate-y-1/2 opacity-20"></div>
          <div className="morphing-blob w-64 h-64 absolute top-1/4 right-1/4 transform opacity-10" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10">
          <Products />
        </div>
      </div>
      
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
      <ConfettiBurst trigger={showConfetti} onComplete={() => setShowConfetti(false)} />
    </div>
  );
}
