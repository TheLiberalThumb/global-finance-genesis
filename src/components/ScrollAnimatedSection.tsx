import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
  threshold?: number;
}

const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fade-up',
  delay = 0,
  threshold = 0.1,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  const getAnimationClass = () => {
    const baseClass = `scroll-${animationType}`;
    const visibleClass = isVisible ? 'visible' : '';
    const delayClass = delay > 0 ? `scroll-stagger-${Math.min(delay, 6)}` : '';
    
    return `${baseClass} ${visibleClass} ${delayClass}`.trim();
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default ScrollAnimatedSection;