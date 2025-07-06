import { Button } from '@/components/ui/button';
import FloatingElements from '@/components/FloatingElements';

const ServicesHero = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* 3D Animation Background - Centered */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="w-full h-full max-w-[800px] sm:max-w-[900px] lg:max-w-[1000px] xl:max-w-[1200px] transform scale-75 sm:scale-85 md:scale-90 lg:scale-95 xl:scale-100">
          <iframe 
            src='https://my.spline.design/metalcryptocreditcard-YLo39Gr0MVn761iZlrr9ddvH/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            className="w-full h-full"
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

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[0.5px]"></div>

      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-left scroll-fade-up">
          <h1 className="heading-xl mb-6">
            <span className="text-pure-white">Financial </span>
            <span className="text-rich-gold">Solutions</span>
            <span className="text-pure-white"> That Transform</span>
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
      </div>
    </section>
  );
};

export default ServicesHero;