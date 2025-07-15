import { useState } from "react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Cog, RotateCw, Palette, Wrench, Filter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./product-card";
import productsData from "@/data/products.json";

const API_URL = "https://shanghai-production.up.railway.app/api/products/";

const categories = productsData.categories;

export default function Products() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [, navigate] = useLocation();

  const iconMap = {
    cogs: Cog,
    "rotate-cw": RotateCw,
    palette: Palette,
    wrench: Wrench,
  };

  // Fetch products from backend API
  const { data: apiProducts, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch products");
      return await res.json();
    },
  });

  // Ensure products is always an array
  const products: any[] = Array.isArray(apiProducts)
    ? apiProducts.map((product: any) => ({
        ...product,
        images: Array.isArray(product.images) ? product.images : [],
        specifications: product.specifications || {},
        origin: product.origin || "China",
      }))
    : productsData.products.map((product: any) => ({
        ...product,
        images: product.image ? [product.image] : [],
      }));

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product: any) => product.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="products" className="py-24 bg-navy-dark overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-32 h-32 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-blue-500 rounded-lg animate-float" style={{ animationDelay: "3s" }}></div>
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
        <div className="animate-fadeInUp flex flex-wrap justify-center gap-4 mb-16" style={{ animationDelay: "0.3s" }}>
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
          {categories.map((category) => {
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
        <div className="animate-fadeInUp grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" style={{ animationDelay: "0.6s" }}>
          {isLoading && (
            <div className="text-white col-span-full text-center">Loading products...</div>
          )}
          {isError && (
            <div className="text-red-400 col-span-full text-center">Failed to load products. Showing local data.</div>
          )}
          {!isLoading && !isError && filteredProducts.map((product: any, index: number) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="animate-fadeInUp text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12" style={{ animationDelay: "1s" }}>
          <h3 className="text-3xl font-bold text-white mb-4">Need Custom Machinery Solutions?</h3>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with our import specialists for personalized equipment sourcing, technical consultations, and comprehensive logistics support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              className="w-full md:w-auto px-12 py-4 font-bold rounded-full border-2 border-[#ffe066] bg-black text-white shadow-lg hover:bg-[#ffe066] hover:text-black hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-[#ffe066] focus:ring-offset-2"
              onClick={() => scrollToSection("contact")}
            >
              Get Custom Quote
            </Button>
            <Button
              className="w-full md:w-auto px-12 py-4 font-bold rounded-full border-2 border-[#ffe066] bg-black text-white shadow-lg hover:bg-[#ffe066] hover:text-black hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-[#ffe066] focus:ring-offset-2"
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
