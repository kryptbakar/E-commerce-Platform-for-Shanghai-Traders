import { Handshake, Globe, Award, Users } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Handshake,
      title: "Reliability",
      description: "Trusted partnerships and consistent delivery excellence"
    },
    {
      icon: Globe,
      title: "Import Expertise", 
      description: "Deep knowledge of international trade and logistics"
    },
    {
      icon: Award,
      title: "Quality Machinery",
      description: "Premium equipment from certified Chinese manufacturers"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Comprehensive technical assistance and after-sales service"
    }
  ];

  return (
    <section id="about" className="py-24 bg-linear-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-linear-900 mb-6 tracking-tight">Made for modern textile manufacturers</h2>
          <p className="text-xl text-linear-600 max-w-3xl mx-auto leading-relaxed">
            Shanghai Traders is shaped by the practices and principles that distinguish world-class 
            textile operations from the rest: reliable sourcing, fast execution, and a commitment to quality.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-lg border border-linear-200 hover:border-linear-300 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-linear-900 mb-3">{value.title}</h4>
                <p className="text-linear-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border border-linear-200 p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-linear-900 mb-6">Partnership with Geron Card Clothing</h3>
                <p className="text-lg text-linear-600 leading-relaxed mb-6">
                  Shanghai Traders has been at the forefront of textile machinery imports for over a decade, 
                  specializing in bringing cutting-edge Chinese manufacturing technology to Pakistan's 
                  thriving textile industry.
                </p>
                <p className="text-lg text-linear-600 leading-relaxed">
                  Our strategic partnership with <span className="font-semibold text-primary">Geron Card Clothing (China)</span> 
                  ensures access to the most advanced textile machinery and spare parts, backed by 
                  world-class engineering and innovation.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-linear-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-linear-700">10+ Years Experience</span>
                </div>
                <div className="bg-linear-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-linear-700">200+ Satisfied Clients</span>
                </div>
                <div className="bg-linear-50 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-linear-700">Premium Quality</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-linear rounded-xl opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Business partnership handshake" 
                className="rounded-xl w-full h-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
