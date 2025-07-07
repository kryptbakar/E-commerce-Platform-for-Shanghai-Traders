import { Cog, RotateCw, Palette, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";
import productsData from "@/data/products.json";

export default function Products() {
  const iconMap = {
    cogs: Cog,
    "rotate-cw": RotateCw,
    palette: Palette,
    wrench: Wrench
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="products" className="py-20 bg-industrial-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-industrial-800 mb-6">Our Product Categories</h2>
          <p className="text-xl text-industrial-500 max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of textile machinery and spare parts imported directly from China
          </p>
        </div>
        
        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productsData.categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <div key={category.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                <div className="text-primary text-4xl mb-4 text-center">
                  <IconComponent className="h-10 w-10 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-industrial-800 mb-3 text-center">{category.name}</h3>
                <p className="text-industrial-600 text-center">{category.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Featured Products */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-industrial-800 mb-8 text-center">Featured Machinery</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center bg-primary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Need Custom Machinery Solutions?</h3>
          <p className="text-lg mb-6 text-blue-100">Contact us for specialized equipment sourcing and custom import requirements</p>
          <Button 
            className="bg-accent text-white hover:bg-yellow-500 transition-colors px-8 py-3 font-semibold"
            onClick={() => scrollToSection("contact")}
          >
            Request Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
