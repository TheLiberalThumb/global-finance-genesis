import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageSection from '@/components/ImageSection';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import Team from '@/components/Team';
import ContactCTA from '@/components/ContactCTA';
import TrustIndicators from '@/components/TrustIndicators';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ImageSection />
        <Services />
        <Statistics />
        <Team />
        <ContactCTA />
      </main>
      <TrustIndicators />
      <Footer />
    </div>
  );
};

export default Index;
