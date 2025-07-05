import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MissionVision = () => {
  return (
    <section className="section-padding bg-background">
      <div className="content-width container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 fade-in-up">Our Purpose</h2>
          <p className="body-text text-xl text-light-gray max-w-3xl mx-auto fade-in-up stagger-delay-1">
            Driving meaningful change through strategic financial solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission Card */}
          <Card className="bg-card rounded-3xl p-8 border-t-4 border-rich-gold shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up">
            <CardHeader className="pb-6">
              <CardTitle className="heading-md text-foreground">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-text text-light-gray">
                To empower businesses, governments, and institutions by delivering innovative and strategic financial solutions that catalyze sustainable growth, long-term impact, and inclusive development.
              </p>
            </CardContent>
          </Card>

          {/* Vision Card */}
          <Card className="bg-card rounded-3xl p-8 border-t-4 border-rich-gold shadow-lg hover:shadow-xl transition-all duration-300 fade-in-up stagger-delay-1">
            <CardHeader className="pb-6">
              <CardTitle className="heading-md text-foreground">Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="body-text text-light-gray">
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