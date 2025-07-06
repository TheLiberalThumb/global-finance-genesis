import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import FloatingElements from '@/components/FloatingElements';

const CareerOpportunities = () => {
  const magneticRef = useMagneticButton(0.2);

  const opportunities = [
    {
      title: "Senior Investment Analyst",
      department: "Investment Advisory",
      location: "Remote",
      type: "Full-time"
    },
    {
      title: "Business Development Executive",
      department: "Growth & Partnerships",
      location: "Lagos, Nigeria",
      type: "Full-time"
    },
    {
      title: "Financial Consultant",
      department: "Corporate Finance",
      location: "Remote",
      type: "Contract"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden reveal-block">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Join Our Team
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Be part of a dynamic team that's shaping the future of global finance. We offer exceptional opportunities for growth and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <div
              key={opportunity.title}
              className={`wlf-card-premium scroll-fade-up scroll-stagger-${index + 1}`}
            >
              <div className="mb-4">
                <h3 className="font-playfair font-semibold text-xl text-card-foreground mb-2">
                  {opportunity.title}
                </h3>
                <div className="text-rich-gold font-medium text-sm mb-1">
                  {opportunity.department}
                </div>
                <div className="flex items-center gap-4 text-xs text-light-gray">
                  <span>{opportunity.location}</span>
                  <span className="w-1 h-1 bg-rich-gold rounded-full"></span>
                  <span>{opportunity.type}</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full text-rich-gold border-rich-gold/20 hover:bg-rich-gold hover:text-dark-navy">
                Apply Now
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-dark-navy rounded-xl p-8 border border-rich-gold/20 max-w-4xl mx-auto scroll-fade-up scroll-stagger-4">
            <h3 className="font-playfair font-semibold text-2xl text-foreground mb-4">
              Ready to Shape the Future?
            </h3>
            <p className="body-text text-light-gray mb-8">
              Send us your resume and let's discuss how you can contribute to our mission of transforming global finance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300"
              />
              <input
                type="text"
                placeholder="Position of Interest"
                className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300"
              />
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-xs file:bg-rich-gold file:text-dark-navy hover:file:bg-rich-gold/90 focus:outline-none focus:border-rich-gold transition-colors duration-300"
              />
            </div>
            
            <Button 
              ref={magneticRef}
              variant="cta-primary" 
              className="magnetic-button px-12"
            >
              Submit Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;