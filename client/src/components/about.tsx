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
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-industrial-800 mb-6">About Shanghai Traders</h2>
          <p className="text-xl text-industrial-500 max-w-3xl mx-auto leading-relaxed">
            Building bridges between Chinese innovation and Pakistani manufacturing excellence
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Business partnership handshake" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-industrial-800 mb-4">Our Story</h3>
              <p className="text-lg text-industrial-600 leading-relaxed mb-6">
                Shanghai Traders has been at the forefront of textile machinery imports for over a decade, 
                specializing in bringing cutting-edge Chinese manufacturing technology to Pakistan's 
                thriving textile industry.
              </p>
              <p className="text-lg text-industrial-600 leading-relaxed">
                Our strategic partnership with <strong className="text-primary">Geron Card Clothing (China)</strong> 
                ensures access to the most advanced textile machinery and spare parts, backed by 
                world-class engineering and innovation.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div key={index} className="bg-industrial-50 p-6 rounded-lg">
                    <div className="text-primary text-3xl mb-3">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h4 className="font-semibold text-industrial-800 mb-2">{value.title}</h4>
                    <p className="text-industrial-600">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
