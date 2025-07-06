import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import FloatingElements from '@/components/FloatingElements';
import { useState, useEffect } from 'react';

const Services = () => {
  const magneticRef = useMagneticButton(0.2);
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

  const services = [
    {
      title: "Corporate Finance Advisory",
      description: "End-to-end advisory services for complex financial transactions, strategic restructuring, and capital optimization initiatives.",
      process: "Assessment → Strategy → Execution → Integration",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["M&A Advisory", "Capital Restructuring", "Business Valuation", "Financial Due Diligence"]
    },
    {
      title: "Project Investment",
      description: "Strategic financing solutions for high-impact infrastructure and development projects through innovative funding structures.",
      process: "Evaluation → Structuring → Funding → Monitoring",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      features: ["Infrastructure Projects", "Energy Investments", "Real Estate Development", "Technology Ventures"]
    },
    {
      title: "Capital Raising",
      description: "Comprehensive funding solutions connecting businesses with institutional investors, private equity, and debt providers.",
      process: "Preparation → Marketing → Negotiation → Closing",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 5a2 2 0 114 0v6a2 2 0 11-4 0V5zM5 15a2 2 0 114 0v2a2 2 0 11-4 0v-2zM15 5a2 2 0 114 0v6a2 2 0 11-4 0V5zM13 15a2 2 0 114 0v2a2 2 0 11-4 0v-2z" />
        </svg>
      ),
      features: ["Equity Financing", "Debt Solutions", "Bridge Capital", "Growth Funding"]
    },
    {
      title: "Public-Private Partnerships",
      description: "Expert guidance in structuring and executing complex PPP arrangements that deliver sustainable public infrastructure.",
      process: "Analysis → Structuring → Procurement → Implementation",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: ["Infrastructure PPPs", "Government Relations", "Risk Allocation", "Performance Management"]
    },
    {
      title: "Strategic Consulting",
      description: "Tailored strategic advisory services to optimize business performance, market positioning, and growth trajectories.",
      process: "Analysis → Strategy → Planning → Execution",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["Market Analysis", "Strategic Planning", "Performance Optimization", "Digital Transformation"]
    },
    {
      title: "Mergers & Acquisitions",
      description: "Full-service M&A advisory from target identification through deal completion, ensuring optimal value creation.",
      process: "Strategy → Sourcing → Due Diligence → Execution",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      features: ["Buy-Side Advisory", "Sell-Side Representation", "Valuation Services", "Integration Support"]
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive assessment of your business, market position, and strategic objectives."
    },
    {
      number: "02", 
      title: "Strategy Development",
      description: "Crafting tailored solutions that align with your goals and market opportunities."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Expert execution with continuous monitoring and optimization throughout the process."
    },
    {
      number: "04",
      title: "Value Realization",
      description: "Ensuring sustainable results and long-term value creation for all stakeholders."
    }
  ];

  const caseStudies = [
    {
      title: "Infrastructure Transformation",
      description: "Led a $500M infrastructure PPP that revolutionized regional transportation connectivity.",
      metric: "$500M",
      category: "Public-Private Partnership"
    },
    {
      title: "Technology Growth Capital",
      description: "Secured $150M growth funding for emerging fintech company's international expansion.",
      metric: "$150M",
      category: "Capital Raising"
    },
    {
      title: "Strategic Acquisition",
      description: "Advised on cross-border M&A transaction creating market-leading position in renewable energy.",
      metric: "Market Leader",
      category: "Mergers & Acquisitions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-background relative overflow-hidden hero-gradient">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto scroll-fade-up">
            <h1 className="heading-xl mb-6 text-rich-gold">
              Financial Solutions That Transform
            </h1>
            <p className="body-text text-pure-white mb-8 scroll-fade-up scroll-stagger-1">
              Comprehensive corporate finance services designed to accelerate growth and maximize value through innovative strategies and expert execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center scroll-fade-up scroll-stagger-2">
              <Button variant="cta-primary" className="magnetic-button">
                Explore Our Services
              </Button>
              <Button variant="cta-secondary" className="magnetic-button">
                Schedule Consultation
              </Button>
            </div>
            
            {/* 3D Spline Animation */}
            <div className="mt-16 sm:mt-20 lg:mt-24 scroll-fade-up scroll-stagger-3">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-dark-navy/30 rounded-xl border border-rich-gold/20 hover:border-rich-gold/50 transition-all duration-500 shadow-lg hover:shadow-xl backdrop-blur-sm">
                  <div className="aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8] relative overflow-hidden rounded-xl">
                    <iframe 
                      src='https://my.spline.design/metalcryptocreditcard-YLo39Gr0MVn761iZlrr9ddvH/' 
                      frameBorder='0' 
                      width='100%' 
                      height='100%'
                      className="absolute inset-0 w-full h-full"
                      style={{
                        border: 'none',
                        borderRadius: '12px',
                        minHeight: '300px'
                      }}
                      allowFullScreen
                      loading='lazy'
                      title="Interactive 3D Financial Technology Animation"
                    />
                  </div>
                  
                  {/* Subtle glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-rich-gold/5 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
                
                <div className="text-center mt-8 scroll-fade-up scroll-stagger-4">
                  <p className="text-light-gray text-sm font-inter">
                    Interactive 3D visualization of our innovative financial technology solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden section-morph">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
            <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
              Comprehensive Service Portfolio
            </h2>
            <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
              From strategic advisory to complex transactions, we deliver end-to-end solutions that drive sustainable growth and create lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`wlf-card-premium h-full flex flex-col scroll-fade-up scroll-stagger-${Math.min(index + 1, 6)}`}
              >
                <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mb-6 hover:scale-110 transition-all duration-300 border-2 border-rich-gold">
                  {service.icon}
                </div>

                <h3 className="font-playfair font-semibold text-2xl leading-tight text-card-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="font-inter text-base leading-relaxed text-light-gray mb-4" style={{ lineHeight: '1.6' }}>
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-inter font-medium text-sm text-rich-gold mb-2">Process Flow:</h4>
                  <p className="font-inter text-sm text-light-gray">{service.process}</p>
                </div>

                <ul className="space-y-2 mb-8 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start font-inter text-sm text-light-gray">
                      <div className="w-1.5 h-1.5 bg-rich-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4">
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
            <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
              Our Proven Process
            </h2>
            <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
              A systematic approach that ensures optimal outcomes and sustainable value creation for every engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step.number} className={`text-center scroll-fade-up scroll-stagger-${index + 1}`}>
                <div className="w-20 h-20 bg-rich-gold text-dark-navy rounded-full flex items-center justify-center mx-auto mb-6 font-bold text-2xl">
                  {step.number}
                </div>
                <h3 className="font-playfair font-semibold text-xl text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="font-inter text-sm text-light-gray leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
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

      {/* Case Studies Preview */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
            <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
              Success Stories
            </h2>
            <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
              Discover how we've helped clients achieve transformational results across diverse sectors and markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={study.title} className={`wlf-card-premium scroll-fade-up scroll-stagger-${index + 1}`}>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-rich-gold mb-2">{study.metric}</div>
                  <div className="text-xs font-medium text-rich-gold uppercase tracking-wide">{study.category}</div>
                </div>
                <h3 className="font-playfair font-semibold text-xl text-card-foreground mb-4">
                  {study.title}
                </h3>
                <p className="font-inter text-sm text-light-gray leading-relaxed mb-6">
                  {study.description}
                </p>
                <Button variant="ghost" className="text-rich-gold hover:text-dark-navy hover:bg-rich-gold p-0 h-auto font-medium">
                  View Full Case Study →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden reveal-block">
        <FloatingElements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-fade-up">
            <h2 className="heading-lg mb-6 text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="body-text text-light-gray mb-8 scroll-fade-up scroll-stagger-1">
              Let's discuss how our expertise can accelerate your growth and maximize your value creation potential.
            </p>
            
            <div className="bg-dark-navy rounded-xl p-8 border border-rich-gold/20 scroll-fade-up scroll-stagger-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300 mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300 mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project or financing needs..."
                    rows={6}
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button 
                  ref={magneticRef}
                  variant="cta-primary" 
                  className="magnetic-button px-12"
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;