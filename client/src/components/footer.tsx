import { Linkedin, Facebook, MessageSquare, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-navy-dark py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-20 h-20 bg-accent rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500 rounded-lg animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Shanghai <span className="text-gradient-gold">Traders</span>
            </div>
            <p className="text-white/70 mb-8 leading-relaxed max-w-md">
              Your trusted partner for premium textile machinery imports from China to Pakistan. 
              Building bridges between Chinese innovation and Pakistani manufacturing excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover-lift transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-white/70 group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover-lift transition-all duration-300 group">
                <Facebook className="h-5 w-5 text-white/70 group-hover:text-accent transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover-lift transition-all duration-300 group">
                <MessageSquare className="h-5 w-5 text-white/70 group-hover:text-green-400 transition-colors" />
              </a>
              <a href="#" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover-lift transition-all duration-300 group">
                <Mail className="h-5 w-5 text-white/70 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-white/70 hover:text-accent transition-colors text-left font-medium"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("products")}
                  className="text-white/70 hover:text-accent transition-colors text-left font-medium"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("process")}
                  className="text-white/70 hover:text-accent transition-colors text-left font-medium"
                >
                  Process
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-white/70 hover:text-accent transition-colors text-left font-medium"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-accent transition-colors font-medium">Import Services</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="text-white/70 font-medium">
                +92 42 1234 5678
              </li>
              <li className="text-white/70 font-medium">
                info@shanghaitraders.pk
              </li>
              <li className="text-white/70 font-medium">
                Lahore & Karachi, Pakistan
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-white/60 text-sm">
            © 2025 Shanghai Traders. All rights reserved.
          </div>
          <div className="text-white/60 text-sm mt-2 sm:mt-0">
            Built with ❤️ by <span className="text-accent font-semibold">Abubakar</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
