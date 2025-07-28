
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesGrid from '@/components/services/ServicesGrid';
import ProcessFlow from '@/components/services/ProcessFlow';
import SuccessMetrics from '@/components/services/SuccessMetrics';
import CaseStudies from '@/components/services/CaseStudies';
import ServicesImageSection from '@/components/services/ServicesImageSection';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <ProcessFlow />
      <SuccessMetrics />
      <CaseStudies />
      <ServicesImageSection />
      <ServicesCTA />
      <Footer />
    </div>
  );
};

export default Services;
