import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Statistics from '@/components/Statistics';
import Team from '@/components/Team';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Statistics />
        <Team />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
