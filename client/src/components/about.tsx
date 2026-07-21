import { CheckCircle2, Gauge, Handshake, Settings, ShieldCheck } from "lucide-react";

export default function About() {
  const points = [
    { icon: Handshake, title: "Principal-backed access", text: "Direct coordination with four specialist manufacturers instead of disconnected trading channels." },
    { icon: Gauge, title: "Application-led selection", text: "Recommendations shaped by your process, capacity, materials and operating conditions." },
    { icon: ShieldCheck, title: "Commercial accountability", text: "Specification review, documentation and order coordination through one Pakistan-based team." },
    { icon: Settings, title: "Lifecycle continuity", text: "Installation guidance, critical parts planning and manufacturer follow-up after delivery." },
  ];

  return (
    <section id="about" className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="about-layout grid items-center gap-16 lg:grid-cols-2">
          <div className="about-visual relative">
            <img src="/images/shanghai-technical-support.webp" alt="Shanghai Traders technical coordination for industrial machinery" loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_24px_60px_rgba(23,50,77,.16)]" />
            <div className="absolute -bottom-7 left-6 right-6 rounded-xl border border-[#dce3e6] bg-white p-5 shadow-xl sm:left-auto sm:w-80">
              <div className="mb-1 text-sm font-bold uppercase tracking-[.15em] text-[#676d99]">Four authorized principals</div>
              <p className="text-sm !text-[#526579]">Specialist technologies connected to Pakistan through one accountable industrial partner.</p>
            </div>
          </div>
          <div className="about-copy">
            <p className="section-kicker">About Shanghai Traders</p>
            <h2 className="section-title mb-6">Representation that turns global capability into local confidence.</h2>
            <p className="mb-5 text-lg leading-relaxed">Shanghai Traders represents carefully selected Chinese manufacturers in Pakistan across textile process technology, metalworking machinery and industrial compressed air.</p>
            <p className="mb-8 text-lg leading-relaxed">Our role goes beyond importing equipment. We translate operating requirements into clear specifications, connect customers directly with the right principal, and remain accountable throughout the supply journey.</p>
            <div className="grid gap-5 sm:grid-cols-2">
              {points.map(({ icon: Icon, title, text }) => (
                <div key={title} className="about-point flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#ecebf4]"><Icon className="h-5 w-5 text-[#676d99]" /></div>
                  <div><h3 className="mb-1 text-base font-bold">{title}</h3><p className="text-sm leading-relaxed">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-capabilities mt-24 grid grid-cols-2 border-y border-[#dce3e6] lg:grid-cols-4">
          {[["4", "Sole-agent principals"], ["Carding", "GERON technology"], ["Rotor spinning", "JSM components"], ["Industry", "Rotex + Dumtech systems"]].map(([value,label]) => (
            <div key={label} className="border-r border-[#dce3e6] px-5 py-8 last:border-r-0"><div className="text-3xl font-bold text-[#101238]">{value}</div><div className="mt-1 flex items-center gap-1.5 text-sm text-[#687a89]"><CheckCircle2 className="h-4 w-4 text-[#747aa4]" />{label}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}