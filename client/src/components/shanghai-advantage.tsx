import { ArrowRight, ClipboardCheck, Headphones, Network, Ship } from "lucide-react";

export default function ShanghaiAdvantage() {
  const capabilities = [
    { icon: Network, title: "Direct principal interface", text: "Your requirement reaches the manufacturer through an established sole-agent channel." },
    { icon: ClipboardCheck, title: "Requirement first", text: "We align the proposed machine or component with process conditions before commercial discussion." },
    { icon: Ship, title: "One coordinated journey", text: "Shanghai Traders stays across specifications, documentation, shipment and delivery milestones." },
    { icon: Headphones, title: "Support that stays local", text: "A Pakistan-based contact remains available for follow-up, parts and manufacturer coordination." },
  ];
  const contact = () => document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});
  return (
    <section className="shanghai-advantage overflow-hidden bg-[#102f46] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative hidden min-h-[560px] sm:block">
            <div className="image-frame absolute left-0 top-0 h-[72%] w-[78%] overflow-hidden shadow-2xl"><img src="/images/shanghai-technical-support.webp" alt="Shanghai Traders technical coordination" loading="lazy" decoding="async" className="h-full w-full object-cover" /></div>
            <div className="image-frame absolute bottom-0 right-0 h-[50%] w-[62%] overflow-hidden border-[8px] border-[#101238] shadow-2xl"><img src="/images/shanghai-delivery-support.webp" alt="Shanghai Traders industrial equipment delivery coordination" loading="lazy" decoding="async" className="h-full w-full object-cover" /></div>
            <div className="absolute bottom-8 left-7 bg-[#747aa4] px-5 py-4 shadow-xl"><div className="text-xs uppercase tracking-[.17em] text-white/75">Shanghai Traders</div><div className="font-bold">Principal to production floor</div></div>
          </div>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-[#d2c8e4]">The Shanghai Traders advantage</p>
            <h2 className="mb-6 text-4xl font-bold leading-[1.08] tracking-[-.045em] sm:text-5xl lg:text-6xl">One trusted team behind four specialist industrial partnerships.</h2>
            <p className="mb-10 text-lg leading-relaxed text-[#c8d8e1]">The strength of our portfolio is not only the manufacturers we represent—it is the clarity, access and accountability customers receive here in Pakistan.</p>
            <div className="mb-10 grid gap-7 sm:grid-cols-2">
              {capabilities.map(({icon:Icon,title,text}) => <div key={title} className="group flex gap-4"><div className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 transition-colors group-hover:border-[#747aa4] group-hover:bg-[#747aa4]"><Icon className="h-5 w-5 text-[#d2c8e4] group-hover:text-white"/></div><div><h3 className="mb-1 text-lg font-bold">{title}</h3><p className="text-sm leading-relaxed text-[#afc2cd]">{text}</p></div></div>)}
            </div>
            <button onClick={contact} className="inline-flex items-center bg-white px-6 py-3.5 font-semibold text-[#101238] transition-colors hover:bg-[#d2c8e4]">Work with Shanghai Traders <ArrowRight className="ml-2 h-4 w-4" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}