import { Button } from '@/components/ui/button';
import FloatingElements from '@/components/FloatingElements';

const ServicesGrid = () => {
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

  return (
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
  );
};

export default ServicesGrid;