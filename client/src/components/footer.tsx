import { Linkedin, Facebook, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-white border-t border-linear-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-xl font-semibold text-linear-900 mb-4">Shanghai Traders</div>
            <p className="text-linear-600 mb-6 leading-relaxed max-w-md">
              Your trusted partner for premium textile machinery imports from China to Pakistan. 
              Building bridges between Chinese innovation and Pakistani manufacturing excellence.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-linear-100 hover:bg-linear-200 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5 text-linear-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-linear-100 hover:bg-linear-200 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5 text-linear-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-100 hover:bg-green-200 rounded-lg flex items-center justify-center transition-colors">
                <MessageSquare className="h-5 w-5 text-green-600" />
              </a>
              <a href="#" className="w-10 h-10 bg-linear-100 hover:bg-linear-200 rounded-lg flex items-center justify-center transition-colors">
                <Mail className="h-5 w-5 text-linear-600" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-linear-900 mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-linear-600 hover:text-linear-900 transition-colors text-left text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products")}
                  className="text-linear-600 hover:text-linear-900 transition-colors text-left text-sm"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-linear-600 hover:text-linear-900 transition-colors text-left text-sm"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-linear-600 hover:text-linear-900 transition-colors text-sm">Import Services</a>
              </li>
              <li>
                <a href="#" className="text-linear-600 hover:text-linear-900 transition-colors text-sm">Technical Support</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-linear-900 mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-linear-600 text-sm">
                +92 42 1234 5678
              </li>
              <li className="text-linear-600 text-sm">
                info@shanghaitraders.pk
              </li>
              <li className="text-linear-600 text-sm">
                Lahore & Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-linear-200 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-linear-500 text-sm">
            © 2025 Shanghai Traders. All rights reserved.
          </div>
          <div className="text-linear-500 text-sm mt-2 sm:mt-0">
            Built by <span className="text-primary font-medium">Abubakar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
