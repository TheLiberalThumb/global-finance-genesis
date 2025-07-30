
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamHero from '@/components/team/TeamHero';
import ExecutiveLeadership from '@/components/team/ExecutiveLeadership';
import CompanyCulture from '@/components/team/CompanyCulture';
import CareerOpportunities from '@/components/team/CareerOpportunities';
import TeamStatistics from '@/components/team/TeamStatistics';

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <TeamHero />
      <ExecutiveLeadership />
      <CompanyCulture />
      <TeamStatistics />
      <CareerOpportunities />
      <Footer />
    </div>
  );
};

export default Team;
