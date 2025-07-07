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
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-linear-900 mb-6 tracking-tight">
            Machinery and equipment tracking you'll love using
          </h2>
          <p className="text-xl text-linear-600 max-w-3xl mx-auto leading-relaxed">
            Optimized for efficiency and reliability. Source machinery in seconds, discuss specifications 
            in context, and scale your manufacturing operations with equipment tailored to your needs.
          </p>
        </div>
        
        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {productsData.categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <div key={category.id} className="group bg-linear-50 hover:bg-white border border-linear-200 hover:border-linear-300 p-6 rounded-lg transition-all cursor-pointer">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary/20 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-linear-900 mb-2">{category.name}</h3>
                <p className="text-linear-600 text-sm leading-relaxed">{category.description}</p>
              </div>
            );
          })}
        </div>
        
        {/* Featured Products */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-linear-900 mb-2">Featured Equipment</h3>
              <p className="text-linear-600">Premium machinery sourced directly from trusted Chinese manufacturers</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-linear-50 border border-linear-200 rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-2xl font-bold text-linear-900 mb-4">Need specialized machinery solutions?</h3>
          <p className="text-lg text-linear-600 mb-8 max-w-2xl mx-auto">
            Connect with our import specialists for custom equipment sourcing, technical consultations, 
            and end-to-end logistics support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-primary hover:bg-blue-600 text-white px-8 py-3 font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline"
              className="border border-linear-300 text-linear-700 hover:bg-white px-8 py-3 font-medium"
              onClick={() => scrollToSection("contact")}
            >
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
