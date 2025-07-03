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
    <section ref={ref} className="py-20 lg:py-32 bg-contemporary-blue relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Results That Speak
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our commitment to excellence has delivered measurable impact for clients worldwide
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${inView ? 'animate-count-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Number */}
              <div className="mb-4">
                <span className="font-inter font-bold text-3xl md:text-4xl lg:text-5xl text-primary-yellow block">
                  {stat.number}
                </span>
              </div>

              {/* Label */}
              <h3 className="font-inter font-semibold text-lg text-white mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-white/70 font-inter leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-xl text-white/80 mb-8 font-inter">
            Join the companies that trust us to deliver exceptional results
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/case-studies" 
              className="inline-flex items-center px-8 py-4 bg-white text-contemporary-blue font-semibold text-lg rounded-3xl hover:bg-white/90 transition-all duration-300 hover:scale-105"
            >
              View Case Studies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold text-lg rounded-3xl hover:bg-white hover:text-contemporary-blue transition-all duration-300 hover:scale-105"
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