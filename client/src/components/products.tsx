import { useState } from "react";
import { useLocation } from "wouter";
import { Cog, RotateCw, Palette, Wrench, Filter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";
import productsData from "@/data/products.json";

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [, navigate] = useLocation();
  
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

  const filteredProducts = activeFilter === "all" 
    ? productsData.products 
    : productsData.products.filter(product => product.category === activeFilter);

  return (
    <section id="products" className="py-24 bg-navy-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-500 rounded-lg animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="animate-fadeInUp">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Premium <span className="text-gradient-gold">Textile</span> Machinery
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Gallery-style showcase of our imported machinery with advanced filtering 
              and detailed specifications from trusted Chinese manufacturers.
            </p>
          </div>
        </div>
        
        {/* Category Filter Buttons */}
        <div className="animate-fadeInUp flex flex-wrap justify-center gap-4 mb-16" style={{animationDelay: '0.3s'}}>
          <Button
            onClick={() => setActiveFilter("all")}
            className={`glass-card px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
              activeFilter === "all" 
                ? "bg-accent text-navy-dark" 
                : "text-white hover:bg-white/20"
            }`}
          >
            <Filter className="w-4 h-4 mr-2" />
            All Products
          </Button>
          {productsData.categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <Button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`glass-card px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                  activeFilter === category.id 
                    ? "bg-accent text-navy-dark" 
                    : "text-white hover:bg-white/20"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.name}
              </Button>
            );
          })}
        </div>
        
        {/* Products Grid */}
        <div className="animate-fadeInUp grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" style={{animationDelay: '0.6s'}}>
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fadeInUp"
              style={{animationDelay: `${0.8 + index * 0.1}s`}}
            >
              <div className="elite-card card-3d glass-sheen p-6 rounded-2xl hover-lift group">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-accent text-navy-dark px-3 py-1 rounded-full text-xs font-bold">
                      {product.origin}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-white/70">{key}:</span>
                        <span className="text-white font-medium">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full bg-white/10 hover:bg-accent hover:text-navy-dark text-white border border-white/20 hover:border-accent rounded-full transition-all duration-300 btn-ripple elastic light-pulse"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    🎯 View Specifications
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="animate-fadeInUp text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12" style={{animationDelay: '1s'}}>
          <h3 className="text-3xl font-bold text-white mb-4">
            Need Custom Machinery Solutions?
          </h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with our import specialists for personalized equipment sourcing, 
            technical consultations, and comprehensive logistics support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              className="bg-accent hover:bg-yellow-500 text-navy-dark px-8 py-4 font-semibold rounded-full hover-lift transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get Custom Quote
            </Button>
            <Button 
              className="glass border-2 border-white/30 text-white hover:bg-white hover:text-navy-dark px-8 py-4 font-semibold rounded-full hover-lift transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
