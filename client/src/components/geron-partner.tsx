import { ArrowUpRight, BadgeCheck } from "lucide-react";

export default function GeronPartner() {
  return (
    <section id="geron" className="geron-partner bg-[#edf5f8] py-16 border-y border-[#d7e5eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[.75fr_1.25fr] gap-10 items-center">
        <div className="overflow-hidden h-64 image-frame"><img src="/images/card-clothing-wire.webp" alt="GERON card clothing supplied by sole agent Shanghai Traders" loading="lazy" decoding="async" className="w-full h-full object-cover" /></div>
        <div>
          <div className="flex items-center gap-2 text-xs font-bold tracking-[.18em] uppercase text-[#1474b8] mb-4"><BadgeCheck className="w-4 h-4"/>GERON sole agent</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#15354d] tracking-[-.035em] mb-4">Shanghai Traders is GERON&apos;s sole agent.</h2>
          <p className="text-[#536b7b] leading-relaxed max-w-3xl mb-6">Shanghai Traders connects Pakistan&apos;s textile mills with GERON&apos;s established carding knowledge and precision card clothing. Established in 1965, GERON combines research, manufacturing and sales in carding equipment.</p>
          <a href="https://www.geron-card.com/en/company/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-[#1474b8] hover:text-[#0e5d96]">Learn about GERON <ArrowUpRight className="ml-2 w-4 h-4"/></a>
        </div>
      </div>
    </section>
  );
}
