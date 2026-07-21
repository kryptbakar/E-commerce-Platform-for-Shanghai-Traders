import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Which manufacturers does Shanghai Traders represent?",
      answer: "Shanghai Traders serves as sole agent in Pakistan for GERON Card Clothing, JSM Jinqiao Spinning Machinery, Nantong Rotex and Jinhua Dumtech. Together, these principals cover carding technology, rotor-spinning components, metalworking machinery and industrial compressed-air systems."
    },
    {
      question: "What does sole-agent representation mean for our customer?",
      answer: "It gives customers a direct, locally coordinated route to the manufacturer. We support requirement definition, technical communication, commercial documentation, shipment coordination and post-delivery follow-up through one Pakistan-based team."
    },
    {
      question: "Can you help identify the right machine or component?",
      answer: "Yes. Share your process, material, capacity, existing equipment and operating conditions. We will coordinate with the relevant principal to narrow the specification before preparing a commercial proposal."
    },
    {
      question: "Do you support complete machinery as well as spare parts?",
      answer: "Yes. Depending on the principal, our scope includes production machinery, process-critical components, wear parts, compressed-air packages and related system support."
    },
    {
      question: "Do you coordinate installation and after-sales support?",
      answer: "The support plan is agreed for each project. Shanghai Traders coordinates available installation guidance, commissioning support, training, warranty communication and replacement-part follow-up with the relevant manufacturer."
    },
    {
      question: "How do we start a technical discussion?",
      answer: "Use the inquiry form or contact Amir Feroz by phone or WhatsApp. Include the application, target output, current machine information and any known specification so we can involve the right principal quickly."
    }
  ];
  const handleContactExperts = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <div className="faq-shell mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3"><HelpCircle className="h-8 w-8 text-accent" /><h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Working with Shanghai Traders</h2></div>
          <p className="mx-auto max-w-2xl text-xl text-gray-600">Clear answers about our principals, technical process and local support.</p>
        </div>
        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
              <Button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="h-auto w-full justify-between border-none bg-transparent p-6 text-left hover:bg-gray-50" variant="ghost" aria-expanded={openIndex === index}>
                <h3 className="pr-4 text-lg font-semibold text-gray-900">{faq.question}</h3>
                {openIndex === index ? <ChevronUp className="h-5 w-5 shrink-0 text-gray-500" /> : <ChevronDown className="h-5 w-5 shrink-0 text-gray-500" />}
              </Button>
              {openIndex === index && <div className="animate-slideDown px-6 pb-6"><p className="leading-relaxed text-gray-600">{faq.answer}</p></div>}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center"><div className="rounded-2xl bg-navy-dark p-8 text-white"><h3 className="mb-4 text-2xl font-bold">Have a specific production challenge?</h3><p className="mb-6 text-white/80">Our team will involve the right principal and help define a practical next step.</p><Button onClick={handleContactExperts} className="w-full rounded-md bg-[#747aa4] px-8 py-3 text-base font-semibold text-white hover:bg-[#8a90b7] md:w-auto">Contact our team</Button></div></div>
      </div>
    </section>
  );
}