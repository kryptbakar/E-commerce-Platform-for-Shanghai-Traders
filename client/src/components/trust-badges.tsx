import { BadgeCheck, Boxes, Headphones, Network } from "lucide-react";

export default function TrustBadges() {
  const items = [
    { icon: BadgeCheck, title: "Sole agent for 4 principals", text: "Direct representation across four specialist manufacturers." },
    { icon: Network, title: "Multi-industry capability", text: "Textile, metalworking and compressed-air technologies." },
    { icon: Boxes, title: "Machines + critical parts", text: "Capital equipment, process components and replacement supply." },
    { icon: Headphones, title: "Pakistan-based continuity", text: "One local team before, during and after your purchase." },
  ];
  return (
    <section className="trust-section py-12">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(({icon: Icon,title,text}) => <div key={title} className="flex gap-4"><Icon className="h-7 w-7 shrink-0 text-[#d7afd3]"/><div><h3 className="mb-1 font-semibold text-white">{title}</h3><p className="text-sm leading-relaxed text-[#c9d7df]">{text}</p></div></div>)}
      </div>
    </section>
  );
}
