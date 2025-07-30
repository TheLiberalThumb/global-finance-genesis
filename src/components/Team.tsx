
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Team = () => {
  const [expandedBios, setExpandedBios] = useState<{ [key: string]: boolean }>({});

  const toggleBio = (memberName: string) => {
    setExpandedBios(prev => ({
      ...prev,
      [memberName]: !prev[memberName]
    }));
  };

  const truncateText = (text: string, wordLimit: number = 20) => {
    const words = text.split(' ');
    return words.length > wordLimit 
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  const teamMembers = [
    {
      name: "Mike Adesokan",
      title: "CEO & Managing Director", 
      bio: "Mike Adesokan brings 28+ years of Oil & Gas industry expertise to corporate finance leadership. Beginning his career at the National Examinations Council, he transitioned to become a Business Development Manager, overseeing retail operations across two indigenous oil companies and one international firm. As founder and CEO of Gission Global Investment Ltd, Mike leverages his deep industry experience to drive strategic initiatives and facilitate funding for operational strengthening across multiple sectors.",
      image: "/lovable-uploads/af57b1b8-2c82-480b-a009-f3cb347529a7.png",
      linkedin: "https://www.linkedin.com/in/mike-adesokan-684a7878/",
      expertise: ["Oil & Gas Expertise", "Strategic Leadership", "Corporate Finance", "Business Development"]
    },
    {
      name: "Rebecca Adesokan",
      title: "Executive Director",
      bio: "Rebecca Adesokan combines diverse industry expertise spanning automotive and aviation sectors. Her career began as a Marketing Officer coordinating logistics services and driving sales growth, before advancing to aviation as a trained Air Hostess and Cabin Crew Coordinator. With proven expertise in customer experience management, sales promotion, and operational logistics, Rebecca now serves as Executive Director, expertly managing Gission Global's investment portfolio and strategic decision-making.",
      image: "/lovable-uploads/df372e0c-7e39-4d4d-88a9-df1f52474453.png",
      linkedin: "https://www.linkedin.com/in/rebecca-adesokan-8a39b6374/",
      expertise: ["Investment Portfolio", "Strategic Decision Making", "Customer Experience", "Operational Logistics"]
    },
    {
      name: "Adeola Emmanuel",
      title: "Business Development Manager",
      bio: "Adeola Emmanuel brings a unique blend of technical expertise and business acumen to corporate finance development. Starting as an Information Technology Officer, he expanded into automotive business development, managing digital platforms and web presence for indigenous automotive firms. Currently serving as Business Development Manager at Gission Global Investment Ltd, Adeola drives growth initiatives and strategic partnerships, combining his technical background with sharp business development skills.",
      image: "/lovable-uploads/f5213e80-ea4e-4612-a412-2b4ecba22332.png",
      linkedin: "http://www.linkedin.com/in/adeola-emmanuel-087947193",
      expertise: ["Technical Expertise", "Digital Platforms", "Strategic Partnerships", "Growth Initiatives"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-6 sm:mb-8 text-foreground">
            Meet Our Leadership
          </h2>
          <p className="body-text text-light-gray max-w-4xl mx-auto px-4 sm:px-0 scroll-fade-up scroll-stagger-1">
            Our experienced team combines deep industry knowledge with innovative thinking 
            to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`wlf-card-premium group scroll-fade-up scroll-stagger-${Math.min(index + 1, 6)}`}
            >
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-rich-gold/20 group-hover:border-rich-gold group-hover:scale-105 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="high"
                    style={{
                      willChange: 'transform',
                      backfaceVisibility: 'hidden'
                    }}
                  />
                </div>
                {/* LinkedIn Icon */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-12 h-12 bg-dark-navy rounded-full flex items-center justify-center text-pure-white hover:bg-rich-gold hover:text-dark-navy hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="heading-md mb-3 text-card-foreground">
                  {member.name}
                </h3>
                
                <p className="text-rich-gold font-futura font-semibold text-lg mb-6">
                  {member.title}
                </p>

                <p className="body-text text-light-gray mb-4">
                  {expandedBios[member.name] 
                    ? member.bio 
                    : truncateText(member.bio, 20)
                  }
                </p>

                {/* Read More Button */}
                <button
                  onClick={() => toggleBio(member.name)}
                  className="text-rich-gold hover:text-rich-gold/80 font-medium text-sm mb-6 underline underline-offset-2 transition-colors duration-200"
                >
                  {expandedBios[member.name] ? 'Read Less' : 'Read More'}
                </button>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-deep-navy text-light-gray text-sm font-futura rounded-full hover:bg-rich-gold hover:text-dark-navy transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center mt-20 scroll-fade-up scroll-stagger-4">
          <div className="wlf-card-premium max-w-5xl mx-auto">
            <h3 className="heading-md mb-6 text-card-foreground">
              Ready to Work with Our Team?
            </h3>
            <p className="body-text text-light-gray mb-10">
              Our experts are here to help you navigate complex financial decisions 
              and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cta-secondary" asChild>
                <a href="/team">
                  Meet Full Team
                </a>
              </Button>
              <Button variant="cta-primary" asChild>
                <a href="mailto:hello@gissionglobal.com">
                  Contact Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
