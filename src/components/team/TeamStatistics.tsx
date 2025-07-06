import { useState, useEffect } from 'react';

const TeamStatistics = () => {
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    countries: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const targets = { experience: 50, projects: 200, countries: 25, satisfaction: 99 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key as keyof typeof targets];
      const increment = target / steps;
      let current = 0;
      
      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(i => true) as NodeJS.Timeout);
        }
        setCounters(prev => ({
          ...prev,
          [key]: Math.floor(current)
        }));
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Team Excellence
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Our team's collective expertise and commitment to excellence drives exceptional results for every client engagement.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center scroll-fade-up scroll-stagger-1">
            <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-2">
              {counters.experience}+
            </div>
            <p className="font-inter text-sm text-light-gray">Years Combined Experience</p>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-2">
            <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-2">
              {counters.projects}+
            </div>
            <p className="font-inter text-sm text-light-gray">Successful Projects</p>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-3">
            <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-2">
              {counters.countries}+
            </div>
            <p className="font-inter text-sm text-light-gray">Countries Served</p>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-4">
            <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-2">
              {counters.satisfaction}%
            </div>
            <p className="font-inter text-sm text-light-gray">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStatistics;