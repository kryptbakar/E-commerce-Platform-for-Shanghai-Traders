import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Products from "@/components/products";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}
