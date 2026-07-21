import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Headphones, Ship, Wrench } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="industrial-hero relative flex min-h-[760px] items-center overflow-hidden pt-24">
      <div className="textile-grid absolute inset-0 opacity-50" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#c9d4dc] bg-white/80 px-4 py-2 text-sm font-semibold text-[#315b4d]">
              <span className="h-2 w-2 rounded-full bg-[#c57b3a]" />
              Pakistan&apos;s textile machinery partner • GERON sole agent
            </div>
            <h1 className="hero-brand-heading mb-7">
              <span className="hero-brand-name">Shanghai Traders</span>
              <span className="hero-brand-promise">Your trusted textile machinery partner.</span>
            </h1>
            <p className="mb-9 max-w-2xl text-xl leading-relaxed text-[#526579]">
              We connect Pakistan&apos;s mills with carding machines, card clothing, spinning machinery and precision components—backed by sourcing expertise and local support.
            </p>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Button onClick={() => scrollTo("products")} className="group h-14 rounded-md bg-[#17324d] px-8 text-base font-semibold text-white hover:bg-[#244968]">
                Explore our solutions <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={() => scrollTo("contact")} variant="outline" className="h-14 rounded-md border-[#9eacb7] bg-white/60 px-8 text-base font-semibold text-[#17324d] hover:bg-white">
                Request a quotation
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#526579]">
              {["Factory-vetted suppliers", "Installation guidance", "After-sales support"].map((item) => (
                <span key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#3f7865]" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-5">
            <div className="absolute -inset-5 rotate-2 rounded-[2rem] border border-[#d7c8b9]" />
            <div className="relative overflow-hidden rounded-[1.5rem] bg-white shadow-[0_30px_80px_rgba(23,50,77,.20)]">
              <img src="/images/carding-machine-hero.webp" alt="Modern textile production machinery inside a manufacturing mill" fetchPriority="high" decoding="async" className="h-[480px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10283d]/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                {[{ icon: Ship, label: "China sourcing" }, { icon: Wrench, label: "Mill solutions" }, { icon: Headphones, label: "Local support" }].map(({ icon: Icon, label }) => (
                  <div key={label} className="rounded-lg bg-white/95 p-3 text-center text-xs font-semibold text-[#17324d] backdrop-blur">
                    <Icon className="mx-auto mb-1.5 h-5 w-5 text-[#b7662b]" />{label}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-3 -top-5 rounded-lg bg-[#b7662b] px-5 py-4 text-white shadow-xl">
              <div className="text-lg font-bold">China → Pakistan</div>
              <div className="text-xs text-white/85">One coordinated supply journey</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
