
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { Shield, Eye, Lock, Users, Globe, Cookie, Phone, ChevronDown, ChevronUp, ArrowUp } from 'lucide-react';

const PrivacyPolicy = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    document.title = "Privacy Policy - Gission Global Investment Limited";
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = "Modern privacy policy for Gission Global Investment Limited. Learn how we protect your personal and financial information with transparency.";
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
      id: 'collection',
      title: "Information We Collect",
      icon: Eye,
      summary: "Personal, financial, and technical data collected during our service interactions",
      content: [
        "We collect information you provide directly to us, such as when you create an account, request information about our services, or communicate with us.",
        "Personal Information: Name, email address, phone number, business information, and professional credentials.",
        "Financial Information: Investment preferences, financial goals, and relevant business financial data.",
        "Technical Information: IP address, browser type, device information, and website usage data."
      ]
    },
    {
      id: 'usage',
      title: "How We Use Your Information",
      icon: Shield,
      summary: "Service delivery, communication, compliance, and security purposes",
      content: [
        "Provide and improve our corporate finance and investment advisory services",
        "Communicate with you about our services, market insights, and investment opportunities",
        "Comply with legal and regulatory requirements in the financial services industry",
        "Protect against fraud and unauthorized transactions",
        "Analyze and improve our website performance and user experience"
      ]
    },
    {
      id: 'sharing',
      title: "Information Sharing and Disclosure",
      icon: Users,
      summary: "Limited sharing with trusted partners and legal compliance requirements",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist in our operations",
        "We may disclose information when required by law or to protect our legal rights",
        "In the event of a merger or acquisition, information may be transferred to the acquiring entity"
      ]
    },
    {
      id: 'security',
      title: "Data Security",
      icon: Lock,
      summary: "Industry-standard encryption and access controls protect your data",
      content: [
        "We implement industry-standard security measures to protect your information",
        "All financial data is encrypted using advanced encryption protocols",
        "Access to personal information is restricted to authorized personnel only",
        "We regularly review and update our security practices to ensure data protection"
      ]
    },
    {
      id: 'rights',
      title: "Your Rights and Choices",
      icon: Users,
      summary: "Access, update, delete, and control your personal information",
      content: [
        "You have the right to access, update, or delete your personal information",
        "You can opt-out of marketing communications at any time",
        "You may request a copy of the personal information we hold about you",
        "EU residents have additional rights under GDPR including data portability"
      ]
    },
    {
      id: 'cookies',
      title: "Cookies and Tracking Technologies",
      icon: Cookie,
      summary: "Essential and analytics cookies enhance your browsing experience",
      content: [
        "We use cookies to enhance your browsing experience and analyze website traffic",
        "Essential cookies are necessary for website functionality",
        "Analytics cookies help us understand how visitors use our website",
        "You can control cookie settings through your browser preferences"
      ]
    },
    {
      id: 'international',
      title: "International Data Transfers",
      icon: Globe,
      summary: "Global operations with appropriate data protection safeguards",
      content: [
        "Your information may be transferred to and processed in countries outside your residence",
        "We ensure appropriate safeguards are in place for international data transfers",
        "We comply with applicable data protection laws in all jurisdictions where we operate"
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
                <BreadcrumbPage className="text-pure-white">Privacy Policy</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Modern Hero Section */}
        <ScrollAnimatedSection className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-dark-navy via-deep-navy to-dark-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,215,0,0.1),transparent)] pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rich-gold/10 border border-rich-gold/20 mb-8">
              <Shield className="w-4 h-4 text-rich-gold" />
              <span className="text-rich-gold text-sm font-medium">Effective Date: January 2025</span>
            </div>
            
            <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl font-bold text-rich-gold mb-8 leading-tight">
              Privacy Policy
            </h1>
            
            <p className="text-light-gray text-xl sm:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto">
              Your privacy matters to us. Discover how we protect and handle your personal and financial information with complete transparency.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="cta-primary" asChild>
                <a href="#collection">Read Full Policy</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Contact Privacy Team</a>
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

        {/* Executive Summary */}
        <ScrollAnimatedSection className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-gradient-to-r from-rich-gold/5 to-transparent border-rich-gold/20 p-8 sm:p-12">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="font-playfair text-3xl sm:text-4xl font-bold text-rich-gold mb-4">
                  Privacy at a Glance
                </CardTitle>
                <p className="text-light-gray text-lg leading-relaxed">
                  At Gission Global Investment Limited, we are committed to protecting your privacy and maintaining the confidentiality of your personal and financial information through industry-leading security practices.
                </p>
              </CardHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rich-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-rich-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pure-white mb-2">Data Protection</h3>
                    <p className="text-light-gray text-sm">Bank-level encryption and security measures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rich-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-rich-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pure-white mb-2">Transparency</h3>
                    <p className="text-light-gray text-sm">Clear information about data collection and use</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-rich-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-rich-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-pure-white mb-2">Your Control</h3>
                    <p className="text-light-gray text-sm">Full control over your personal information</p>
                  </div>
                </div>
              </div>
            </Card>
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

          {/* Modern Contact Section */}
          <ScrollAnimatedSection className="mt-20" id="contact">
            <Card className="bg-gradient-to-r from-rich-gold/10 via-rich-gold/5 to-transparent border-rich-gold/20 overflow-hidden">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-rich-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Phone className="w-8 h-8 text-rich-gold" />
                  </div>
                  <h2 className="font-playfair text-3xl sm:text-4xl font-semibold text-rich-gold mb-4">
                    Questions About Your Privacy?
                  </h2>
                  <p className="text-light-gray leading-relaxed mb-8 max-w-2xl mx-auto">
                    Our privacy team is here to help. Contact us about your privacy rights, data handling, or any concerns you may have.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <h3 className="font-semibold text-pure-white mb-2">Email</h3>
                    <p className="text-rich-gold">privacy@gissionglobal.com</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-pure-white mb-2">Phone</h3>
                    <p className="text-rich-gold">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-pure-white mb-2">Office</h3>
                    <p className="text-rich-gold">New York, London, Lagos</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="cta-primary" asChild>
                    <a href="/contact">Contact Privacy Team</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/terms">View Terms of Service</a>
                  </Button>
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

export default PrivacyPolicy;
