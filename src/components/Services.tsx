const Services = () => {
  const services = [
    {
      title: "Corporate Finance Advisory",
      description: "Expert advisory team providing end-to-end support in mergers & acquisitions, capital restructuring, and business valuation.",
      icon: (
        <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ["M&A Advisory", "Capital Restructuring", "Business Valuation", "Strategic Planning"]
    },
    {
      title: "Project Investment",
      description: "We specialize in financing high-impact and economically viable projects through equity, debt, or blended finance models.",
      icon: (
        <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 5a2 2 0 114 0v6a2 2 0 11-4 0V5zM5 15a2 2 0 114 0v2a2 2 0 11-4 0v-2zM15 5a2 2 0 114 0v6a2 2 0 11-4 0V5zM13 15a2 2 0 114 0v2a2 2 0 11-4 0v-2z" />
        </svg>
      ),
      features: ["Infrastructure Projects", "Energy Investments", "PPP Structures", "Blended Finance"]
    },
    {
      title: "Strategic Consulting",
      description: "Tailored investment advisory services to guide businesses in making informed capital decisions and optimizing portfolios.",
      icon: (
        <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: ["Investment Strategy", "Portfolio Optimization", "Risk Assessment", "Market Analysis"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-black mb-6">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            From strategic advisory to project financing, we provide end-to-end solutions 
            that drive sustainable growth and maximize value creation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`service-card fade-in-up stagger-delay-${index + 1}`}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-200">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="font-inter font-semibold text-2xl text-charcoal-black mb-4">
                {service.title}
              </h3>
              
              <p className="text-medium-gray leading-relaxed mb-6 font-inter">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-charcoal-black font-inter">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <div className="mt-8">
                <a 
                  href="/services" 
                  className="inline-flex items-center text-contemporary-blue font-semibold hover:text-contemporary-blue/80 transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <p className="text-xl text-medium-gray mb-8 font-inter">
            Ready to explore how we can help your business grow?
          </p>
          <a 
            href="/contact" 
            className="btn-primary inline-flex items-center px-8 py-4 text-lg font-semibold"
          >
            Schedule Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;