
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { Button } from '@/components/ui/button';
import { Download, Calendar, FileText } from 'lucide-react';

const IndustryReports = () => {
  useEffect(() => {
    document.title = "Industry Reports - Gission Global Investment Limited";
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = "Download comprehensive industry reports on corporate finance trends in emerging markets from Gission Global's expert team.";
    }
  }, []);

  const reportCategories = [
    {
      title: "African Infrastructure Finance",
      description: "Comprehensive analysis of infrastructure investment opportunities and challenges across African markets.",
      reports: [
        {
          title: "African Infrastructure Investment Outlook 2025",
          date: "January 2025",
          pages: "45 pages",
          description: "Deep dive into infrastructure financing trends, regulatory changes, and investment opportunities across sub-Saharan Africa."
        },
        {
          title: "PPP Framework Analysis: West Africa",
          date: "December 2024",
          pages: "32 pages",
          description: "Comparative analysis of public-private partnership frameworks across major West African economies."
        }
      ]
    },
    {
      title: "Public-Private Partnership Trends",
      description: "Latest insights on PPP structures, governance, and performance across emerging markets.",
      reports: [
        {
          title: "PPP Risk Management Best Practices",
          date: "January 2025",
          pages: "28 pages",
          description: "Comprehensive guide to identifying, allocating, and mitigating risks in PPP transactions."
        },
        {
          title: "Digital Infrastructure PPPs in Emerging Markets",
          date: "November 2024",
          pages: "38 pages",
          description: "Analysis of digital infrastructure financing through PPP models in developing economies."
        }
      ]
    },
    {
      title: "Emerging Markets Investment",
      description: "Strategic insights on investment flows, opportunities, and regulatory landscapes in emerging economies.",
      reports: [
        {
          title: "Emerging Markets Capital Flows Report Q4 2024",
          date: "January 2025",
          pages: "52 pages",
          description: "Quarterly analysis of investment flows, currency trends, and macroeconomic factors affecting emerging markets."
        },
        {
          title: "ESG Integration in Emerging Market Investments",
          date: "December 2024",
          pages: "41 pages",
          description: "How environmental, social, and governance factors are reshaping investment strategies in emerging economies."
        }
      ]
    },
    {
      title: "Energy Sector Financing",
      description: "Specialized reports on renewable energy, traditional energy, and energy transition financing.",
      reports: [
        {
          title: "Renewable Energy Investment in Africa 2025",
          date: "January 2025",
          pages: "35 pages",
          description: "Comprehensive overview of renewable energy financing mechanisms and project opportunities across Africa."
        },
        {
          title: "Energy Transition Financing Strategies",
          date: "December 2024",
          pages: "29 pages",
          description: "Innovative financing approaches for energy transition projects in emerging markets."
        }
      ]
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
                <BreadcrumbPage className="text-pure-white">Industry Reports</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <ScrollAnimatedSection className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-rich-gold mb-6">
              Industry Reports
            </h1>
            <p className="text-light-gray text-xl leading-relaxed">
              Insights and analysis on corporate finance trends in emerging markets. 
              Download our latest research and stay ahead of market developments.
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* Reports Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {reportCategories.map((category, categoryIndex) => (
            <ScrollAnimatedSection 
              key={category.title}
              className="mb-16"
              animationType="fade-up"
              delay={categoryIndex % 2}
            >
              <div className="mb-8">
                <h2 className="font-playfair text-3xl font-semibold text-rich-gold mb-4">
                  {category.title}
                </h2>
                <p className="text-light-gray leading-relaxed max-w-3xl">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {category.reports.map((report, reportIndex) => (
                  <div 
                    key={report.title}
                    className="bg-card border border-rich-gold/20 rounded-lg p-6 hover:border-rich-gold/40 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-2 text-rich-gold">
                        <FileText className="w-5 h-5" />
                        <span className="text-sm font-medium">PDF Report</span>
                      </div>
                      <div className="text-light-gray text-sm">{report.pages}</div>
                    </div>

                    <h3 className="font-playfair text-xl font-semibold text-pure-white mb-3">
                      {report.title}
                    </h3>
                    
                    <p className="text-light-gray text-sm leading-relaxed mb-4">
                      {report.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-light-gray text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{report.date}</span>
                      </div>
                      
                      <Button variant="outline" size="sm" className="group">
                        <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollAnimatedSection>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <ScrollAnimatedSection className="py-16 lg:py-24 bg-gradient-to-r from-dark-navy to-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-rich-gold mb-6">
              Stay Updated with Latest Reports
            </h2>
            <p className="text-light-gray text-lg mb-8 leading-relaxed">
              Subscribe to receive our latest industry reports and market insights directly in your inbox. 
              Be the first to access new research and analysis.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-card border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold transition-colors duration-300"
                />
                <Button variant="cta-primary" className="px-6 py-3">
                  Subscribe
                </Button>
              </div>
              <p className="text-light-gray text-xs mt-3">
                No spam. Unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </ScrollAnimatedSection>
      </main>

      <Footer />
    </div>
  );
};

export default IndustryReports;
