import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of textile machinery do you import?",
      answer: "We specialize in importing a wide range of textile machinery including carding machines, spinning equipment, weaving looms, dyeing machines, and spare parts. Our products come from certified Chinese manufacturers and meet international quality standards."
    },
    {
      question: "How long does the import process take?",
      answer: "The typical import timeline ranges from 4-8 weeks depending on the machinery type and customization requirements. This includes order processing, manufacturing, quality inspection, shipping, and customs clearance."
    },
    {
      question: "Do you provide installation and training services?",
      answer: "Yes, we provide comprehensive installation support and operator training for all machinery. Our technical team ensures proper setup and your staff receives thorough training for optimal machine operation."
    },
    {
      question: "What warranty do you offer on imported machinery?",
      answer: "Warranty and service coverage depend on the selected machinery and manufacturer. We confirm the applicable warranty, included parts and support terms clearly in every commercial quotation."
    },
    {
      question: "Can you source custom or specialized machinery?",
      answer: "Absolutely! We work closely with our Chinese manufacturing partners to source custom machinery based on your specific requirements. Contact us with your specifications for a personalized quote."
    },
    {
      question: "What are your payment terms?",
      answer: "We offer flexible payment terms including advance payment, letter of credit (LC), and installment options. Payment terms are customized based on order value and client requirements."
    },
    {
      question: "Do you handle customs clearance and logistics?",
      answer: "Yes, we handle all aspects of import logistics including customs clearance, documentation, shipping arrangements, and delivery to your facility. We manage the entire process from China to Pakistan."
    },
    {
      question: "What ongoing support do you provide after installation?",
      answer: "We coordinate technical follow-up, replacement parts and manufacturer support according to the supplied equipment. The exact service scope is agreed before order confirmation."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleContactExperts = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="faq-shell max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-accent" />
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our textile machinery import services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <Button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left bg-transparent hover:bg-gray-50 border-none justify-between h-auto"
                variant="ghost"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </Button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-slideDown">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-navy-dark rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-white/80 mb-6">
              Our team is ready to help you find the perfect machinery solution for your needs.
            </p>
            <Button
              className="w-full md:w-auto px-8 py-3 font-semibold rounded-md bg-[#b7662b] text-white hover:bg-[#9d5420] text-base"
              onClick={handleContactExperts}
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
