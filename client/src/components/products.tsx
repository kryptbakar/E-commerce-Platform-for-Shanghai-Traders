import { ArrowRight, Check } from "lucide-react";

const supplyCategories = [
  {
    title: "Carding machines",
    image: "/images/carding-machine-hero.webp",
    description: "Complete carding solutions for opening, cleaning and preparing fibers for consistent downstream production.",
    points: ["New machinery sourcing", "Configuration guidance", "Installation support"],
  },
  {
    title: "Card clothing wires",
    image: "/images/card-clothing-wire.webp",
    description: "Precision metallic card clothing selected for fiber type, machine application and production requirements.",
    points: ["Cylinder and doffer wire", "Licker-in wire", "Application-based selection"],
  },
  {
    title: "Spinning machines",
    image: "/images/spinning-machines.webp",
    description: "Reliable spinning equipment and production-line solutions for efficient, consistent yarn manufacturing.",
    points: ["Complete machine supply", "Mill requirement matching", "Technical coordination"],
  },
  {
    title: "Spinning wires & components",
    image: "/images/spinning-wires-components.webp",
    description: "Quality wire products, travelers and precision working components for spinning machinery upkeep.",
    points: ["Routine consumables", "Precision wire components", "Replacement supply"],
  },
];

export default function Products() {
  const inquire = (category?: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      const message = document.getElementById("message") as HTMLTextAreaElement | null;
      if (message && category && !message.value) {
        message.value = `I would like to discuss your supply of ${category.toLowerCase()}.`;
        message.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, 650);
  };

  return (
    <section id="products" className="supply-section py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="supply-heading grid lg:grid-cols-[.8fr_1.2fr] gap-10 items-end mb-14">
          <div><p className="section-kicker">What we supply</p><h2 className="section-title">Focused textile machinery solutions.</h2></div>
          <p className="text-lg text-[#526579] leading-relaxed lg:max-w-2xl lg:ml-auto">We focus on the machinery and precision wire products at the heart of fiber preparation and yarn production. Tell us what your mill needs and we will source the right supply solution.</p>
        </div>

        <div className="supply-grid grid md:grid-cols-2 gap-7">
          {supplyCategories.map((category, index) => (
            <article key={category.title} className="supply-card group bg-white rounded-2xl overflow-hidden border border-[#d7e0e4] shadow-[0_12px_35px_rgba(23,50,77,.07)]">
              <div className="relative h-72 overflow-hidden">
                <img src={category.image} alt={category.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-[1.025] transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#142f47]/75 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold tracking-[.12em] text-[#17324d]">0{index + 1}</div>
                <h3 className="absolute bottom-6 left-6 right-6 text-3xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>
              <div className="p-7">
                <p className="text-[#526579] leading-relaxed mb-6">{category.description}</p>
                <ul className="grid sm:grid-cols-3 gap-3 mb-7">
                  {category.points.map(point => <li key={point} className="flex gap-2 text-xs font-semibold text-[#435b6c]"><Check className="w-4 h-4 text-[#b7662b] shrink-0" />{point}</li>)}
                </ul>
                <button onClick={() => inquire(category.title)} className="inline-flex items-center font-semibold text-[#b7662b] hover:text-[#8f4a1c]">Ask about this supply <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" /></button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#17324d] px-7 py-9 md:px-11 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div><h3 className="text-2xl font-bold text-white mb-2">Not sure what specification you need?</h3><p className="text-[#c8d5dd]">Share your machine application, fiber and production requirement. We’ll help narrow it down.</p></div>
          <button onClick={() => inquire()} className="shrink-0 rounded-md bg-[#c9783d] hover:bg-[#da8950] text-white font-semibold px-7 py-3.5">Talk to our team</button>
        </div>
      </div>
    </section>
  );
}
