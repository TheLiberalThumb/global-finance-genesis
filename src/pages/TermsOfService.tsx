
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { 
  FileText, 
  Briefcase, 
  AlertTriangle, 
  Shield, 
  Copyright, 
  Scale, 
  UserCheck, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowUp,
  Download,
  Phone
} from 'lucide-react';

const TermsOfService = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    document.title = "Terms of Service - Gission Global Investment Limited";
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = "Modern terms of service for Gission Global Investment Limited. Important legal information about our corporate finance services.";
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
      setShowBackToTop(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({ ...prev, [sectionId]: !prev[sectionId] }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sections = [
    {
      id: 'acceptance',
      title: "Acceptance of Terms",
      icon: FileText,
      summary: "Agreement to use our services under these terms and conditions",
      content: [
        "By accessing and using the services of Gission Global Investment Limited, you accept and agree to be bound by the terms and provisions of this agreement.",
        "If you do not agree to abide by the above, please do not use our services.",
        "These terms apply to all visitors, users, and others who access or use our services."
      ]
    },
    {
      id: 'services',
      title: "Description of Services",
      icon: Briefcase,
      summary: "Corporate finance advisory services including investment, consulting, and M&A",
      content: [
        "Gission Global Investment Limited provides corporate finance advisory services, including but not limited to:",
        "• Project investment and financing solutions",
        "• Strategic consulting for corporate transactions",
        "• Capital raising and debt structuring",
        "• Public-private partnership advisory",
        "• Mergers and acquisitions advisory"
      ]
    },
    {
      id: 'disclaimers',
      title: "Investment Advisory Disclaimers",
      icon: AlertTriangle,
      summary: "Important risk warnings and professional advice disclaimers",
      content: [
        "Past performance is not indicative of future results. All investments carry risk of loss.",
        "Our advice is based on information available at the time and may not be suitable for all situations.",
        "Clients should conduct their own due diligence before making investment decisions.",
        "We are not responsible for market fluctuations or external economic factors affecting investments.",
        "Professional financial advice should be sought for significant investment decisions."
      ]
    },
    {
      id: 'responsibilities',
      title: "User Responsibilities",
      icon: UserCheck,
      summary: "Your obligations when using our services and platform",
      content: [
        "Provide accurate and complete information when requested",
        "Maintain the confidentiality of any login credentials",
        "Use our services only for lawful purposes",
        "Comply with all applicable laws and regulations",
        "Notify us immediately of any unauthorized use of your account"
      ]
    },
    {
      id: 'intellectual',
      title: "Intellectual Property Rights",
      icon: Copyright,
      summary: "Protection of proprietary content, trademarks, and methodologies",
      content: [
        "All content, including but not limited to text, graphics, logos, and software, is the property of Gission Global Investment Limited.",
        "You may not reproduce, distribute, or create derivative works without written permission.",
        "Our trademarks and service marks may not be used without prior written consent.",
        "Client information and proprietary methodologies remain confidential and proprietary."
      ]
    },
    {
      id: 'liability',
      title: "Limitation of Liability",
      icon: Shield,
      summary: "Legal limitations on our liability and responsibility scope",
      content: [
        "Our liability is limited to the extent permitted by law.",
        "We shall not be liable for any indirect, incidental, or consequential damages.",
        "Our total liability shall not exceed the amount of fees paid for our services.",
        "This limitation applies to all claims, whether based on contract, tort, or other legal theory."
      ]
    },
    {
      id: 'indemnification',
      title: "Indemnification",
      icon: Scale,
      summary: "Protection agreements for legal claims and expenses",
      content: [
        "You agree to indemnify and hold harmless Gission Global Investment Limited from any claims arising from your use of our services.",
        "This includes legal fees and expenses incurred in defending against such claims.",
        "Indemnification obligations survive termination of our service relationship."
      ]
    },
    {
      id: 'termination',
      title: "Termination",
      icon: XCircle,
      summary: "End of service agreement terms and post-termination obligations",
      content: [
        "Either party may terminate our service agreement with appropriate notice.",
        "Termination does not affect obligations that have already accrued.",
        "Confidentiality obligations survive termination of services.",
        "Upon termination, access to our services and materials will cease."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-dark-navy/20 z-50">
        <div 
          className="h-full bg-rich-gold transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

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
                <BreadcrumbPage className="text-pure-white">Terms of Service</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Modern Hero Section */}
        <ScrollAnimatedSection className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-dark-navy via-deep-navy to-dark-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.1),transparent)] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-gold/10 border border-rich-gold/20 mb-8">
              <FileText className="w-4 h-4 text-rich-gold" />
              <span className="text-rich-gold text-sm font-medium">Effective Date: January 2025</span>
            </div>
            
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-rich-gold mb-8 leading-tight">
              Terms of Service
            </h1>
            
            <p className="text-light-gray text-xl sm:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Clear terms that govern your use of our corporate finance services. Read our professional service agreements and legal information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta-primary" asChild>
                <a href="#acceptance">Read Full Terms</a>
              </Button>
              <Button variant="outline" className="gap-2" asChild>
                <a href="#download">
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-rich-gold/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-rich-gold rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Risk Warning Banner */}
        <ScrollAnimatedSection className="py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border-orange-400/30 overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-orange-400 mb-2 text-lg">Important Investment Risk Warning</h3>
                    <p className="text-light-gray leading-relaxed">
                      All investments carry risk. Past performance does not guarantee future returns. 
                      You should carefully consider your investment objectives and risk tolerance before engaging our services. 
                      Seek independent financial advice when making significant investment decisions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimatedSection>

        {/* Service Overview Cards */}
        <ScrollAnimatedSection className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-rich-gold mb-4">
                Our Service Categories
              </h2>
              <p className="text-light-gray text-lg leading-relaxed max-w-2xl mx-auto">
                Understanding the scope of our corporate finance advisory services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Briefcase, title: "Investment Advisory", desc: "Strategic investment guidance and portfolio management" },
                { icon: Scale, title: "Legal Compliance", desc: "Regulatory compliance and legal framework advisory" },
                { icon: Shield, title: "Risk Management", desc: "Comprehensive risk assessment and mitigation strategies" }
              ].map((service, idx) => (
                <Card key={idx} className="bg-card border border-rich-gold/20 hover:border-rich-gold/40 transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-rich-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-8 h-8 text-rich-gold" />
                    </div>
                    <h3 className="font-semibold text-pure-white mb-2">{service.title}</h3>
                    <p className="text-light-gray text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Modern Content Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {sections.map((section, index) => (
            <ScrollAnimatedSection 
              key={section.id}
              className="mb-8"
              animationType="fade-up"
              delay={index % 3}
            >
              <Card className="bg-card border border-rich-gold/20 overflow-hidden hover:border-rich-gold/40 transition-colors duration-300">
                <Collapsible 
                  open={openSections[section.id]} 
                  onOpenChange={() => toggleSection(section.id)}
                >
                  <CollapsibleTrigger className="w-full text-left p-0">
                    <CardHeader className="p-6 sm:p-8 hover:bg-rich-gold/5 transition-colors duration-200">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="w-12 h-12 bg-rich-gold/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <section.icon className="w-6 h-6 text-rich-gold" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="font-playfair text-2xl sm:text-3xl font-semibold text-rich-gold mb-3 text-left">
                              {section.title}
                            </CardTitle>
                            <p className="text-light-gray leading-relaxed text-left">
                              {section.summary}
                            </p>
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {openSections[section.id] ? (
                            <ChevronUp className="w-6 h-6 text-rich-gold" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-rich-gold" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>

                  <CollapsibleContent>
                    <CardContent className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
                      <div className="pl-16 space-y-4">
                        {section.content.map((paragraph, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-rich-gold rounded-full mt-3 flex-shrink-0" />
                            <p className="text-light-gray leading-relaxed flex-1">
                              {paragraph}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </ScrollAnimatedSection>
          ))}

          {/* Governing Law & Modern Contact */}
          <ScrollAnimatedSection className="mt-20">
            <Card className="bg-gradient-to-r from-rich-gold/10 via-rich-gold/5 to-transparent border-rich-gold/20 overflow-hidden">
              <CardContent className="p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="font-playfair text-3xl font-semibold text-rich-gold mb-6">
                      Governing Law
                    </h2>
                    <div className="space-y-4 text-light-gray leading-relaxed">
                      <p>
                        These terms are governed by and construed in accordance with applicable financial services regulations 
                        and the laws of the jurisdictions in which we operate.
                      </p>
                      <p>
                        Any disputes shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration body.
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:border-l lg:border-rich-gold/20 lg:pl-8">
                    <h3 className="font-playfair text-2xl font-semibold text-rich-gold mb-6">
                      Questions About These Terms?
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-rich-gold/10 rounded-full flex items-center justify-center">
                          <Phone className="w-4 h-4 text-rich-gold" />
                        </div>
                        <span className="text-rich-gold">legal@gissionglobal.com</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-rich-gold/10 rounded-full flex items-center justify-center">
                          <Phone className="w-4 h-4 text-rich-gold" />
                        </div>
                        <span className="text-rich-gold">+1 (555) 123-4567</span>
                      </div>
                    </div>
                    <Button variant="cta-primary" asChild>
                      <a href="/contact">Contact Our Legal Team</a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimatedSection>
        </div>

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-rich-gold text-dark-navy rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6 mx-auto" />
          </button>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
