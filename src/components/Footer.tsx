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
    <footer className="bg-charcoal-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-charcoal-black font-playfair font-bold text-xl">GG</span>
                </div>
                <div>
                  <h2 className="font-playfair font-semibold text-xl">Gission Global</h2>
                  <p className="text-white/60 font-inter text-sm">Investment Limited</p>
                </div>
              </div>
              
              <p className="text-white/80 leading-relaxed mb-6 font-inter">
                Leading corporate financing entity specializing in project investment, 
                capital raising, and strategic consulting. Building sustainable growth 
                through innovative financial solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-white/80 font-inter">hello@gissionglobal.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-white/80 font-inter">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-white/80 font-inter">New York, London, Lagos</span>
                </div>
              </div>
            </div>

            {/* Footer Sections */}
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-playfair font-semibold text-lg text-white mb-6">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white/70 hover:text-primary transition-colors duration-200 font-inter"
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
        <div className="border-t border-white/20 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-playfair font-semibold text-2xl text-white mb-4">
              Stay Informed
            </h3>
            <p className="text-white/70 mb-8 font-inter">
              Get the latest insights on market trends, investment opportunities, and financial strategies.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 font-inter focus:outline-none focus:border-primary"
              />
              <button className="px-8 py-3 bg-primary text-charcoal-black font-semibold rounded-2xl hover:bg-primary/90 transition-colors duration-200 font-inter">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <p className="text-white/60 text-sm font-inter mb-4 md:mb-0">
              © {currentYear} Gission Global Investment Limited. All rights reserved.
            </p>

            {/* Social Media */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-primary transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              <a
                href="/privacy"
                className="text-white/60 hover:text-primary transition-colors duration-200 text-sm font-inter"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-white/60 hover:text-primary transition-colors duration-200 text-sm font-inter"
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