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
    <footer className="dark-section text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-2 fade-in-up">
              {/* Logo */}
              <div className="flex items-center mb-8 logo-hover">
                <div className="w-14 h-14 bg-primary-yellow rounded-full flex items-center justify-center mr-6">
                  <span className="text-charcoal-black font-inter font-bold text-2xl">GG</span>
                </div>
                <div>
                  <h2 className="font-playfair font-semibold text-2xl">Gission Global</h2>
                  <p className="text-white/60 font-inter">Investment Limited</p>
                </div>
              </div>
              
              <p className="body-text text-white/80 mb-8">
                Leading corporate financing entity specializing in project investment, 
                capital raising, and strategic consulting. Building sustainable growth 
                through innovative financial solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center group">
                  <svg className="w-6 h-6 text-primary-yellow mr-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/80 font-inter text-lg hover:text-white transition-colors duration-300">hello@gissionglobal.com</span>
                </div>
                <div className="flex items-center group">
                  <svg className="w-6 h-6 text-primary-yellow mr-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white/80 font-inter text-lg hover:text-white transition-colors duration-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center group">
                  <svg className="w-6 h-6 text-primary-yellow mr-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/80 font-inter text-lg hover:text-white transition-colors duration-300">New York, London, Lagos</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {Object.entries(footerSections).map(([key, section], index) => (
              <div key={key} className={`fade-in-up stagger-delay-${index + 2}`}>
                <h3 className="font-playfair font-semibold text-xl text-white mb-8">
                  {section.title}
                </h3>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="nav-link text-white/70 hover:text-primary-yellow transition-colors duration-300 font-inter text-lg"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 py-16 fade-in-up stagger-delay-5">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="heading-md text-white mb-6">
              Stay Informed
            </h3>
            <p className="body-text text-white/70 mb-10">
              Get the latest insights on market trends, investment opportunities, and financial strategies.
            </p>
            <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-8 py-5 bg-white/10 border-2 border-white/20 rounded-full text-white placeholder-white/50 font-inter text-lg focus:outline-none focus:border-primary-yellow transition-colors duration-300"
              />
              <button className="px-10 py-5 bg-primary-yellow text-charcoal-black font-inter font-semibold text-lg rounded-full hover:bg-primary-yellow/90 hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-10 fade-in-up stagger-delay-5">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-white/60 font-inter mb-6 md:mb-0 text-lg">
              © {currentYear} Gission Global Investment Limited. All rights reserved.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-8 mb-6 md:mb-0">
              <a
                href="#"
                className="text-white/60 hover:text-primary-yellow hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary-yellow hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-8">
              <a
                href="/privacy"
                className="nav-link text-white/60 hover:text-primary-yellow transition-colors duration-300 font-inter text-lg"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="nav-link text-white/60 hover:text-primary-yellow transition-colors duration-300 font-inter text-lg"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;