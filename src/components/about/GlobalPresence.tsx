import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Handshake, Target } from 'lucide-react';

const GlobalPresence = () => {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-black text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-white mb-6 fade-in-up">Where We Operate</h2>
          <p className="body-text text-xl text-white/80 max-w-4xl mx-auto fade-in-up stagger-delay-1">
            Our strong affiliations with reputable partners from Singapore, Kuwait, and the Middle East enable us to facilitate complex financial transactions across multiple jurisdictions.
          </p>
        </div>
        
        {/* Global Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center fade-in-up">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-10 h-10 text-charcoal-black" />
            </div>
            <div className="heading-md text-primary-yellow">3</div>
            <div className="body-text text-white/80">Continents</div>
          </div>
          <div className="text-center fade-in-up stagger-delay-1">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-charcoal-black" />
            </div>
            <div className="heading-md text-primary-yellow">10+</div>
            <div className="body-text text-white/80">Countries</div>
          </div>
          <div className="text-center fade-in-up stagger-delay-2">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Handshake className="w-10 h-10 text-charcoal-black" />
            </div>
            <div className="heading-md text-primary-yellow">50+</div>
            <div className="body-text text-white/80">Strategic Partners</div>
          </div>
          <div className="text-center fade-in-up stagger-delay-3">
            <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-10 h-10 text-charcoal-black" />
            </div>
            <div className="heading-md text-primary-yellow">24/7</div>
            <div className="body-text text-white/80">Global Support</div>
          </div>
        </div>

        {/* Regional Highlights */}
        <div className="grid md:grid-cols-3 gap-8 fade-in-up stagger-delay-4">
          <Card className="bg-white/10 backdrop-blur border border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300">
            <CardContent className="space-y-4">
              <h3 className="heading-md text-white">Africa</h3>
              <p className="body-text text-white/80">Nigeria • Lagos • Abuja</p>
              <p className="caption-text text-white/60">Infrastructure and energy investments</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur border border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300">
            <CardContent className="space-y-4">
              <h3 className="heading-md text-white">Middle East</h3>
              <p className="body-text text-white/80">Kuwait • UAE • Qatar</p>
              <p className="caption-text text-white/60">Strategic partnerships and funding</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur border border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300">
            <CardContent className="space-y-4">
              <h3 className="heading-md text-white">Asia Pacific</h3>
              <p className="body-text text-white/80">Singapore • Hong Kong</p>
              <p className="caption-text text-white/60">Financial services and consulting</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;