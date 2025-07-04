import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
      {/* Subtle background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-light-gray/30"></div>
      
      {/* Subtle floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-20 w-16 h-16 bg-primary-yellow/20 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-primary-yellow/15 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-primary-yellow/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-primary-yellow/25 rounded-full floating-animation" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="wide-content container-padding relative z-10 section-padding">
        {/* Mobile: Animation above content, Desktop: Side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-8 lg:gap-16 lg:items-center min-h-[80vh]">
          
          {/* Animation Section - Shows first on mobile, right on desktop */}
          <div className="order-1 lg:order-2 lg:col-span-2 relative hero-content-enter stagger-delay-2">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] bg-white rounded-3xl overflow-hidden">
              
              {/* Animation Container */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-light-gray/20">
                
                {/* Central Focus Element - Ready for GIF/Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 md:w-40 h-24 md:h-40 bg-primary-yellow/80 rounded-full flex items-center justify-center coin-float">
                    <div className="w-20 md:w-32 h-20 md:h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Globe className="w-8 md:w-16 h-8 md:h-16 text-charcoal-black" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Animation Elements - Optimized for mobile */}
                <div className="hidden md:block absolute top-20 left-20 w-20 h-20 bg-primary-yellow/60 rounded-full floating-animation"></div>
                <div className="absolute top-8 md:top-40 right-4 md:right-10 w-12 md:w-16 h-12 md:h-16 bg-primary-yellow/40 rounded-full coin-float stagger-delay-1"></div>
                <div className="hidden md:block absolute bottom-40 left-10 w-24 h-24 bg-primary-yellow/30 rounded-full floating-animation stagger-delay-2"></div>
                <div className="absolute bottom-8 md:bottom-20 right-8 md:right-20 w-16 md:w-32 h-16 md:h-32 bg-primary-yellow/20 rounded-full coin-float stagger-delay-3"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-20 -translate-y-4 md:-translate-y-20 w-8 md:w-12 h-8 md:h-12 bg-charcoal-black/10 rounded-full floating-animation stagger-delay-4"></div>
                
                {/* Geometric Shapes for Visual Interest - Simplified for mobile */}
                <div className="absolute top-6 md:top-10 right-1/4 md:right-1/3 w-6 md:w-8 h-6 md:h-8 bg-charcoal-black/20 transform rotate-45 floating-animation stagger-delay-5"></div>
                <div className="absolute bottom-6 md:bottom-10 left-1/4 md:left-1/3 w-4 md:w-6 h-4 md:h-6 bg-primary-yellow/60 transform rotate-12 coin-float stagger-delay-6"></div>
                
              </div>
              
              {/* Animation Overlay Text */}
              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-center">
                <p className="text-xs md:text-sm text-charcoal-black/60 font-medium">
                  Global Financial Solutions
                </p>
              </div>
              
            </div>
          </div>
          
          {/* Content Section - Shows second on mobile, left on desktop */}
          <div className="order-2 lg:order-1 lg:col-span-3 space-y-6 lg:space-y-8 text-center lg:text-left pt-8 lg:pt-0">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-charcoal-black leading-tight hero-content-enter">
                Building <span className="text-primary-yellow">Tomorrow's</span> Financial Landscape
              </h1>
              <p className="body-text text-lg sm:text-xl lg:text-2xl text-charcoal-black leading-relaxed max-w-2xl mx-auto lg:mx-0 hero-content-enter stagger-delay-1">
                For over 15 years, we've been empowering businesses to achieve their boldest ambitions through strategic capital solutions and expert financial guidance.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 hero-content-enter stagger-delay-2 mt-8 justify-center lg:justify-start">
              <Button variant="cta-primary">
                Start Your Journey
              </Button>
              <Button variant="cta-secondary">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 lg:gap-8 pt-8 hero-content-enter stagger-delay-3 justify-center lg:justify-start">
              <div className="text-center counter-up">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-yellow">15+</div>
                <div className="text-sm text-charcoal-black/70">Years of Excellence</div>
              </div>
              <div className="text-center counter-up stagger-delay-1">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-yellow">$2B+</div>
                <div className="text-sm text-charcoal-black/70">Funding Facilitated</div>
              </div>
              <div className="text-center counter-up stagger-delay-2">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-yellow">100+</div>
                <div className="text-sm text-charcoal-black/70">Projects Completed</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;