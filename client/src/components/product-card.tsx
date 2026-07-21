import { Button } from "@/components/ui/button";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useLocation } from "wouter";

export default function ProductCard({ product }: { product: any }) {
  const [, navigate] = useLocation();
  let image = product.images?.[0] || product.image_url || product.image || "/images/carding-machine-hero.webp";
  if (!/^https?:\/\//i.test(image) && !image.startsWith("/images/")) image = `http://localhost:8000${image}`;
  return (
    <article className="group machinery-card bg-white rounded-xl overflow-hidden border border-[#d7e0e4] transition-all hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(23,50,77,.13)]">
      <div className="relative h-64 overflow-hidden bg-[#e9eef0]">
        <img src={image} alt={product.name} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
        <span className="absolute top-4 left-4 bg-white/95 rounded-md px-3 py-1.5 text-xs font-semibold text-[#526579] flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#b7662b]"/>{product.origin || "China"}</span>
      </div>
      <div className="p-6">
        <div className="text-xs font-bold uppercase tracking-[.14em] text-[#b7662b] mb-2">{String(product.category || "Textile machinery").replace("-", " ")}</div>
        <h3 className="text-xl font-bold text-[#17324d] mb-5">{product.name}</h3>
        <dl className="space-y-2.5 mb-6">
          {Object.entries(product.specifications || {}).slice(0,3).map(([key,value]) => <div key={key} className="flex justify-between gap-4 text-sm border-b border-[#edf0f2] pb-2"><dt className="text-[#748491]">{key}</dt><dd className="font-semibold text-[#2d4355] text-right">{String(value)}</dd></div>)}
        </dl>
        <Button onClick={() => navigate(`/product/${product.id}`)} variant="outline" className="w-full rounded-md border-[#9eacb7] text-[#17324d] hover:bg-[#17324d] hover:text-white">View specifications <ArrowUpRight className="ml-2 w-4 h-4"/></Button>
      </div>
    </article>
  );
}
