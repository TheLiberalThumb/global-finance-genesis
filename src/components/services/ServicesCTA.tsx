import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import FloatingElements from '@/components/FloatingElements';

const ServicesCTA = () => {
  const magneticRef = useMagneticButton(0.2);

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden reveal-block">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center scroll-fade-up">
          <h2 className="heading-lg mb-6 text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="body-text text-light-gray mb-8 scroll-fade-up scroll-stagger-1">
            Let's discuss how our expertise can accelerate your growth and maximize your value creation potential.
          </p>
          
          <div className="bg-dark-navy rounded-xl p-8 border border-rich-gold/20 scroll-fade-up scroll-stagger-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300 mb-4"
                />
                <input
                  type="text"
                  placeholder="Company"
                  className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your project or financing needs..."
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300 resize-none"
                ></textarea>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button 
                ref={magneticRef}
                variant="cta-primary" 
                className="magnetic-button px-12"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;