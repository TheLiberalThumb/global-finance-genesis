

import { useCounterAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';

const Statistics = () => {
  const projectsCounter = useCounterAnimation(100, 2000, 0);
  const fundingCounter = useCounterAnimation(2.4, 2000, 200);
  const satisfactionCounter = useCounterAnimation(98, 2000, 400);
  const experienceCounter = useCounterAnimation(15, 2000, 600);

  const formatNumber = (value: number, type: 'projects' | 'funding' | 'satisfaction' | 'experience') => {
    switch (type) {
      case 'projects':
        return `${Math.floor(value)}+`;
      case 'funding':
        return `$${value.toFixed(1)}B+`;
      case 'satisfaction':
        return `${Math.floor(value)}%`;
      case 'experience':
        return `${Math.floor(value)}+`;
      default:
        return Math.floor(value).toString();
    }
  };

  const stats = [
    {
      count: projectsCounter.count,
      number: formatNumber(projectsCounter.count, 'projects'),
      label: "Projects Completed",
      description: "Successfully delivered across infrastructure, energy, and emerging sectors",
      ref: projectsCounter.ref
    },
    {
      count: fundingCounter.count,
      number: formatNumber(fundingCounter.count, 'funding'),
      label: "In Funding Secured",
      description: "Capital raised for our clients through strategic partnerships",
      ref: fundingCounter.ref
    },
    {
      count: satisfactionCounter.count,
      number: formatNumber(satisfactionCounter.count, 'satisfaction'),
      label: "Client Satisfaction Rate",
      description: "Proven track record of delivering exceptional results",
      ref: satisfactionCounter.ref
    },
    {
      count: experienceCounter.count,
      number: formatNumber(experienceCounter.count, 'experience'),
      label: "Years of Experience",
      description: "Deep expertise in corporate finance and investment advisory",
      ref: experienceCounter.ref
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-deep-navy rounded-full hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-rich-gold rounded-full hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-deep-navy rounded-full hidden md:block"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-rich-gold rounded-full hidden md:block"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-fade-up">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6">
            Results That Speak
          </h2>
          <p className="font-inter text-base sm:text-lg md:text-xl text-light-gray max-w-4xl mx-auto leading-relaxed px-4 sm:px-0 scroll-fade-up scroll-stagger-1">
            Our commitment to excellence has delivered measurable impact for clients worldwide
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={stat.ref}
              className={`wlf-card-premium text-center scroll-fade-up scroll-stagger-${Math.min(index + 1, 6)}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300 border-2 border-rich-gold">
                <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {index === 0 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                  {index === 1 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  )}
                  {index === 2 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  )}
                  {index === 3 && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                </svg>
              </div>

              {/* Number */}
              <div className="mb-4">
                <span className="font-playfair font-bold text-4xl lg:text-5xl text-rich-gold block">
                  {stat.number}
                </span>
              </div>

              {/* Label */}
              <h3 className="font-inter font-medium text-lg text-card-foreground mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-light-gray font-inter text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 scroll-fade-up scroll-stagger-5">
          <p className="font-inter text-lg text-light-gray mb-8 max-w-3xl mx-auto">
            Join the companies that trust us to deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="cta-secondary" asChild>
              <a href="/case-studies" className="inline-flex items-center">
                View Case Studies
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Button>
            <Button variant="cta-primary" asChild>
              <a href="/contact" className="inline-flex items-center">
                Start Your Project
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;

