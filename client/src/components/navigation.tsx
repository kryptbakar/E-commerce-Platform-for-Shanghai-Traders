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
        isScrolled ? "bg-white/95 backdrop-blur-sm border-b border-linear-200" : "bg-white border-b border-linear-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <div className="text-xl font-semibold text-linear-900">Shanghai Traders</div>
              <div className="hidden sm:block ml-3 px-2 py-1 bg-linear-100 rounded text-xs text-linear-600 font-medium">
                Textile Machinery Importers
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-1">
              <button 
                onClick={() => scrollToSection("hero")}
                className="px-3 py-2 text-sm font-medium text-linear-600 hover:text-linear-900 hover:bg-linear-50 rounded-md transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="px-3 py-2 text-sm font-medium text-linear-600 hover:text-linear-900 hover:bg-linear-50 rounded-md transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="px-3 py-2 text-sm font-medium text-linear-600 hover:text-linear-900 hover:bg-linear-50 rounded-md transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="px-3 py-2 text-sm font-medium text-linear-600 hover:text-linear-900 hover:bg-linear-50 rounded-md transition-colors"
              >
                Contact
              </button>
              <Button 
                className="ml-4 bg-primary hover:bg-blue-600 text-white text-sm px-4 py-2 h-9"
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
                className="text-linear-600 hover:text-linear-900 hover:bg-linear-50"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-[49px] right-0 w-64 bg-white border-l border-linear-200 p-4">
            <div className="flex flex-col space-y-1">
              <button 
                onClick={() => scrollToSection("hero")}
                className="text-left px-3 py-2 text-sm font-medium text-linear-600 hover:text-linear-900 hover:bg-linear-50 rounded-md transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left px-3 py-2 text-sm font-medium text-linear-600 hover:text-linear-900 hover:bg-linear-50 rounded-md transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("products")}
                className="text-left px-3 py-2 text-sm font-medium text-linear-600 hover:text-linear-900 hover:bg-linear-50 rounded-md transition-colors"
              >
                Products
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-left px-3 py-2 text-sm font-medium text-linear-600 hover:text-linear-900 hover:bg-linear-50 rounded-md transition-colors"
              >
                Contact
              </button>
              <div className="pt-3 mt-3 border-t border-linear-200">
                <Button 
                  className="w-full bg-primary hover:bg-blue-600 text-white text-sm"
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
