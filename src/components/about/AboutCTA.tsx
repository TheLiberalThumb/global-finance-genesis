import { Button } from '@/components/ui/button';

const AboutCTA = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-yellow/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-yellow/15 rounded-full coin-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-yellow/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-primary-yellow/25 rounded-full coin-float" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-5xl mx-auto container-padding text-center relative z-10">
        <h2 className="heading-xl text-charcoal-black mb-8 fade-in-up">
          Ready to Transform Your Business?
        </h2>
        <p className="body-text text-2xl text-charcoal-black/70 mb-12 max-w-4xl mx-auto fade-in-up stagger-delay-1 leading-relaxed">
          Join leading companies who trust us to accelerate growth through strategic capital solutions and expert financial guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-delay-2">
          <Button variant="cta-primary">
            Start Your Journey
          </Button>
          <Button variant="cta-secondary">
            Download Our Brochure
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 fade-in-up stagger-delay-3">
          <p className="caption-text text-charcoal-black/60 mb-6">
            Trusted by leading organizations worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60">
            <div className="body-text font-medium text-charcoal-black">Fortune 500</div>
            <div className="body-text font-medium text-charcoal-black">Government Agencies</div>
            <div className="body-text font-medium text-charcoal-black">Energy Sector</div>
            <div className="body-text font-medium text-charcoal-black">Infrastructure</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;