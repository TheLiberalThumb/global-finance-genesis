
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ImageSection from '@/components/ImageSection';
import Services from '@/components/Services';
import TrustIndicators from '@/components/TrustIndicators';
import Team from '@/components/Team';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ImageSection />
        <Services />
        <TrustIndicators />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
