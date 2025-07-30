
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';
import { Button } from '@/components/ui/button';

const TermsOfService = () => {
  useEffect(() => {
    document.title = "Terms of Service - Gission Global Investment Limited";
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = "Terms of Service for Gission Global Investment Limited. Important legal information about our corporate finance services.";
    }
  }, []);

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the services of Gission Global Investment Limited, you accept and agree to be bound by the terms and provisions of this agreement.",
        "If you do not agree to abide by the above, please do not use our services.",
        "These terms apply to all visitors, users, and others who access or use our services."
      ]
    },
    {
      title: "Description of Services",
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
      title: "Investment Advisory Disclaimers",
      content: [
        "Past performance is not indicative of future results. All investments carry risk of loss.",
        "Our advice is based on information available at the time and may not be suitable for all situations.",
        "Clients should conduct their own due diligence before making investment decisions.",
        "We are not responsible for market fluctuations or external economic factors affecting investments.",
        "Professional financial advice should be sought for significant investment decisions."
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information when requested",
        "Maintain the confidentiality of any login credentials",
        "Use our services only for lawful purposes",
        "Comply with all applicable laws and regulations",
        "Notify us immediately of any unauthorized use of your account"
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All content, including but not limited to text, graphics, logos, and software, is the property of Gission Global Investment Limited.",
        "You may not reproduce, distribute, or create derivative works without written permission.",
        "Our trademarks and service marks may not be used without prior written consent.",
        "Client information and proprietary methodologies remain confidential and proprietary."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the extent permitted by law.",
        "We shall not be liable for any indirect, incidental, or consequential damages.",
        "Our total liability shall not exceed the amount of fees paid for our services.",
        "This limitation applies to all claims, whether based on contract, tort, or other legal theory."
      ]
    },
    {
      title: "Indemnification",
      content: [
        "You agree to indemnify and hold harmless Gission Global Investment Limited from any claims arising from your use of our services.",
        "This includes legal fees and expenses incurred in defending against such claims.",
        "Indemnification obligations survive termination of our service relationship."
      ]
    },
    {
      title: "Termination",
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

        {/* Hero Section */}
        <ScrollAnimatedSection className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-rich-gold mb-6">
              Terms of Service
            </h1>
            <p className="text-light-gray text-lg mb-4">
              Effective Date: January 2025
            </p>
            <p className="text-light-gray text-lg leading-relaxed">
              Please read these terms carefully as they govern your use of our corporate finance services and contain important legal information.
            </p>
          </div>
        </ScrollAnimatedSection>

        {/* Risk Warning Banner */}
        <ScrollAnimatedSection className="mb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-rich-gold/10 to-rich-gold/5 border-l-4 border-rich-gold rounded-r-lg p-6">
              <h3 className="font-semibold text-rich-gold mb-2">Important Investment Risk Warning</h3>
              <p className="text-light-gray text-sm">
                All investments carry risk. Past performance does not guarantee future returns. 
                You should carefully consider your investment objectives and risk tolerance before engaging our services.
              </p>
            </div>
          </div>
        </ScrollAnimatedSection>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {sections.map((section, index) => (
            <ScrollAnimatedSection 
              key={section.title}
              className="mb-12"
              animationType="fade-up"
              delay={index % 3}
            >
              <div className="bg-card border border-rich-gold/20 rounded-lg p-8">
                <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-rich-gold mb-6">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-light-gray leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollAnimatedSection>
          ))}

          {/* Governing Law & Contact */}
          <ScrollAnimatedSection className="mt-16">
            <div className="bg-card border border-rich-gold/20 rounded-lg p-8">
              <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-rich-gold mb-6">
                Governing Law & Contact Information
              </h2>
              <div className="space-y-4 text-light-gray leading-relaxed mb-8">
                <p>
                  These terms are governed by and construed in accordance with applicable financial services regulations 
                  and the laws of the jurisdictions in which we operate.
                </p>
                <p>
                  Any disputes shall be resolved through binding arbitration in accordance with the rules of the relevant arbitration body.
                </p>
              </div>
              
              <div className="border-t border-rich-gold/20 pt-6 text-center">
                <h3 className="font-semibold text-rich-gold mb-4">Questions About These Terms?</h3>
                <div className="space-y-2 text-light-gray mb-6">
                  <p>Email: legal@gissionglobal.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: New York, London, Lagos</p>
                </div>
                <Button variant="cta-primary" asChild>
                  <a href="/contact">Contact Our Legal Team</a>
                </Button>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
