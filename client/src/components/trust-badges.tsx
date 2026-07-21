import { BadgeCheck, Boxes, Headphones, Ship } from "lucide-react";

export default function TrustBadges() {
  const items = [
    { icon: BadgeCheck, title: "Verified manufacturers", text: "Supplier and specification checks before order confirmation." },
    { icon: Boxes, title: "Machinery + spares", text: "Equipment, card clothing and critical replacement parts." },
    { icon: Ship, title: "Managed logistics", text: "Documentation and shipment coordination from China to Pakistan." },
    { icon: Headphones, title: "Technical continuity", text: "A local point of contact before and after commissioning." },
  ];
  return (
    <section className="trust-section py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map(({icon: Icon,title,text}) => <div key={title} className="flex gap-4"><Icon className="w-7 h-7 shrink-0 text-[#e7b17d]"/><div><h3 className="text-white font-semibold mb-1">{title}</h3><p className="text-sm text-[#c9d7df] leading-relaxed">{text}</p></div></div>)}
      </div>
    </section>
  );
}
