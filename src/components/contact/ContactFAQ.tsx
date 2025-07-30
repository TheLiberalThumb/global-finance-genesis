
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FloatingElements from '@/components/FloatingElements';

const ContactFAQ = () => {
  const faqs = [
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer: "We guarantee a response within 24 hours during business days. For urgent matters, our team often responds within 2-4 hours. Emergency support is available 24/7 for existing clients."
    },
    {
      question: "What information should I include in my initial consultation request?",
      answer: "Please include your company details, project objectives, estimated budget range, preferred timeline, and any specific challenges you're facing. The more context you provide, the better we can tailor our initial response."
    },
    {
      question: "Do you offer virtual consultations for international clients?",
      answer: "Yes, we conduct virtual consultations worldwide via secure video conferencing platforms. We accommodate different time zones and can arrange meetings at your convenience."
    },
    {
      question: "Is there a cost for the initial consultation?",
      answer: "The initial consultation is complimentary for qualified prospects. This allows us to understand your needs and determine how we can best serve you before any formal engagement."
    },
    {
      question: "How do you ensure confidentiality of sensitive business information?",
      answer: "We maintain strict confidentiality protocols and can sign NDAs before any detailed discussions. All communications are encrypted, and access to client information is limited to relevant team members only."
    },
    {
      question: "What is your typical project timeline from initial contact to completion?",
      answer: "Timelines vary significantly based on project complexity. Simple advisory services may take 2-4 weeks, while complex transactions like M&A or large capital raises can span 3-12 months. We'll provide detailed timelines during our initial consultation."
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Yes, we work with businesses of all sizes. Our services are scalable, and we have specialized programs for startups and growing companies. We believe every business deserves access to professional financial advisory services."
    },
    {
      question: "What languages do your consultants speak?",
      answer: "Our team is multilingual, with fluency in English, French, Portuguese, and several local African languages. We can accommodate consultations in your preferred language for better communication."
    }
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden section-morph">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Find answers to common questions about our services and process. Don't see your question? Contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto scroll-fade-up scroll-stagger-2">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-rich-gold/10 rounded-xl px-6 hover:border-rich-gold/30 transition-colors duration-300"
              >
                <AccordionTrigger className="font-playfair font-semibold text-lg text-card-foreground hover:text-rich-gold transition-colors duration-300 py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-inter text-sm text-light-gray leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 scroll-fade-up scroll-stagger-3">
          <p className="font-inter text-light-gray mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="bg-rich-gold text-dark-navy font-medium py-3 px-8 rounded-lg hover:bg-rich-gold/90 transition-colors duration-300">
            Contact Us Directly
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;
