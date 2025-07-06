const ResponseCommitment = () => {
  const commitments = [
    {
      title: "24-Hour Response",
      description: "We guarantee a response to all inquiries within 24 hours during business days.",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Personalized Consultation",
      description: "Every client receives a dedicated consultation tailored to their specific needs.",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: "Confidentiality Assured",
      description: "All communications and project details are handled with strict confidentiality.",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "Global Accessibility",
      description: "Our services are accessible worldwide with flexible meeting arrangements.",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Our Service Commitment
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            We're committed to providing exceptional service at every touchpoint. Here's what you can expect when you contact us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <div
              key={commitment.title}
              className={`text-center scroll-fade-up scroll-stagger-${index + 1}`}
            >
              <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-all duration-300 border-2 border-rich-gold">
                {commitment.icon}
              </div>

              <h3 className="font-playfair font-semibold text-xl text-foreground mb-4">
                {commitment.title}
              </h3>
              
              <p className="font-inter text-sm text-light-gray leading-relaxed">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center scroll-fade-up scroll-stagger-5">
          <div className="bg-rich-gold/5 rounded-xl p-8 border border-rich-gold/20 max-w-2xl mx-auto">
            <h3 className="font-playfair font-semibold text-2xl text-foreground mb-4">
              Emergency Support Available
            </h3>
            <p className="font-inter text-sm text-light-gray leading-relaxed">
              For existing clients with urgent matters, our emergency support line is available 24/7. 
              We understand that financial opportunities and challenges don't wait for business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponseCommitment;