import { Card, CardContent } from '@/components/ui/card';
import { CircleCheck, Award, Globe, Target } from 'lucide-react';

const Recognition = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-width container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 fade-in-up">Recognition & Credentials</h2>
          <p className="body-text text-xl text-light-gray max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Trusted by regulators, certified by industry leaders, and recognized for excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SEC Licensed */}
          <Card className="bg-card rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up border border-rich-gold/20">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 bg-rich-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <CircleCheck className="w-10 h-10 text-dark-navy" />
              </div>
              <h3 className="heading-md text-foreground">SEC Licensed</h3>
              <p className="body-text text-light-gray">Securities & Exchange Commission Nigeria</p>
            </CardContent>
          </Card>

          {/* ISO Certified */}
          <Card className="bg-card rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-1 border border-rich-gold/20">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 bg-rich-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-dark-navy" />
              </div>
              <h3 className="heading-md text-foreground">ISO Certified</h3>
              <p className="body-text text-light-gray">Quality Management Systems</p>
            </CardContent>
          </Card>

          {/* Global Partners */}
          <Card className="bg-card rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-2 border border-rich-gold/20">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 bg-rich-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-dark-navy" />
              </div>
              <h3 className="heading-md text-foreground">Global Partners</h3>
              <p className="body-text text-light-gray">Singapore, Kuwait, UAE</p>
            </CardContent>
          </Card>

          {/* ESG Compliant */}
          <Card className="bg-card rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-3 border border-rich-gold/20">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 bg-rich-gold rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-dark-navy" />
              </div>
              <h3 className="heading-md text-foreground">ESG Compliant</h3>
              <p className="body-text text-light-gray">Environmental, Social & Governance</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Recognition;