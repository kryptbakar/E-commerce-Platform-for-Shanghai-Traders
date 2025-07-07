import { useState, useEffect } from "react";
import { X, Mail, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem("newsletter-popup-seen");
    
    if (!hasSeenPopup) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("newsletter-popup-seen", "true");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      localStorage.setItem("newsletter-popup-seen", "true");
      
      // Hide popup after 2 seconds
      setTimeout(() => {
        setIsVisible(false);
      }, 2000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full relative overflow-hidden animate-slideInUp">
        {/* Close Button */}
        <Button
          onClick={handleClose}
          variant="ghost"
          size="sm"
          className="absolute top-4 right-4 z-10 hover:bg-gray-100"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Header with gradient */}
        <div className="bg-gradient-navy text-white p-6 pb-8 relative">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                <Gift className="h-6 w-6 text-navy-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Special Offer!</h3>
                <p className="text-white/80 text-sm">Get 15% off your first order</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {!isSubscribed ? (
            <>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Stay Updated with Latest Machinery
              </h4>
              <p className="text-gray-600 mb-6 text-sm">
                Subscribe to our newsletter for exclusive offers, new product announcements, 
                and industry insights delivered directly to your inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="newsletter-email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@company.com"
                    required
                    className="mt-1"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-yellow-500 text-navy-dark font-semibold py-3 rounded-full"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Subscribe & Get 15% Off
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                No spam. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Thanks for subscribing!
              </h4>
              <p className="text-gray-600 text-sm">
                Check your email for your 15% discount code and the latest updates.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}