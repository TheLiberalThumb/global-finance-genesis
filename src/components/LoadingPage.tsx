import { useState, useEffect } from 'react';

interface LoadingPageProps {
  onLoadingComplete: () => void;
}

const LoadingPage = ({ onLoadingComplete }: LoadingPageProps) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setShowAnimation(false);
            setTimeout(onLoadingComplete, 500);
          }, 1000);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    return () => clearInterval(progressInterval);
  }, [onLoadingComplete]);

  if (!showAnimation) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-pure-white to-light-gray z-50 flex items-center justify-center animate-fade-out">
        <div className="text-center opacity-0">
          <div className="w-16 h-16 bg-primary-yellow rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-charcoal-black font-bold text-xl">GG</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-pure-white to-light-gray z-50 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto px-6">
        {/* Animation Container */}
        <div className="relative w-full h-96 md:h-[500px] bg-white rounded-3xl shadow-large overflow-hidden mb-8">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="floating-bg-element w-20 h-20 bg-primary-yellow/10 top-10 left-10"></div>
            <div className="floating-bg-element w-16 h-16 bg-primary-yellow/15 top-20 right-16"></div>
            <div className="floating-bg-element w-12 h-12 bg-primary-yellow/20 bottom-16 left-20"></div>
          </div>

          {/* Girl Character (Recipient) */}
          <div className="absolute right-16 bottom-16 transform translate-y-4 animate-fade-in stagger-delay-2">
            <div className="relative">
              {/* Girl Figure */}
              <div className="w-24 h-32 relative">
                {/* Body */}
                <div className="absolute bottom-0 w-16 h-20 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-full mx-auto left-4"></div>
                {/* Head */}
                <div className="absolute top-0 w-12 h-12 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full mx-auto left-6"></div>
                {/* Arms */}
                <div className="absolute top-12 -left-2 w-4 h-12 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full transform rotate-12 animate-bounce-slow"></div>
                <div className="absolute top-12 -right-2 w-4 h-12 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full transform -rotate-12 animate-bounce-slow stagger-delay-1"></div>
              </div>
              
              {/* Waiting Animation */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-primary-yellow rounded-full animate-bounce stagger-delay-3"></div>
                <div className="w-1 h-1 bg-primary-yellow rounded-full mt-1 mx-auto animate-bounce stagger-delay-4"></div>
              </div>
            </div>
          </div>

          {/* Phoenix and Parcel Animation */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-32">
            {/* Phoenix Flight Path */}
            <div className="relative w-full h-full">
              <div 
                className="absolute flex items-center transition-all duration-[4000ms] ease-in-out"
                style={{
                  left: loadingProgress < 80 ? `${(loadingProgress / 80) * 60}%` : '60%',
                  top: loadingProgress < 80 ? `${20 - (loadingProgress / 80) * 10}%` : '10%'
                }}
              >
                {/* Phoenix Body */}
                <div className="relative phoenix-container">
                  {/* Phoenix Body */}
                  <div className="w-16 h-12 relative">
                    {/* Body */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-yellow via-orange-400 to-orange-500 rounded-full transform skew-x-12">
                      <div className="w-full h-full bg-gradient-to-t from-orange-600/30 to-transparent rounded-full"></div>
                    </div>
                    
                    {/* Head */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary-yellow to-orange-400 rounded-full">
                      <div className="absolute top-1 right-1 w-1 h-1 bg-charcoal-black rounded-full"></div>
                    </div>
                    
                    {/* Beak */}
                    <div className="absolute -top-1 -right-4 w-0 h-0 border-l-4 border-l-orange-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>

                  {/* Wings */}
                  <div className="absolute -top-3 -left-4 wing-flap">
                    <div className="w-12 h-8 bg-gradient-to-r from-primary-yellow via-orange-300 to-orange-400 rounded-full transform -rotate-12 origin-bottom-right">
                      <div className="w-full h-full bg-gradient-to-t from-orange-500/20 to-transparent rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -left-4 wing-flap stagger-delay-1">
                    <div className="w-10 h-6 bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 rounded-full transform rotate-12 origin-top-right">
                      <div className="w-full h-full bg-gradient-to-b from-orange-600/20 to-transparent rounded-full"></div>
                    </div>
                  </div>

                  {/* Tail Feathers */}
                  <div className="absolute -left-8 top-1 transform -rotate-12">
                    <div className="w-8 h-2 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full floating-animation"></div>
                    <div className="w-6 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-1 floating-animation stagger-delay-1"></div>
                  </div>
                </div>

                {/* Parcel */}
                <div className="ml-2 relative">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-yellow to-orange-300 rounded-lg border-2 border-charcoal-black/20 coin-float">
                    <div className="absolute inset-1 border border-charcoal-black/30 rounded"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-charcoal-black">GG</div>
                  </div>
                  {/* Delivery String */}
                  <div className="absolute -top-4 left-1/2 w-0.5 h-4 bg-primary-yellow/60 transform -translate-x-1/2"></div>
                </div>

                {/* Delivery Effect */}
                {loadingProgress >= 80 && (
                  <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                    <div className="w-8 h-8 border-4 border-primary-yellow rounded-full animate-pulse">
                      <div className="w-full h-full bg-primary-yellow/20 rounded-full animate-ping"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Success Animation */}
          {loadingProgress >= 90 && (
            <div className="absolute top-1/2 right-20 transform -translate-y-1/2 animate-scale-in">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
          )}
        </div>

        {/* Loading Info */}
        <div className="text-center">
          {/* Company Logo */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center logo-hover">
              <span className="text-charcoal-black font-bold text-xl">GG</span>
            </div>
            <h1 className="heading-md text-charcoal-black">Gission Global</h1>
          </div>

          {/* Loading Message */}
          <h2 className="heading-sm text-charcoal-black/80 mb-6">
            {loadingProgress < 30 && "Preparing your financial future..."}
            {loadingProgress >= 30 && loadingProgress < 60 && "Delivering innovative solutions..."}
            {loadingProgress >= 60 && loadingProgress < 90 && "Empowering your business..."}
            {loadingProgress >= 90 && "Welcome to Gission Global!"}
          </h2>

          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="w-full bg-light-gray rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-yellow to-orange-400 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="caption-text mt-2 text-charcoal-black/60">
              {Math.round(loadingProgress)}% Complete
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;