import { Mail, MapPin, MessageSquare, Phone, UserRound } from "lucide-react";

export default function Footer() {
  const go = (id:string) => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  return <footer className="bg-[#132b40] pt-16 pb-8 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-[1.2fr_.6fr_1.2fr] gap-12 pb-12">
        <div><div className="inline-flex bg-white rounded-sm px-3 py-2 mb-5"><img src="/brand/shanghai-traders-logo.webp" alt="Shanghai Traders" loading="lazy" decoding="async" width="1117" height="600" className="h-20 w-56 object-contain" /></div><div className="text-[#c4c3df] uppercase tracking-[.18em] text-[10px] font-bold mb-3">GERON Sole Agent</div><p className="text-[#b9c8d1] leading-relaxed max-w-md">Machinery, card clothing, precision components and sourcing support for Pakistan&apos;s textile manufacturing industry.</p></div>
        <div><h3 className="font-semibold mb-5">Explore</h3><div className="space-y-3">{[["Company","about"],["Products","products"],["GERON","geron"],["Contact","contact"]].map(([label,id])=><button key={id} onClick={()=>go(id)} className="block text-[#b9c8d1] hover:text-white text-sm">{label}</button>)}</div></div>
        <div><h3 className="font-semibold mb-5">Contact Amir Feroz</h3><div className="space-y-3 text-sm text-[#b9c8d1]"><p className="flex gap-3"><UserRound className="w-4 h-4 text-[#55c9ca] shrink-0"/>Amir Feroz</p><p className="flex gap-3"><MapPin className="w-4 h-4 text-[#55c9ca] shrink-0"/>H No 67 A, Westwood Colony, Thokar Niaz Baig, Lahore</p><a href="tel:+923214477164" className="flex gap-3 hover:text-white"><Phone className="w-4 h-4 text-[#55c9ca] shrink-0"/>+92 321 4477164 / 042-35882154-5</a><a href="https://wa.me/923214477164" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white"><MessageSquare className="w-4 h-4 text-[#55c9ca] shrink-0"/>WhatsApp</a><a href="mailto:shanghaitraders860@gmail.com" className="flex gap-3 hover:text-white break-all"><Mail className="w-4 h-4 text-[#55c9ca] shrink-0"/>shanghaitraders860@gmail.com</a></div></div>
      </div>
      <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row gap-3 justify-between text-xs text-[#94a8b5]"><span>© {new Date().getFullYear()} Shanghai Traders. All rights reserved.</span><span>GERON sole agent • China to Pakistan</span></div>
    </div>
  </footer>;
}
