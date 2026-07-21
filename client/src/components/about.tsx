import { CheckCircle2, Gauge, Settings, ShieldCheck } from "lucide-react";

export default function About() {
  const points = [
    { icon: Gauge, title: "Production-led advice", text: "Recommendations based on fiber, output, count range and mill conditions." },
    { icon: ShieldCheck, title: "Supplier verification", text: "Factory checks, specification review and pre-dispatch quality coordination." },
    { icon: Settings, title: "Lifecycle support", text: "Spare parts planning, installation guidance and technical follow-up after delivery." },
  ];

  return (
    <section id="about" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="about-layout grid lg:grid-cols-2 gap-16 items-center">
          <div className="about-visual relative">
            <img src="/images/card-clothing-wire.webp" alt="Precision card clothing wire for textile carding machines" loading="lazy" decoding="async" className="rounded-2xl w-full aspect-[4/3] object-cover shadow-[0_24px_60px_rgba(23,50,77,.16)]" />
            <div className="absolute -bottom-7 right-6 left-6 sm:left-auto sm:w-72 bg-white p-5 rounded-xl shadow-xl border border-[#dce3e6]">
              <div className="text-sm uppercase tracking-[.15em] text-[#b7662b] font-bold mb-1">Carding expertise</div>
              <p className="text-sm !text-[#526579]">Machines, metallic card clothing and mill-ready spare parts from one accountable source.</p>
            </div>
          </div>
          <div className="about-copy">
            <p className="section-kicker">About Shanghai Traders</p>
            <h2 className="section-title mb-6">Built around the realities of textile production.</h2>
            <p className="text-lg leading-relaxed mb-5">We connect Pakistani textile manufacturers with dependable machinery and component suppliers in China. Our work starts with your process requirements—not a generic equipment list.</p>
            <p className="text-lg leading-relaxed mb-8">For carding machines, card clothing wires, spinning machines and related wire components, we coordinate specifications, sourcing, logistics and post-delivery support.</p>
            <div className="space-y-5">
              {points.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-lg bg-[#eaf0f2] flex items-center justify-center"><Icon className="h-5 w-5 text-[#315b4d]" /></div>
                  <div><h3 className="text-base font-bold mb-1">{title}</h3><p className="text-sm leading-relaxed">{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about-capabilities mt-24 grid grid-cols-2 lg:grid-cols-4 border-y border-[#dce3e6]">
          {[["GERON", "Sole agent"], ["Carding", "Machines and card clothing"], ["Spinning", "Machines and components"], ["China → Pakistan", "Sourcing and local support"]].map(([value,label]) => (
            <div key={label} className="py-8 px-5 border-r border-[#dce3e6] last:border-r-0"><div className="text-3xl font-bold text-[#17324d]">{value}</div><div className="mt-1 text-sm text-[#687a89] flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#b7662b]" />{label}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
