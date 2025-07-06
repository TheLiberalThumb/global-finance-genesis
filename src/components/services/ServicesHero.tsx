import { Button } from '@/components/ui/button';
import FloatingElements from '@/components/FloatingElements';

const ServicesHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden min-h-[500px] lg:min-h-[600px]">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 z-20 relative scroll-fade-up">
            <h1 className="heading-xl mb-6 text-rich-gold">
              Financial Solutions That Transform
            </h1>
            <p className="body-text text-pure-white mb-8 scroll-fade-up scroll-stagger-1">
              Comprehensive corporate finance services designed to accelerate growth and maximize value across emerging markets through innovative strategies and expert execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 scroll-fade-up scroll-stagger-2">
              <Button variant="cta-primary" className="magnetic-button">
                Get Started
              </Button>
              <Button variant="cta-secondary" className="magnetic-button">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - 3D Animation */}
          <div className="order-1 lg:order-2 relative scroll-fade-up scroll-stagger-1">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] transform scale-90 sm:scale-95 lg:scale-100 origin-center">
              <iframe 
                src='https://my.spline.design/metalcryptocreditcard-YLo39Gr0MVn761iZlrr9ddvH/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                className="w-full h-full rounded-lg"
                style={{ 
                  border: 'none',
                  background: 'transparent'
                }}
                allowFullScreen
                loading='lazy'
                title="Interactive 3D Financial Technology Animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;