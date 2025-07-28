
import { Button } from '@/components/ui/button';
import FloatingElements from '@/components/FloatingElements';

const ServicesHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center justify-center">
        <div className="max-w-4xl text-center scroll-fade-up">
          <h1 className="heading-xl mb-6">
            <span className="text-pure-white">Financial </span>
            <span className="text-rich-gold">Solutions</span>
            <span className="text-pure-white"> That Transform</span>
          </h1>
          <p className="body-text text-pure-white mb-8 scroll-fade-up scroll-stagger-1 max-w-3xl mx-auto">
            Comprehensive corporate finance services designed to accelerate growth and maximize value across emerging markets through innovative strategies and expert execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 scroll-fade-up scroll-stagger-2 justify-center">
            <Button variant="cta-primary" className="magnetic-button">
              Get Started
            </Button>
            <Button variant="cta-secondary" className="magnetic-button">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
