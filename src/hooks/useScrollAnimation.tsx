
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
}: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
};

export const useCounterAnimation = (
  endValue: number,
  duration: number = 2000,
  startDelay: number = 0
) => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    if (isVisible && !isActive) {
      setIsActive(true);
      
      const startAnimation = () => {
        const startTime = performance.now();
        
        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          
          // Smooth easing function
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentCount = easeOutQuart * endValue;
          
          setCount(currentCount);
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(endValue);
          }
        };
        
        requestAnimationFrame(animate);
      };

      if (startDelay > 0) {
        setTimeout(startAnimation, startDelay);
      } else {
        startAnimation();
      }
    }
  }, [isVisible, isActive, endValue, duration, startDelay]);

  return { ref, count, isVisible };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    const throttledScrollHandler = throttle(handleScroll, 16); // 60fps
    window.addEventListener('scroll', throttledScrollHandler);
    
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [speed]);

  return { ref, offset };
};

// Throttle function for performance optimization
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function(this: any) {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
