import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled 
          ? 'header-shadow' 
          : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-primary-yellow rounded-full flex items-center justify-center logo-hover">
                <span className="text-charcoal-black font-futura font-bold text-xl md:text-2xl">
                  GG
                </span>
              </div>
            </div>
            <div className="ml-4">
              <h1 className="font-caslon font-semibold text-xl md:text-2xl text-charcoal-black">
                Gission Global
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link font-futura font-medium text-lg text-charcoal-black hover:text-primary-yellow"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button className="btn-primary">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-black hover:text-primary-yellow transition-colors duration-300"
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
          <div className="md:hidden bg-white rounded-2xl shadow-large mt-4 py-6 px-6 animate-fade-in">
            <nav className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-futura font-medium text-lg text-charcoal-black hover:text-primary-yellow transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="btn-primary mt-6 w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;