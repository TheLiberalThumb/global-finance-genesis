
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

    // Preload critical team images for faster loading
    const preloadImage = (src: string) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    };

    // Preload team member images
    preloadImage('/lovable-uploads/af57b1b8-2c82-480b-a009-f3cb347529a7.png');
    preloadImage('/lovable-uploads/df372e0c-7e39-4d4d-88a9-df1f52474453.png');
    preloadImage('/lovable-uploads/f5213e80-ea4e-4612-a412-2b4ecba22332.png');
    preloadImage('/lovable-uploads/db7363fe-c656-42f8-82e7-18772c89d739.png');

    // Optimize images loading with lazy loading and intersection observer
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

    // Optimize team images with responsive loading
    const optimizeTeamImages = () => {
      const teamImages = document.querySelectorAll('img[alt*="Mike Adesokan"], img[alt*="Rebecca Adesokan"], img[alt*="Adeola Emmanuel"]');
      teamImages.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        
        // Add loading="lazy" for better performance
        imageElement.loading = 'lazy';
        
        // Add decoding="async" for non-blocking image decoding
        imageElement.decoding = 'async';
        
        // Add responsive image attributes
        imageElement.style.willChange = 'transform';
        imageElement.style.backfaceVisibility = 'hidden';
        
        // Optimize image dimensions based on container
        const container = imageElement.closest('.w-32, .w-36, .w-48');
        if (container) {
          imageElement.style.maxWidth = '100%';
          imageElement.style.height = 'auto';
        }
      });
    };

    // Run optimization after DOM is ready
    setTimeout(optimizeTeamImages, 100);

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
