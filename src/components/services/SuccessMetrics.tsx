import { useState, useEffect } from 'react';

const SuccessMetrics = () => {
  const [counters, setCounters] = useState({
    funding: 0,
    projects: 0,
    satisfaction: 0,
    countries: 0
  });

  // Counter animation effect
  useEffect(() => {
    const targets = { funding: 2.4, projects: 100, satisfaction: 98, countries: 15 };
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
          [key]: key === 'funding' ? Number(current.toFixed(1)) : Math.floor(current)
        }));
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden section-morph">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Proven Track Record
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Our results speak for themselves. We've consistently delivered exceptional outcomes for clients across industries and geographies.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center scroll-fade-up scroll-stagger-1">
            <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-2">
              ${counters.funding}B+
            </div>
            <p className="font-inter text-sm text-light-gray">Funding Secured</p>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-2">
            <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-2">
              {counters.projects}+
            </div>
            <p className="font-inter text-sm text-light-gray">Projects Completed</p>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-3">
            <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-2">
              {counters.satisfaction}%
            </div>
            <p className="font-inter text-sm text-light-gray">Client Satisfaction</p>
          </div>
          <div className="text-center scroll-fade-up scroll-stagger-4">
            <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-2">
              {counters.countries}+
            </div>
            <p className="font-inter text-sm text-light-gray">Countries Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;