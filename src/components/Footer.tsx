import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const StayInformedSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: email.trim().toLowerCase() }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
            variant: "default",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Successfully Subscribed!",
          description: "Thank you for subscribing to our newsletter. You'll receive the latest financial insights and market trends.",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing to our newsletter. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-background mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-rich-gold mb-6 font-playfair">
            Stay Informed
          </h2>
          <p className="text-light-gray mb-10 text-lg leading-relaxed">
            Get the latest insights on market trends, investment opportunities, and financial strategies delivered directly to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              disabled={isLoading}
              className="flex-1 px-6 py-4 bg-card border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray text-base focus:outline-none focus:border-rich-gold transition-colors duration-300 disabled:opacity-50"
              required
            />
            <button 
              type="submit"
              disabled={isLoading}
              className="px-8 py-4 bg-rich-gold text-dark-navy font-semibold text-base rounded-lg hover:bg-rich-gold/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "News & Media", href: "/news" }
      ]
    },
    services: {
      title: "Services",
      links: [
        { name: "Corporate Finance", href: "/services#corporate-finance" },
        { name: "Project Investment", href: "/services#project-investment" },
        { name: "Strategic Consulting", href: "/services#strategic-consulting" },
        { name: "Capital Raising", href: "/services#capital-raising" }
      ]
    },
    resources: {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/case-studies" },
        { name: "Industry Reports", href: "/reports" },
        { name: "Investment Insights", href: "/insights" },
        { name: "FAQ", href: "/faq" }
      ]
    }
  };

  return (
    <>
      <StayInformedSection />
      <footer className="bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="sm:col-span-2 md:col-span-2">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-rich-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-dark-navy font-bold text-xl">GG</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-pure-white">Gission Global</h2>
                  <p className="text-sm text-light-gray">Investment Limited</p>
                </div>
              </div>
              
              <p className="text-light-gray mb-6 text-sm leading-relaxed">
                Leading corporate financing entity specializing in project investment, 
                capital raising, and strategic consulting.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="text-light-gray hover:text-rich-gold transition-colors duration-300 cursor-pointer text-sm">
                  hello@gissionglobal.com
                </div>
                <div className="text-light-gray hover:text-rich-gold transition-colors duration-300 cursor-pointer text-sm">
                  +1 (555) 123-4567
                </div>
                <div className="text-light-gray text-sm">
                  New York, London, Lagos
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-pure-white font-semibold mb-4 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-light-gray hover:text-rich-gold transition-colors duration-300 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-rich-gold/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-light-gray text-sm mb-4 md:mb-0">
              © {currentYear} Gission Global Investment Limited. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-light-gray hover:text-rich-gold transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-light-gray hover:text-rich-gold transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="/privacy"
                className="text-light-gray hover:text-rich-gold transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-light-gray hover:text-rich-gold transition-colors duration-300 text-sm"
              >
                Terms
              </a>
              <a
                href="/admin/login"
                className="text-light-gray hover:text-rich-gold transition-colors duration-300 text-sm"
              >
                Admin
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;