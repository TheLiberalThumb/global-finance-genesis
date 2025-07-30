
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
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/mike-adesokan-684a7878/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0 w-10 h-10 bg-dark-navy rounded-full flex items-center justify-center text-pure-white hover:bg-rich-gold hover:text-dark-navy hover:scale-110 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 text-foreground">Mike Adesokan</h3>
            <p className="text-rich-gold mb-4 font-semibold text-lg">Chief Executive Officer</p>
            <p className="text-light-gray">
              Visionary leader with over 15 years of experience in corporate finance and strategic investments. Mike has led billion-dollar transactions across multiple sectors.
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
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/rebecca-adesokan-8a39b6374/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0 w-10 h-10 bg-dark-navy rounded-full flex items-center justify-center text-pure-white hover:bg-rich-gold hover:text-dark-navy hover:scale-110 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 text-foreground">Rebecca Adesokan</h3>
            <p className="text-rich-gold mb-4 font-semibold text-lg">Executive Director</p>
            <p className="text-light-gray">
              Strategic architect specializing in public-private partnerships and infrastructure financing. Rebecca brings deep expertise in complex capital structures.
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
              {/* LinkedIn Icon */}
              <a
                href="http://www.linkedin.com/in/adeola-emmanuel-087947193"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 right-0 w-10 h-10 bg-dark-navy rounded-full flex items-center justify-center text-pure-white hover:bg-rich-gold hover:text-dark-navy hover:scale-110 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold mb-2 text-foreground">Adeola Emmanuel</h3>
            <p className="text-rich-gold mb-4 font-semibold text-lg">Business Development Manager</p>
            <p className="text-light-gray">
              Dynamic business development professional focused on identifying and executing growth opportunities in emerging markets and innovative sectors.
            </p>
          </div>
        </div>

        <div className="text-center scroll-fade-up scroll-stagger-3">
          <Button variant="cta-secondary" asChild>
            <a href="mailto:hello@gissionglobal.com">
              Discuss Your Project
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
