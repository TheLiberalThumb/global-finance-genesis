import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Infrastructure Transformation",
      description: "Led a $500M infrastructure PPP that revolutionized regional transportation connectivity.",
      metric: "$500M",
      category: "Public-Private Partnership"
    },
    {
      title: "Technology Growth Capital",
      description: "Secured $150M growth funding for emerging fintech company's international expansion.",
      metric: "$150M",
      category: "Capital Raising"
    },
    {
      title: "Strategic Acquisition",
      description: "Advised on cross-border M&A transaction creating market-leading position in renewable energy.",
      metric: "Market Leader",
      category: "Mergers & Acquisitions"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Success Stories
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Discover how we've helped clients achieve transformational results across diverse sectors and markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={study.title} className={`wlf-card-premium scroll-fade-up scroll-stagger-${index + 1}`}>
              <div className="mb-4">
                <div className="text-2xl font-bold text-rich-gold mb-2">{study.metric}</div>
                <div className="text-xs font-medium text-rich-gold uppercase tracking-wide">{study.category}</div>
              </div>
              <h3 className="font-playfair font-semibold text-xl text-card-foreground mb-4">
                {study.title}
              </h3>
              <p className="font-inter text-sm text-light-gray leading-relaxed mb-6">
                {study.description}
              </p>
              <Button variant="ghost" className="text-rich-gold hover:text-dark-navy hover:bg-rich-gold p-0 h-auto font-medium">
                View Full Case Study →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;