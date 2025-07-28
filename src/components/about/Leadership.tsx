
import { Button } from '@/components/ui/button';
import { Users, Award, Globe } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
            Meet the Visionaries Behind Our Success
          </h2>
          <p className="text-lg md:text-xl text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Our leadership team combines decades of experience in corporate finance, strategic consulting, and international business development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Mike Adesokan */}
          <div className="text-center group scroll-fade-up">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rich-gold/20 group-hover:border-rich-gold transition-all duration-300">
                <img 
                  src="/lovable-uploads/af57b1b8-2c82-480b-a009-f3cb347529a7.png" 
                  alt="Mike Adesokan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-rich-gold rounded-full flex items-center justify-center floating-animation">
                <Users className="w-6 h-6 text-dark-navy" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 text-foreground">Mike Adesokan</h3>
            <p className="text-rich-gold mb-4 font-semibold text-lg">Chief Executive Officer</p>
            <p className="text-light-gray">
              15+ years in corporate finance and strategic investments across emerging markets.
            </p>
          </div>

          {/* Rebecca Adesokan */}
          <div className="text-center group scroll-fade-up scroll-stagger-1">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rich-gold/20 group-hover:border-rich-gold transition-all duration-300">
                <img 
                  src="/lovable-uploads/df372e0c-7e39-4d4d-88a9-df1f52474453.png" 
                  alt="Rebecca Adesokan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-rich-gold rounded-full flex items-center justify-center floating-animation stagger-delay-1">
                <Award className="w-6 h-6 text-dark-navy" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 text-foreground">Rebecca Adesokan</h3>
            <p className="text-rich-gold mb-4 font-semibold text-lg">Executive Director</p>
            <p className="text-light-gray">
              Expert in public-private partnerships and infrastructure financing.
            </p>
          </div>

          {/* Adeola Emmanuel */}
          <div className="text-center group scroll-fade-up scroll-stagger-2">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rich-gold/20 group-hover:border-rich-gold transition-all duration-300">
                <img 
                  src="/lovable-uploads/f5213e80-ea4e-4612-a412-2b4ecba22332.png" 
                  alt="Adeola Emmanuel" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-rich-gold rounded-full flex items-center justify-center floating-animation stagger-delay-2">
                <Globe className="w-6 h-6 text-dark-navy" />
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 text-foreground">Adeola Emmanuel</h3>
            <p className="text-rich-gold mb-4 font-semibold text-lg">Business Development Manager</p>
            <p className="text-light-gray">
              Specialist in emerging markets and innovative sector growth opportunities.
            </p>
          </div>
        </div>

        <div className="text-center scroll-fade-up scroll-stagger-3">
          <Button variant="cta-secondary" asChild>
            <a href="https://calendly.com/adesokankunle" target="_blank" rel="noopener noreferrer">
              Discuss Your Project
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
