import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Wealthsimple Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary-yellow/20 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-charcoal-black/10 rounded-full coin-float"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-primary-yellow/15 rounded-full floating-animation stagger-delay-2"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-yellow/10 rounded-full coin-float stagger-delay-3"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-charcoal-black/5 rounded-full floating-animation stagger-delay-4"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Hero Content */}
          <div className="max-w-6xl mx-auto">
            <h1 className="heading-xl fade-in-up mb-8">
              Your business <span className="text-primary-yellow">deserves</span> more
            </h1>
            
            <p className="body-text text-charcoal-black/80 fade-in-up stagger-delay-1 mb-12 max-w-4xl mx-auto">
              Get the most out of your capital with smart investment solutions and 
              personalized advisory services to build long-term value.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-delay-2 mb-20">
              <Button className="btn-primary">
                Start Your Journey
              </Button>
              <Button className="btn-secondary">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="fade-in-up stagger-delay-3">
              <p className="caption-text mb-8 font-inter">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-12 opacity-70">
                <div className="text-charcoal-black font-inter font-semibold text-lg">Fortune 500</div>
                <div className="text-charcoal-black font-inter font-semibold text-lg">Infrastructure</div>
                <div className="text-charcoal-black font-inter font-semibold text-lg">Energy Sector</div>
                <div className="text-charcoal-black font-inter font-semibold text-lg">Government</div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-delay-4">
              <div className="w-6 h-10 border-2 border-charcoal-black/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-primary-yellow rounded-full mt-2 animate-bounce-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;