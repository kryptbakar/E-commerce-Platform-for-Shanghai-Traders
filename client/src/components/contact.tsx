import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Building, Phone, MessageSquare, Mail, Clock, Globe, Star, Zap, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { api } from "@/lib/api";

interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  company: string;
  inquiry_type: string;
  message: string;
  newsletter: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    company: "",
    inquiry_type: "",
    message: "",
    newsletter: false
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "product", label: "Product Information" },
    { value: "quote", label: "Quote Request" },
    { value: "sample", label: "Sample Request" },
    { value: "partnership", label: "Partnership/Business" },
    { value: "technical", label: "Technical Support" },
    { value: "other", label: "Other" }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required";
    }
    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    if (!formData.inquiry_type) {
      newErrors.inquiry_type = "Please select an inquiry type";
    }

    // Phone validation (optional but if provided, must be valid)
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await api.consultations.create(formData);

      if (result.success) {
        setIsSubmitted(true);
        toast({
          title: "Success!",
          description: result.message,
        });
        // Reset form
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          company: "",
          inquiry_type: "",
          message: "",
          newsletter: false
        });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="bg-[#181818] rounded-2xl p-12 shadow-xl">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-[#ffe066] mb-4">Thank You!</h2>
            <p className="text-xl text-[#fbe3c7] mb-6">
              Your inquiry has been submitted successfully. Our team will review it and respond as soon as possible.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="bg-[#ffe066] text-black hover:bg-[#fbe3c7] font-semibold"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Gyro-inspired animated background */}
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
      
      <div className="contact-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-[#ffe066] mb-4 tracking-tight" style={{letterSpacing: '0.04em'}}>
            Let&apos;s discuss your mill requirement
          </h2>
          <p className="text-xl text-[#fbe3c7] max-w-2xl mx-auto font-semibold">
            Tell us what you manufacture, your target output and the equipment you need. Our team will respond with focused next steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-black text-[#ffe066] mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="first_name" className="text-[#fbe3c7] font-medium">
                    First Name *
                  </Label>
                  <Input
                    id="first_name"
                    value={formData.first_name}
                    onChange={(e) => handleInputChange('first_name', e.target.value)}
                    className={cn(
                      "mt-1 bg-[#2a2a2a] border-[#404040] text-white focus:border-[#ffe066]",
                      errors.first_name && "border-red-500"
                    )}
                    placeholder="John"
                  />
                  {errors.first_name && (
                    <p className="text-red-400 text-sm mt-1">{errors.first_name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="last_name" className="text-[#fbe3c7] font-medium">
                    Last Name *
                  </Label>
                  <Input
                    id="last_name"
                    value={formData.last_name}
                    onChange={(e) => handleInputChange('last_name', e.target.value)}
                    className={cn(
                      "mt-1 bg-[#2a2a2a] border-[#404040] text-white focus:border-[#ffe066]",
                      errors.last_name && "border-red-500"
                    )}
                    placeholder="Doe"
                  />
                  {errors.last_name && (
                    <p className="text-red-400 text-sm mt-1">{errors.last_name}</p>
                  )}
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email" className="text-[#fbe3c7] font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={cn(
                      "mt-1 bg-[#2a2a2a] border-[#404040] text-white focus:border-[#ffe066]",
                      errors.email && "border-red-500"
                    )}
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone" className="text-[#fbe3c7] font-medium">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={cn(
                      "mt-1 bg-[#2a2a2a] border-[#404040] text-white focus:border-[#ffe066]",
                      errors.phone && "border-red-500"
                    )}
                    placeholder="Your contact number"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div>
                <Label htmlFor="company" className="text-[#fbe3c7] font-medium">
                  Company
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className="mt-1 bg-[#2a2a2a] border-[#404040] text-white focus:border-[#ffe066]"
                  placeholder="Your Company Name"
                />
              </div>

              {/* Inquiry Type */}
              <div>
                <Label htmlFor="inquiry_type" className="text-[#fbe3c7] font-medium">
                  Inquiry Type *
                </Label>
                <select
                  id="inquiry_type"
                  value={formData.inquiry_type}
                  onChange={(e) => handleInputChange('inquiry_type', e.target.value)}
                  className={cn(
                    "mt-1 w-full px-3 py-2 bg-[#2a2a2a] border border-[#404040] text-white focus:border-[#ffe066] focus:outline-none rounded-md appearance-none cursor-pointer",
                    errors.inquiry_type && "border-red-500"
                  )}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23fbe3c7' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.5rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.5em 1.5em',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="" className="bg-[#2a2a2a] text-white">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value} className="bg-[#2a2a2a] text-white">
                      {type.label}
                    </option>
                  ))}
                </select>
                {errors.inquiry_type && (
                  <p className="text-red-400 text-sm mt-1">{errors.inquiry_type}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-[#fbe3c7] font-medium">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={cn(
                    "mt-1 bg-[#2a2a2a] border-[#404040] text-white focus:border-[#ffe066] min-h-[120px]",
                    errors.message && "border-red-500"
                  )}
                  placeholder="Tell us about your inquiry..."
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Newsletter */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                  className="border-[#404040] data-[state=checked]:bg-[#ffe066] data-[state=checked]:border-[#ffe066]"
                />
                <Label htmlFor="newsletter" className="text-[#fbe3c7] text-sm">
                  Subscribe to our newsletter for industry updates and new products
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ffe066] text-black hover:bg-[#fbe3c7] font-semibold py-3 text-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-[#181818] rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-black text-[#ffe066] mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-bold text-[#ffe066] mb-2 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Lahore Office
                </h4>
                <p className="text-[#fbe3c7] text-sm">H No 67 A, Westwood Colony, Thokar Niaz Baig, Lahore</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#ffe066] mb-2 flex items-center">
                  <Building className="w-5 h-5 mr-2" />
                  Contact Person
                </h4>
                <p className="text-[#fbe3c7] text-sm">Amir Feroz</p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#ffe066] mb-2 flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Phone
                </h4>
                <a href="tel:+923214477164" className="block text-[#fbe3c7] text-sm hover:text-[#1474b8]">+92 321 4477164</a>
                <a href="tel:+924235882154" className="block text-[#fbe3c7] text-sm hover:text-[#1474b8]">042-35882154-5</a>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#ffe066] mb-2 flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  WhatsApp
                </h4>
                <a href="https://wa.me/923214477164" target="_blank" rel="noopener noreferrer" className="text-[#fbe3c7] text-sm hover:text-[#1474b8]">+92 321 4477164</a>
              </div>

              <div>
                <h4 className="text-lg font-bold text-[#ffe066] mb-2 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Email
                </h4>
                <a href="mailto:shanghaitraders860@gmail.com" className="text-[#fbe3c7] text-sm hover:text-[#1474b8] break-all">shanghaitraders860@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
