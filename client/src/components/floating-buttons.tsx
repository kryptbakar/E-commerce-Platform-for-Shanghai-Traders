import { useEffect, useState } from "react";
import { ArrowUp, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="floating-actions fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button aria-label="Open inquiry form" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="floating-secondary w-12 h-12 bg-[#16a0a2] hover:bg-[#087f82] text-white rounded-full shadow-lg">
        <Mail className="h-5 w-5" />
      </Button>
      <Button aria-label="Contact Shanghai Traders on WhatsApp" onClick={() => window.open("https://wa.me/923214477164", "_blank", "noopener,noreferrer")} className="floating-primary w-14 h-14 bg-[#16a34a] hover:bg-[#15803d] text-white rounded-full shadow-lg">
        <MessageSquare className="h-6 w-6" />
      </Button>
      {showBackToTop && <Button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="floating-top w-12 h-12 bg-[#102f46] hover:bg-[#17445f] text-white rounded-full shadow-lg animate-fadeInUp"><ArrowUp className="h-5 w-5" /></Button>}
    </div>
  );
}
