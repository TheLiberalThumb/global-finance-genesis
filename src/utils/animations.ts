// Advanced Animation System for Gission Global
// Handles scroll-triggered animations, intersection observers, and performance optimizations

export class AnimationController {
  private observers: IntersectionObserver[] = [];
  private prefersReducedMotion: boolean;

  constructor() {
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.initializeObservers();
  }

  private initializeObservers() {
    if (this.prefersReducedMotion) return;

    // Scroll-triggered animations observer
    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Add counter animation for statistics
            if (entry.target.classList.contains('counter-up')) {
              this.animateCounter(entry.target as HTMLElement);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    // New scroll-fade-up observer
    const scrollFadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Timeline progress observer
    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('timeline-progress');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    this.observers.push(scrollObserver, scrollFadeObserver, timelineObserver);

    // Observe elements when DOM is ready
    setTimeout(() => {
      this.observeElements();
    }, 100);
  }

  private observeElements() {
    // Observe scroll-triggered elements
    const scrollElements = document.querySelectorAll('.scroll-triggered');
    scrollElements.forEach((el) => {
      this.observers[0].observe(el);
    });

    // Observe scroll-fade-up elements
    const scrollFadeElements = document.querySelectorAll('.scroll-fade-up');
    scrollFadeElements.forEach((el) => {
      this.observers[1].observe(el);
    });

    // Observe counter elements
    const counterElements = document.querySelectorAll('.counter-up');
    counterElements.forEach((el) => {
      this.observers[0].observe(el);
    });

    // Observe timeline elements
    const timelineElements = document.querySelectorAll('.timeline-line');
    timelineElements.forEach((el) => {
      this.observers[2].observe(el);
    });
  }

  private animateCounter(element: HTMLElement) {
    const target = element.querySelector('.heading-md');
    if (!target) return;

    const text = target.textContent || '';
    const number = parseInt(text.replace(/\D/g, ''));
    const suffix = text.replace(/\d/g, '').replace('+', '');
    
    if (isNaN(number)) return;

    let current = 0;
    const increment = number / 60; // 60 frames for 1 second animation
    const timer = setInterval(() => {
      current += increment;
      if (current >= number) {
        current = number;
        clearInterval(timer);
      }
      target.textContent = Math.floor(current) + suffix + (number > current ? '' : '+');
    }, 16); // 60fps
  }

  // Parallax effect for floating elements
  public initParallax() {
    if (this.prefersReducedMotion) return;

    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
      
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick);
  }

  // Page load sequence
  public initPageLoadSequence() {
    if (this.prefersReducedMotion) return;

    // Header entrance
    setTimeout(() => {
      const header = document.querySelector('header');
      if (header) {
        header.classList.add('header-enter');
      }
    }, 100);

    // Hero content entrance
    setTimeout(() => {
      const heroElements = document.querySelectorAll('.hero-content-enter');
      heroElements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * 200);
      });
    }, 300);
  }

  // Interactive timeline activation
  public activateTimelineDots() {
    const dots = document.querySelectorAll('.timeline-dot');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );

    dots.forEach((dot) => observer.observe(dot));
  }

  // Cleanup observers
  public destroy() {
    this.observers.forEach((observer) => observer.disconnect());
  }
}

// Initialize animations when DOM is loaded
export const initializeAnimations = () => {
  if (typeof window === 'undefined') return;

  const controller = new AnimationController();
  
  // Start page load sequence
  controller.initPageLoadSequence();
  
  // Initialize parallax
  controller.initParallax();
  
  // Activate timeline dots
  controller.activateTimelineDots();

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    controller.destroy();
  });
};