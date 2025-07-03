import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary-yellow/10 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-contemporary-blue/10 rounded-full coin-float"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-warm-red/10 rounded-full floating-animation stagger-delay-2"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-yellow/5 rounded-full coin-float stagger-delay-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          {/* Hero Content */}
          <div className="max-w-5xl mx-auto">
            <h1 className="font-inter font-bold text-5xl md:text-7xl lg:text-8xl leading-tight fade-in-up mb-8 text-charcoal-black">
              Your business <span className="text-primary-yellow">deserves</span> more
            </h1>
            
            <p className="text-xl md:text-2xl text-medium-gray leading-relaxed fade-in-up stagger-delay-1 mb-12 max-w-3xl mx-auto">
              Get the most out of your capital with smart investment solutions and 
              personalized advisory services to build long-term value.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-delay-2 mb-20">
              <Button className="btn-primary text-lg px-10 py-4">
                Start Your Journey
              </Button>
              <Button variant="outline" className="text-lg px-10 py-4">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="fade-in-up stagger-delay-3">
              <p className="text-sm text-medium-gray mb-6 font-inter">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60">
                <div className="text-charcoal-black font-semibold text-lg">Fortune 500</div>
                <div className="text-charcoal-black font-semibold text-lg">Infrastructure</div>
                <div className="text-charcoal-black font-semibold text-lg">Energy Sector</div>
                <div className="text-charcoal-black font-semibold text-lg">Government</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;