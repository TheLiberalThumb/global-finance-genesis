import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MissionVision = () => {
  return (
    <section className="py-24 lg:py-32 bg-light-gray">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 fade-in-up">Our Purpose</h2>
          <p className="body-text text-xl text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Driving meaningful change through strategic financial solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <Card className="bg-white border-t-4 border-primary-yellow p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up">
            <CardHeader className="pb-6">
              <CardTitle className="heading-md">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-text text-charcoal-black/80">
                To empower businesses, governments, and institutions by delivering innovative and strategic financial solutions that catalyze sustainable growth, long-term impact, and inclusive development.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="bg-white border-t-4 border-primary-yellow p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up stagger-delay-1">
            <CardHeader className="pb-6">
              <CardTitle className="heading-md">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-text text-charcoal-black/80">
                To become a trusted global investment partner, consistently recognized for transforming bold ideas into high-impact, scalable, and financially rewarding ventures.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;