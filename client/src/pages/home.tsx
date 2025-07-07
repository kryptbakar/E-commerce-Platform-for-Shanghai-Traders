import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Process from "@/components/process";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen smooth-scroll">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
