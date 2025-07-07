import { Handshake, Globe, Award, Users, TrendingUp, Shield } from "lucide-react";

export default function About() {
  const achievements = [
    { number: "15+", label: "Years Experience", icon: TrendingUp },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "500+", label: "Machines Imported", icon: Award },
    { number: "99%", label: "Success Rate", icon: Shield }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-gradient-gold">Shanghai Traders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bridging Chinese innovation with Pakistani manufacturing excellence for over 15 years
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Content */}
          <div className="animate-slideInLeft space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Your Trusted Import Partner
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Shanghai Traders has been at the forefront of textile machinery imports for over a decade, 
                specializing in bringing cutting-edge Chinese manufacturing technology to Pakistan's 
                thriving textile industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our strategic partnership with <span className="font-bold text-navy-dark">Geron Card Clothing (China)</span> 
                ensures access to the most advanced textile machinery and spare parts, backed by 
                world-class engineering and innovation.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Reliability</h4>
                    <p className="text-sm text-gray-600">Trusted partnerships</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Quality</h4>
                    <p className="text-sm text-gray-600">Premium machinery</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expertise</h4>
                    <p className="text-sm text-gray-600">Import knowledge</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Support</h4>
                    <p className="text-sm text-gray-600">Expert assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Image with floating effect */}
          <div className="animate-slideInRight relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-navy rounded-2xl opacity-20 animate-float"></div>
              <img 
                src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Textile machinery and industrial manufacturing" 
                className="rounded-2xl w-full h-auto relative z-10 hover-lift shadow-2xl"
              />
              
              {/* Floating stats cards */}
              <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl z-20 animate-float" style={{animationDelay: '1s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-sm text-white/80">Years</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 glass-card p-4 rounded-xl z-20 animate-float" style={{animationDelay: '2s'}}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">200+</div>
                  <div className="text-sm text-white/80">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Track Record</h3>
            <p className="text-gray-600">Numbers that speak for our commitment to excellence</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group hover-lift">
                  <div className="w-16 h-16 bg-navy-dark rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-navy-medium transition-colors">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
