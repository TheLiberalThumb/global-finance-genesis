import { Star, Shield, Lock } from 'lucide-react';
const TrustIndicators = () => {
  const certifications = [{
    name: "ISO 27001 Certified",
    description: "Information Security Management",
    icon: <Star className="w-8 h-8" />
  }, {
    name: "SOC 2 Type II",
    description: "Security & Availability",
    icon: <Shield className="w-8 h-8" />
  }, {
    name: "PCI DSS Compliant",
    description: "Payment Card Industry",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
  }, {
    name: "GDPR Compliant",
    description: "Data Protection regulation",
    icon: <Lock className="w-8 h-8" />
  }];
  const partnerships = [{
    title: "Korean Investment Consortium",
    description: "Strategic alliance with Seoul-based infrastructure investment partners",
    location: "Seoul, South Korea",
    value: "$2.5B+ Portfolio",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
  }, {
    title: "Lagos State Government",
    description: "Approved PPP framework provider for infrastructure development",
    location: "Lagos, Nigeria",
    value: "PPP Framework",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
  }, {
    title: "Kuwait Investment Authority",
    description: "Sovereign wealth fund partnership for regional projects",
    location: "Kuwait City, Kuwait",
    value: "SWF Partnership",
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
  }];
  const projects = [{
    title: "$300M Waste-to-Energy Project",
    description: "Lagos State Partnership - Clean energy infrastructure development",
    status: "In Progress",
    sector: "Energy Infrastructure"
  }, {
    title: "$150M Transportation Hub",
    description: "Multi-modal transport facility with international funding",
    status: "Completed",
    sector: "Transportation"
  }, {
    title: "$80M Digital Infrastructure",
    description: "Smart city connectivity project across Lagos metropolitan area",
    status: "Active",
    sector: "Technology"
  }];
  const locations = [{
    city: "Lagos",
    country: "Nigeria",
    role: "Headquarters",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
  }, {
    city: "Kuwait City",
    country: "Kuwait",
    role: "Regional Office",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
  }, {
    city: "Singapore",
    country: "Singapore",
    role: "Advisory Hub",
    icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
  }];
  return <section className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-navy/5 via-transparent to-rich-gold/5 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="heading-md mb-4 text-foreground">
            Trusted <span className="text-rich-gold">Partnerships</span>
          </h2>
          <p className="body-text text-light-gray max-w-2xl mx-auto">
            Building Africa's infrastructure future through strategic international partnerships and government collaboration.
          </p>
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-16 scroll-fade-up scroll-stagger-1">
          <h3 className="text-center heading-sm text-rich-gold mb-12">
            Strategic Partnerships
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => <div key={partnership.title} className={`interactive-card p-8 rounded-2xl bg-card border border-rich-gold/20 
                  hover:border-rich-gold/60 hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] 
                  transition-all duration-500 scroll-fade-up scroll-stagger-${index + 2}`}>
                <div className="w-16 h-16 mx-auto mb-6 text-rich-gold flex items-center justify-center 
                  bg-rich-gold/10 rounded-xl hover:bg-rich-gold/20 hover:scale-110 transition-all duration-300">
                  {partnership.icon}
                </div>
                <h4 className="font-inter font-semibold text-pure-white mb-2 text-lg">
                  {partnership.title}
                </h4>
                <p className="text-sm text-light-gray mb-4 leading-relaxed">
                  {partnership.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-rich-gold font-medium">{partnership.location}</span>
                  <span className="text-xs text-pure-white bg-rich-gold/20 px-2 py-1 rounded">
                    {partnership.value}
                  </span>
                </div>
              </div>)}
          </div>
        </div>

        {/* Project Highlights */}
        <div className="mb-16 scroll-fade-up scroll-stagger-2">
          <h3 className="text-center heading-sm text-rich-gold mb-12">
            Major Project Portfolio
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => <div key={project.title} className={`p-6 rounded-xl bg-card/50 border border-rich-gold/10 
                  hover:border-rich-gold/40 hover:bg-card/70 transition-all duration-300 
                  scroll-fade-up scroll-stagger-${index + 3}`}>
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-inter font-semibold text-pure-white text-base">
                    {project.title}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded ${project.status === 'Completed' ? 'bg-green-500/20 text-green-400' : project.status === 'Active' ? 'bg-rich-gold/20 text-rich-gold' : 'bg-blue-500/20 text-blue-400'}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-light-gray mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-xs text-rich-gold font-medium">
                  {project.sector}
                </div>
              </div>)}
          </div>
        </div>

        {/* Geographic Presence */}
        
      </div>
    </section>;
};
export default TrustIndicators;