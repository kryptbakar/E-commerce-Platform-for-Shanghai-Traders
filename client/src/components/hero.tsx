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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-textile-navy overflow-hidden">
      {/* Elite Textile Background Elements */}
      <div className="absolute inset-0 radial-overlay">
        {/* Floating textile-inspired shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-textile-gold/20 rounded-full textile-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-textile-gold-light/30 rounded-lg thread-loop" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-textile-text/10 rounded-full wave-pattern" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-textile-gold/40 rounded-full textile-float" style={{animationDelay: '1s'}}></div>
        
        {/* SVG Wave at bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C150,100 350,0 600,50 C850,100 1050,0 1200,60 L1200,120 L0,120 Z" fill="white" opacity="0.1"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading with Animation */}
          <div className="animate-fadeInUp">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-textile-text mb-8 leading-tight font-playfair">
              <div className="flex flex-col items-center">
                <span className="glow-text">Shanghai</span>
                <span className="text-gradient-gold">Traders</span>
              </div>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.3s'}}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-6 font-light">
              Textile Machinery Imports from China to Pakistan
            </p>
          </div>
          
          {/* Description */}
          <div className="animate-fadeInUp" style={{animationDelay: '0.6s'}}>
            <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
              Bridging Chinese innovation with Pakistani manufacturing excellence through 
              premium textile machinery imports and expert technical support.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="animate-fadeInUp flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{animationDelay: '0.9s'}}>
            <Button 
              size="lg"
              className="elite-btn px-10 py-5 text-lg font-semibold hover-lift transition-all duration-300 group"
              onClick={() => scrollToSection("products")}
            >
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-navy-dark px-8 py-4 text-lg font-semibold rounded-full glass hover-lift transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get Consultation
            </Button>
          </div>

          {/* Trust Indicators with Icons */}
          <div className="animate-fadeInUp grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto" style={{animationDelay: '1.2s'}}>
            <div className="glass-card p-6 rounded-xl hover-lift">
              <Ship className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">15+ Years</h3>
              <p className="text-white/70 text-sm">Import Experience</p>
            </div>
            <div className="glass-card p-6 rounded-xl hover-lift" style={{animationDelay: '0.2s'}}>
              <Globe className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">200+ Clients</h3>
              <p className="text-white/70 text-sm">Satisfied Manufacturers</p>
            </div>
            <div className="glass-card p-6 rounded-xl hover-lift" style={{animationDelay: '0.4s'}}>
              <Award className="h-8 w-8 text-accent mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Premium Quality</h3>
              <p className="text-white/70 text-sm">Geron Partnership</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
