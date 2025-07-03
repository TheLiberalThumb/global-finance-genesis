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
    <section className="py-20 lg:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-black mb-6">
            Meet Our Leadership
          </h2>
          <p className="text-xl md:text-2xl text-medium-gray max-w-3xl mx-auto leading-relaxed">
            Our experienced team combines deep industry knowledge with innovative thinking 
            to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-${index + 1}`}
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* LinkedIn Icon */}
                <a
                  href={member.linkedin}
                  className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 w-10 h-10 bg-contemporary-blue rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-playfair font-semibold text-2xl text-charcoal-black mb-2">
                  {member.name}
                </h3>
                
                <p className="text-contemporary-blue font-semibold mb-4 font-inter">
                  {member.title}
                </p>

                <p className="text-medium-gray leading-relaxed mb-6 font-inter">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-light-gray text-charcoal-black text-sm font-inter rounded-full"
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
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
            <h3 className="font-playfair font-semibold text-3xl md:text-4xl text-charcoal-black mb-6">
              Ready to Work with Our Team?
            </h3>
            <p className="text-xl text-medium-gray mb-8 leading-relaxed">
              Our experts are here to help you navigate complex financial decisions 
              and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/team" 
                className="btn-secondary inline-flex items-center px-8 py-4 text-lg"
              >
                Meet Full Team
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </a>
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center px-8 py-4 text-lg"
              >
                Schedule Meeting
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;