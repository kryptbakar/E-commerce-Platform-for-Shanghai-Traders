import { ArrowRight, Check } from "lucide-react";

const supplyCategories = [
  {
    eyebrow: "GERON",
    title: "Carding technology",
    image: "/images/card-clothing-wire.webp",
    description: "Carding components selected around fiber, application, production speed and service-life requirements.",
    points: ["Metallic card clothing", "Flat tops & stationary flats", "Opening rollers & combs"],
  },
  {
    eyebrow: "JSM Jinqiao",
    title: "Rotor-spinning components",
    image: "/images/jsm-rotor-spinning.webp",
    description: "High-speed process parts for stable open-end spinning, yarn consistency and dependable mill operation.",
    points: ["Rotors & bearings", "Opening rollers", "Clothing rings & drive parts"],
  },
  {
    eyebrow: "Nantong Rotex",
    title: "Metalworking machinery",
    image: "/images/rotex-metalworking.webp",
    description: "Robust production equipment for sheet-metal forming, machining and engineering workshops.",
    points: ["Press brakes & shears", "Lathes & milling", "Drilling & grinding"],
  },
  {
    eyebrow: "Jinhua Dumtech",
    title: "Compressed-air systems",
    image: "/images/dumtech-compressor.webp",
    description: "Efficient industrial compressed-air packages designed to support continuous production environments.",
    points: ["Screw compressors", "Air treatment & drying", "Parts & system support"],
  },
];

export default function Products() {
  const inquire = (category?: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      const message = document.getElementById("message") as HTMLTextAreaElement | null;
      if (message && category && !message.value) {
        message.value = `I would like to discuss ${category.toLowerCase()} for our facility.`;
        message.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, 650);
  };

  return (
    <section id="products" className="supply-section overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="supply-heading mb-14 grid items-end gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="section-kicker">Industrial solutions</p><h2 className="section-title">Specialist technology for critical production processes.</h2></div>
          <p className="text-lg leading-relaxed text-[#526579] lg:ml-auto lg:max-w-2xl">Our portfolio now extends from fiber preparation and rotor spinning to metalworking and compressed air—each category supported through a dedicated principal relationship.</p>
        </div>

        <div className="supply-grid grid gap-7 md:grid-cols-2">
          {supplyCategories.map((category, index) => (
            <article key={category.title} className="supply-card group overflow-hidden rounded-2xl border border-[#d7e0e4] bg-white shadow-[0_12px_35px_rgba(23,50,77,.07)]">
              <div className="relative h-72 overflow-hidden">
                <img src={category.image} alt={category.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101238]/90 via-[#101238]/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold tracking-[.12em] text-[#17324d] backdrop-blur">0{index + 1}</div>
                <div className="absolute bottom-6 left-6 right-6"><span className="mb-2 block text-[10px] font-bold uppercase tracking-[.2em] text-white/70">{category.eyebrow}</span><h3 className="text-3xl font-bold tracking-tight text-white">{category.title}</h3></div>
              </div>
              <div className="p-7">
                <p className="mb-6 leading-relaxed text-[#526579]">{category.description}</p>
                <ul className="mb-7 grid gap-3 sm:grid-cols-3">
                  {category.points.map(point => <li key={point} className="flex gap-2 text-xs font-semibold text-[#435b6c]"><Check className="h-4 w-4 shrink-0 text-[#747aa4]" />{point}</li>)}
                </ul>
                <button onClick={() => inquire(category.title)} className="inline-flex items-center font-semibold text-[#676d99] hover:text-[#101238]">Discuss this solution <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></button>
              </div>
            </article>
          ))}
        </div>

        <div className="solutions-cta mt-12 flex flex-col justify-between gap-6 rounded-2xl px-7 py-9 md:flex-row md:items-center md:px-11">
          <div><span>Shanghai Traders application support</span><h3 className="mb-2 text-2xl font-bold text-white">One conversation can cover your complete requirement.</h3><p>Share the process, capacity and operating conditions. We will coordinate the right principal and technical path.</p></div>
          <button onClick={() => inquire()} className="shrink-0 rounded-md px-7 py-3.5 font-semibold text-white">Talk to our team</button>
        </div>
      </div>
    </section>
  );
}