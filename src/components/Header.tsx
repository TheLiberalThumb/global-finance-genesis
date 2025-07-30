import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-dark-navy ${
        isScrolled 
          ? 'header-shadow' 
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-24">
          {/* Logo and Company Name */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 lg:gap-4"
            onClick={() => {
              window.location.href = "/#hero";
              setTimeout(() => window.location.reload(), 100);
            }}
          >
            <div className="flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-black rounded-full flex items-center justify-center logo-hover p-1 sm:p-1.5 md:p-2">
                <img 
                  src="/lovable-uploads/db7363fe-c656-42f8-82e7-18772c89d739.png"
                  alt="Gission Global Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div>
              <h1 className="font-caslon font-semibold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-pure-white leading-tight">
                Gission Global
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link font-futura font-medium text-base lg:text-lg text-pure-white hover:text-rich-gold transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Tablet Navigation - Condensed */}
          <nav className="hidden md:flex lg:hidden items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link font-futura font-medium text-sm text-pure-white hover:text-rich-gold transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="cta-primary" className="text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 min-h-[40px] sm:min-h-[44px]" asChild>
              <a href="https://calendly.com/adesokankunle" target="_blank" rel="noopener noreferrer">
                Book Meeting
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-pure-white hover:text-rich-gold transition-colors duration-300"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark-navy rounded-2xl shadow-large mt-4 py-6 px-6 animate-fade-in border border-rich-gold/20 mx-4">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-futura font-medium text-lg text-pure-white hover:text-rich-gold transition-colors duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button variant="cta-primary" className="mt-6 w-full min-h-[48px] text-base" asChild>
                <a href="https://calendly.com/adesokankunle" target="_blank" rel="noopener noreferrer">
                  Book Meeting
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
