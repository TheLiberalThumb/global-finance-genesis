
import { useState, useEffect, useRef } from 'react';

const ImageSection = () => {
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
          {/* Image Container */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Professional shadow and border styling */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl border border-gray-200/10">
              {/* Aspect ratio container - 16:9 for corporate content */}
              <div className="aspect-[16/9] w-full bg-gray-100 flex items-center justify-center">
                {/* Placeholder content */}
                <div className="text-center p-8">
                  <div className="w-16 h-16 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-dark-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-playfair font-semibold text-xl text-gray-600 mb-2">
                    Professional Image Placeholder
                  </h3>
                  <p className="font-inter text-sm text-gray-500">
                    Replace with your custom Canva image
                  </p>
                </div>
              </div>
              
              {/* Gold accent border */}
              <div className="absolute inset-0 border-2 border-rich-gold/20 rounded-lg pointer-events-none"></div>
            </div>

            {/* Optional: Subtle background elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-rich-gold/10 rounded-full hidden lg:block"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-rich-gold/10 rounded-full hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
