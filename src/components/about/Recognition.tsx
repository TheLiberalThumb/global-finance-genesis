import { Card, CardContent } from '@/components/ui/card';
import { CircleCheck, Award, Globe, Target } from 'lucide-react';

const Recognition = () => {
  return (
    <section className="py-24 lg:py-32 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 fade-in-up">Recognition & Credentials</h2>
          <p className="body-text text-xl text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Trusted by regulators, certified by industry leaders, and recognized for excellence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* SEC Licensed */}
          <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <CircleCheck className="w-10 h-10 text-charcoal-black" />
              </div>
              <h3 className="heading-md">SEC Licensed</h3>
              <p className="body-text text-charcoal-black/70">Securities & Exchange Commission Nigeria</p>
            </CardContent>
          </Card>

          {/* ISO Certified */}
          <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-1">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-charcoal-black" />
              </div>
              <h3 className="heading-md">ISO Certified</h3>
              <p className="body-text text-charcoal-black/70">Quality Management Systems</p>
            </CardContent>
          </Card>

          {/* Global Partners */}
          <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-2">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-10 h-10 text-charcoal-black" />
              </div>
              <h3 className="heading-md">Global Partners</h3>
              <p className="body-text text-charcoal-black/70">Singapore, Kuwait, UAE</p>
            </CardContent>
          </Card>

          {/* ESG Compliant */}
          <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-3">
            <CardContent className="space-y-4">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-charcoal-black" />
              </div>
              <h3 className="heading-md">ESG Compliant</h3>
              <p className="body-text text-charcoal-black/70">Environmental, Social & Governance</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Recognition;