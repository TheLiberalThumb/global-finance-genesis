
import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';

const ContactCTA = () => {
  const magneticRef = useMagneticButton(0.2);

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-rich-gold/20 rounded-full floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-rich-gold/15 rounded-full coin-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rich-gold/10 rounded-full floating-animation stagger-delay-2"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-rich-gold/25 rounded-full coin-float stagger-delay-1"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="scroll-fade-up">
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="text-pure-white">Ready to Create Your </span>
              <span className="text-rich-gold">Success Story?</span>
            </h2>
            <p className="font-inter text-lg sm:text-xl text-light-gray mb-8 leading-relaxed scroll-fade-up scroll-stagger-1">
              Let's discuss how our proven expertise can drive transformational results for your business. Every great partnership starts with a conversation.
            </p>
            
            <div className="mb-8 scroll-fade-up scroll-stagger-2">
              <Button 
                ref={magneticRef}
                variant="cta-primary" 
                className="magnetic-button mb-6"
                asChild
              >
                <a href="https://calendly.com/adesokankunle" target="_blank" rel="noopener noreferrer">
                  Discuss Your Project
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-light-gray scroll-fade-up scroll-stagger-3">
              <div className="flex items-center">
                <svg className="w-4 h-4 text-rich-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Free consultation
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-rich-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Confidential discussion
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 text-rich-gold mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Expert guidance
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6 scroll-fade-up scroll-stagger-4">
            <div className="bg-dark-navy/60 backdrop-blur-sm border border-rich-gold/30 rounded-xl p-6 text-center hover:border-rich-gold/50 transition-all duration-300">
              <div className="w-12 h-12 bg-rich-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-rich-gold mb-1">98%</div>
              <p className="text-sm text-light-gray">Success Rate</p>
            </div>

            <div className="bg-dark-navy/60 backdrop-blur-sm border border-rich-gold/30 rounded-xl p-6 text-center hover:border-rich-gold/50 transition-all duration-300">
              <div className="w-12 h-12 bg-rich-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-rich-gold mb-1">$5B+</div>
              <p className="text-sm text-light-gray">Deployed</p>
            </div>

            <div className="bg-dark-navy/60 backdrop-blur-sm border border-rich-gold/30 rounded-xl p-6 text-center hover:border-rich-gold/50 transition-all duration-300">
              <div className="w-12 h-12 bg-rich-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-rich-gold mb-1">50+</div>
              <p className="text-sm text-light-gray">Projects</p>
            </div>

            <div className="bg-dark-navy/60 backdrop-blur-sm border border-rich-gold/30 rounded-xl p-6 text-center hover:border-rich-gold/50 transition-all duration-300">
              <div className="w-12 h-12 bg-rich-gold/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-2xl font-bold text-rich-gold mb-1">15+</div>
              <p className="text-sm text-light-gray">Countries</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
