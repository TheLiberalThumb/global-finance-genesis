import { Card, CardContent } from '@/components/ui/card';
import { Star, Lightbulb, Handshake, Target } from 'lucide-react';

const CoreValues = () => {
  return (
    <section className="section-padding bg-white">
      <div className="wide-content container-padding">
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-6 fade-in-up">What Drives Us</h2>
          <p className="body-text text-xl text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Our core values shape every decision, every partnership, and every solution we deliver
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Excellence */}
          <Card className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group scroll-triggered">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow">
                <Star className="w-10 h-10 text-charcoal-black" />
              </div>
              <h3 className="heading-md">Excellence</h3>
              <p className="body-text text-charcoal-black/80">
                We uphold the highest standards of ethics, accountability, and compliance in every transaction.
              </p>
            </CardContent>
          </Card>

          {/* Innovation */}
          <Card className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group scroll-triggered stagger-delay-1">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 animate-pulse-custom">
                <Lightbulb className="w-10 h-10 text-charcoal-black" />
              </div>
              <h3 className="heading-md">Innovation</h3>
              <p className="body-text text-charcoal-black/80">
                We leverage cutting-edge financial strategies and technologies to deliver superior outcomes.
              </p>
            </CardContent>
          </Card>

          {/* Partnership */}
          <Card className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-2">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Handshake className="w-10 h-10 text-charcoal-black" />
              </div>
              <h3 className="heading-md">Partnership</h3>
              <p className="body-text text-charcoal-black/80">
                We build lasting relationships based on trust, transparency, and shared success.
              </p>
            </CardContent>
          </Card>

          {/* Impact */}
          <Card className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-3">
            <CardContent className="space-y-6">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-charcoal-black" />
              </div>
              <h3 className="heading-md">Impact</h3>
              <p className="body-text text-charcoal-black/80">
                Our solutions create measurable value that drives growth and transforms industries.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;