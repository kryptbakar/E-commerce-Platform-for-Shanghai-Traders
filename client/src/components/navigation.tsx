import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [location, navigate] = useLocation();
  const links = [["Home", "hero"], ["Company", "about"], ["Products", "products"], ["Partner", "geron"], ["Support", "process"], ["Contact", "contact"]];

  const goTo = (id: string) => {
    if (location !== "/") navigate(`/#${id}`);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[#fffdf9]/95 backdrop-blur-xl border-b border-[#dfe5e8] shadow-[0_4px_20px_rgba(23,50,77,.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[82px] flex items-center justify-between">
        <button onClick={() => goTo("hero")} className="brand-logo-link flex items-center gap-3 text-left" aria-label="Shanghai Traders home">
          <img src="/brand/shanghai-traders-logo.webp" alt="" width="1117" height="600" className="brand-logo h-[58px] w-[108px] object-contain object-left" />
          <span className="brand-wordmark">
            <strong>Shanghai Traders</strong>
            <small>Textile machinery solutions</small>
          </span>
        </button>
        <div className="hidden lg:flex items-center gap-6">
          {links.map(([label, id]) => <button key={id} onClick={() => goTo(id)} className="text-sm font-semibold text-[#526579] hover:text-[#70749b] transition-colors">{label}</button>)}
          <Button onClick={() => goTo("contact")} className="rounded-md bg-[#b7662b] hover:bg-[#9d5420] text-white px-6">Get a quote</Button>
        </div>
        <button className="nav-menu-toggle text-[#17324d]" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="lg:hidden bg-white border-t border-[#e2e7ea] px-6 py-6 flex flex-col gap-5">{links.map(([label, id]) => <button key={id} onClick={() => goTo(id)} className="text-left font-semibold text-[#526579]">{label}</button>)}</div>}
    </nav>
  );
}
