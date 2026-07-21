import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [location, navigate] = useLocation();
  const links = [["Home", "hero"], ["Principals", "principals"], ["Solutions", "products"], ["Company", "about"], ["Support", "process"], ["Contact", "contact"]];

  const goTo = (id: string) => {
    if (location !== "/") navigate(`/#${id}`);
    else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#dfe5e8] bg-[#fffdf9]/95 shadow-[0_4px_20px_rgba(23,50,77,.06)] backdrop-blur-xl">
      <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={() => goTo("hero")} className="brand-logo-link flex items-center gap-3 text-left" aria-label="Shanghai Traders home">
          <img src="/brand/shanghai-traders-logo.webp" alt="" width="1117" height="600" className="brand-logo h-[58px] w-[108px] object-contain object-left" />
          <span className="brand-wordmark"><strong>Shanghai Traders</strong><small>Industrial technology partners</small></span>
        </button>
        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, id]) => <button key={id} onClick={() => goTo(id)} className="text-sm font-semibold text-[#526579] transition-colors hover:text-[#70749b]">{label}</button>)}
          <Button onClick={() => goTo("contact")} className="rounded-md bg-[#747aa4] px-6 text-white hover:bg-[#5d628d]">Start a project</Button>
        </div>
        <button className="nav-menu-toggle text-[#17324d]" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="mobile-nav-panel flex flex-col gap-5 border-t border-[#e2e7ea] bg-white px-6 py-6 lg:hidden">{links.map(([label, id]) => <button key={id} onClick={() => goTo(id)} className="text-left font-semibold text-[#526579]">{label}</button>)}<button onClick={() => goTo("contact")} className="rounded-lg bg-[#101238] px-5 py-3 text-left font-semibold text-white">Start a project</button></div>}
    </nav>
  );
}