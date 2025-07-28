
import { useState, useEffect, useRef } from 'react';

const ServicesImageSection = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={ref}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`scroll-fade-up ${inView ? 'animate-fade-in' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 text-foreground">
              Corporate Finance Excellence
            </h2>
            <p className="body-text text-light-gray max-w-3xl mx-auto">
              Our comprehensive approach to corporate finance combines strategic insight with execution excellence to deliver transformational results for our clients.
            </p>
          </div>

          {/* Image Container */}
          <div className="relative w-full max-w-6xl mx-auto">
            {/* Professional shadow and border styling */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-rich-gold/20">
              {/* Image placeholder with proper dimensions */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-dark-navy/10 to-background/50 flex items-center justify-center">
                {/* Placeholder image content */}
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-rich-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-rich-gold/30">
                    <svg className="w-10 h-10 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-rich-gold/80 text-sm font-medium mb-2">800 × 500px</div>
                  <p className="font-inter text-light-gray text-sm max-w-md mx-auto">
                    Professional corporate finance image placeholder - Replace with high-quality visuals showcasing financial excellence and strategic partnerships.
                  </p>
                </div>
                
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-dark-navy/5"></div>
              </div>
              
              {/* Gold accent border overlay */}
              <div className="absolute inset-0 border-2 border-rich-gold/30 rounded-2xl pointer-events-none"></div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-rich-gold/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-rich-gold/10 rounded-full hidden lg:block"></div>
            <div className="absolute top-1/2 -left-4 w-4 h-4 bg-rich-gold/20 rounded-full hidden lg:block"></div>
            <div className="absolute top-1/4 -right-4 w-6 h-6 bg-rich-gold/20 rounded-full hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesImageSection;
