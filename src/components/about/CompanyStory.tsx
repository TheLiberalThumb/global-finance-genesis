const CompanyStory = () => {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="heading-lg fade-in-up">Our Story</h2>
              
              {/* Opening Impact Statement */}
              <blockquote className="text-2xl lg:text-3xl font-light text-charcoal-black/90 italic border-l-4 border-primary-yellow pl-6 fade-in-up stagger-delay-1">
                "We're not just moving money—we're building futures."
              </blockquote>
            </div>
            
            <div className="space-y-6 fade-in-up stagger-delay-2">
              <p className="body-text">
                Gission Global Investment Limited was founded on a simple belief: every business deserves access to world-class financial expertise. What started as a vision to democratize corporate finance has grown into a trusted partnership with companies across infrastructure, energy, and emerging sectors.
              </p>
              
              {/* Statistics Callouts */}
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="bg-primary-yellow/10 p-6 rounded-2xl text-center border border-primary-yellow/20">
                  <div className="heading-md text-primary-yellow">$2B+</div>
                  <div className="caption-text">Funding Facilitated</div>
                </div>
                <div className="bg-primary-yellow/10 p-6 rounded-2xl text-center border border-primary-yellow/20">
                  <div className="heading-md text-primary-yellow">98%</div>
                  <div className="caption-text">Client Satisfaction</div>
                </div>
              </div>
              
              <p className="body-text">
                From helping a Lagos-based startup secure their first major funding round to facilitating a $300M infrastructure project that powers thousands of homes, we measure our success by the transformational growth we enable for our clients.
              </p>
            </div>
          </div>
          
          {/* Large Supporting Image */}
          <div className="relative fade-in-up stagger-delay-3">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop&auto=format&q=80" 
                alt="Global business collaboration" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="heading-md text-white mb-2">Global Partnerships</h3>
                <p className="body-text text-white/90">Building bridges across continents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;