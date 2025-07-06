import { useEffect } from 'react';

const AccessibilityEnhancements = () => {
  useEffect(() => {
    // Skip to main content functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-rich-gold text-dark-navy px-4 py-2 rounded z-50';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add aria-label to interactive elements without text
    const interactiveElements = document.querySelectorAll('button:not([aria-label]), a:not([aria-label])');
    interactiveElements.forEach((element) => {
      const text = element.textContent?.trim();
      if (!text && !element.getAttribute('aria-label')) {
        const iconTitle = element.querySelector('svg title')?.textContent;
        if (iconTitle) {
          element.setAttribute('aria-label', iconTitle);
        }
      }
    });

    // Enhance keyboard navigation
    const handleKeyDown = (e: KeyboardEvent) => {
      // Enhanced tab navigation
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
      
      // Escape key handling for modals and dropdowns
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('[role="dialog"]');
        const activeDropdown = document.querySelector('[data-state="open"]');
        
        if (activeModal || activeDropdown) {
          const closeButton = activeModal?.querySelector('[aria-label*="close"], [aria-label*="Close"]') as HTMLElement;
          closeButton?.click();
        }
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    // Improved focus indicators
    const style = document.createElement('style');
    style.textContent = `
      .keyboard-navigation *:focus {
        outline: 3px solid hsl(var(--rich-gold));
        outline-offset: 2px;
      }
      
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      
      .skip-link {
        position: absolute;
        left: -9999px;
        z-index: 999;
        padding: 8px 16px;
        text-decoration: none;
        font-weight: 600;
      }
      
      .skip-link:focus {
        left: 6px;
        top: 6px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
      if (skipLink.parentNode) {
        skipLink.parentNode.removeChild(skipLink);
      }
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null; // This component doesn't render visible content
};

export default AccessibilityEnhancements;