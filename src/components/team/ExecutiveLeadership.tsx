
import FloatingElements from '@/components/FloatingElements';

const ExecutiveLeadership = () => {
  const executives = [
    {
      name: "Mike Adesokan",
      role: "Chief Executive Officer", 
      bio: "Visionary leader with over 15 years of experience in corporate finance and strategic investments. Mike has led billion-dollar transactions across multiple sectors.",
      image: "/lovable-uploads/af57b1b8-2c82-480b-a009-f3cb347529a7.png",
      linkedin: "https://www.linkedin.com/in/mike-adesokan-684a7878/",
      achievements: ["Strategic Leadership", "M&A", "Corporate Finance"]
    },
    {
      name: "Rebecca Adesokan",
      role: "Executive Director",
      bio: "Strategic architect specializing in public-private partnerships and infrastructure financing. Rebecca brings deep expertise in complex capital structures.",
      image: "/lovable-uploads/df372e0c-7e39-4d4d-88a9-df1f52474453.png",
      linkedin: "https://www.linkedin.com/in/rebecca-adesokan-8a39b6374/",
      achievements: ["PPP Structures", "Infrastructure Finance", "Risk Management"]
    },
    {
      name: "Adeola Emmanuel",
      role: "Business Development Manager",
      bio: "Dynamic business development professional focused on identifying and executing growth opportunities in emerging markets and innovative sectors.",
      image: "/lovable-uploads/f5213e80-ea4e-4612-a412-2b4ecba22332.png",
      linkedin: "http://www.linkedin.com/in/adeola-emmanuel-087947193",
      achievements: ["Business Development", "Market Analysis", "Client Relations"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden section-morph">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Executive Leadership
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Our leadership team combines deep industry expertise with innovative thinking to drive exceptional results for our clients and stakeholders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {executives.map((executive, index) => (
            <div
              key={executive.name}
              className={`wlf-card-premium text-center scroll-fade-up scroll-stagger-${index + 1}`}
            >
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <img
                  src={executive.image}
                  alt={executive.name}
                  className="w-full h-full rounded-full object-cover border-4 border-rich-gold/20 hover:border-rich-gold/50 transition-all duration-300"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="high"
                  style={{
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-rich-gold/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* LinkedIn Icon */}
                <a
                  href={executive.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-10 h-10 bg-dark-navy rounded-full flex items-center justify-center text-pure-white hover:bg-rich-gold hover:text-dark-navy hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              <h3 className="font-playfair font-semibold text-2xl text-card-foreground mb-2">
                {executive.name}
              </h3>
              
              <div className="text-rich-gold font-medium text-sm uppercase tracking-wide mb-4">
                {executive.role}
              </div>

              <p className="font-inter text-sm text-light-gray leading-relaxed mb-6">
                {executive.bio}
              </p>

              <div className="space-y-2">
                {executive.achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center justify-center font-inter text-xs text-light-gray">
                    <div className="w-1.5 h-1.5 bg-rich-gold rounded-full mr-2"></div>
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveLeadership;
