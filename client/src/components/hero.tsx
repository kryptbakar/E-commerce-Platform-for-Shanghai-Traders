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
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.7), rgba(30, 64, 175, 0.7)), url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Shanghai Traders
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-industrial-100 mb-8 font-light">
          Textile Machinery Importers from China to Pakistan
        </p>
        <p className="text-lg sm:text-xl text-industrial-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Your trusted partner for premium textile machinery solutions. Bridging Chinese innovation with Pakistani manufacturing excellence through reliable imports and expert service.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-accent text-white hover:bg-yellow-500 transition-colors shadow-lg px-8 py-4 text-lg font-semibold"
            onClick={() => scrollToSection("products")}
          >
            <Cog className="mr-2 h-5 w-5" />
            View Our Products
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors px-8 py-4 text-lg font-semibold bg-transparent"
            onClick={() => scrollToSection("contact")}
          >
            <Phone className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="h-8 w-8" />
      </div>
    </section>
  );
}
