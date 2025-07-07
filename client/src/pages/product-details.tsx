import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { ArrowLeft, Star, Heart, Share2, Shield, Truck, Clock, MessageSquare, Download, Eye, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import productsData from "@/data/products.json";

interface ProductDetailsParams {
  id: string;
}

export default function ProductDetails() {
  const [, params] = useRoute<ProductDetailsParams>("/product/:id");
  const [, navigate] = useLocation();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const product = productsData.products.find(p => p.id === params?.id);
  
  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) {
    return null;
  }

  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
  ];

  const features = [
    { icon: Shield, text: "2-Year Warranty", color: "text-green-400" },
    { icon: Truck, text: "Free Shipping", color: "text-blue-400" },
    { icon: Clock, text: "24/7 Support", color: "text-purple-400" },
    { icon: MessageSquare, text: "Installation Training", color: "text-orange-400" }
  ];

  const relatedProducts = productsData.products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative bg-white rounded-2xl p-4 shadow-lg">
                <img 
                  src={productImages[selectedImageIndex]} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setShowImageModal(true)}
                />
                <Button
                  size="sm"
                  className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm hover:bg-white/30"
                  onClick={() => setShowImageModal(true)}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="flex gap-2 overflow-x-auto pb-2">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === index 
                        ? 'border-accent shadow-lg' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="bg-accent/20 text-accent">
                    {product.origin}
                  </Badge>
                  <Badge variant="outline">
                    {product.category}
                  </Badge>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600">(4.9 rating)</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "text-red-500" : "text-gray-500"}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                      <IconComponent className={`h-5 w-5 ${feature.color}`} />
                      <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-accent hover:bg-yellow-500 text-navy-dark font-semibold py-3 rounded-full">
                  Request Quote
                </Button>
                <Button variant="outline" className="flex-1 border-2 border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white py-3 rounded-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-gray-900 font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="description" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Product Description</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The {product.name} represents the pinnacle of modern textile manufacturing technology, 
                    combining decades of Chinese engineering excellence with cutting-edge innovation. 
                    This machine is designed to meet the demanding requirements of today's textile industry.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Built with precision engineering and premium materials, this equipment delivers 
                    consistent performance, exceptional durability, and superior output quality. 
                    The advanced control system ensures optimal operation while minimizing energy consumption.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our partnership with leading Chinese manufacturers ensures that every machine 
                    meets international quality standards and comes with comprehensive warranty coverage. 
                    Installation support and operator training are included with every purchase.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Advanced automation control system",
                    "Energy-efficient operation",
                    "High-precision manufacturing",
                    "Durable construction materials",
                    "User-friendly interface",
                    "Low maintenance requirements",
                    "Comprehensive safety features",
                    "Excellent after-sales support"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Support & Service</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-green-800 mb-2">2-Year Comprehensive Warranty</h4>
                    <p className="text-green-700">Full coverage including parts and labor for 24 months.</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-blue-800 mb-2">Installation & Training</h4>
                    <p className="text-blue-700">On-site installation and comprehensive operator training included.</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-semibold text-purple-800 mb-2">24/7 Technical Support</h4>
                    <p className="text-purple-700">Round-the-clock technical assistance and remote diagnostics.</p>
                  </div>
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                    <h4 className="font-semibold text-orange-800 mb-2">Spare Parts Availability</h4>
                    <p className="text-orange-700">Guaranteed spare parts availability for 10+ years.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-white rounded-2xl p-6 shadow-lg hover-lift group">
                    <div className="relative overflow-hidden rounded-xl mb-4">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{relatedProduct.name}</h4>
                    <p className="text-sm text-gray-600 mb-4">{relatedProduct.origin}</p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
                    >
                      View Details
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={productImages[selectedImageIndex]} 
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
            <Button
              size="sm"
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30"
              onClick={() => setShowImageModal(false)}
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}