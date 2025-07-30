
import { useEffect, useState } from 'react';
import { ChevronDown, Calendar, DollarSign, TrendingUp, Users, MapPin, ArrowRight, Filter, Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudies = () => {
  useEffect(() => {
    document.title = "Case Studies - Gission Global Investment Limited";
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = "Discover how Gission Global has transformed businesses through strategic corporate finance solutions. Real case studies and success stories.";
    }
  }, []);

  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const caseStudies = [
    {
      id: 1,
      title: "$300M Waste-to-Energy Project",
      subtitle: "Lagos State Partnership",
      category: "Public-Private Partnership",
      value: "$300M",
      duration: "18 months",
      location: "Lagos, Nigeria",
      image: "photo-1497604401993-f2e922e5cb0a",
      gradient: "from-emerald-600/80 to-teal-700/80",
      challenge: "Lagos State needed a sustainable waste management solution while generating clean energy for the growing population. The project required complex structuring involving government guarantees, international financing, and environmental compliance.",
      solution: "We structured a comprehensive PPP framework involving multiple stakeholders including the Lagos State Government, international development banks, and private equity investors. Our team managed the entire transaction from concept to financial close.",
      results: [
        { metric: "2,000+", label: "Jobs Created", icon: Users },
        { metric: "40%", label: "Cost Reduction", icon: TrendingUp },
        { metric: "$300M", label: "Project Value", icon: DollarSign },
        { metric: "18", label: "Months to Close", icon: Calendar }
      ],
      keyOutcomes: [
        "Successfully closed $300M in project financing",
        "Created 2,000 direct and indirect jobs",
        "Established framework for future infrastructure projects",
        "Reduced waste management costs by 40% for the state"
      ]
    },
    {
      id: 2,
      title: "$500M Infrastructure Fund",
      subtitle: "West Africa Development",
      category: "Fund Management",
      value: "$500M",
      duration: "24 months",
      location: "West Africa",
      image: "photo-1518770660439-4636190af475",
      gradient: "from-blue-600/80 to-indigo-700/80",
      challenge: "Regional infrastructure deficit requiring a scalable investment vehicle to attract institutional capital for cross-border projects in telecommunications, transport, and energy sectors.",
      solution: "Established a $500M infrastructure fund with participation from pension funds, sovereign wealth funds, and development finance institutions. Created governance structures and investment guidelines for multi-country operations.",
      results: [
        { metric: "8", label: "Countries", icon: MapPin },
        { metric: "15%", label: "IRR Generated", icon: TrendingUp },
        { metric: "$500M", label: "Fund Size", icon: DollarSign },
        { metric: "12", label: "Projects Funded", icon: Calendar }
      ],
      keyOutcomes: [
        "Raised $500M from institutional investors",
        "Deployed capital across 8 West African countries",
        "Generated 15% IRR for investors",
        "Supported 12 major infrastructure projects"
      ]
    },
    {
      id: 3,
      title: "Regional PPP Framework",
      subtitle: "Government Partnership Model",
      category: "Strategic Advisory",
      value: "$2B+",
      duration: "12 months",
      location: "Multi-Country",
      image: "photo-1483058712412-4245e9b90334",
      gradient: "from-purple-600/80 to-pink-700/80",
      challenge: "Government needed standardized PPP framework to attract private sector investment in infrastructure while ensuring transparency and value for money in project delivery.",
      solution: "Developed comprehensive PPP policy framework including legal structures, procurement guidelines, risk allocation matrices, and performance monitoring systems aligned with international best practices.",
      results: [
        { metric: "50%", label: "Time Reduction", icon: Calendar },
        { metric: "$2B", label: "Private Investment", icon: DollarSign },
        { metric: "100%", label: "Transparency Score", icon: TrendingUp },
        { metric: "5", label: "Countries Adopted", icon: MapPin }
      ],
      keyOutcomes: [
        "Established replicable PPP framework",
        "Reduced project development time by 50%",
        "Attracted $2B in private sector commitments",
        "Created transparent bidding processes"
      ]
    }
  ];

  const categories = ['All', 'Public-Private Partnership', 'Fund Management', 'Strategic Advisory'];
  
  const filteredStudies = filterCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === filterCategory);

  const totalValue = caseStudies.reduce((sum, study) => {
    const value = parseFloat(study.value.replace(/[$BM+]/g, ''));
    return sum + (study.value.includes('B') ? value * 1000 : value);
  }, 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 sm:pt-24 lg:pt-32">
        {/* Modern Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-light-gray hover:text-rich-gold transition-colors">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-rich-gold/50" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/resources" className="text-light-gray hover:text-rich-gold transition-colors">
                  Resources
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-rich-gold/50" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-rich-gold font-medium">Case Studies</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Modern Hero Section */}
        <ScrollAnimatedSection className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-navy via-background to-dark-navy"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-rich-gold/10 backdrop-blur-sm border border-rich-gold/20 rounded-full px-6 py-2 mb-8">
                <span className="w-2 h-2 bg-rich-gold rounded-full"></span>
                <span className="text-rich-gold font-medium">Transformational Results</span>
              </div>
              
              <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-pure-white mb-6 leading-tight">
                Success
                <span className="block text-rich-gold">Stories</span>
              </h1>
              
              <p className="text-light-gray text-xl sm:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">
                Discover how we've transformed businesses through strategic corporate finance solutions, 
                delivering exceptional results across diverse sectors and markets.
              </p>

              {/* Hero Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-rich-gold mb-2">
                    ${Math.round(totalValue)}M+
                  </div>
                  <div className="text-light-gray">Total Project Value</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-rich-gold mb-2">
                    {caseStudies.length}
                  </div>
                  <div className="text-light-gray">Featured Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold text-rich-gold mb-2">
                    100%
                  </div>
                  <div className="text-light-gray">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Modern Filter Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilterCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    filterCategory === category
                      ? 'bg-rich-gold text-dark-navy shadow-lg'
                      : 'bg-dark-navy/50 text-light-gray hover:bg-rich-gold/10 hover:text-rich-gold border border-rich-gold/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Search className="w-4 h-4" />
                Search
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Modern Case Studies Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="space-y-24">
            {filteredStudies.map((study, index) => (
              <ScrollAnimatedSection 
                key={study.id}
                className={`${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                animationType="fade-up"
                delay={index % 2}
              >
                <Card className="group overflow-hidden bg-gradient-to-br from-dark-navy to-background border border-rich-gold/20 hover:border-rich-gold/40 transition-all duration-500 hover:shadow-2xl hover:shadow-rich-gold/10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                    {/* Image Section */}
                    <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="absolute inset-0">
                        <img
                          src={`https://images.unsplash.com/${study.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                          alt={study.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-85 group-hover:opacity-75 transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute top-8 left-8 right-8 z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div className="bg-pure-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                            <span className="text-dark-navy font-semibold text-sm">{study.category}</span>
                          </div>
                          <div className="bg-rich-gold/90 backdrop-blur-sm rounded-full px-4 py-2">
                            <span className="text-dark-navy font-bold">{study.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 left-8 right-8 z-10">
                        <div className="text-pure-white">
                          <div className="text-5xl sm:text-6xl font-bold mb-2">{study.value}</div>
                          <div className="flex items-center gap-2 text-pure-white/90">
                            <MapPin className="w-4 h-4" />
                            <span>{study.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-pure-white mb-3 leading-tight">
                            {study.title}
                          </h3>
                          <p className="text-rich-gold text-xl font-medium mb-6">
                            {study.subtitle}
                          </p>
                        </div>

                        {/* Challenge & Solution Preview */}
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-pure-white mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-rich-gold rounded-full"></div>
                              Challenge
                            </h4>
                            <p className="text-light-gray leading-relaxed text-sm">
                              {study.challenge.substring(0, 120)}...
                            </p>
                          </div>
                        </div>

                        {/* Results Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          {study.results.slice(0, 4).map((result, idx) => (
                            <div key={idx} className="bg-background/30 backdrop-blur-sm rounded-lg p-4 border border-rich-gold/10">
                              <result.icon className="w-5 h-5 text-rich-gold mb-2" />
                              <div className="text-2xl font-bold text-pure-white">{result.metric}</div>
                              <div className="text-light-gray text-xs">{result.label}</div>
                            </div>
                          ))}
                        </div>

                        {/* Expand Button */}
                        <Button 
                          variant="outline" 
                          className="w-full group/btn"
                          onClick={() => setExpandedCard(expandedCard === study.id ? null : study.id)}
                        >
                          {expandedCard === study.id ? 'Show Less' : 'View Full Case Study'}
                          <ChevronDown className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                            expandedCard === study.id ? 'rotate-180' : ''
                          }`} />
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  {/* Expandable Details */}
                  {expandedCard === study.id && (
                    <div className="border-t border-rich-gold/20 p-8 lg:p-12 bg-background/50 backdrop-blur-sm">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-pure-white mb-4 text-lg">Our Solution</h4>
                          <p className="text-light-gray leading-relaxed mb-6">
                            {study.solution}
                          </p>
                          
                          <h4 className="font-semibold text-pure-white mb-4 text-lg">Key Outcomes</h4>
                          <ul className="space-y-3">
                            {study.keyOutcomes.map((outcome, idx) => (
                              <li key={idx} className="text-light-gray text-sm flex items-start gap-3">
                                <div className="w-1.5 h-1.5 bg-rich-gold rounded-full mt-2 flex-shrink-0"></div>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="space-y-6">
                          <div className="bg-dark-navy/50 rounded-lg p-6 border border-rich-gold/20">
                            <h5 className="font-semibold text-rich-gold mb-4">Project Metrics</h5>
                            <div className="space-y-4">
                              {study.results.map((result, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <result.icon className="w-4 h-4 text-rich-gold" />
                                    <span className="text-light-gray text-sm">{result.label}</span>
                                  </div>
                                  <span className="text-pure-white font-semibold">{result.metric}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Button variant="cta-primary" className="w-full">
                            <ArrowRight className="w-4 h-4 mr-2" />
                            Discuss Similar Project
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>

        {/* Modern CTA Section */}
        <ScrollAnimatedSection className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden bg-gradient-to-br from-dark-navy via-background to-dark-navy border border-rich-gold/20">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Content Side */}
                  <div className="p-8 lg:p-16 flex flex-col justify-center">
                    <div className="mb-8">
                      <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-pure-white mb-6 leading-tight">
                        Ready to Create Your
                        <span className="block text-rich-gold">Success Story?</span>
                      </h2>
                      <p className="text-light-gray text-lg leading-relaxed mb-8">
                        Let's discuss how our proven expertise can drive transformational results for your business. 
                        Every great partnership starts with a conversation.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Button variant="cta-primary" className="w-full sm:w-auto" asChild>
                        <a href="/contact">Discuss Your Project</a>
                      </Button>
                      <div className="flex items-center gap-4 text-sm text-light-gray">
                        <span>✓ Free consultation</span>
                        <span>✓ Confidential discussion</span>
                        <span>✓ Expert guidance</span>
                      </div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div className="relative bg-gradient-to-br from-rich-gold/10 to-rich-gold/5 p-8 lg:p-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
                    
                    <div className="grid grid-cols-2 gap-6 w-full max-w-sm relative z-10">
                      <div className="bg-dark-navy/50 backdrop-blur-sm rounded-xl p-6 border border-rich-gold/20 text-center">
                        <TrendingUp className="w-8 h-8 text-rich-gold mx-auto mb-3" />
                        <div className="text-2xl font-bold text-pure-white">98%</div>
                        <div className="text-light-gray text-sm">Success Rate</div>
                      </div>
                      
                      <div className="bg-dark-navy/50 backdrop-blur-sm rounded-xl p-6 border border-rich-gold/20 text-center">
                        <DollarSign className="w-8 h-8 text-rich-gold mx-auto mb-3" />
                        <div className="text-2xl font-bold text-pure-white">$5B+</div>
                        <div className="text-light-gray text-sm">Deployed</div>
                      </div>
                      
                      <div className="bg-dark-navy/50 backdrop-blur-sm rounded-xl p-6 border border-rich-gold/20 text-center">
                        <Users className="w-8 h-8 text-rich-gold mx-auto mb-3" />
                        <div className="text-2xl font-bold text-pure-white">50+</div>
                        <div className="text-light-gray text-sm">Projects</div>
                      </div>
                      
                      <div className="bg-dark-navy/50 backdrop-blur-sm rounded-xl p-6 border border-rich-gold/20 text-center">
                        <MapPin className="w-8 h-8 text-rich-gold mx-auto mb-3" />
                        <div className="text-2xl font-bold text-pure-white">15+</div>
                        <div className="text-light-gray text-sm">Countries</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
