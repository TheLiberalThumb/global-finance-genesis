import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const InvestmentInsights = () => {
  useEffect(() => {
    document.title = "Investment Insights - Gission Global Investment Limited";
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = "Expert perspectives on corporate finance and strategic investments from Gission Global's leadership team.";
    }
  }, []);

  const insights = [
    {
      title: "The Future of Infrastructure Finance in Africa",
      excerpt: "Exploring innovative financing mechanisms and the role of technology in transforming Africa's infrastructure landscape. From digital payments to green bonds, discover the trends shaping the continent's future.",
      author: "Dr. Sarah Okafor",
      authorRole: "Managing Director",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Infrastructure",
      image: "photo-1497604401993-f2e922e5cb0a",
      featured: true
    },
    {
      title: "PPP Best Practices for Emerging Markets",
      excerpt: "Key lessons from successful public-private partnerships across emerging economies, including risk allocation strategies and governance frameworks that drive project success.",
      author: "Michael Chen",
      authorRole: "Senior Partner",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Public-Private Partnership",
      image: "photo-1518770660439-4636190af475"
    },
    {
      title: "Capital Raising Strategies for Energy Projects",
      excerpt: "How renewable energy projects can optimize their capital structure and attract institutional investors in today's evolving market environment.",
      author: "Dr. Sarah Okafor",
      authorRole: "Managing Director",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Energy Finance",
      image: "photo-1470813740244-df37b8c1edcb"
    },
    {
      title: "ESG Integration in Corporate Finance",
      excerpt: "The growing importance of environmental, social, and governance factors in investment decisions and how companies can leverage ESG for better access to capital.",
      author: "James Roberts",
      authorRole: "Head of Sustainability",
      date: "January 8, 2025",
      readTime: "5 min read",
      category: "ESG",
      image: "photo-1483058712412-4245e9b90334"
    },
    {
      title: "Digital Transformation in Financial Services",
      excerpt: "How fintech innovations are reshaping traditional corporate finance and creating new opportunities for businesses across emerging markets.",
      author: "Michael Chen",
      authorRole: "Senior Partner",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Fintech",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      title: "Regulatory Trends Shaping Investment Flows",
      excerpt: "Analysis of key regulatory developments across major emerging markets and their impact on cross-border investment strategies.",
      author: "Dr. Sarah Okafor",
      authorRole: "Managing Director",
      date: "January 3, 2025",
      readTime: "6 min read",
      category: "Regulatory",
      image: "photo-1518770660439-4636190af475"
    }
  ];

  const featuredInsight = insights.find(insight => insight.featured);
  const regularInsights = insights.filter(insight => !insight.featured);

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
                <BreadcrumbPage className="text-pure-white">Investment Insights</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <ScrollAnimatedSection className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-pure-white">Investment </span>
              <span className="text-rich-gold">Insights</span>
            </h1>
            <p className="text-light-gray text-xl leading-relaxed">
              Expert perspectives on corporate finance and strategic investments from our leadership team. 
              Stay informed with the latest trends, analysis, and market intelligence.
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* Featured Article */}
        {featuredInsight && (
          <ScrollAnimatedSection className="mb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-dark-navy/80 backdrop-blur-sm border border-rich-gold/30 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-rich-gold/10 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={`https://images.unsplash.com/${featuredInsight.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                      alt={featuredInsight.title}
                      className="w-full h-full object-cover filter contrast-125 brightness-110 saturate-105"
                    />
                    <div className="absolute inset-0 bg-dark-navy/40"></div>
                    <div className="absolute top-6 left-6">
                      <span className="bg-rich-gold text-dark-navy px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12">
                    <div className="mb-4">
                      <span className="text-rich-gold text-sm font-medium">{featuredInsight.category}</span>
                    </div>
                    
                    <h2 className="font-playfair text-2xl lg:text-3xl font-semibold text-pure-white mb-4">
                      {featuredInsight.title}
                    </h2>
                    
                    <p className="text-light-gray leading-relaxed mb-6">
                      {featuredInsight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="text-pure-white font-medium text-sm">{featuredInsight.author}</div>
                          <div className="text-light-gray text-xs">{featuredInsight.authorRole}</div>
                        </div>
                      </div>
                      
                      <div className="text-right text-light-gray text-sm">
                        <div className="flex items-center space-x-2 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredInsight.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{featuredInsight.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button variant="cta-primary" className="group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimatedSection>
        )}

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularInsights.map((insight, index) => (
              <ScrollAnimatedSection 
                key={insight.title}
                animationType="fade-up"
                delay={index % 3}
              >
                <article className="bg-dark-navy/80 backdrop-blur-sm border border-rich-gold/30 rounded-lg overflow-hidden hover:border-rich-gold/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg hover:shadow-rich-gold/10">
                  <div className="relative h-48">
                    <img
                      src={`https://images.unsplash.com/${insight.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                      alt={insight.title}
                      className="w-full h-full object-cover filter contrast-125 brightness-110 saturate-105"
                    />
                    <div className="absolute inset-0 bg-dark-navy/40"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-rich-gold/90 text-dark-navy px-2 py-1 rounded text-xs font-medium">
                        {insight.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-playfair text-xl font-semibold text-pure-white mb-3 line-clamp-2">
                      {insight.title}
                    </h3>
                    
                    <p className="text-light-gray text-sm leading-relaxed mb-4 flex-1">
                      {insight.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-light-gray mb-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{insight.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{insight.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-light-gray text-xs">
                        <Calendar className="w-3 h-3" />
                        <span>{insight.date}</span>
                      </div>
                      
                      <Button variant="ghost" size="sm" className="text-rich-gold hover:text-dark-navy p-0 h-auto">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </article>
              </ScrollAnimatedSection>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default InvestmentInsights;
