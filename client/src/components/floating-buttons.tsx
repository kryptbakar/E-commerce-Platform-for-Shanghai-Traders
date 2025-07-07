import { useState, useEffect } from "react";
import { ArrowUp, MessageSquare, Languages, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingButtonsProps {
  onCTAClick?: () => void;
}

export default function FloatingButtons({ onCTAClick }: FloatingButtonsProps = {}) {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 500;
      setShowBackToTop(scrolled);
      
      // Show WhatsApp button after 3 seconds of scrolling
      if (scrolled && !showWhatsApp) {
        setTimeout(() => setShowWhatsApp(true), 3000);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showWhatsApp]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your textile machinery. Can you provide more information?");
    window.open(`https://wa.me/923001234567?text=${message}`, "_blank");
  };

  const openEmail = () => {
    window.open("mailto:info@shanghaitraders.pk?subject=Inquiry about Textile Machinery", "_blank");
  };

  const openPhone = () => {
    window.open("tel:+923001234567", "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Contact Options */}
      <div className="flex flex-col gap-3">
        {/* Email Button */}
        <Button
          onClick={openEmail}
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover-lift animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "2s" }}
        >
          <Mail className="h-6 w-6" />
        </Button>

        {/* Phone Button */}
        <Button
          onClick={openPhone}
          className="w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg hover-lift animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "2s" }}
        >
          <Phone className="h-6 w-6" />
        </Button>

        {/* WhatsApp Button */}
        <Button
          onClick={openWhatsApp}
          className={`w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover-lift transition-all duration-500 ${
            showWhatsApp ? "animate-pulse" : ""
          }`}
        >
          <MessageSquare className="h-7 w-7" />
          {showWhatsApp && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          )}
        </Button>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="w-14 h-14 bg-navy-dark hover:bg-navy-medium text-white rounded-full shadow-lg hover-lift animate-fadeInUp"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}

      {/* Floating notification */}
      <div className="fixed top-4 right-4 bg-accent text-navy-dark px-4 py-2 rounded-full shadow-lg animate-slideInRight">
        <span className="text-sm font-medium">🚀 Free shipping to Pakistan!</span>
      </div>
    </div>
  );
}