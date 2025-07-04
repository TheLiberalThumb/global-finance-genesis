import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: "Mike Adesokan",
      title: "Chief Executive Officer",
      bio: "Visionary leader with over 15 years of experience in corporate finance and strategic investments. Mike has led billion-dollar transactions across multiple sectors.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      expertise: ["Strategic Leadership", "M&A", "Corporate Finance", "Investment Strategy"]
    },
    {
      name: "Rebecca Adesokan",
      title: "Executive Director",
      bio: "Strategic architect specializing in public-private partnerships and infrastructure financing. Rebecca brings deep expertise in complex capital structures.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612e2c3?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      expertise: ["PPP Structures", "Infrastructure Finance", "Risk Management", "Regulatory Affairs"]
    },
    {
      name: "Adeola Emmanuel",
      title: "Business Development Manager",
      bio: "Dynamic business development professional focused on identifying and executing growth opportunities in emerging markets and innovative sectors.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      linkedin: "#",
      expertise: ["Business Development", "Market Analysis", "Client Relations", "Emerging Markets"]
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="heading-lg mb-8 fade-in-up">
            Meet Our Leadership
          </h2>
          <p className="body-text text-charcoal-black/80 max-w-4xl mx-auto fade-in-up stagger-delay-1">
            Our experienced team combines deep industry knowledge with innovative thinking 
            to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`wealthsimple-card group ${index === 0 ? 'slide-in-left' : index === 1 ? 'fade-in-up' : 'slide-in-right'} stagger-delay-${index + 2}`}
            >
              {/* Profile Image */}
              <div className="relative mb-8">
                <div className="w-36 h-36 mx-auto rounded-full overflow-hidden border-4 border-primary-yellow/20 group-hover:border-primary-yellow group-hover:scale-105 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* LinkedIn Icon */}
                <a
                  href={member.linkedin}
                  className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-12 h-12 bg-charcoal-black rounded-full flex items-center justify-center text-white hover:bg-primary-yellow hover:text-charcoal-black hover:scale-110 transition-all duration-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="heading-md mb-3">
                  {member.name}
                </h3>
                
                <p className="text-primary-yellow font-futura font-semibold text-lg mb-6">
                  {member.title}
                </p>

                <p className="body-text text-charcoal-black/80 mb-8">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-charcoal-black/5 text-charcoal-black text-sm font-futura rounded-full hover:bg-primary-yellow hover:text-charcoal-black transition-colors duration-300"
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
        <div className="text-center mt-24 fade-in-up stagger-delay-5">
          <div className="wealthsimple-card max-w-5xl mx-auto">
            <h3 className="heading-md mb-6">
              Ready to Work with Our Team?
            </h3>
            <p className="body-text text-charcoal-black/80 mb-10">
              Our experts are here to help you navigate complex financial decisions 
              and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="cta-secondary">
                Meet Full Team
              </Button>
              <Button variant="cta-primary">
                Schedule Meeting
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;