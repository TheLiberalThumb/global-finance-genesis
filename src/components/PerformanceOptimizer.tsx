import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical fonts
    const preloadFont = (fontUrl: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.href = fontUrl;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Preload only essential fonts
    preloadFont('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');
    preloadFont('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

    // Optimize images loading
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    // Resource hints
    const addResourceHint = (rel: string, href: string) => {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      document.head.appendChild(link);
    };

    // DNS prefetch for external resources
    addResourceHint('dns-prefetch', 'https://fonts.googleapis.com');
    addResourceHint('dns-prefetch', 'https://my.spline.design');

    // Preconnect to critical domains
    addResourceHint('preconnect', 'https://fonts.gstatic.com');

    return () => {
      imageObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;