import { Button } from '@/components/ui/button';
import FloatingElements from '@/components/FloatingElements';

const ServicesHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden hero-gradient">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto scroll-fade-up">
          <h1 className="heading-xl mb-6 text-rich-gold">
            Financial Solutions That Transform
          </h1>
          <p className="body-text text-pure-white mb-8 scroll-fade-up scroll-stagger-1">
            Comprehensive corporate finance services designed to accelerate growth and maximize value through innovative strategies and expert execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center scroll-fade-up scroll-stagger-2">
            <Button variant="cta-primary" className="magnetic-button">
              Explore Our Services
            </Button>
            <Button variant="cta-secondary" className="magnetic-button">
              Schedule Consultation
            </Button>
          </div>
          
          {/* 3D Spline Animation */}
          <div className="mt-16 sm:mt-20 lg:mt-24 scroll-fade-up scroll-stagger-3">
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-dark-navy/30 rounded-xl border border-rich-gold/20 hover:border-rich-gold/50 transition-all duration-500 shadow-lg hover:shadow-xl backdrop-blur-sm">
                <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8] relative overflow-hidden rounded-xl">
                  <iframe 
                    src='https://my.spline.design/metalcryptocreditcard-YLo39Gr0MVn761iZlrr9ddvH/' 
                    frameBorder='0' 
                    width='100%' 
                    height='100%'
                    className="absolute inset-0 w-full h-full"
                    style={{
                      border: 'none',
                      borderRadius: '12px',
                      minHeight: '300px'
                    }}
                    allowFullScreen
                    loading='lazy'
                    title="Interactive 3D Financial Technology Animation"
                  />
                </div>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-xl bg-rich-gold/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              
              <div className="text-center mt-8 scroll-fade-up scroll-stagger-4">
                <p className="text-light-gray text-sm font-inter">
                  Interactive 3D visualization of our innovative financial technology solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;