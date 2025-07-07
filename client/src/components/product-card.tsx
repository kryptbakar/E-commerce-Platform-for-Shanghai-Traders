import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Info } from "lucide-react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    category: string;
    image: string;
    origin: string;
    specifications: Record<string, string>;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleViewDetails = () => {
    console.log(`View details for product: ${product.name}`);
    // TODO: Implement product detail modal or navigation
  };

  return (
    <div className="group bg-white border border-linear-200 hover:border-linear-300 rounded-lg overflow-hidden transition-all hover:shadow-sm">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="bg-white/90 text-linear-700 border-linear-200">
            <MapPin className="h-3 w-3 mr-1" />
            {product.origin}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-lg font-semibold text-linear-900 mb-4">{product.name}</h4>
        
        <div className="space-y-3 mb-6">
          {Object.entries(product.specifications).slice(0, 3).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center text-sm">
              <span className="text-linear-600">{key}</span>
              <span className="font-medium text-linear-900">{value}</span>
            </div>
          ))}
        </div>
        
        <Button 
          variant="outline"
          className="w-full border-linear-200 text-linear-700 hover:bg-linear-50 hover:border-linear-300 transition-colors"
          onClick={handleViewDetails}
        >
          View Specifications
        </Button>
      </div>
    </div>
  );
}
