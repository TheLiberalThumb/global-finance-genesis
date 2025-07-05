import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative bg-background min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern - Subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-20 left-10 w-24 h-24 bg-rich-gold/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-rich-gold/10 rounded-full coin-float"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-rich-gold/15 rounded-full floating-animation stagger-delay-2"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Mobile: Animation above content, Desktop: Side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-16 lg:items-center min-h-[70vh] sm:min-h-[80vh]">
          
          {/* Animation Section - Shows first on mobile, right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-2 relative hero-content-enter stagger-delay-2">
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
                      <Globe className="w-8 md:w-16 h-8 md:h-16 text-rich-gold" />
                    </div>
                  </div>
                </div>

                {/* Geometric Shapes for Visual Interest - Simplified for mobile */}
                <div className="absolute top-6 md:top-10 right-1/4 md:right-1/3 w-6 md:w-8 h-6 md:h-8 bg-rich-gold/20 transform rotate-45 floating-animation stagger-delay-5"></div>
                <div className="absolute bottom-6 md:bottom-10 left-1/4 md:left-1/3 w-4 md:w-6 h-4 md:h-6 bg-rich-gold/60 transform rotate-12 coin-float stagger-delay-6"></div>
                
              </div>
              
              {/* Animation Space Overlay Text */}
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-center">
                <p className="caption-text opacity-60 text-xs md:text-sm text-rich-gold">
                  Global Financial Solutions
                </p>
              </div>
              
            </div>
          </div>
          
          {/* Content Section - Shows second on mobile, left on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-3 space-y-4 sm:space-y-6 lg:space-y-8 text-center lg:text-left pt-6 sm:pt-8 lg:pt-0">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-playfair font-bold text-foreground leading-tight hero-content-enter">
                Building <span className="text-rich-gold">Tomorrow's</span> Financial Landscape
              </h1>
              <p className="body-text text-base sm:text-lg md:text-xl lg:text-2xl text-light-gray leading-relaxed max-w-2xl mx-auto lg:mx-0 hero-content-enter stagger-delay-1">
                For over 15 years, we've been empowering businesses to achieve their boldest ambitions through strategic capital solutions and expert financial guidance.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 hero-content-enter stagger-delay-2 mt-6 sm:mt-8 justify-center lg:justify-start">
              <Button variant="cta-primary" className="min-h-[48px] sm:min-h-[56px] text-base sm:text-lg">
                Start Your Journey
              </Button>
              <Button variant="cta-secondary" className="min-h-[48px] sm:min-h-[56px] text-base sm:text-lg">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 hero-content-enter stagger-delay-3 justify-center lg:justify-start">
              <div className="text-center counter-up">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-rich-gold">15+</div>
                <div className="text-xs sm:text-sm text-light-gray">Years of Excellence</div>
              </div>
              <div className="text-center counter-up stagger-delay-1">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-rich-gold">$2B+</div>
                <div className="text-xs sm:text-sm text-light-gray">Funding Facilitated</div>
              </div>
              <div className="text-center counter-up stagger-delay-2">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-rich-gold">100+</div>
                <div className="text-xs sm:text-sm text-light-gray">Projects Completed</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;