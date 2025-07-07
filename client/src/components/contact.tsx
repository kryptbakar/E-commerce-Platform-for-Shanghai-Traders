import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Building, Phone, MessageSquare, Mail, Clock, Globe, Star, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Please Complete Form",
        description: "All required fields must be filled.",
        variant: "destructive"
      });
      return;
    }

    console.log("Elite consultation request:", formData);
    
    toast({
      title: "Elite Request Received!",
      description: "Our textile experts will contact you within 24 hours."
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      inquiryType: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: MapPin,
      title: "Elite Headquarters",
      subtitle: "Lahore Industrial Hub",
      details: ["Block A, Elite Industrial Estate", "Lahore, Punjab, Pakistan"],
      accent: "textile-gold"
    },
    {
      icon: Building,
      title: "Premier Branch",
      subtitle: "Karachi Operations", 
      details: ["SITE Premium Industrial Area", "Karachi, Sindh, Pakistan"],
      accent: "textile-gold-light"
    },
    {
      icon: Phone,
      title: "Direct Lines",
      subtitle: "24/7 Elite Support",
      details: ["+92 42 1234 5678", "+92 21 9876 5432"],
      accent: "textile-gold"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Elite",
      subtitle: "Instant Consultation",
      details: ["+92 300 1234567"],
      accent: "textile-gold-light"
    },
    {
      icon: Mail,
      title: "Elite Communications",
      subtitle: "Professional Inquiries",
      details: ["elite@shanghaitraders.pk", "premium@shanghaitraders.pk"],
      accent: "textile-gold"
    },
    {
      icon: Globe,
      title: "Global Network",
      subtitle: "Worldwide Partnerships",
      details: ["China Manufacturing Hub", "Pakistan Distribution Centers"],
      accent: "textile-gold-light"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-textile-navy relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 radial-overlay"></div>
      
      {/* Floating Elite Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-textile-gold/10 rounded-full textile-float"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-textile-gold-light/15 rounded-lg thread-loop" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-textile-text/10 rounded-full wave-pattern" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-textile-gold/5 rounded-full textile-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Elite Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-textile-gold animate-pulse" />
            <h2 className="text-6xl font-bold text-textile-text font-playfair glow-text">Connect With Elite</h2>
            <Star className="w-8 h-8 text-textile-gold animate-pulse" />
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-textile-gold to-textile-gold-light mx-auto mb-8 rounded-full"></div>
          <p className="text-2xl text-textile-text/80 max-w-4xl mx-auto font-cormorant leading-relaxed">
            Transform your textile manufacturing with precision engineering. 
            <br />
            <span className="text-textile-gold font-semibold">Connect with our global textile machinery experts today.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Elite Contact Methods Grid */}
          <div className="lg:col-span-1 no-float">
            <div className="elite-card p-8 mb-8 transform-none">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-textile-gold" />
                <h3 className="text-2xl font-bold text-textile-gold font-playfair">Elite Contact Hub</h3>
              </div>
              <div className="grid gap-6">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <div 
                      key={index} 
                      className="group hover-lift"
                    >
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-textile-navy-light/50 border border-textile-gold/20 hover:border-textile-gold/40 transition-all duration-300">
                        <div className={`w-12 h-12 bg-textile-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-textile-gold/30 transition-colors`}>
                          <IconComponent className="w-6 h-6 text-textile-gold" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-textile-text font-cormorant text-lg">{method.title}</h4>
                          <p className="text-textile-gold/80 text-sm font-medium mb-2">{method.subtitle}</p>
                          {method.details.map((detail, idx) => (
                            <p key={idx} className="text-textile-text/70 text-sm">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Elite Business Hours */}
            <div className="elite-card p-6 transform-none">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-textile-gold" />
                <h4 className="font-semibold text-textile-gold font-cormorant">Elite Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-textile-text/70">Monday - Friday:</span>
                  <span className="text-textile-text">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textile-text/70">Saturday:</span>
                  <span className="text-textile-text">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-textile-text/70">Sunday:</span>
                  <span className="text-textile-gold">Elite Support Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Elite Contact Form */}
          <div className="lg:col-span-2">
            <div className="elite-card p-8 hover-lift">
              <div className="flex items-center gap-3 mb-8">
                <Star className="w-6 h-6 text-textile-gold" />
                <h3 className="text-3xl font-bold text-textile-gold font-playfair glow-text">Elite Consultation Request</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-textile-text font-cormorant font-medium">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="bg-textile-navy-light/50 border-textile-gold/30 text-textile-text placeholder:text-textile-text/50 focus:border-textile-gold focus:ring-textile-gold/20"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-textile-text font-cormorant font-medium">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="bg-textile-navy-light/50 border-textile-gold/30 text-textile-text placeholder:text-textile-text/50 focus:border-textile-gold focus:ring-textile-gold/20"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-textile-text font-cormorant font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-textile-navy-light/50 border-textile-gold/30 text-textile-text placeholder:text-textile-text/50 focus:border-textile-gold focus:ring-textile-gold/20"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-textile-text font-cormorant font-medium">Phone Number</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-textile-navy-light/50 border-textile-gold/30 text-textile-text placeholder:text-textile-text/50 focus:border-textile-gold focus:ring-textile-gold/20"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                </div>

                {/* Company and Inquiry Type */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-textile-text font-cormorant font-medium">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="bg-textile-navy-light/50 border-textile-gold/30 text-textile-text placeholder:text-textile-text/50 focus:border-textile-gold focus:ring-textile-gold/20"
                      placeholder="Your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType" className="text-textile-text font-cormorant font-medium">Inquiry Type</Label>
                    <Select value={formData.inquiryType} onValueChange={(value) => handleInputChange('inquiryType', value)}>
                      <SelectTrigger className="bg-textile-navy-light/50 border-textile-gold/30 text-textile-text focus:border-textile-gold focus:ring-textile-gold/20">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-textile-navy border-textile-gold/30">
                        <SelectItem value="machinery-purchase" className="text-textile-text hover:bg-textile-gold/20">Elite Machinery Purchase</SelectItem>
                        <SelectItem value="technical-consultation" className="text-textile-text hover:bg-textile-gold/20">Technical Consultation</SelectItem>
                        <SelectItem value="parts-service" className="text-textile-text hover:bg-textile-gold/20">Parts & Service</SelectItem>
                        <SelectItem value="partnership" className="text-textile-text hover:bg-textile-gold/20">Business Partnership</SelectItem>
                        <SelectItem value="other" className="text-textile-text hover:bg-textile-gold/20">Other Elite Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-textile-text font-cormorant font-medium">Your Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="bg-textile-navy-light/50 border-textile-gold/30 text-textile-text placeholder:text-textile-text/50 focus:border-textile-gold focus:ring-textile-gold/20 min-h-32"
                    placeholder="Describe your textile machinery requirements, production goals, or technical questions. Our elite experts are here to help transform your manufacturing operations."
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="elite-btn w-full py-4 text-lg font-semibold hover-lift font-cormorant"
                  >
                    ⚡ Send Elite Consultation Request
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}