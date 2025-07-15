import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Ship, Globe, Award } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Gyro-Inspired Animated Shapes */}
      <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <g>
          <rect x="10%" y="15%" width="80" height="30" rx="15" fill="#ffe066" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite" />
          </rect>
          <path d="M60,80 Q80,100 100,80 T140,80" stroke="#ffe066" strokeWidth="18" fill="none" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="0 200 200" to="360 200 200" dur="18s" repeatCount="indefinite" />
          </path>
          <ellipse cx="80%" cy="30%" rx="40" ry="18" fill="#ffe066" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" from="0 800 200" to="360 800 200" dur="16s" repeatCount="indefinite" />
          </ellipse>
          <rect x="70%" y="70%" width="60" height="20" rx="10" fill="#ffe066" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="0 700 700" to="360 700 700" dur="14s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading with Animation */}
          <div className="animate-fadeInUp">
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#ffe066] mb-8 leading-tight drop-shadow-lg" style={{letterSpacing: '0.04em', fontFamily: 'Inter, IBM Plex Sans, Arial, sans-serif', textShadow: '0 0 32px #ffe06688'}}>
              <span className="block text-[#ffe066] font-extrabold tracking-wider">Shanghai</span>
              <span className="block text-[#ffe066] font-black tracking-widest mt-2">TRADERS</span>
            </h1>
          </div>
          {/* Subtitle */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-[#fbe3c7] mb-6 font-semibold" style={{textShadow: '0 2px 8px #6d2940'}}>Textile Machinery Imports from China to Pakistan</p>
          </div>
          {/* Description */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <p className="text-lg sm:text-xl text-[#fbe3c7cc] mb-12 max-w-3xl mx-auto leading-relaxed">
              Bridging Chinese innovation with Pakistani manufacturing excellence through 
              premium textile machinery imports and expert technical support.
            </p>
          </div>
          {/* CTA Buttons */}
          <div className="animate-fadeInUp flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{animationDelay: '0.9s'}}>
            <Button 
              size="lg"
              className="px-10 py-5 text-lg font-bold rounded-full bg-[#ffe066] text-[#6d2940] shadow-xl hover:scale-105 hover:bg-[#fff3bf] transition-all duration-300 group border-0"
              onClick={() => scrollToSection("products")}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              className="px-10 py-5 text-lg font-bold rounded-full bg-[#ffe066] text-[#6d2940] shadow-xl hover:scale-105 hover:bg-[#fff3bf] transition-all duration-300 group border-0"
              onClick={() => scrollToSection("contact")}
            >
              Get Consultation
            </Button>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#fbe3c7] animate-bounce z-10">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
