import { Button } from '@/components/ui/button';
import FloatingElements from '@/components/FloatingElements';
import { useState, useEffect } from 'react';

const ServicesHero = () => {
  const [animationLoaded, setAnimationLoaded] = useState(false);
  const [shouldLoadAnimation, setShouldLoadAnimation] = useState(false);

  // Lazy load animation after critical content
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadAnimation(true);
    }, 1000); // Delay animation load by 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* 3D Animation Background - Optimized with lazy loading */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="w-full h-full max-w-[800px] sm:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] transform scale-75 sm:scale-85 md:scale-90 lg:scale-95 xl:scale-100">
          {/* Loading Placeholder */}
          {!animationLoaded && (
            <div className="w-full h-full flex items-center justify-center bg-dark-navy/20 rounded-3xl border border-rich-gold/20">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 border-4 border-rich-gold/30 border-t-rich-gold rounded-full animate-spin"></div>
                <p className="text-light-gray text-sm">Loading 3D Experience...</p>
              </div>
            </div>
          )}
          
          {/* 3D Animation - Lazy Loaded */}
          {shouldLoadAnimation && (
            <iframe 
              src='https://my.spline.design/metalcryptocreditcard-YLo39Gr0MVn761iZlrr9ddvH/' 
              frameBorder='0' 
              width='100%' 
              height='100%'
              className={`w-full h-full transition-opacity duration-500 ${animationLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                border: 'none',
                background: 'transparent'
              }}
              allowFullScreen
              loading='lazy'
              title="Interactive 3D Financial Technology Animation"
              onLoad={() => setAnimationLoaded(true)}
            />
          )}
        </div>
      </div>

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px]"></div>

      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-left scroll-fade-up">
          <h1 className="heading-xl mb-6">
            <span className="text-pure-white">Financial </span>
            <span className="text-rich-gold">Solutions</span>
            <span className="text-pure-white"> That Transform</span>
          </h1>
          <p className="body-text text-pure-white mb-8 scroll-fade-up scroll-stagger-1">
            Comprehensive corporate finance services designed to accelerate growth and maximize value across emerging markets through innovative strategies and expert execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 scroll-fade-up scroll-stagger-2">
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