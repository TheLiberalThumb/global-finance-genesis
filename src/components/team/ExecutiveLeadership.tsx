
import FloatingElements from '@/components/FloatingElements';

const ExecutiveLeadership = () => {
  const executives = [
    {
      name: "Mike Adesokan",
      role: "CEO & Managing Director",
      bio: "Mike Adesokan brings 28+ years of Oil & Gas industry expertise to corporate finance leadership. Beginning his career at the National Examinations Council, he transitioned to become a Business Development Manager overseeing retail operations across two indigenous oil companies and one international firm. As founder and CEO of Gission Global Investment Ltd, Mike leverages his deep industry experience to drive strategic initiatives and facilitate funding for operational strengthening across multiple sectors.",
      image: "/lovable-uploads/af57b1b8-2c82-480b-a009-f3cb347529a7.png",
      achievements: ["28+ years Oil & Gas expertise", "CEO & Founder", "Multi-sector funding specialist"]
    },
    {
      name: "Rebecca Adesokan",
      role: "Executive Director",
      bio: "Rebecca Adesokan combines diverse industry expertise spanning automotive and aviation sectors. Her career began as a Marketing Officer coordinating logistics services and driving sales growth, before advancing to aviation as a trained Air Hostess and Cabin Crew Coordinator. With proven expertise in customer experience management, sales promotion, and operational logistics, Rebecca now serves as Executive Director, expertly managing Gission Global's investment portfolio and strategic decision-making.",
      image: "/lovable-uploads/df372e0c-7e39-4d4d-88a9-df1f52474453.png",
      achievements: ["Aviation & automotive expertise", "Investment portfolio management", "Strategic decision-making"]
    },
    {
      name: "Adeola Emmanuel",
      role: "Business Development Manager",
      bio: "Adeola Emmanuel brings a unique blend of technical expertise and business acumen to corporate finance development. Starting as an Information Technology Officer, he expanded into automotive business development, managing digital platforms and web presence for indigenous automotive firms. Currently serving as Business Development Manager at Gission Global Investment Ltd, Adeola drives growth initiatives and strategic partnerships, combining his technical background with sharp business development skills.",
      image: "/lovable-uploads/f5213e80-ea4e-4612-a412-2b4ecba22332.png",
      achievements: ["Technical & business expertise", "Strategic partnerships", "Growth initiatives leadership"]
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

        <div className="space-y-8 lg:space-y-12">
          {executives.map((executive, index) => {
            const isEven = index % 2 === 0;
            const slideDirection = isEven ? 'left' : 'right';
            
            return (
              <div
                key={executive.name}
                className={`group relative scroll-fade-${slideDirection} scroll-stagger-${index + 1}`}
              >
                <div className="wlf-card-premium p-6 sm:p-8 lg:p-10 hover:scale-[1.02] transition-all duration-500 hover:border-rich-gold/50 hover:shadow-lg hover:shadow-rich-gold/10">
                  <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 lg:gap-8`}>
                    
                    {/* Profile Image */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 relative">
                        {/* Loading Skeleton */}
                        <div className="absolute inset-0 rounded-full bg-rich-gold/10 animate-pulse"></div>
                        
                        {/* Optimized Image */}
                        <picture>
                          <source srcSet={executive.image} type="image/webp" />
                          <img
                            src={executive.image}
                            alt={executive.name}
                            className="w-full h-full rounded-full object-cover border-4 border-rich-gold/30 group-hover:border-rich-gold/60 transition-all duration-500 shadow-lg shadow-rich-gold/10"
                            loading="lazy"
                            decoding="async"
                            fetchPriority={index === 0 ? "high" : "low"}
                            style={{
                              willChange: 'transform',
                              backfaceVisibility: 'hidden'
                            }}
                          />
                        </picture>
                        
                        {/* Gold Ring Effect */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rich-gold/20 to-rich-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-1 text-center ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                      <h3 className="font-playfair font-semibold text-2xl sm:text-3xl lg:text-4xl text-card-foreground mb-3">
                        {executive.name}
                      </h3>
                      
                      <div className="text-rich-gold font-medium text-base sm:text-lg uppercase tracking-wide mb-6">
                        {executive.role}
                      </div>

                      <p className="font-inter text-sm sm:text-base text-light-gray leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                        {executive.bio}
                      </p>

                      {/* Achievements */}
                      <div className={`space-y-3 ${isEven ? 'lg:items-start' : 'lg:items-end'}`}>
                        {executive.achievements.map((achievement, idx) => (
                          <div key={idx} className={`flex items-center ${isEven ? 'justify-center lg:justify-start' : 'justify-center lg:justify-end'} font-inter text-sm text-light-gray`}>
                            <div className="w-2 h-2 bg-rich-gold rounded-full mr-3 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveLeadership;
