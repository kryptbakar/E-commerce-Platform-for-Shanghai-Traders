import { BadgeCheck, Mail, MapPin, MessageSquare, Phone, UserRound } from "lucide-react";

export default function Footer() {
  const go = (id:string) => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
  const principals = ["GERON", "JSM Jinqiao", "Nantong Rotex", "Jinhua Dumtech"];

  return <footer className="bg-[#132b40] pb-8 pt-16 text-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-12 pb-12 md:grid-cols-[1.1fr_.8fr_1.1fr]">
        <div>
          <div className="mb-5 inline-flex rounded-sm bg-white px-3 py-2"><img src="/brand/shanghai-traders-logo.webp" alt="Shanghai Traders" loading="lazy" decoding="async" width="1117" height="600" className="h-20 w-56 object-contain" /></div>
          <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#d2c8e4]"><BadgeCheck className="h-4 w-4" /> Four sole-agent principals</div>
          <p className="max-w-md leading-relaxed text-[#b9c8d1]">Authorized industrial technology representation for textile production, metalworking and compressed-air systems in Pakistan.</p>
        </div>
        <div>
          <h3 className="mb-5 font-semibold">Our principals</h3>
          <div className="space-y-3">{principals.map((principal) => <button key={principal} onClick={() => go("principals")} className="block text-sm text-[#b9c8d1] hover:text-white">{principal}</button>)}</div>
        </div>
        <div>
          <h3 className="mb-5 font-semibold">Contact Amir Feroz</h3>
          <div className="space-y-3 text-sm text-[#b9c8d1]"><p className="flex gap-3"><UserRound className="h-4 w-4 shrink-0 text-[#d2c8e4]"/>Amir Feroz</p><p className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-[#d2c8e4]"/>H No 67 A, Westwood Colony, Thokar Niaz Baig, Lahore</p><a href="tel:+923214477164" className="flex gap-3 hover:text-white"><Phone className="h-4 w-4 shrink-0 text-[#d2c8e4]"/>+92 321 4477164 / 042-35882154-5</a><a href="https://wa.me/923214477164" target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-white"><MessageSquare className="h-4 w-4 shrink-0 text-[#d2c8e4]"/>WhatsApp</a><a href="mailto:shanghaitraders860@gmail.com" className="flex gap-3 break-all hover:text-white"><Mail className="h-4 w-4 shrink-0 text-[#d2c8e4]"/>shanghaitraders860@gmail.com</a></div>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs text-[#94a8b5] sm:flex-row"><span>© {new Date().getFullYear()} Shanghai Traders. All rights reserved.</span><span>Sole-agent representation • China to Pakistan</span></div>
    </div>
  </footer>;
}