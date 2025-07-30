
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies - Gission Global Investment Limited";
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = "Discover how Gission Global has transformed businesses through strategic corporate finance solutions. Real case studies and success stories.";
    }
  }, []);

  const caseStudies = [
    {
      title: "$300M Waste-to-Energy Project - Lagos State Partnership",
      category: "Public-Private Partnership",
      metric: "$300M",
      duration: "18 months",
      challenge: "Lagos State needed a sustainable waste management solution while generating clean energy for the growing population. The project required complex structuring involving government guarantees, international financing, and environmental compliance.",
      solution: "We structured a comprehensive PPP framework involving multiple stakeholders including the Lagos State Government, international development banks, and private equity investors. Our team managed the entire transaction from concept to financial close.",
      results: [
        "Successfully closed $300M in project financing",
        "Created 2,000 direct and indirect jobs",
        "Established framework for future infrastructure projects",
        "Reduced waste management costs by 40% for the state"
      ],
      image: "photo-1497604401993-f2e922e5cb0a"
    },
    {
      title: "Infrastructure Development Fund - West Africa",
      category: "Fund Management",
      metric: "$500M",
      duration: "24 months",
      challenge: "Regional infrastructure deficit requiring a scalable investment vehicle to attract institutional capital for cross-border projects in telecommunications, transport, and energy sectors.",
      solution: "Established a $500M infrastructure fund with participation from pension funds, sovereign wealth funds, and development finance institutions. Created governance structures and investment guidelines for multi-country operations.",
      results: [
        "Raised $500M from institutional investors",
        "Deployed capital across 8 West African countries",
        "Generated 15% IRR for investors",
        "Supported 12 major infrastructure projects"
      ],
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Public-Private Partnership Framework - Regional Development",
      category: "Strategic Advisory",
      metric: "Framework",
      duration: "12 months",
      challenge: "Government needed standardized PPP framework to attract private sector investment in infrastructure while ensuring transparency and value for money in project delivery.",
      solution: "Developed comprehensive PPP policy framework including legal structures, procurement guidelines, risk allocation matrices, and performance monitoring systems aligned with international best practices.",
      results: [
        "Established replicable PPP framework",
        "Reduced project development time by 50%",
        "Attracted $2B in private sector commitments",
        "Created transparent bidding processes"
      ],
      image: "photo-1483058712412-4245e9b90334"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 sm:pt-24 lg:pt-32">
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-light-gray hover:text-rich-gold">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/resources" className="text-light-gray hover:text-rich-gold">
                  Resources
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-pure-white">Case Studies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <ScrollAnimatedSection className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-rich-gold mb-6">
              Case Studies
            </h1>
            <p className="text-light-gray text-xl leading-relaxed">
              Discover how we've transformed businesses through strategic corporate finance solutions, 
              delivering exceptional results across diverse sectors and markets.
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {caseStudies.map((study, index) => (
            <ScrollAnimatedSection 
              key={study.title}
              className="mb-16"
              animationType="fade-up"
              delay={index % 2}
            >
              <div className="bg-card border border-rich-gold/20 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={`https://images.unsplash.com/${study.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-dark-navy/60"></div>
                    <div className="absolute top-6 left-6">
                      <div className="bg-rich-gold text-dark-navy px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </div>
                    </div>
                    <div className="absolute bottom-6 left-6">
                      <div className="text-rich-gold text-3xl font-bold">{study.metric}</div>
                      <div className="text-pure-white text-sm">{study.duration} timeline</div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 lg:p-12">
                    <h3 className="font-playfair text-2xl lg:text-3xl font-semibold text-rich-gold mb-6">
                      {study.title}
                    </h3>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-pure-white mb-3">Challenge</h4>
                        <p className="text-light-gray leading-relaxed text-sm">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-pure-white mb-3">Solution</h4>
                        <p className="text-light-gray leading-relaxed text-sm">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-pure-white mb-3">Results</h4>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="text-light-gray text-sm flex items-start">
                              <span className="text-rich-gold mr-2">•</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button variant="outline" className="w-full sm:w-auto">
                        View Detailed Case Study →
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <ScrollAnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-dark-navy to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-rich-gold mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-light-gray text-lg mb-8 leading-relaxed">
              Let's discuss how our proven expertise can drive transformational results for your business. 
              Every great partnership starts with a conversation.
            </p>
            <Button variant="cta-primary" asChild>
              <a href="/contact">Discuss Your Project</a>
            </Button>
          </div>
        </ScrollAnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
