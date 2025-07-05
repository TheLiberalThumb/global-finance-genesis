import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section className="relative min-h-screen bg-background flex items-center overflow-hidden">
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 bg-rich-gold/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-dark-navy/10 rounded-full coin-float"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-rich-gold/15 rounded-full floating-animation stagger-delay-2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Mobile: Animation above content, Desktop: Side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-16 lg:items-center min-h-[70vh] sm:min-h-[80vh]">
          
          {/* Animation Section - Shows first on mobile, right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-2 relative">
            <div className="animation-container relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] fade-in-up stagger-delay-4">
              
              {/* 3D Animation Container */}
              <div className="absolute inset-0 bg-background rounded-3xl border border-rich-gold/20">
                
                {/* Floating Animation Elements - Optimized for mobile */}
                <div className="hidden md:block absolute top-20 left-20 w-20 h-20 bg-rich-gold rounded-full floating-animation opacity-80"></div>
                <div className="absolute top-8 md:top-40 right-4 md:right-10 w-12 md:w-16 h-12 md:h-16 bg-rich-gold/60 rounded-full coin-float stagger-delay-1"></div>
                <div className="hidden md:block absolute bottom-40 left-10 w-24 h-24 bg-rich-gold/40 rounded-full floating-animation stagger-delay-2"></div>
                <div className="absolute bottom-8 md:bottom-20 right-8 md:right-20 w-16 md:w-32 h-16 md:h-32 bg-rich-gold/20 rounded-full coin-float stagger-delay-3"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 md:w-12 h-8 md:h-12 bg-rich-gold/10 rounded-full floating-animation stagger-delay-4"></div>
                
                {/* Central Focus Element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 md:w-40 h-24 md:h-40 bg-rich-gold rounded-full flex items-center justify-center coin-float">
                    <div className="w-20 md:w-32 h-20 md:h-32 bg-background rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-8 md:w-16 h-8 md:h-16 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Geometric Shapes - Simplified for mobile */}
                <div className="absolute top-6 md:top-10 right-1/4 md:right-1/3 w-6 md:w-8 h-6 md:h-8 bg-rich-gold/20 transform rotate-45 floating-animation stagger-delay-5"></div>
                <div className="absolute bottom-6 md:bottom-10 left-1/4 md:left-1/3 w-4 md:w-6 h-4 md:h-6 bg-rich-gold/60 transform rotate-12 coin-float stagger-delay-6"></div>
                
              </div>
              
              {/* Animation Space Overlay Text */}
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-center">
                
              </div>
              
            </div>
          </div>

          {/* Content Section - Shows second on mobile, left on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-3 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left pt-6 sm:pt-8 lg:pt-0">
            {/* Main Headline */}
            <div className="fade-in-up">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-bold text-foreground leading-tight mb-3 sm:mb-4 lg:mb-6">
                Your business <span className="text-rich-gold">deserves</span> more
              </h1>
            </div>
            
            {/* Subheading */}
            <div className="fade-in-up stagger-delay-1">
              <p className="font-futura text-base sm:text-lg md:text-xl lg:text-2xl text-light-gray leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Get the most out of your capital with smart investment solutions and 
                personalized advisory services to build long-term value.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 fade-in-up stagger-delay-2 mt-6 sm:mt-8 justify-center lg:justify-start">
              <Button variant="cta-primary" className="min-h-[48px] sm:min-h-[56px] text-base sm:text-lg">
                Start Your Journey
              </Button>
              <Button variant="cta-secondary" className="min-h-[48px] sm:min-h-[56px] text-base sm:text-lg">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="fade-in-up stagger-delay-3 pt-8">
              <p className="caption-text mb-6 font-futura">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap gap-4 sm:gap-6 lg:gap-8 opacity-70 justify-center lg:justify-start">
                <div className="font-futura font-medium text-sm text-light-gray">Fortune 500</div>
                <div className="font-futura font-medium text-sm text-light-gray">Infrastructure</div>
                <div className="font-futura font-medium text-sm text-light-gray">Energy Sector</div>
                <div className="font-futura font-medium text-sm text-light-gray">Government</div>
              </div>
            </div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-delay-5">
          <div className="w-6 h-10 border-2 border-light-gray/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-rich-gold rounded-full mt-2 animate-bounce-slow"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;