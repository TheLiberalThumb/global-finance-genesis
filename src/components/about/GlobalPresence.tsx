import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Handshake, Target } from 'lucide-react';

const GlobalPresence = () => {
  return (
    <section className="section-padding bg-white">
      <div className="content-width container-padding">
        <div className="text-center mb-20">
          <h2 className="heading-lg text-charcoal-black mb-6 fade-in-up">Global Presence</h2>
          <p className="body-text text-xl text-charcoal-black/70 max-w-4xl mx-auto fade-in-up stagger-delay-1">
            Transforming businesses across three continents with our extensive network of trusted partners and local expertise.
          </p>
        </div>
        
        {/* Global Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center fade-in-up group">
            <div className="w-24 h-24 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
              <Globe className="w-12 h-12 text-charcoal-black" />
            </div>
            <div className="heading-md text-charcoal-black font-bold mb-2">3</div>
            <div className="body-text text-charcoal-black/70 font-medium">Continents</div>
          </div>
          <div className="text-center fade-in-up stagger-delay-1 group">
            <div className="w-24 h-24 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
              <Users className="w-12 h-12 text-charcoal-black" />
            </div>
            <div className="heading-md text-charcoal-black font-bold mb-2">10+</div>
            <div className="body-text text-charcoal-black/70 font-medium">Countries</div>
          </div>
          <div className="text-center fade-in-up stagger-delay-2 group">
            <div className="w-24 h-24 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
              <Handshake className="w-12 h-12 text-charcoal-black" />
            </div>
            <div className="heading-md text-charcoal-black font-bold mb-2">50+</div>
            <div className="body-text text-charcoal-black/70 font-medium">Strategic Partners</div>
          </div>
          <div className="text-center fade-in-up stagger-delay-3 group">
            <div className="w-24 h-24 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
              <Target className="w-12 h-12 text-charcoal-black" />
            </div>
            <div className="heading-md text-charcoal-black font-bold mb-2">24/7</div>
            <div className="body-text text-charcoal-black/70 font-medium">Global Support</div>
          </div>
        </div>

        {/* Regional Highlights */}
        <div className="grid md:grid-cols-3 gap-8 fade-in-up stagger-delay-4">
          <Card className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-primary-yellow group">
            <CardContent className="space-y-6">
              <h3 className="heading-md text-charcoal-black font-semibold group-hover:text-primary-yellow transition-colors duration-300">Africa</h3>
              <p className="body-text text-charcoal-black/80 font-medium text-lg">Nigeria • Lagos • Abuja</p>
              <p className="body-text text-charcoal-black/60">Infrastructure and energy investments driving sustainable development across the continent</p>
            </CardContent>
          </Card>
          <Card className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-primary-yellow group">
            <CardContent className="space-y-6">
              <h3 className="heading-md text-charcoal-black font-semibold group-hover:text-primary-yellow transition-colors duration-300">Middle East</h3>
              <p className="body-text text-charcoal-black/80 font-medium text-lg">Kuwait • UAE • Qatar</p>
              <p className="body-text text-charcoal-black/60">Strategic partnerships and funding solutions for regional economic growth</p>
            </CardContent>
          </Card>
          <Card className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-primary-yellow group">
            <CardContent className="space-y-6">
              <h3 className="heading-md text-charcoal-black font-semibold group-hover:text-primary-yellow transition-colors duration-300">Asia Pacific</h3>
              <p className="body-text text-charcoal-black/80 font-medium text-lg">Singapore • Hong Kong</p>
              <p className="body-text text-charcoal-black/60">Financial services and consulting expertise for dynamic Asian markets</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;