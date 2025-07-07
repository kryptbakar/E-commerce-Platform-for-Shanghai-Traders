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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-industrial-800 mb-6">Get In Touch</h2>
          <p className="text-xl text-industrial-500 max-w-3xl mx-auto leading-relaxed">
            Ready to import quality textile machinery? Contact our team for professional consultation and competitive pricing.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-industrial-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`text-xl mt-1 ${info.icon === MessageSquare ? 'text-green-600' : 'text-primary'}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-industrial-800 mb-1">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-industrial-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="bg-industrial-50 p-6 rounded-xl">
              <h4 className="font-semibold text-industrial-800 mb-3 flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                Business Hours
              </h4>
              <div className="space-y-2 text-industrial-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-industrial-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-industrial-800 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-semibold text-industrial-700">
                    First Name *
                  </Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Your first name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-semibold text-industrial-700">
                    Last Name *
                  </Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Your last name"
                    required
                    className="mt-2"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-industrial-700">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="your.email@company.com"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-sm font-semibold text-industrial-700">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+92 300 1234567"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="company" className="text-sm font-semibold text-industrial-700">
                  Company Name
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="Your company name"
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label className="text-sm font-semibold text-industrial-700">
                  Inquiry Type
                </Label>
                <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiry</SelectItem>
                    <SelectItem value="product">Product Information</SelectItem>
                    <SelectItem value="quote">Price Quote</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-industrial-700">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Please describe your requirements, including specific machinery types, quantities, and timeline..."
                  rows={5}
                  required
                  className="mt-2"
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary text-white hover:bg-blue-700 transition-colors">
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
