import { Star, Shield, Lock } from 'lucide-react';

const TrustIndicators = () => {
  const certifications = [
    {
      name: "ISO 27001 Certified",
      description: "Information Security Management",
      icon: <Star className="w-8 h-8" />
    },
    {
      name: "SOC 2 Type II",
      description: "Security & Availability",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "PCI DSS Compliant",
      description: "Payment Card Industry",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      )
    },
    {
      name: "GDPR Compliant",
      description: "Data Protection Regulation",
      icon: <Lock className="w-8 h-8" />
    }
  ];

  const awards = [
    "Best Financial Technology 2024",
    "Excellence in Corporate Finance",
    "Top Investment Advisory Firm",
    "Emerging Markets Leader"
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background border-t border-rich-gold/20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/20 via-transparent to-rich-gold/5 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="heading-md mb-4 text-foreground">
            Security & <span className="text-rich-gold">Compliance</span>
          </h2>
          <p className="body-text text-light-gray max-w-2xl mx-auto">
            Your trust is our foundation. We maintain the highest standards of security and compliance.
          </p>
        </div>

        {/* Security Certifications */}
        <div className="mb-16 scroll-fade-up scroll-stagger-1">
          <h3 className="text-center heading-sm text-rich-gold mb-12">
            Security Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`group text-center p-8 rounded-2xl bg-dark-navy/30 border border-rich-gold/20 
                  hover:border-rich-gold/60 hover:bg-dark-navy/50 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] 
                  transition-all duration-500 interactive-card scroll-fade-up scroll-stagger-${index + 2}`}
              >
                <div className="w-16 h-16 mx-auto mb-6 text-rich-gold flex items-center justify-center 
                  bg-rich-gold/10 rounded-xl group-hover:bg-rich-gold/20 group-hover:scale-110 transition-all duration-300">
                  {cert.icon}
                </div>
                <h4 className="font-inter font-semibold text-pure-white mb-2 text-base">
                  {cert.name}
                </h4>
                <p className="text-sm text-light-gray group-hover:text-pure-white/80 transition-colors duration-300">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="mb-16 scroll-fade-up scroll-stagger-3">
          <h3 className="text-center heading-sm text-rich-gold mb-12">
            Industry Recognition
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, index) => (
              <div
                key={award}
                className={`text-center p-6 rounded-xl bg-background/20 border border-rich-gold/10 
                  hover:border-rich-gold/40 hover:bg-background/30 transition-all duration-300 
                  scroll-fade-up scroll-stagger-${index + 4}`}
              >
                <p className="font-inter font-medium text-pure-white text-sm leading-relaxed 
                  hover:text-rich-gold transition-colors duration-300">
                  {award}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="scroll-fade-up scroll-stagger-4">
          <h3 className="text-center heading-sm text-rich-gold mb-12">
            Performance Metrics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 rounded-xl bg-dark-navy 
              border border-rich-gold/30 hover:border-rich-gold/60 
              hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:-translate-y-1
              transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
              <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-3">256-bit</div>
              <p className="text-light-gray font-medium mb-2">Encryption</p>
              <p className="text-light-gray text-sm">Bank-grade security</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-dark-navy 
              border border-rich-gold/30 hover:border-rich-gold/60 
              hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:-translate-y-1
              transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
              <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-3">99.9%</div>
              <p className="text-light-gray font-medium mb-2">Uptime SLA</p>
              <p className="text-light-gray text-sm">Guaranteed availability</p>
            </div>
            <div className="text-center p-8 rounded-xl bg-dark-navy 
              border border-rich-gold/30 hover:border-rich-gold/60 
              hover:shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:-translate-y-1
              transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.1)]">
              <div className="text-4xl lg:text-5xl font-bold text-rich-gold mb-3">24/7</div>
              <p className="text-light-gray font-medium mb-2">Monitoring</p>
              <p className="text-light-gray text-sm">Continuous oversight</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;