import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { initializeAnimations } from '@/utils/animations';
import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import MissionVision from '@/components/about/MissionVision';
import CoreValues from '@/components/about/CoreValues';
import CompanyJourney from '@/components/about/CompanyJourney';
import Leadership from '@/components/about/Leadership';
import GlobalPresence from '@/components/about/GlobalPresence';
import Recognition from '@/components/about/Recognition';
import AboutCTA from '@/components/about/AboutCTA';

const About = () => {
  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <CoreValues />
      <CompanyJourney />
      <Leadership />
      <GlobalPresence />
      <Recognition />
      <AboutCTA />
      <Footer />
    </div>
  );
};

export default About;