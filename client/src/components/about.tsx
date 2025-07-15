import { Handshake, Globe, Award, Users, TrendingUp, Shield } from "lucide-react";
import AnimatedCounter from "./animated-counter";

export default function About() {
  const achievements = [
    { number: "15+", label: "Years Experience", icon: TrendingUp },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "500+", label: "Machines Imported", icon: Award },
    { number: "99%", label: "Success Rate", icon: Shield }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Animated yellow background shape */}
      <svg className="absolute -top-32 left-1/2 -translate-x-1/2 z-0" width="600" height="200" viewBox="0 0 600 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.18}}>
        <ellipse cx="300" cy="100" rx="280" ry="60" fill="#ffe066">
          <animate attributeName="rx" values="280;320;280" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#ffe066] mb-6 tracking-tight drop-shadow-lg font-sans" style={{letterSpacing: '0.04em', textShadow: '0 0 32px #ffe066, 0 2px 8px #000'}}>
            About <span className="text-white">Shanghai Traders</span>
          </h2>
          <p className="text-2xl text-[#fbe3c7] max-w-3xl mx-auto leading-relaxed font-semibold font-cormorant" style={{textShadow: '0 2px 8px #000'}}>Bridging Chinese innovation with Pakistani manufacturing excellence for over 15 years</p>
        </div>
        {/* Main Content - Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20 animate-fadeInUp">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-black text-[#ffe066] mb-6 font-sans tracking-tight" style={{textShadow: '0 0 32px #ffe066, 0 2px 8px #000'}}>Your Elite Manufacturing Partner</h3>
              <p className="text-xl text-[#fbe3c7cc] leading-relaxed mb-6 font-cormorant">Shanghai Traders has been at the forefront of textile machinery imports for over a decade, specializing in bringing cutting-edge Chinese manufacturing technology to Pakistan's thriving textile industry.</p>
              <p className="text-xl text-[#fbe3c7bb] leading-relaxed mb-8">Our strategic partnership with <span className="font-bold text-[#ffe066]">Geron Card Clothing (China)</span> ensures access to the most advanced textile machinery and spare parts, backed by world-class engineering and innovation.</p>
            </div>
            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ffe06622] rounded-lg flex items-center justify-center">
                    <Handshake className="h-6 w-6 text-[#ffe066]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#ffe066]">Reliability</h4>
                    <p className="text-sm text-[#fbe3c7]">Trusted partnerships</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ffe06622] rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-[#ffe066]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#ffe066]">Quality</h4>
                    <p className="text-sm text-[#fbe3c7]">Premium machinery</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ffe06622] rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-[#ffe066]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#ffe066]">Expertise</h4>
                    <p className="text-sm text-[#fbe3c7]">Import knowledge</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#ffe06622] rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-[#ffe066]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#ffe066]">Support</h4>
                    <p className="text-sm text-[#fbe3c7]">Expert assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Image with floating effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#ffe06622] rounded-2xl opacity-30 animate-float"></div>
            <img 
              src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Textile machinery and industrial manufacturing" 
              className="rounded-2xl w-full h-auto relative z-10 hover-lift shadow-2xl"
            />
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-[#ffe066] p-4 rounded-xl z-20 animate-float shadow-2xl hover:scale-105 transition-transform duration-300" style={{animationDelay: '1s'}}>
              <div className="text-center">
                <AnimatedCounter 
                  end={15} 
                  suffix="+" 
                  className="text-2xl font-black text-black"
                />
                <div className="text-sm text-black/80">Years</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#ffe066] p-4 rounded-xl z-20 animate-float shadow-2xl hover:scale-105 transition-transform duration-300" style={{animationDelay: '2s'}}>
              <div className="text-center">
                <AnimatedCounter 
                  end={200} 
                  suffix="+" 
                  className="text-2xl font-black text-black"
                />
                <div className="text-sm text-black/80">Clients</div>
              </div>
            </div>
          </div>
        </div>
        {/* Achievement Stats */}
        <div className="bg-[#181818] rounded-3xl p-8 lg:p-12 mt-16 shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-[#ffe066] mb-4" style={{textShadow: '0 0 16px #ffe066'}}>Our Track Record</h3>
            <p className="text-[#fbe3c7]">Numbers that speak for our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="text-center group hover-lift textile-float hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 0.5}s` }}>
                  <div className="w-16 h-16 bg-[#ffe06622] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#ffe06644] transition-colors border border-[#ffe06644] shadow-xl">
                    <IconComponent className="h-8 w-8 text-[#ffe066]" />
                  </div>
                  <AnimatedCounter 
                    end={parseInt(achievement.number.replace(/\D/g, ""))} 
                    suffix={achievement.number.includes("+") ? "+" : achievement.number.includes("%") ? "%" : ""} 
                    className="text-3xl lg:text-4xl font-black text-[#ffe066] mb-2 block glow-text"
                  />
                  <div className="text-[#fbe3c7] font-semibold">{achievement.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
