import { Button } from "@/components/ui/button";
import { Cog, Phone, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-linear-900 mb-8 leading-tight tracking-tight">
            <span className="text-gradient-linear">Shanghai Traders</span> is a purpose-built partner for textile machinery imports
          </h1>
          <p className="text-xl sm:text-2xl text-linear-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
            Streamline your manufacturing operations with premium Chinese textile machinery. 
            Import equipment that scales with your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              className="bg-primary hover:bg-blue-600 text-white px-8 py-4 text-base font-medium h-12"
              onClick={() => scrollToSection("products")}
            >
              Explore Machinery
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border border-linear-300 text-linear-700 hover:bg-linear-50 px-8 py-4 text-base font-medium h-12"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="mr-2 h-4 w-4" />
              Schedule Consultation
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-linear-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Trusted by 200+ manufacturers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Partnership with Geron Card Clothing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>10+ years of import expertise</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-linear-400 animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
