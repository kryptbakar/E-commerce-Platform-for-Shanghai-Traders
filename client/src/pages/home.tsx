import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Process from "@/components/process";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";
import NewsletterPopup from "@/components/newsletter-popup";
import ParticleBackground from "@/components/particle-background";
import { ThemeToggle } from "@/components/theme-provider";

export default function Home() {
  return (
    <div className="min-h-screen smooth-scroll relative">
      <ParticleBackground />
      <ThemeToggle />
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Process />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingButtons />
      <NewsletterPopup />
    </div>
  );
}
