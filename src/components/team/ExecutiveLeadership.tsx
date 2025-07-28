
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
