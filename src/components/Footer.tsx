const StayInformedSection = () => {
  return (
    <section className="bg-charcoal-black text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Stay Informed
          </h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            Get the latest insights on market trends, investment opportunities, and financial strategies delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-base focus:outline-none focus:border-primary-yellow transition-colors duration-300"
            />
            <button className="px-8 py-4 bg-primary-yellow text-charcoal-black font-semibold text-base rounded-lg hover:bg-yellow-400 transition-colors duration-300">
              Subscribe
            </button>
          </div>
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
      <footer className="bg-charcoal-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center mr-4">
                  <span className="text-charcoal-black font-bold text-xl">GG</span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">Gission Global</h2>
                  <p className="text-sm text-gray-400">Investment Limited</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Leading corporate financing entity specializing in project investment, 
                capital raising, and strategic consulting.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="text-gray-400 hover:text-primary-yellow transition-colors duration-300 cursor-pointer text-sm">
                  hello@gissionglobal.com
                </div>
                <div className="text-gray-400 hover:text-primary-yellow transition-colors duration-300 cursor-pointer text-sm">
                  +1 (555) 123-4567
                </div>
                <div className="text-gray-400 text-sm">
                  New York, London, Lagos
                </div>
              </div>
            </div>

            {/* Navigation Sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="text-white font-semibold mb-4 text-lg">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary-yellow transition-colors duration-300 text-sm"
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
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Gission Global Investment Limited. All rights reserved.
            </p>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-yellow transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-yellow transition-colors duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="/privacy"
                className="text-gray-400 hover:text-primary-yellow transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-400 hover:text-primary-yellow transition-colors duration-300 text-sm"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;