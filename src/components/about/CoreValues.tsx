import { Card, CardContent } from '@/components/ui/card';
import { Star, Lightbulb, Handshake, Target } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className="section-padding bg-background">
      <div className="wide-content container-padding">
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6 fade-in-up">Our Core Values</h2>
          <p className="body-text text-xl text-light-gray max-w-3xl mx-auto fade-in-up stagger-delay-1">
            The principles that drive every decision, partnership, and solution we deliver to create lasting impact
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Excellence */}
          <Card className="bg-card rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-rich-gold/20">
            <CardContent className="space-y-8">
              <div className="w-24 h-24 bg-rich-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Star className="w-12 h-12 text-dark-navy" />
              </div>
              <h3 className="heading-md text-foreground font-semibold">Excellence</h3>
              <p className="body-text text-light-gray leading-relaxed">
                Upholding the highest standards of ethics, accountability, and compliance in every transaction to ensure exceptional outcomes.
              </p>
            </CardContent>
          </Card>

          {/* Innovation */}
          <Card className="bg-card rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-rich-gold/20">
            <CardContent className="space-y-8">
              <div className="w-24 h-24 bg-rich-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Lightbulb className="w-12 h-12 text-dark-navy" />
              </div>
              <h3 className="heading-md text-foreground font-semibold">Innovation</h3>
              <p className="body-text text-light-gray leading-relaxed">
                Leveraging cutting-edge financial strategies and technologies to deliver superior outcomes and drive market evolution.
              </p>
            </CardContent>
          </Card>

          {/* Partnership */}
          <Card className="bg-card rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-rich-gold/20">
            <CardContent className="space-y-8">
              <div className="w-24 h-24 bg-rich-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Handshake className="w-12 h-12 text-dark-navy" />
              </div>
              <h3 className="heading-md text-foreground font-semibold">Partnership</h3>
              <p className="body-text text-light-gray leading-relaxed">
                Building lasting relationships based on trust, transparency, and shared success that create mutual value.
              </p>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="bg-card rounded-3xl p-10 text-center shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border border-rich-gold/20">
            <CardContent className="space-y-8">
              <div className="w-24 h-24 bg-rich-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <Target className="w-12 h-12 text-dark-navy" />
              </div>
              <h3 className="heading-md text-foreground font-semibold">Impact</h3>
              <p className="body-text text-light-gray leading-relaxed">
                Creating measurable value that drives sustainable growth and transforms industries for lasting positive change.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;