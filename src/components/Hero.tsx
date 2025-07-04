import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary-yellow/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-charcoal-black/10 rounded-full coin-float"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary-yellow/15 rounded-full floating-animation stagger-delay-2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content (60%) */}
          <div className="lg:col-span-3 space-y-8">
            {/* Main Headline */}
            <div className="fade-in-up">
              <h1 className="heading-xl mb-6">
                Your business <span className="text-primary-yellow">deserves</span> more
              </h1>
            </div>
            
            {/* Subheading */}
            <div className="fade-in-up stagger-delay-1">
              <p className="font-futura text-xl md:text-2xl text-charcoal-black leading-relaxed max-w-2xl">
                Get the most out of your capital with smart investment solutions and 
                personalized advisory services to build long-term value.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-delay-2">
              <Button variant="cta-primary">
                Start Your Journey
              </Button>
              <Button variant="cta-secondary">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="fade-in-up stagger-delay-3 pt-8">
              <p className="caption-text mb-6 font-futura">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap gap-8 opacity-70">
                <div className="font-futura font-medium text-sm text-charcoal-black">Fortune 500</div>
                <div className="font-futura font-medium text-sm text-charcoal-black">Infrastructure</div>
                <div className="font-futura font-medium text-sm text-charcoal-black">Energy Sector</div>
                <div className="font-futura font-medium text-sm text-charcoal-black">Government</div>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Animation Space (40%) */}
          <div className="lg:col-span-2 relative">
            <div className="animation-container relative w-full h-[600px] lg:h-[700px] fade-in-up stagger-delay-4">
              
              {/* 3D Animation Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-light-gray/30 to-white rounded-3xl">
                
                {/* Floating Animation Elements */}
                <div className="absolute top-20 left-20 w-20 h-20 bg-primary-yellow rounded-full floating-animation opacity-80"></div>
                <div className="absolute top-40 right-10 w-16 h-16 bg-primary-yellow/60 rounded-full coin-float stagger-delay-1"></div>
                <div className="absolute bottom-40 left-10 w-24 h-24 bg-primary-yellow/40 rounded-full floating-animation stagger-delay-2"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-yellow/20 rounded-full coin-float stagger-delay-3"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-charcoal-black/10 rounded-full floating-animation stagger-delay-4"></div>
                
                {/* Central Focus Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 bg-primary-yellow/80 rounded-full flex items-center justify-center coin-float">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-16 h-16 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Geometric Shapes */}
                <div className="absolute top-10 right-1/3 w-8 h-8 bg-charcoal-black/20 transform rotate-45 floating-animation stagger-delay-5"></div>
                <div className="absolute bottom-10 left-1/3 w-6 h-6 bg-primary-yellow/60 transform rotate-12 coin-float stagger-delay-6"></div>
                
              </div>
              
              {/* Animation Space Overlay Text (optional) */}
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="caption-text opacity-60">
                  Intelligent Investment Solutions
                </p>
              </div>
              
            </div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-delay-5">
          <div className="w-6 h-10 border-2 border-charcoal-black/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-yellow rounded-full mt-2 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;