import { Button } from '@/components/ui/button';

const AboutCTA = () => {
  return (
    <section className="py-24 lg:py-32 bg-charcoal-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-yellow/10 rounded-full floating-animation"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-yellow/15 rounded-full coin-float"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-yellow/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="heading-xl text-white mb-8 fade-in-up">
          Ready to Transform Your Business?
        </h2>
        <p className="body-text text-2xl text-white/80 mb-12 fade-in-up stagger-delay-1">
          Join the companies who trust us to turn their vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-delay-2">
          <Button className="btn-primary text-lg px-10 py-5">
            Start Your Journey
          </Button>
          <Button className="bg-white text-charcoal-black hover:bg-white/90 px-10 py-5 rounded-3xl font-medium transition-all duration-300 hover:scale-105 text-lg">
            Download Our Brochure
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;