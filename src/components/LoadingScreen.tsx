import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete?.();
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Logo or Brand */}
        <div className="w-20 h-20 mx-auto bg-rich-gold rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-dark-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>

        {/* Brand Name */}
        <h1 className="text-2xl font-playfair font-semibold text-foreground">
          Gission Global
        </h1>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-dark-navy rounded-full h-2">
            <div 
              className="bg-rich-gold h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-light-gray text-sm mt-2">{Math.round(progress)}%</p>
        </div>

        {/* Loading Text */}
        <p className="text-light-gray text-sm animate-pulse">
          Preparing your premium experience...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;