import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-24 h-24 bg-primary/10 rounded-full floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-contemporary-blue/10 rounded-full coin-float"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-warm-red/10 rounded-full floating-animation stagger-delay-2"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full coin-float stagger-delay-3"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight text-charcoal-black fade-in-up">
              Your business{' '}
              <span className="text-contemporary-blue">deserves</span>{' '}
              more
            </h1>
            
            <p className="mt-8 text-xl md:text-2xl lg:text-2xl text-medium-gray leading-relaxed fade-in-up stagger-delay-1">
              Get the most out of your capital with smart investment solutions and 
              personalized advisory services to build long-term value.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start fade-in-up stagger-delay-2">
              <Button className="btn-primary text-lg px-10 py-5">
                Start Your Journey
              </Button>
              <Button className="btn-secondary text-lg px-10 py-5">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 fade-in-up stagger-delay-3">
              <p className="text-sm text-medium-gray mb-6 font-inter">
                Trusted by leading companies worldwide
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 opacity-60">
                <div className="text-charcoal-black font-semibold text-lg">Fortune 500</div>
                <div className="text-charcoal-black font-semibold text-lg">Infrastructure</div>
                <div className="text-charcoal-black font-semibold text-lg">Energy Sector</div>
                <div className="text-charcoal-black font-semibold text-lg">Government</div>
              </div>
            </div>
          </div>

          {/* Hero Stats Cards */}
          <div className="relative fade-in-up stagger-delay-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Stats Card 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-charcoal-black">$2B+</h3>
                <p className="text-medium-gray font-inter">Funding Secured</p>
              </div>

              {/* Stats Card 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover sm:mt-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-contemporary-blue rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-charcoal-black">100+</h3>
                <p className="text-medium-gray font-inter">Projects Completed</p>
              </div>

              {/* Stats Card 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-warm-red rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-charcoal-black">98%</h3>
                <p className="text-medium-gray font-inter">Client Satisfaction</p>
              </div>

              {/* Stats Card 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover sm:mt-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-playfair font-semibold text-2xl text-charcoal-black">15+</h3>
                <p className="text-medium-gray font-inter">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;