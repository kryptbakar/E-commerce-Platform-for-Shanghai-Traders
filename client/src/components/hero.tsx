import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, Factory, Headphones, Ship } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="industrial-hero relative flex min-h-[790px] items-center overflow-hidden pt-24">
      <div className="textile-grid absolute inset-0 opacity-50" />
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="min-w-0">
            <button onClick={() => scrollTo("principals")} className="hero-credential mb-7">
              <BadgeCheck className="h-4 w-4" />
              Sole agents in Pakistan for four specialist manufacturers
            </button>
            <h1 className="hero-brand-heading mb-7">
              <span className="hero-brand-name">Shanghai Traders</span>
              <span className="hero-brand-promise">Global industrial technology. Trusted local representation.</span>
            </h1>
            <p className="mb-9 max-w-2xl text-xl leading-relaxed text-[#526579]">
              Direct access to specialist solutions from GERON, JSM Jinqiao, Nantong Rotex and Jinhua Dumtech—supported by one experienced team in Pakistan.
            </p>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Button onClick={() => scrollTo("principals")} className="group h-14 rounded-md bg-[#17324d] px-8 text-base font-semibold text-white hover:bg-[#244968]">
                Meet our principals <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={() => scrollTo("contact")} variant="outline" className="h-14 rounded-md border-[#9eacb7] bg-white/70 px-8 text-base font-semibold text-[#17324d] hover:bg-white">
                Discuss your requirement
              </Button>
            </div>
            <div className="hero-proof-grid">
              {[{ icon: BadgeCheck, value: "4", label: "sole-agent principals" }, { icon: Factory, value: "3", label: "industrial disciplines" }, { icon: Headphones, value: "1", label: "local support team" }].map(({ icon: Icon, value, label }) => (
                <div key={label}><Icon className="h-4 w-4" /><strong>{value}</strong><span>{label}</span></div>
              ))}
            </div>
          </div>

          <div className="relative min-w-0 lg:pl-5">
            <div className="absolute -inset-5 rotate-2 rounded-[2rem] border border-[#d7c8b9]" />
            <div className="hero-machine-frame relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_80px_rgba(23,50,77,.20)]">
              <img src="/images/carding-machine-hero.webp" alt="Industrial textile machinery represented by Shanghai Traders in Pakistan" fetchPriority="high" decoding="async" className="h-[500px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101238]/80 via-transparent to-transparent" />
              <div className="hero-principal-strip">
                {["GERON", "JSM", "ROTEX", "DUMTECH"].map((name) => <span key={name}>{name}</span>)}
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 text-white">
                <div><span className="block text-[10px] font-bold uppercase tracking-[.18em] text-white/65">Authorized portfolio</span><strong className="text-lg">Technology chosen for production</strong></div>
                <Ship className="h-7 w-7 shrink-0 text-[#d7afd3]" />
              </div>
            </div>
            <div className="hero-route-badge absolute -right-3 -top-5 rounded-lg px-5 py-4 text-white shadow-xl">
              <div className="text-lg font-bold">China → Pakistan</div>
              <div className="text-xs text-white/85">Direct principal coordination</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}