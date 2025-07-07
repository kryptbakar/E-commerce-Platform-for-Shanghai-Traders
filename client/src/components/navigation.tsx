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
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-white shadow-lg"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary">Shanghai Traders</div>
              <div className="hidden sm:block ml-2 text-sm text-industrial-500">
                Textile Machinery Importers
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-industrial-600 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-industrial-600 hover:text-primary transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-industrial-600 hover:text-primary transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-industrial-600 hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
            
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-16 right-0 w-64 bg-white shadow-lg p-6">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-left text-industrial-600 hover:text-primary transition-colors py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left text-industrial-600 hover:text-primary transition-colors py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-left text-industrial-600 hover:text-primary transition-colors py-2"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left text-industrial-600 hover:text-primary transition-colors py-2"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
