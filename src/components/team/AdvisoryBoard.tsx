const AdvisoryBoard = () => {
  const advisors = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Strategic Advisor",
      expertise: "International Finance",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "James Patterson",
      role: "Investment Advisor", 
      expertise: "Private Equity",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Maria Rodriguez",
      role: "Market Advisor",
      expertise: "Emerging Markets",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "David Chen",
      role: "Technology Advisor",
      expertise: "Fintech Innovation",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Advisory Board
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Distinguished industry experts who provide strategic guidance and invaluable insights to enhance our capabilities and market reach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {advisors.map((advisor, index) => (
            <div
              key={advisor.name}
              className={`bg-card border border-rich-gold/10 rounded-xl p-6 text-center hover:border-rich-gold/30 transition-all duration-300 hover:shadow-lg hover:shadow-rich-gold/5 scroll-fade-up scroll-stagger-${index + 1}`}
            >
              <div className="w-24 h-24 mx-auto mb-4 relative">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-full rounded-full object-cover border-2 border-rich-gold/20 hover:border-rich-gold/40 transition-all duration-300"
                />
              </div>

              <h3 className="font-playfair font-semibold text-lg text-card-foreground mb-1">
                {advisor.name}
              </h3>
              
              <div className="text-rich-gold font-medium text-xs uppercase tracking-wide mb-2">
                {advisor.role}
              </div>

              <div className="text-light-gray text-xs">
                {advisor.expertise}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryBoard;