import { Linkedin, Facebook, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-industrial-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Shanghai Traders</div>
            <p className="text-industrial-300 mb-6 leading-relaxed">
              Your trusted partner for premium textile machinery imports from China to Pakistan. 
              Building bridges between Chinese innovation and Pakistani manufacturing excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-industrial-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-industrial-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-industrial-400 hover:text-white transition-colors">
                <MessageSquare className="h-6 w-6" />
              </a>
              <a href="#" className="text-industrial-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-industrial-300">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products")}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Import Services</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Technical Support</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2 text-industrial-300">
              <li className="flex items-center">
                <span className="text-primary mr-2">📞</span>
                <span>+92 42 1234 5678</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">✉️</span>
                <span>info@shanghaitraders.pk</span>
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">📍</span>
                <span>Lahore & Karachi, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-industrial-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-industrial-400 text-sm">
            © 2024 Shanghai Traders. All rights reserved.
          </div>
          <div className="text-industrial-400 text-sm mt-2 sm:mt-0">
            Built by <span className="text-accent">Abubakar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
