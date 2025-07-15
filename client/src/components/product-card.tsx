import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Info } from "lucide-react";
import { useLocation } from "wouter";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    images: string[];
    origin: string;
    specifications: Record<string, string>;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [, navigate] = useLocation();
  const handleViewDetails = () => {
    navigate(`/product/${product.id}`);
  };

  // Use the first image as the main image
  let mainImage = product.images && product.images.length > 0 ? product.images[0] : undefined;
  if (mainImage && !mainImage.startsWith('http')) {
    mainImage = `http://localhost:8000${mainImage}`;
  }

  return (
    <div className="group bg-black/60 border border-[#ffe06622] hover:border-[#ffe066] rounded-2xl overflow-hidden transition-all hover:shadow-2xl shadow-lg relative hover:-translate-y-2 duration-300" style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(255,224,102,0.10)' }}>
      <div className="relative overflow-hidden">
        {mainImage && (
          <img 
            src={mainImage} 
            alt={product.name}
            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {/* Subtle gradient overlay for text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
        <div className="absolute top-3 right-3 z-20">
          <Badge variant="secondary" className="bg-black/80 text-[#ffe066] border-none font-semibold shadow px-3 py-1 text-xs">
            <MapPin className="h-3 w-3 mr-1" />
            {product.origin}
          </Badge>
        </div>
        <div className="absolute bottom-0 left-0 w-full px-6 pb-4 z-20">
          <h4 className="text-2xl font-bold text-white mb-1 tracking-tight leading-tight">
            {product.name}
          </h4>
        </div>
      </div>
      <div className="p-6 pt-4 bg-gradient-to-t from-black/80 via-black/60 to-transparent relative z-20 rounded-b-2xl">
        <div className="space-y-3 mb-6">
          {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center text-base">
              <span className="text-[#ffe066] font-medium">{key}</span>
              <span className="font-semibold text-white">{value}</span>
            </div>
          ))}
        </div>
        <Button 
          variant="outline"
          className="w-full border-none bg-[#ffe066] text-black font-semibold text-base rounded-xl shadow hover:bg-[#fffbe6] hover:text-black transition-all duration-200"
          onClick={handleViewDetails}
        >
          View Specifications
        </Button>
      </div>
    </div>
  );
}
