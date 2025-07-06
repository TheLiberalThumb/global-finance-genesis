import FloatingElements from '@/components/FloatingElements';

const ExecutiveLeadership = () => {
  const executives = [
    {
      name: "Mike Adesokan",
      role: "Chief Executive Officer",
      bio: "Visionary leader with over 20 years of experience in global finance and strategic investment. Mike has successfully led transformational deals worth over $2B across emerging markets.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: ["$2B+ in transactions", "20+ years experience", "Global market expertise"]
    },
    {
      name: "Rebecca Adesokan",
      role: "Executive Director",
      bio: "Strategic operations expert specializing in organizational excellence and sustainable growth. Rebecca drives operational efficiency and stakeholder engagement across all business units.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c95f8a7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: ["Operational excellence", "Strategic planning", "Stakeholder relations"]
    },
    {
      name: "Adeola Emmanuel",
      role: "Business Development Manager",
      bio: "Dynamic business development leader focused on identifying and executing high-impact opportunities. Adeola has built strategic partnerships that have generated significant value creation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      achievements: ["Partnership development", "Market expansion", "Value creation"]
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
                />
                <div className="absolute inset-0 rounded-full bg-rich-gold/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
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