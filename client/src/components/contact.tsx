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

  const handleContactExperts = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    // Reuse handleSubmit logic
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
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Gyro-inspired animated background (same as hero) */}
      <svg className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none', opacity: 0.18 }}>
        <g>
          <rect x="10%" y="15%" width="80" height="30" rx="15" fill="#ffe066" opacity="0.8">
            <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="12s" repeatCount="indefinite" />
          </rect>
          <ellipse cx="80%" cy="30%" rx="40" ry="18" fill="#ffe066" opacity="0.6">
            <animateTransform attributeName="transform" type="rotate" from="0 800 200" to="360 800 200" dur="16s" repeatCount="indefinite" />
          </ellipse>
          <rect x="70%" y="70%" width="60" height="20" rx="10" fill="#ffe066" opacity="0.7">
            <animateTransform attributeName="transform" type="rotate" from="0 700 700" to="360 700 700" dur="14s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-[#ffe066] mb-4 tracking-tight" style={{letterSpacing: '0.04em'}}>Connect With Elite</h2>
          <p className="text-xl text-[#fbe3c7] max-w-2xl mx-auto font-semibold">Connect with our global textile machinery experts today.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-xl flex flex-col gap-8 justify-center">
            <div>
              <h3 className="text-2xl font-black text-[#ffe066] mb-2">Elite Contact Hub</h3>
              <div className="text-[#fbe3c7] text-lg font-medium">Lahore Industrial Hub</div>
              <div className="text-[#fbe3c7bb] text-sm">Block A, Elite Industrial Estate<br/>Lahore, Punjab, Pakistan</div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#ffe066] mb-1">Premier Branch</h4>
              <div className="text-[#fbe3c7] text-sm">SITE Premium Industrial Area<br/>Karachi, Sindh, Pakistan</div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#ffe066] mb-1">Direct Lines</h4>
              <div className="text-[#fbe3c7] text-sm">+92 42 1234 5678<br/>+92 21 9876 5432</div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#ffe066] mb-1">WhatsApp Elite</h4>
              <div className="text-[#fbe3c7] text-sm">+92 300 1234567</div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#ffe066] mb-1">Email</h4>
              <div className="text-[#fbe3c7] text-sm">elite@shanghaitraders.pk</div>
            </div>
          </div>
          {/* Modern Contact Form */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-xl">
            <h3 className="text-3xl font-black text-[#ffe066] mb-8">Elite Consultation Request</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-[#ffe066] font-bold">First Name *</Label>
                  <Input id="firstName" value={formData.firstName} onChange={e => handleInputChange('firstName', e.target.value)} required className="bg-black text-[#fbe3c7] border-[#ffe066] focus:ring-[#ffe066]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-[#ffe066] font-bold">Last Name *</Label>
                  <Input id="lastName" value={formData.lastName} onChange={e => handleInputChange('lastName', e.target.value)} required className="bg-black text-[#fbe3c7] border-[#ffe066] focus:ring-[#ffe066]" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#ffe066] font-bold">Email Address *</Label>
                  <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required className="bg-black text-[#fbe3c7] border-[#ffe066] focus:ring-[#ffe066]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#ffe066] font-bold">Phone Number</Label>
                  <Input id="phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} className="bg-black text-[#fbe3c7] border-[#ffe066] focus:ring-[#ffe066]" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company" className="text-[#ffe066] font-bold">Company Name</Label>
                <Input id="company" value={formData.company} onChange={e => handleInputChange('company', e.target.value)} className="bg-black text-[#fbe3c7] border-[#ffe066] focus:ring-[#ffe066]" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#ffe066] font-bold">Your Message *</Label>
                <Textarea id="message" value={formData.message} onChange={e => handleInputChange('message', e.target.value)} required className="bg-black text-[#fbe3c7] border-[#ffe066] focus:ring-[#ffe066]" rows={4} />
              </div>
              <Button
                type="button"
                className="w-full md:w-auto px-12 py-4 font-bold rounded-full border-2 border-[#ffe066] bg-black text-white shadow-lg hover:bg-[#ffe066] hover:text-black hover:scale-105 transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-[#ffe066] focus:ring-offset-2"
                onClick={handleContactExperts}
              >
                Contact Our Experts
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}