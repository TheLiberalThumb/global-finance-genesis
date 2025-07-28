
import { useState, useEffect, useRef } from 'react';
import { DollarSign, Building, Calendar, Star } from 'lucide-react';

const StatisticsSection = () => {
  const [inView, setInView] = useState(false);
  const [counters, setCounters] = useState({
    capital: 0,
    projects: 0,
    years: 0,
    success: 0
  });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (!inView) return;

    const targets = { capital: 2.5, projects: 100, years: 15, success: 98 };
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targets).forEach((key, index) => {
      setTimeout(() => {
        const target = targets[key as keyof typeof targets];
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({
            ...prev,
            [key]: key === 'capital' ? Number(current.toFixed(1)) : Math.floor(current)
          }));
        }, stepTime);
      }, index * 200); // 0.2s stagger delay
    });
  }, [inView]);

  const stats = [
    {
      icon: DollarSign,
      value: counters.capital,
      suffix: 'B+',
      label: 'Capital Secured',
      description: 'In funding for transformative projects'
    },
    {
      icon: Building,
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Across emerging markets'
    },
    {
      icon: Calendar,
      value: counters.years,
      suffix: '+',
      label: 'Years Experience',
      description: 'In corporate finance'
    },
    {
      icon: Star,
      value: counters.success,
      suffix: '%',
      label: 'Client Success Rate',
      description: 'Proven track record'
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-24 lg:py-32 bg-dark-navy relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-rich-gold rounded-full hidden sm:block"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-rich-gold rounded-full hidden sm:block"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-rich-gold rounded-full hidden md:block"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-rich-gold rounded-full hidden md:block"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pure-white mb-6">
            Proven Results
          </h2>
          <p className="font-futura text-base sm:text-lg md:text-xl text-light-gray max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. We deliver exceptional outcomes for businesses across Africa and the Middle East.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center scroll-fade-up scroll-stagger-${Math.min(index + 1, 6)}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-dark-navy" />
              </div>

              {/* Number */}
              <div className="mb-4">
                <span className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl text-rich-gold block">
                  {stat.value === counters.capital ? `$${stat.value}` : stat.value}{stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="font-futura font-semibold text-lg sm:text-xl text-pure-white mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="font-futura text-sm text-light-gray leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
