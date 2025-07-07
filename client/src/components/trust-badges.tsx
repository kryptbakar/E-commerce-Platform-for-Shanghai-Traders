import { Shield, Award, CheckCircle, Clock, Star, Globe } from "lucide-react";
import TextileDepartmentVisual from "./textile-department-visual";

export default function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      title: "Verified Importer",
      subtitle: "Licensed & Certified",
      color: "text-green-400"
    },
    {
      icon: Clock,
      title: "Since 2005",
      subtitle: "20+ Years Experience",
      color: "text-blue-400"
    },
    {
      icon: Award,
      title: "ISO Certified",
      subtitle: "Quality Assured",
      color: "text-yellow-400"
    },
    {
      icon: CheckCircle,
      title: "500+ Installations",
      subtitle: "Proven Track Record",
      color: "text-purple-400"
    },
    {
      icon: Star,
      title: "Top Rated",
      subtitle: "Client Satisfaction",
      color: "text-orange-400"
    },
    {
      icon: Globe,
      title: "Global Network",
      subtitle: "China-Pakistan Bridge",
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="py-20 bg-textile-navy relative">
      <div className="absolute inset-0 radial-overlay"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-textile-gold mb-4">Elite Textile Manufacturing Partner</h3>
          <p className="text-textile-text/80 text-lg">Precision engineering meets global excellence</p>
        </div>
        
        {/* Creative Textile Department Visual */}
        <div className="mb-16">
          <TextileDepartmentVisual />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={index} 
                className="elite-card p-6 text-center hover-lift textile-float"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <IconComponent className={`w-10 h-10 mx-auto mb-4 ${badge.color}`} />
                <h4 className="text-textile-text font-semibold text-sm mb-2">{badge.title}</h4>
                <p className="text-textile-text/70 text-xs">{badge.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}