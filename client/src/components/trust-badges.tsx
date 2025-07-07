import { Shield, Award, CheckCircle, Clock, Star, Globe } from "lucide-react";

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
    <div className="py-12 bg-gradient-to-r from-navy-dark via-navy-medium to-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Trusted by Industry Leaders</h3>
          <p className="text-gray-300">Your reliable partner for textile machinery imports</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => {
            const IconComponent = badge.icon;
            return (
              <div 
                key={index} 
                className="trust-badge glass-card p-4 text-center hover-lift flying-element"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${badge.color}`} />
                <h4 className="text-white font-semibold text-sm mb-1">{badge.title}</h4>
                <p className="text-gray-300 text-xs">{badge.subtitle}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}