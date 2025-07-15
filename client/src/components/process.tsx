import { Search, Ship, Headphones, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Machine Selection",
      description: "We work with you to identify the perfect textile machinery for your specific production requirements and budget.",
      details: ["Technical consultation", "Requirement analysis", "Budget planning", "Equipment recommendation"]
    },
    {
      number: "02", 
      icon: Ship,
      title: "Import from China",
      description: "Our team handles all logistics, customs clearance, and shipping directly from our trusted Chinese manufacturing partners.",
      details: ["Quality inspection", "Customs clearance", "Secure shipping", "Real-time tracking"]
    },
    {
      number: "03",
      icon: Headphones,
      title: "Delivery & Support",
      description: "Complete installation support, training, and ongoing technical assistance to ensure optimal machine performance.",
      details: ["Installation guidance", "Operator training", "Technical support", "Maintenance planning"]
    }
  ];

  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Gyro-inspired animated background */}
      <svg className="absolute -top-32 left-1/2 -translate-x-1/2 z-0" width="700" height="220" viewBox="0 0 700 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{opacity:0.15}}>
        <ellipse cx="350" cy="110" rx="320" ry="80" fill="#ffe066">
          <animate attributeName="rx" values="320;360;320" dur="8s" repeatCount="indefinite" />
        </ellipse>
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#ffe066] mb-6 tracking-tight drop-shadow-lg font-sans" style={{letterSpacing: '0.04em', textShadow: '0 0 32px #ffe066, 0 2px 8px #000'}}>
            Our <span className="text-white">Import</span> Process
          </h2>
          <p className="text-2xl text-[#fbe3c7] max-w-3xl mx-auto leading-relaxed font-semibold font-cormorant" style={{textShadow: '0 2px 8px #000'}}>A streamlined 3-step process that ensures seamless machinery imports from selection to delivery and support.</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-navy-dark via-blue-500 to-accent rounded-full transform -translate-y-1/2 z-0"></div>

          {/* Steps */}
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={index} 
                  className="animate-fadeInUp hover-lift group"
                  style={{animationDelay: `${index * 0.3}s`}}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 relative">
                    {/* Step number badge */}
                    <div className="absolute -top-6 left-8">
                      <div className="w-12 h-12 bg-navy-dark text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-navy-medium transition-colors">
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-navy rounded-2xl flex items-center justify-center mb-6 mt-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-navy-dark transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details list */}
                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-black rounded-3xl p-8 lg:p-12 text-[#fbe3c7] shadow-2xl border border-[#ffe06622]">
            <h3 className="text-3xl font-black text-[#ffe066] mb-4">Ready to Start Your Import Journey?</h3>
            <p className="text-[#fbe3c7] mb-8 max-w-2xl mx-auto">
              Let our experienced team guide you through every step of the machinery import process. From selection to delivery, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#ffe066] to-[#fbe3c7] text-black font-bold px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg border-0">
                Start Import Process
              </button>
              <button className="border-2 border-[#ffe066] text-[#ffe066] font-bold hover:bg-[#ffe066] hover:text-black px-8 py-4 rounded-full shadow-xl hover:scale-105 transition-all duration-300 text-lg">
                Download Process Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}