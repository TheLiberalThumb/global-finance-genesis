// Global scroll trigger utility for applying scroll animations across all pages

// Extend Window interface for custom properties
declare global {
  interface Window {
    scrollAnimationsInitialized?: boolean;
    scrollObserver?: IntersectionObserver;
  }
}

export const initializeScrollAnimations = () => {
  // Check if already initialized
  if (typeof window === 'undefined' || window.scrollAnimationsInitialized) {
    return;
  }

  const observerOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const element = entry.target as HTMLElement;
      
      if (entry.isIntersecting) {
        // Add visible class for scroll animations
        if (element.classList.contains('scroll-fade-up') ||
            element.classList.contains('scroll-fade-left') ||
            element.classList.contains('scroll-fade-right') ||
            element.classList.contains('scroll-scale')) {
          element.classList.add('visible');
        }
      }
    });
  }, observerOptions);

  // Observe all scroll animation elements
  const scrollElements = document.querySelectorAll('.scroll-fade-up, .scroll-fade-left, .scroll-fade-right, .scroll-scale');
  scrollElements.forEach((el) => observer.observe(el));

  // Mark as initialized
  window.scrollAnimationsInitialized = true;
  
  // Store observer for cleanup
  window.scrollObserver = observer;
};

// Clean up function
export const cleanupScrollAnimations = () => {
  if (typeof window !== 'undefined' && window.scrollObserver) {
    window.scrollObserver.disconnect();
    window.scrollAnimationsInitialized = false;
  }
};

// Auto-initialize on DOM content loaded
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeScrollAnimations);
  } else {
    // DOM already loaded
    setTimeout(initializeScrollAnimations, 100);
  }
}