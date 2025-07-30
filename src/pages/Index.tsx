
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustIndicators from '@/components/TrustIndicators';
import Team from '@/components/Team';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';
import Statistics from '@/components/Statistics';
import CaseStudies from '@/components/services/CaseStudies';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Statistics />
        <CaseStudies />
        <TrustIndicators />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
