import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { useQuery } from "@tanstack/react-query";
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

const API_URL = "https://shanghai-production.up.railway.app/api/products/";

export default function ProductDetails() {
  // params is either null or an object with string keys
  const [, params] = useRoute("/product/:id");
  const productId = params && typeof params === "object" && "id" in params ? params.id : undefined;
  const [, navigate] = useLocation();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageModal, setShowImageModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  // Fetch all products from backend API
  const { data: apiProducts, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Failed to fetch products");
      return await res.json();
    },
  });

  // Find the product by id from API or fallback to local JSON
  const products: any[] = Array.isArray(apiProducts)
    ? apiProducts.map((product: any) => ({
        ...product,
        specifications: product.specifications || {},
        origin: product.origin || "Pakistan",
      }))
    : productsData.products;

  const product = products.find((p) => String(p.id) === String(productId));

  useEffect(() => {
    if (!product && !isLoading) {
      navigate("/");
    }
  }, [product, navigate, isLoading]);

  if (!product) {
    if (isLoading) {
      return <div className="min-h-screen flex items-center justify-center bg-black text-white text-xl">Loading product...</div>;
    }
    return null;
  }

  // Use all images from the backend if available
  const productImages: string[] = Array.isArray(product.images) && product.images.length > 0
    ? product.images.map((img: string) => img && !img.startsWith('http') ? `http://localhost:8000${img}` : img)
    : [product.image].filter(Boolean).map((img: string) => img && !img.startsWith('http') ? `http://localhost:8000${img}` : img);

  // Use backend fields for features, support, long_description, and brochure
  const productFeatures: string[] = Array.isArray(product.features) ? product.features : [];
  const productSupport: string[] = Array.isArray(product.support) ? product.support : [];
  const productLongDescription: string = product.long_description || product.description || '';
  const brochureUrl = product.brochure ? (product.brochure.startsWith('http') ? product.brochure : `http://localhost:8000${product.brochure}`) : null;

  const relatedProducts: any[] = Array.isArray(products)
    ? products.filter((p) => String(p.id) !== String(product.id) && p.category === product.category).slice(0, 3)
    : [];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-8 text-[#ffe066] hover:bg-[#181818] hover:text-[#fbe3c7] font-bold"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Button>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative bg-[#181818] rounded-2xl p-4 shadow-2xl border border-[#ffe06633]">
                <img 
                  src={productImages[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-96 object-contain bg-black rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300 shadow-xl"
                  style={{ filter: 'none' }}
                  onClick={() => setShowImageModal(true)}
                />
                <Button
                  size="sm"
                  className="absolute top-6 right-6 bg-[#ffe066] text-black hover:bg-[#fbe3c7] shadow-lg"
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
                        ? 'border-[#ffe066] shadow-xl' 
                        : 'border-[#181818] hover:border-[#ffe06644]'
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
                  <Badge variant="secondary" className="bg-[#ffe06622] text-[#ffe066] font-bold">
                    {product.origin}
                  </Badge>
                  <Badge variant="outline" className="border-[#ffe066] text-[#ffe066] font-bold">
                    {product.category}
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-black text-[#ffe066] mb-4" style={{textShadow: '0 0 16px #ffe066'}}> {product.name} </h1>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#ffe066] fill-current" />
                    ))}
                    <span className="ml-2 text-[#fbe3c7]">(4.9 rating)</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={isFavorite ? "text-red-500" : "text-[#ffe066]"}
                  >
                    <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-[#ffe066]">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              {/* Features */}
              {productFeatures.length > 0 && (
                <div className="grid grid-cols-2 gap-4">
                  {productFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-[#181818] rounded-lg border border-[#ffe06622] shadow-sm">
                      <span className="text-sm font-semibold text-[#ffe066]">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1 bg-gradient-to-r from-[#ffe066] to-[#fbe3c7] text-black font-bold py-3 rounded-full shadow-xl hover:scale-105 transition-all text-lg border-0">
                  Request Quote
                </Button>
                {brochureUrl && (
                  <a href={brochureUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full border-2 border-[#ffe066] text-[#ffe066] font-bold hover:bg-[#ffe066] hover:text-black py-3 rounded-full shadow-xl hover:scale-105 transition-all text-lg">
                      <Download className="h-4 w-4 mr-2" />
                      Download Brochure
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </div>
          {/* Product Details Tabs */}
          <Tabs defaultValue="specifications" className="w-full mt-12">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-[#181818] rounded-xl shadow-lg border border-[#ffe06622]">
              <TabsTrigger value="specifications" className="text-[#ffe066] font-bold">Specifications</TabsTrigger>
              <TabsTrigger value="description" className="text-[#ffe066] font-bold">Description</TabsTrigger>
              <TabsTrigger value="features" className="text-[#ffe066] font-bold">Features</TabsTrigger>
              <TabsTrigger value="support" className="text-[#ffe066] font-bold">Support</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="space-y-6">
              <div className="bg-[#181818] rounded-2xl p-8 shadow-2xl border border-[#ffe06622]">
                <h3 className="text-xl font-bold text-[#ffe066] mb-6">Technical Specifications</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications ?? {}).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-black rounded-lg border border-[#ffe06622]">
                      <span className="font-semibold text-[#ffe066]">{key}</span>
                      <span className="text-[#fbe3c7] font-bold">{String(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            <TabsContent value="description" className="space-y-6">
              <div className="bg-[#181818] rounded-2xl p-8 shadow-2xl border border-[#ffe06622]">
                <h3 className="text-xl font-bold text-[#ffe066] mb-6">Product Description</h3>
                <div className="prose prose-lg max-w-none text-[#fbe3c7]">
                  <p className="leading-relaxed mb-4 whitespace-pre-line">{productLongDescription}</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="features" className="space-y-6">
              <div className="bg-[#181818] rounded-2xl p-8 shadow-2xl border border-[#ffe06622]">
                <h3 className="text-xl font-bold text-[#ffe066] mb-6">Key Features</h3>
                {productFeatures.length > 0 ? (
                  <ul className="space-y-4 list-disc list-inside text-[#ffe066] text-lg font-semibold">
                    {productFeatures.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#ffe066]">No features listed.</p>
                )}
              </div>
            </TabsContent>
            <TabsContent value="support" className="space-y-6">
              <div className="bg-[#181818] rounded-2xl p-8 shadow-2xl border border-[#ffe06622]">
                <h3 className="text-xl font-bold text-[#ffe066] mb-6">Support & Service</h3>
                {productSupport.length > 0 ? (
                  <ul className="space-y-4 list-disc list-inside text-[#ffe066] text-lg font-semibold">
                    {productSupport.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[#ffe066]">No support information listed.</p>
                )}
              </div>
            </TabsContent>
          </Tabs>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8">Related Products</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => {
                  // Ensure image URL is absolute
                  let relatedImage = relatedProduct.images && relatedProduct.images.length > 0 ? relatedProduct.images[0] : undefined;
                  if (relatedImage && !relatedImage.startsWith('http')) {
                    relatedImage = `http://localhost:8000${relatedImage}`;
                  }
                  return (
                    <div key={relatedProduct.id} className="group bg-white/90 border border-linear-200 hover:border-linear-300 rounded-xl overflow-hidden transition-all hover:shadow-2xl shadow-lg relative">
                      <div className="relative overflow-hidden">
                        {relatedImage && (
                          <img 
                            src={relatedImage} 
                            alt={relatedProduct.name}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        {/* Overlay for better text visibility */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                        <div className="absolute top-3 right-3 z-20">
                          <span className="bg-black/80 text-[#ffe066] px-3 py-1 rounded-full text-xs font-semibold shadow-md">{relatedProduct.origin}</span>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full px-4 pb-2 z-20">
                          <h4 className="text-lg font-bold text-white drop-shadow-lg mb-1">{relatedProduct.name}</h4>
                        </div>
                      </div>
                      <div className="p-4 pt-2 bg-gradient-to-t from-black/80 via-black/60 to-transparent relative z-20">
                        <Button 
                          size="sm"
                          className="w-full border-none bg-[#ffe066] text-black font-bold hover:bg-[#ffd700] hover:text-black transition-colors shadow-md"
                          onClick={() => navigate(`/product/${relatedProduct.id}`)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  );
                })}
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