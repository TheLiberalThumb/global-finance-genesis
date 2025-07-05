import { Button } from '@/components/ui/button';
import { Users, Award, Globe } from 'lucide-react';

const Leadership = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-width container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 fade-in-up">Meet the Visionaries Behind Our Success</h2>
          <p className="body-text text-xl text-light-gray max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Our leadership team combines decades of experience in corporate finance, strategic consulting, and international business development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Mike Adesokan */}
          <div className="text-center group profile-card scroll-triggered">
            <div className="relative mb-6 profile-image">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rich-gold/20 group-hover:border-rich-gold transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80" 
                  alt="Mike Adesokan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="profile-overlay"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-rich-gold rounded-full flex items-center justify-center animate-bounce-slow">
                <Users className="w-6 h-6 text-dark-navy" />
              </div>
            </div>
            <h3 className="heading-md mb-2 text-foreground">Mike Adesokan</h3>
            <p className="body-text text-rich-gold mb-4 font-semibold">Chief Executive Officer</p>
            <p className="body-text text-light-gray">
              15+ years in corporate finance and strategic investments across emerging markets.
            </p>
          </div>

          {/* Rebecca Adesokan */}
          <div className="text-center group fade-in-up stagger-delay-1">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rich-gold/20 group-hover:border-rich-gold transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612e2c3?w=400&h=400&fit=crop&crop=face&auto=format&q=80" 
                  alt="Rebecca Adesokan" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-rich-gold rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-dark-navy" />
              </div>
            </div>
            <h3 className="heading-md mb-2 text-foreground">Rebecca Adesokan</h3>
            <p className="body-text text-rich-gold mb-4 font-semibold">Executive Director</p>
            <p className="body-text text-light-gray">
              Expert in public-private partnerships and infrastructure financing.
            </p>
          </div>

          {/* Adeola Emmanuel */}
          <div className="text-center group fade-in-up stagger-delay-2">
            <div className="relative mb-6">
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-rich-gold/20 group-hover:border-rich-gold transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80" 
                  alt="Adeola Emmanuel" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-rich-gold rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-dark-navy" />
              </div>
            </div>
            <h3 className="heading-md mb-2 text-foreground">Adeola Emmanuel</h3>
            <p className="body-text text-rich-gold mb-4 font-semibold">Business Development Manager</p>
            <p className="body-text text-light-gray">
              Specialist in emerging markets and innovative sector growth opportunities.
            </p>
          </div>
        </div>

        <div className="text-center fade-in-up stagger-delay-3">
          <Button variant="cta-secondary">
            Meet Our Full Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;