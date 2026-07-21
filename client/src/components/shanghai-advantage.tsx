import { ArrowRight, ClipboardCheck, Headphones, Ship } from "lucide-react";

export default function ShanghaiAdvantage() {
  const capabilities = [
    { icon: ClipboardCheck, title: "Requirement first", text: "We begin with your fiber, machine application and production goal before recommending supply." },
    { icon: Ship, title: "One coordinated journey", text: "Shanghai Traders stays across sourcing, documentation, shipment and delivery milestones." },
    { icon: Headphones, title: "Support that stays local", text: "Your mill has a Pakistan-based commercial contact for follow-up, spares and manufacturer coordination." },
  ];
  const contact = () => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  return (
    <section className="shanghai-advantage py-24 bg-[#102f46] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative min-h-[560px] hidden sm:block">
            <div className="absolute left-0 top-0 w-[78%] h-[72%] overflow-hidden shadow-2xl image-frame"><img src="/images/shanghai-technical-support.webp" alt="Shanghai Traders technical support for carding machinery" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
            <div className="absolute right-0 bottom-0 w-[62%] h-[50%] overflow-hidden border-[8px] border-[#102f46] shadow-2xl image-frame"><img src="/images/shanghai-delivery-support.webp" alt="Shanghai Traders machinery delivery coordination" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
            <div className="absolute left-7 bottom-8 bg-[#16a0a2] px-5 py-4 shadow-xl"><div className="text-xs tracking-[.17em] uppercase text-white/75">Shanghai Traders</div><div className="font-bold">From source to mill floor</div></div>
          </div>
          <div>
            <p className="text-xs font-bold tracking-[.2em] uppercase text-[#55c9ca] mb-4">Why Shanghai Traders</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-[-.045em] mb-6">More than a supplier. Your machinery link from China to Pakistan.</h2>
            <p className="text-lg text-[#c8d8e1] leading-relaxed mb-10">We bring technical understanding, supplier access and local accountability together—so your team can make decisions with clarity and keep production moving.</p>
            <div className="space-y-7 mb-10">
              {capabilities.map(({icon:Icon,title,text}) => <div key={title} className="flex gap-4 group"><div className="w-11 h-11 shrink-0 border border-white/15 flex items-center justify-center group-hover:bg-[#16a0a2] group-hover:border-[#16a0a2] transition-colors"><Icon className="w-5 h-5 text-[#55c9ca] group-hover:text-white"/></div><div><h3 className="font-bold text-lg mb-1">{title}</h3><p className="text-sm text-[#afc2cd] leading-relaxed">{text}</p></div></div>)}
            </div>
            <button onClick={contact} className="inline-flex items-center bg-white text-[#102f46] hover:bg-[#55c9ca] font-semibold px-6 py-3.5 transition-colors">Work with Shanghai Traders <ArrowRight className="ml-2 w-4 h-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
