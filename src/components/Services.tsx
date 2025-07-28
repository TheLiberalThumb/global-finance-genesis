
import { Button } from '@/components/ui/button';
import React from 'react';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import FloatingElements from './FloatingElements';

const Services = () => {
  const magneticRef = useMagneticButton(0.2);
  const services = [
    {
      title: "Large-Scale Project Financing",
      description: "From $50M infrastructure projects to $300M+ energy initiatives, we structure equity, debt, and blended finance solutions for transformative ventures.",
      icon: (
        <svg className="w-16 h-16 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      features: ["$50M+ Infrastructure Projects", "$300M+ Energy Initiatives", "Equity & Debt Structuring", "Blended Finance Solutions"]
    },
    {
      title: "Strategic Advisory Services",
      description: "End-to-end support in mergers, property acquisitions, commodity sourcing, and capital restructuring for businesses navigating complex financial transactions.",
      icon: (
        <svg className="w-16 h-16 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["Mergers & Acquisitions", "Property Acquisitions", "Commodity Sourcing", "Capital Restructuring"]
    },
    {
      title: "PPP Framework Development",
      description: "Proven expertise in developing PPP structures that facilitate collaboration between government and private sectors for major infrastructure projects.",
      icon: (
        <svg className="w-16 h-16 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      features: ["Government Partnerships", "Private Sector Collaboration", "Infrastructure Development", "Regulatory Compliance"]
    },
    {
      title: "International Capital Access",
      description: "Connecting clients with our network of Kuwait, Singapore, and Korean investors for equity and debt financing tailored to your risk profile.",
      icon: (
        <svg className="w-16 h-16 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      features: ["Kuwait Investor Network", "Singapore Capital Markets", "Korean Consortium Access", "Risk-Tailored Financing"]
    },
    {
      title: "Investment Strategy Optimization",
      description: "Tailored advisory services guiding portfolio optimization and financial strategies that drive growth in emerging markets.",
      icon: (
        <svg className="w-16 h-16 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["Portfolio Optimization", "Emerging Market Strategy", "Risk Management", "Growth Acceleration"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden section-morph">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Corporate Finance Excellence
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto px-4 sm:px-0 scroll-fade-up scroll-stagger-1">
            Specialized solutions for high-value transactions and strategic initiatives that transform businesses and drive sustainable growth in emerging markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`wlf-card-premium h-full flex flex-col scroll-fade-up scroll-stagger-${Math.min(index + 1, 6)} group hover:-translate-y-1 transition-all duration-500 hover:border-rich-gold hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]`}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 group-hover:scale-110 transition-all duration-300">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="heading-md text-card-foreground mb-4 font-playfair">
                {service.title}
              </h3>
              
              <p className="body-text text-light-gray mb-6 flex-grow" style={{ lineHeight: '1.6' }}>
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start font-inter text-sm text-light-gray">
                    <div className="w-1.5 h-1.5 bg-rich-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-auto pt-4">
                <a 
                  href="/services" 
                  className="inline-flex items-center font-inter text-sm font-medium text-card-foreground hover:text-rich-gold transition-colors duration-300 group"
                >
                  View Case Studies
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 scroll-fade-up scroll-stagger-4 reveal-block">
          <p className="body-text text-light-gray mb-8 max-w-2xl mx-auto">
            Ready to explore how we can accelerate your high-value project financing?
          </p>
          <Button 
            ref={magneticRef}
            variant="cta-primary" 
            className="magnetic-button"
            asChild
          >
            <a href="https://calendly.com/adesokankunle" target="_blank" rel="noopener noreferrer">
              Schedule Consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
