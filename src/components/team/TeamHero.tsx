import { Button } from '@/components/ui/button';
import FloatingElements from '@/components/FloatingElements';

const TeamHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden">
      <FloatingElements />
      
      {/* 2D Animation Section */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="team-animation-container">
          {/* Floating geometric shapes */}
          <div className="absolute top-20 left-10 w-16 h-16 bg-rich-gold rounded-full floating-animation"></div>
          <div className="absolute top-40 right-20 w-8 h-8 bg-rich-gold/60 transform rotate-45 coin-float"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-rich-gold/40 rounded-full floating-animation stagger-delay-1"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-rich-gold/20 rounded-full coin-float stagger-delay-2"></div>
          
          {/* Network connection lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--rich-gold))" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(var(--rich-gold))" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M100,150 Q200,100 300,150 T500,150" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                  className="floating-animation" />
            <path d="M150,300 Q300,250 450,300 T650,300" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none" 
                  className="coin-float" />
          </svg>
          
          {/* Leadership icons */}
          <div className="absolute top-1/3 left-1/4 w-10 h-10 bg-rich-gold/20 rounded-lg flex items-center justify-center floating-animation stagger-delay-3">
            <svg className="w-6 h-6 text-rich-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          
          <div className="absolute top-2/3 right-1/3 w-10 h-10 bg-rich-gold/20 rounded-lg flex items-center justify-center coin-float stagger-delay-4">
            <svg className="w-6 h-6 text-rich-gold" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 11H7v9h2v-9zm4 0h-2v9h2v-9zm4 0h-2v9h2v-9zm2-7H5v2h14V4zM6 19v2h12v-2H6z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto scroll-fade-up">
          <h1 className="heading-xl mb-6">
            <span className="text-pure-white">Visionary</span> <span className="text-rich-gold">Leadership</span>
          </h1>
          <p className="body-text text-pure-white mb-8 scroll-fade-up scroll-stagger-1">
            Meet the exceptional leaders driving innovation and excellence in global finance, bringing decades of experience and unwavering commitment to transforming businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center scroll-fade-up scroll-stagger-2">
            <Button variant="cta-primary" className="magnetic-button">
              Join Our Team
            </Button>
            <Button variant="cta-secondary" className="magnetic-button">
              View Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;