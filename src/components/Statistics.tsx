import { useState, useEffect, useRef } from 'react';

const Statistics = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "100+",
      label: "Projects Completed",
      description: "Successfully delivered across infrastructure, energy, and emerging sectors"
    },
    {
      number: "$2B+",
      label: "In Funding Secured",
      description: "Capital raised for our clients through strategic partnerships"
    },
    {
      number: "98%",
      label: "Client Satisfaction Rate",
      description: "Proven track record of delivering exceptional results"
    },
    {
      number: "15+",
      label: "Years of Experience",
      description: "Deep expertise in corporate finance and investment advisory"
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-light-gray rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-yellow rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-light-gray rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-primary-yellow rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-black mb-6">
            Results That Speak
          </h2>
          <p className="font-inter text-lg md:text-xl text-charcoal-black max-w-4xl mx-auto leading-relaxed">
            Our commitment to excellence has delivered measurable impact for clients worldwide
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`bg-white rounded-lg p-8 text-center border border-light-gray/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${inView ? 'animate-count-up' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${index * 0.2}s`,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <span className="font-playfair font-bold text-4xl lg:text-5xl text-charcoal-black block">
                  {stat.number}
                </span>
              </div>

              {/* Label */}
              <h3 className="font-inter font-medium text-lg text-charcoal-black mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-charcoal-black/70 font-inter text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="font-inter text-lg text-charcoal-black/80 mb-8 max-w-3xl mx-auto">
            Join the companies that trust us to deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/case-studies" 
              className="btn-primary inline-flex items-center justify-center"
            >
              View Case Studies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/contact" 
              className="btn-secondary inline-flex items-center justify-center"
            >
              Start Your Project
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;