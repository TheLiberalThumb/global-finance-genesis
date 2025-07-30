
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, Handshake, Target } from 'lucide-react';

const GlobalPresence = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="heading-lg text-foreground mb-6">Global Presence</h2>
          <p className="body-text text-xl text-light-gray max-w-4xl mx-auto scroll-fade-up scroll-stagger-1">
            Transforming businesses across three continents with our extensive network of trusted partners and local expertise.
          </p>
        </div>
        
        {/* Global Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center scroll-fade-up group">
            <div className="w-24 h-24 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
              <Globe className="w-12 h-12 text-dark-navy" />
            </div>
            <div className="heading-md text-foreground font-bold mb-2">3</div>
            <div className="body-text text-light-gray font-medium">Continents</div>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-1 group">
            <div className="w-24 h-24 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
              <Users className="w-12 h-12 text-dark-navy" />
            </div>
            <div className="heading-md text-foreground font-bold mb-2">10+</div>
            <div className="body-text text-light-gray font-medium">Countries</div>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-2 group">
            <div className="w-24 h-24 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
              <Handshake className="w-12 h-12 text-dark-navy" />
            </div>
            <div className="heading-md text-foreground font-bold mb-2">50+</div>
            <div className="body-text text-light-gray font-medium">Strategic Partners</div>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-3 group">
            <div className="w-24 h-24 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300 hover:shadow-xl">
              <Target className="w-12 h-12 text-dark-navy" />
            </div>
            <div className="heading-md text-foreground font-bold mb-2">24/7</div>
            <div className="body-text text-light-gray font-medium">Global Support</div>
          </div>
        </div>

        {/* Regional Highlights */}
        <div className="grid md:grid-cols-3 gap-8 scroll-fade-up scroll-stagger-4">
          <Card className="bg-card rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-rich-gold group">
            <CardContent className="space-y-6">
              <h3 className="heading-md text-foreground font-semibold group-hover:text-rich-gold transition-colors duration-300">Lagos, Nigeria</h3>
              <p className="body-text text-rich-gold font-medium text-lg">Headquarters</p>
              <p className="body-text text-light-gray/80">Infrastructure and energy investments driving sustainable development across the continent</p>
            </CardContent>
          </Card>
          <Card className="bg-card rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-rich-gold group">
            <CardContent className="space-y-6">
              <h3 className="heading-md text-foreground font-semibold group-hover:text-rich-gold transition-colors duration-300">United Kingdom</h3>
              <p className="body-text text-rich-gold font-medium text-lg">Regional Office</p>
              <p className="body-text text-light-gray/80">Strategic partnerships and funding solutions for European market expansion</p>
            </CardContent>
          </Card>
          <Card className="bg-card rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-rich-gold group">
            <CardContent className="space-y-6">
              <h3 className="heading-md text-foreground font-semibold group-hover:text-rich-gold transition-colors duration-300">Singapore</h3>
              <p className="body-text text-rich-gold font-medium text-lg">Advisory Hub</p>
              <p className="body-text text-light-gray/80">Financial services and consulting expertise for dynamic Asian markets</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
