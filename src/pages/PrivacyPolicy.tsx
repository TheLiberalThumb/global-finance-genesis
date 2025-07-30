
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import ScrollAnimatedSection from '@/components/ScrollAnimatedSection';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "Privacy Policy - Gission Global Investment Limited";
    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = "Privacy Policy for Gission Global Investment Limited. Learn how we protect your personal and financial information.";
    }
  }, []);

  const sections = [
    {
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us, such as when you create an account, request information about our services, or communicate with us.",
        "Personal Information: Name, email address, phone number, business information, and professional credentials.",
        "Financial Information: Investment preferences, financial goals, and relevant business financial data.",
        "Technical Information: IP address, browser type, device information, and website usage data."
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and improve our corporate finance and investment advisory services",
        "Communicate with you about our services, market insights, and investment opportunities",
        "Comply with legal and regulatory requirements in the financial services industry",
        "Protect against fraud and unauthorized transactions",
        "Analyze and improve our website performance and user experience"
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist in our operations",
        "We may disclose information when required by law or to protect our legal rights",
        "In the event of a merger or acquisition, information may be transferred to the acquiring entity"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your information",
        "All financial data is encrypted using advanced encryption protocols",
        "Access to personal information is restricted to authorized personnel only",
        "We regularly review and update our security practices to ensure data protection"
      ]
    },
    {
      title: "Your Rights and Choices",
      content: [
        "You have the right to access, update, or delete your personal information",
        "You can opt-out of marketing communications at any time",
        "You may request a copy of the personal information we hold about you",
        "EU residents have additional rights under GDPR including data portability"
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies to enhance your browsing experience and analyze website traffic",
        "Essential cookies are necessary for website functionality",
        "Analytics cookies help us understand how visitors use our website",
        "You can control cookie settings through your browser preferences"
      ]
    },
    {
      title: "International Data Transfers",
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

        {/* Hero Section */}
        <ScrollAnimatedSection className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold text-rich-gold mb-6">
              Privacy Policy
            </h1>
            <p className="text-light-gray text-lg mb-4">
              Effective Date: January 2025
            </p>
            <p className="text-light-gray text-lg leading-relaxed">
              At Gission Global Investment Limited, we are committed to protecting your privacy and maintaining the confidentiality of your personal and financial information.
            </p>
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

          {/* Contact Section */}
          <ScrollAnimatedSection className="mt-16">
            <div className="bg-card border border-rich-gold/20 rounded-lg p-8 text-center">
              <h2 className="font-playfair text-2xl sm:text-3xl font-semibold text-rich-gold mb-4">
                Contact Information
              </h2>
              <p className="text-light-gray leading-relaxed mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-light-gray">
                <p>Email: privacy@gissionglobal.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: New York, London, Lagos</p>
              </div>
            </div>
          </ScrollAnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
