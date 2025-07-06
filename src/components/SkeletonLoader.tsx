interface SkeletonLoaderProps {
  variant?: 'card' | 'text' | 'avatar' | 'button';
  className?: string;
  children?: React.ReactNode;
}

const SkeletonLoader = ({ variant = 'card', className = '', children }: SkeletonLoaderProps) => {
  const baseClasses = "animate-pulse bg-rich-gold/10 rounded-lg";
  
  const variants = {
    card: "h-64 w-full",
    text: "h-4 w-full",
    avatar: "h-12 w-12 rounded-full",
    button: "h-12 w-32 rounded-full"
  };

  if (children) {
    return (
      <div className="space-y-4">
        {children}
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`} />
  );
};

// Specific skeleton components for different sections
export const CardSkeleton = () => (
  <div className="wlf-card-premium p-6 space-y-4">
    <SkeletonLoader variant="avatar" />
    <SkeletonLoader variant="text" className="w-3/4" />
    <SkeletonLoader variant="text" className="w-full" />
    <SkeletonLoader variant="text" className="w-2/3" />
    <div className="pt-4">
      <SkeletonLoader variant="button" />
    </div>
  </div>
);

export const ServicesSkeleton = () => (
  <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-4">
        <SkeletonLoader variant="text" className="h-8 w-64 mx-auto" />
        <SkeletonLoader variant="text" className="h-4 w-96 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  </section>
);

export const TeamSkeleton = () => (
  <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 space-y-4">
        <SkeletonLoader variant="text" className="h-8 w-48 mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="text-center space-y-4">
            <SkeletonLoader variant="avatar" className="w-24 h-24 mx-auto" />
            <SkeletonLoader variant="text" className="h-6 w-32 mx-auto" />
            <SkeletonLoader variant="text" className="h-4 w-24 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkeletonLoader;