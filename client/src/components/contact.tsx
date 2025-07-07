import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Building, Phone, MessageSquare, Mail, Clock } from "lucide-react";
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
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement actual form submission logic
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message! We will get back to you soon."
    });
    
    // Reset form
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Lahore Office",
      details: ["Block A, Industrial Estate", "Lahore, Punjab, Pakistan"]
    },
    {
      icon: Building,
      title: "Karachi Office", 
      details: ["SITE Industrial Area", "Karachi, Sindh, Pakistan"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+92 42 1234 5678", "+92 21 9876 5432"]
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: ["+92 300 1234567"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@shanghaitraders.pk", "sales@shanghaitraders.pk"]
    }
  ];

  return (
    <section id="contact" className="py-24 bg-navy-dark overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/30 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get Started <span className="text-gradient-gold">Today</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your textile manufacturing operations? Connect with our import specialists 
            for professional consultation and competitive pricing.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all group-hover:scale-110 ${
                        info.icon === MessageSquare 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-accent/20 text-accent'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-white/70 text-sm leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="glass-card p-6 rounded-2xl">
              <h4 className="font-semibold text-white mb-6 flex items-center">
                <Clock className="h-5 w-5 text-accent mr-3" />
                Business Hours
              </h4>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Monday - Friday</span>
                  <span className="font-medium text-white bg-white/10 px-3 py-1 rounded-full">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Saturday</span>
                  <span className="font-medium text-white bg-white/10 px-3 py-1 rounded-full">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70">Sunday</span>
                  <span className="font-medium text-white bg-red-500/20 text-red-300 px-3 py-1 rounded-full">Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-white/90 mb-2 block">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter your first name"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/20"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-white/90 mb-2 block">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter your last name"
                    required
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/20"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-white/90 mb-2 block">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@company.com"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/20"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-white/90 mb-2 block">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+92 300 1234567"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/20"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-sm font-medium text-white/90 mb-2 block">
                  Company Name
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your company name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/20"
                />
              </div>
              
              <div>
                <Label className="text-sm font-medium text-white/90 mb-2 block">
                  Inquiry Type
                </Label>
                <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white focus:border-accent focus:ring-accent/20">
                    <SelectValue placeholder="Select inquiry type" className="text-white/50" />
                  </SelectTrigger>
                  <SelectContent className="bg-navy-dark border-white/20">
                    <SelectItem value="general" className="text-white hover:bg-white/10">General Inquiry</SelectItem>
                    <SelectItem value="product" className="text-white hover:bg-white/10">Product Information</SelectItem>
                    <SelectItem value="quote" className="text-white hover:bg-white/10">Price Quote</SelectItem>
                    <SelectItem value="support" className="text-white hover:bg-white/10">Technical Support</SelectItem>
                    <SelectItem value="partnership" className="text-white hover:bg-white/10">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-medium text-white/90 mb-2 block">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Describe your machinery requirements, quantities, timeline, and any specific technical needs..."
                  rows={4}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/20"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-accent hover:bg-yellow-500 text-navy-dark font-semibold py-3 rounded-full hover-lift transition-all duration-300 h-12"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
