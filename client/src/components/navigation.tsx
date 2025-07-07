import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full top-0 z-50 bg-textile-navy border-b border-textile-gold/30 shadow-lg"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white font-sans tracking-tight drop-shadow-lg">
                <span className="text-white">Shanghai</span>{" "}
                <span className="text-textile-gold">Traders</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-textile-text/80 hover:text-textile-gold transition-colors duration-300 font-medium hover:scale-105"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-textile-text/80 hover:text-textile-gold transition-colors duration-300 font-medium hover:scale-105"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-textile-text/80 hover:text-textile-gold transition-colors duration-300 font-medium hover:scale-105"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("process")}
                className="text-textile-text/80 hover:text-textile-gold transition-colors duration-300 font-medium hover:scale-105"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-textile-text/80 hover:text-textile-gold transition-colors duration-300 font-medium hover:scale-105"
              >
                Contact
              </button>
              <Button 
                className="ml-4 bg-accent hover:bg-yellow-500 text-navy-dark px-6 py-2 font-semibold rounded-full hover-glow transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Get Quote
              </Button>
            </div>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-white/80"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 w-80 h-full glass-card p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-white">Menu</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-white/80"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("process")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Contact
              </button>
              <div className="pt-6 mt-6 border-t border-white/20">
                <Button 
                  className="w-full bg-accent hover:bg-yellow-500 text-navy-dark font-semibold rounded-full"
                  onClick={() => scrollToSection("contact")}
                >
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
