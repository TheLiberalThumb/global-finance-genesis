
import { useState, useEffect, useRef } from 'react';

const ImageSection = () => {
  const [inView, setInView] = useState(false);
  const [embedLoaded, setEmbedLoaded] = useState(false);
  const [embedError, setEmbedError] = useState(false);
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

  const handleIframeLoad = () => {
    setEmbedLoaded(true);
  };

  const handleIframeError = () => {
    setEmbedError(true);
  };

  return (
    <section 
      ref={ref}
      className="py-24 lg:py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`scroll-fade-up ${inView ? 'animate-fade-in' : ''}`}>
          {/* Global Presence Section */}
          <div className="text-center mb-16">
            <h2 className="heading-lg text-rich-gold mb-6">Global Presence</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-card rounded-lg p-8 border border-rich-gold/20">
                <div className="w-16 h-16 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dark-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="heading-md text-foreground font-semibold mb-2">Lagos</h3>
                <p className="text-light-gray mb-1">Nigeria</p>
                <p className="text-rich-gold font-medium text-sm">Headquarters</p>
              </div>
              <div className="bg-card rounded-lg p-8 border border-rich-gold/20">
                <div className="w-16 h-16 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dark-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="heading-md text-foreground font-semibold mb-2">London, United Kingdom</h3>
                <p className="text-light-gray mb-1">Kuwait</p>
                <p className="text-rich-gold font-medium text-sm">Regional Office</p>
              </div>
              <div className="bg-card rounded-lg p-8 border border-rich-gold/20">
                <div className="w-16 h-16 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-dark-navy" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h3 className="heading-md text-foreground font-semibold mb-2">Singapore</h3>
                <p className="text-light-gray mb-1">Singapore</p>
                <p className="text-rich-gold font-medium text-sm">Advisory Hub</p>
              </div>
            </div>
          </div>

          {/* Embed Container */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Professional shadow and border styling */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl border border-gray-200/10">
              
              {/* Loading State */}
              {!embedLoaded && !embedError && (
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-rich-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m-5-4v4m3-4v4" />
                      </svg>
                    </div>
                    <p className="font-inter text-sm text-gray-500">Loading presentation...</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {embedError && (
                <div className="aspect-[16/10] w-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <h3 className="font-playfair font-semibold text-lg text-gray-600 mb-2">
                      Content Unavailable
                    </h3>
                    <p className="font-inter text-sm text-gray-500">
                      Unable to load the presentation. Please try refreshing the page.
                    </p>
                  </div>
                </div>
              )}

              {/* Canva Embed */}
              <div 
                style={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: 0, 
                  paddingTop: '62.5%',
                  paddingBottom: 0, 
                  overflow: 'hidden',
                  borderRadius: '8px', 
                  willChange: 'transform' 
                }}
                className={embedError ? 'hidden' : ''}
              >
                <iframe 
                  loading="lazy" 
                  style={{ 
                    position: 'absolute', 
                    width: '100%', 
                    height: '100%', 
                    top: 0, 
                    left: 0, 
                    border: 'none', 
                    padding: 0,
                    margin: 0 
                  }}
                  src="https://www.canva.com/design/DAGuohvkGDk/og6iAkmCTjzG-d3uHxtBtA/watch?embed" 
                  allowFullScreen
                  allow="fullscreen"
                  title="Gission Global Corporate Finance Presentation"
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
              </div>
              
              {/* Gold accent border */}
              <div className="absolute inset-0 border-2 border-rich-gold/20 rounded-lg pointer-events-none"></div>
            </div>

            {/* Attribution Link */}
            <div className="mt-4 text-center">
              <a 
                href="https://www.canva.com/design/DAGuohvkGDk/og6iAkmCTjzG-d3uHxtBtA/watch?utm_content=DAGuohvkGDk&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-light-gray hover:text-rich-gold transition-colors duration-300 font-inter"
              >
                Design by Termux Code
              </a>
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
