import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (sectionId: string) => {
    if (location !== "/") {
      navigate(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={"fixed w-full top-0 z-50 transition-all duration-500"} style={{background: '#000', boxShadow: '0 2px 32px #ffe06633'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-extrabold text-[#ffe066] font-sans tracking-tight drop-shadow-lg" style={{textShadow: '0 0 16px #ffe06688'}}>
                <span className="text-[#ffe066]">Shanghai</span>{" "}
                <span className="text-white">Traders</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => goToSection("hero")}
                className="text-[#fbe3c7] hover:text-[#ffe066] transition-colors duration-300 font-semibold hover:underline underline-offset-8 decoration-[#ffe066] decoration-2"
              >
                Home
              </button>
              <button 
                onClick={() => goToSection("about")}
                className="text-[#fbe3c7] hover:text-[#ffe066] transition-colors duration-300 font-semibold hover:underline underline-offset-8 decoration-[#ffe066] decoration-2"
              >
                About
              </button>
              <button 
                onClick={() => goToSection("products")}
                className="text-[#fbe3c7] hover:text-[#ffe066] transition-colors duration-300 font-semibold hover:underline underline-offset-8 decoration-[#ffe066] decoration-2"
              >
                Products
              </button>
              <button 
                onClick={() => goToSection("process")}
                className="text-[#fbe3c7] hover:text-[#ffe066] transition-colors duration-300 font-semibold hover:underline underline-offset-8 decoration-[#ffe066] decoration-2"
              >
                Process
              </button>
              <button 
                onClick={() => goToSection("contact")}
                className="text-[#fbe3c7] hover:text-[#ffe066] transition-colors duration-300 font-semibold hover:underline underline-offset-8 decoration-[#ffe066] decoration-2"
              >
                Contact
              </button>
              <Button 
                className="ml-4 px-8 py-3 font-bold rounded-full bg-gradient-to-r from-[#ffe066] to-[#fbe3c7] text-black shadow-xl hover:scale-105 transition-all duration-300 border-0"
                onClick={() => goToSection("contact")}
              >
                Get Quote
              </Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-[#ffe066] hover:text-[#fbe3c7]"
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
                onClick={() => goToSection("hero")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => goToSection("about")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                About
              </button>
              <button 
                onClick={() => goToSection("products")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Products
              </button>
              <button 
                onClick={() => goToSection("process")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Process
              </button>
              <button 
                onClick={() => goToSection("contact")}
                className="text-left text-white/80 hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                Contact
              </button>
              <div className="pt-6 mt-6 border-t border-white/20">
                <Button 
                  className="w-full bg-accent hover:bg-yellow-500 text-navy-dark font-semibold rounded-full"
                  onClick={() => goToSection("contact")}
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
