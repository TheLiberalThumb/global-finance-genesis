const TrustIndicators = () => {
  const certifications = [
    {
      name: "ISO 27001 Certified",
      description: "Information Security Management",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-1.74L12 1z"/>
        </svg>
      )
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Availability",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      name: "PCI DSS Compliant",
      description: "Payment Card Industry",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      name: "GDPR Compliant",
      description: "Data Protection Regulation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  const awards = [
    "Best Financial Technology 2024",
    "Excellence in Corporate Finance",
    "Top Investment Advisory Firm",
    "Emerging Markets Leader"
  ];

  return (
    <section className="py-8 bg-dark-navy/50 border-t border-rich-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security Certifications */}
        <div className="mb-8">
          <h3 className="text-center text-sm font-inter font-medium text-light-gray mb-6">
            Security & Compliance Certifications
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`text-center p-4 rounded-lg bg-background/30 border border-rich-gold/10 hover:border-rich-gold/30 transition-all duration-300 scroll-fade-up scroll-stagger-${index + 1}`}
              >
                <div className="w-10 h-10 mx-auto mb-2 text-rich-gold flex items-center justify-center">
                  {cert.icon}
                </div>
                <p className="text-xs font-inter font-medium text-foreground mb-1">
                  {cert.name}
                </p>
                <p className="text-xs text-light-gray">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="text-center">
          <h3 className="text-sm font-inter font-medium text-light-gray mb-4">
            Industry Recognition & Awards
          </h3>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-light-gray">
            {awards.map((award, index) => (
              <span key={award} className="hover:text-rich-gold transition-colors duration-300">
                {award}
              </span>
            ))}
          </div>
        </div>

        {/* Trust Metrics */}
        <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-rich-gold/10">
          <div className="text-center">
            <div className="text-2xl font-bold text-rich-gold mb-1">256-bit</div>
            <p className="text-xs text-light-gray">Encryption</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-rich-gold mb-1">99.9%</div>
            <p className="text-xs text-light-gray">Uptime SLA</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-rich-gold mb-1">24/7</div>
            <p className="text-xs text-light-gray">Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;