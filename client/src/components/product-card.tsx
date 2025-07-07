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
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h4 className="text-xl font-bold text-industrial-800">{product.name}</h4>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            <MapPin className="h-3 w-3 mr-1" />
            {product.origin}
          </Badge>
        </div>
        
        <div className="space-y-2 text-sm text-industrial-600 mb-4">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> <span>{value}</span>
            </div>
          ))}
        </div>
        
        <Button 
          className="w-full bg-primary text-white hover:bg-blue-700 transition-colors"
          onClick={handleViewDetails}
        >
          <Info className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </div>
    </div>
  );
}
