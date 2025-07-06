import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOOptimizer = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamic meta tag updates based on route
    const updateMetaTags = () => {
      const path = location.pathname;
      let title = 'Gission Global - Premium Corporate Finance Solutions';
      let description = 'Expert corporate finance advisory, project investment, and strategic consulting services for emerging markets. Transform your business with innovative financial solutions.';
      let keywords = 'corporate finance, investment advisory, project financing, strategic consulting, emerging markets';

      switch (path) {
        case '/about':
          title = 'About Us - Gission Global | Expert Leadership Team';
          description = 'Meet our visionary leadership team driving innovation in corporate finance. Learn about our mission, values, and commitment to excellence.';
          keywords = 'about gission global, leadership team, corporate finance experts, company mission';
          break;
        case '/services':
          title = 'Financial Services - Gission Global | Corporate Finance Solutions';
          description = 'Comprehensive corporate finance services including M&A advisory, project investment, and strategic consulting for sustainable growth.';
          keywords = 'corporate finance services, M&A advisory, project investment, strategic consulting, business valuation';
          break;
        case '/team':
          title = 'Our Team - Gission Global | Visionary Leadership';
          description = 'Discover our exceptional team of finance professionals, advisors, and industry experts committed to your success.';
          keywords = 'finance team, corporate advisors, investment professionals, leadership team';
          break;
        case '/contact':
          title = 'Contact Us - Gission Global | Get Expert Consultation';
          description = 'Connect with our expert team for personalized corporate finance solutions. Schedule your consultation today.';
          keywords = 'contact gission global, finance consultation, expert advice, corporate finance help';
          break;
      }

      // Update document title
      document.title = title;

      // Update meta description
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (metaDescription) {
        metaDescription.content = description;
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }

      // Update meta keywords
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (metaKeywords) {
        metaKeywords.content = keywords;
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }

      // Update Open Graph tags
      const ogTags = [
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: window.location.href },
        { property: 'og:site_name', content: 'Gission Global' },
        { property: 'og:image', content: '/og-image.jpg' },
      ];

      ogTags.forEach(({ property, content }) => {
        let ogTag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
        if (ogTag) {
          ogTag.content = content;
        } else {
          ogTag = document.createElement('meta');
          ogTag.setAttribute('property', property);
          ogTag.content = content;
          document.head.appendChild(ogTag);
        }
      });

      // Update Twitter Card tags
      const twitterTags = [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: '/og-image.jpg' },
      ];

      twitterTags.forEach(({ name, content }) => {
        let twitterTag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
        if (twitterTag) {
          twitterTag.content = content;
        } else {
          twitterTag = document.createElement('meta');
          twitterTag.name = name;
          twitterTag.content = content;
          document.head.appendChild(twitterTag);
        }
      });
    };

    // Add structured data for better search results
    const addStructuredData = () => {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "FinancialService",
        "name": "Gission Global",
        "description": "Expert corporate finance advisory and investment services",
        "url": "https://gissionglobal.com",
        "logo": "/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-0123",
          "contactType": "Customer Service",
          "availableLanguage": "English"
        },
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://linkedin.com/company/gissionglobal",
          "https://twitter.com/gissionglobal"
        ]
      };

      let script = document.getElementById('structured-data') as HTMLScriptElement;
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement('script') as HTMLScriptElement;
        script.id = 'structured-data';
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    };

    updateMetaTags();
    addStructuredData();

    // Add canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = window.location.href;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }

  }, [location.pathname]);

  return null;
};

export default SEOOptimizer;