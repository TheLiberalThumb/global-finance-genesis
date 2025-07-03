import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-light-gray opacity-50"></div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-yellow/10 rounded-full floating-animation"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-primary-yellow/15 rounded-full coin-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-charcoal-black/5 rounded-full floating-animation stagger-delay-2"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-primary-yellow/8 rounded-full coin-float stagger-delay-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center min-h-[85vh]">
          
          {/* Content Column - Left Side (60%) */}
          <div className="lg:col-span-3 space-y-10">
            
            {/* Main Headline */}
            <div className="fade-in-up">
              <h1 className="text-6xl lg:text-8xl font-bold text-charcoal-black leading-tight mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                Building Tomorrow's <span className="text-primary-yellow">Financial</span> Landscape
              </h1>
            </div>
            
            {/* Subheading */}
            <div className="fade-in-up stagger-delay-1">
              <p className="text-xl lg:text-2xl text-charcoal-black leading-relaxed max-w-3xl">
                For over 15 years, we've been empowering businesses to achieve their boldest ambitions 
                through strategic capital solutions and expert financial guidance.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 fade-in-up stagger-delay-2">
              <button className="px-10 py-5 bg-primary-yellow text-charcoal-black font-semibold text-lg rounded-3xl hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Journey
              </button>
              <button className="px-10 py-5 bg-white text-charcoal-black border-2 border-charcoal-black font-semibold text-lg rounded-3xl hover:bg-charcoal-black hover:text-white transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="fade-in-up stagger-delay-3 pt-8">
              <p className="text-sm text-charcoal-black/60 mb-6 uppercase tracking-wide">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap gap-8 text-charcoal-black/70">
                <div className="text-sm font-medium">Fortune 500 Companies</div>
                <div className="text-sm font-medium">Infrastructure Projects</div>
                <div className="text-sm font-medium">Energy Sector Leaders</div>
                <div className="text-sm font-medium">Government Partnerships</div>
              </div>
            </div>
          </div>

          {/* Animation Space - Right Side (40%) */}
          <div className="lg:col-span-2 relative">
            <div className="animation-container relative w-full h-[600px] lg:h-[700px] fade-in-up stagger-delay-4">
              
              {/* Main Animation Container */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-light-gray/30 rounded-3xl shadow-2xl overflow-hidden">
                
                {/* GIF/Animation Space - Ready for content */}
                <div className="absolute inset-8 bg-white rounded-2xl shadow-inner flex items-center justify-center">
                  {/* Placeholder for GIF or custom animation */}
                  <div className="text-center">
                    <div className="w-32 h-32 bg-primary-yellow/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-16 h-16 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-charcoal-black/60 text-sm">
                      Animation Space Ready
                    </p>
                  </div>
                </div>
                
                {/* Floating Elements Around Animation */}
                <div className="absolute top-16 left-16 w-12 h-12 bg-primary-yellow rounded-full floating-animation opacity-60"></div>
                <div className="absolute top-32 right-12 w-8 h-8 bg-primary-yellow/80 rounded-full coin-float stagger-delay-1"></div>
                <div className="absolute bottom-32 left-12 w-16 h-16 bg-primary-yellow/40 rounded-full floating-animation stagger-delay-2"></div>
                <div className="absolute bottom-16 right-16 w-20 h-20 bg-primary-yellow/30 rounded-full coin-float stagger-delay-3"></div>
                
                {/* Geometric accent shapes */}
                <div className="absolute top-20 right-1/4 w-6 h-6 bg-charcoal-black/20 transform rotate-45 floating-animation stagger-delay-4"></div>
                <div className="absolute bottom-24 left-1/4 w-4 h-4 bg-primary-yellow/60 transform rotate-12 coin-float stagger-delay-5"></div>
                
              </div>
              
              {/* Animation Space Label */}
              <div className="absolute -bottom-8 left-0 right-0 text-center">
                <p className="text-xs text-charcoal-black/40 uppercase tracking-wide">
                  Ready for GIF • Lottie • CSS Animations
                </p>
              </div>
              
            </div>
          </div>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-delay-6">
          <div className="w-6 h-10 border-2 border-charcoal-black/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-yellow rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;