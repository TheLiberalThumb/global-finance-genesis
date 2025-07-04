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
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center min-h-[80vh]">
          
          {/* Content Column - 60% */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-6">
              <h1 className="heading-xl hero-content-enter">
                Building <span className="text-primary-yellow">Tomorrow's</span> Financial Landscape
              </h1>
              <p className="body-text text-xl text-charcoal-black leading-relaxed max-w-2xl hero-content-enter stagger-delay-1">
                For over 15 years, we've been empowering businesses to achieve their boldest ambitions through strategic capital solutions and expert financial guidance.
              </p>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center hero-content-enter stagger-delay-2">
              <Button variant="cta-primary">
                Start Your Journey
              </Button>
              <Button variant="cta-secondary">
                Learn More
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8 hero-content-enter stagger-delay-3">
              <div className="text-center counter-up">
                <div className="text-3xl lg:text-4xl font-bold text-primary-yellow">15+</div>
                <div className="text-sm text-charcoal-black/70">Years of Excellence</div>
              </div>
              <div className="text-center counter-up stagger-delay-1">
                <div className="text-3xl lg:text-4xl font-bold text-primary-yellow">$2B+</div>
                <div className="text-sm text-charcoal-black/70">Funding Facilitated</div>
              </div>
              <div className="text-center counter-up stagger-delay-2">
                <div className="text-3xl lg:text-4xl font-bold text-primary-yellow">100+</div>
                <div className="text-sm text-charcoal-black/70">Projects Completed</div>
              </div>
            </div>
          </div>
          
          {/* Animation Space - 40% */}
          <div className="lg:col-span-2 relative hero-content-enter stagger-delay-2">
            <div className="relative w-full h-[600px] lg:h-[700px] bg-white rounded-3xl overflow-hidden">
              
              {/* Animation Container */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-light-gray/20">
                
                {/* Central Focus Element - Ready for GIF/Animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-40 h-40 bg-primary-yellow/80 rounded-full flex items-center justify-center coin-float">
                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Globe className="w-16 h-16 text-charcoal-black" />
                    </div>
                  </div>
                </div>
                
                {/* Floating Animation Elements */}
                <div className="absolute top-20 left-20 w-20 h-20 bg-primary-yellow/60 rounded-full floating-animation"></div>
                <div className="absolute top-40 right-10 w-16 h-16 bg-primary-yellow/40 rounded-full coin-float stagger-delay-1"></div>
                <div className="absolute bottom-40 left-10 w-24 h-24 bg-primary-yellow/30 rounded-full floating-animation stagger-delay-2"></div>
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-yellow/20 rounded-full coin-float stagger-delay-3"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-20 -translate-y-20 w-12 h-12 bg-charcoal-black/10 rounded-full floating-animation stagger-delay-4"></div>
                
                {/* Geometric Shapes for Visual Interest */}
                <div className="absolute top-10 right-1/3 w-8 h-8 bg-charcoal-black/20 transform rotate-45 floating-animation stagger-delay-5"></div>
                <div className="absolute bottom-10 left-1/3 w-6 h-6 bg-primary-yellow/60 transform rotate-12 coin-float stagger-delay-6"></div>
                
              </div>
              
              {/* Animation Overlay Text */}
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <p className="text-sm text-charcoal-black/60 font-medium">
                  Global Financial Solutions
                </p>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutHero;