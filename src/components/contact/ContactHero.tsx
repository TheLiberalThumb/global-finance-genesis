import { Button } from '@/components/ui/button';
import FloatingElements from '@/components/FloatingElements';

const ContactHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto scroll-fade-up">
          <h1 className="heading-xl mb-6 text-pure-white">
            Let's Build Something <span className="text-rich-gold">Extraordinary</span> Together
          </h1>
          <p className="body-text text-pure-white mb-8 scroll-fade-up scroll-stagger-1">
            Ready to transform your business with innovative financial solutions? Connect with our expert team to discuss your unique challenges and discover opportunities for growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center scroll-fade-up scroll-stagger-2">
            <Button variant="cta-primary" className="magnetic-button">
              Schedule Consultation
            </Button>
            <Button variant="cta-secondary" className="magnetic-button">
              Get Quick Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;