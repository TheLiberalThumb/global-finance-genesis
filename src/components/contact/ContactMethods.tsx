import FloatingElements from '@/components/FloatingElements';

const ContactMethods = () => {
  const contactMethods = [
    {
      title: "Office Visit",
      description: "Visit our headquarters for in-person consultations and detailed project discussions.",
      details: "Lagos Business District\nMonday - Friday, 9 AM - 6 PM",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      action: "Book Visit"
    },
    {
      title: "Phone & Email",
      description: "Reach out directly through traditional channels for immediate assistance and inquiries.",
      details: "+234 (0) 806 123 4567\nhello@gissionglobal.com",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: "Call Now"
    },
    {
      title: "Schedule Meeting",
      description: "Book a dedicated session with our experts to discuss your specific financial objectives.",
      details: "Virtual or In-Person\n30-60 minute sessions\nAvailable worldwide",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      action: "Book Meeting"
    },
    {
      title: "Emergency Contact",
      description: "For urgent matters requiring immediate attention outside regular business hours.",
      details: "24/7 Emergency Line\n+234 (0) 807 999 8888\nFor existing clients only",
      icon: (
        <svg className="w-8 h-8 text-rich-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      ),
      action: "Emergency Call"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden section-morph">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Multiple Ways to Connect
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Choose the most convenient method to reach our team. We're committed to providing exceptional service through every channel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={method.title}
              className={`wlf-card-premium h-full flex flex-col scroll-fade-up scroll-stagger-${index + 1}`}
            >
              <div className="w-16 h-16 bg-dark-navy rounded-full flex items-center justify-center mb-6 hover:scale-110 transition-all duration-300 border-2 border-rich-gold">
                {method.icon}
              </div>

              <h3 className="font-playfair font-semibold text-xl text-card-foreground mb-4">
                {method.title}
              </h3>
              
              <p className="font-inter text-sm text-light-gray leading-relaxed mb-6 flex-grow">
                {method.description}
              </p>

              <div className="bg-dark-navy/30 rounded-lg p-4 mb-6">
                <pre className="font-inter text-xs text-pure-white whitespace-pre-line leading-relaxed">
                  {method.details}
                </pre>
              </div>

              <button className="w-full bg-rich-gold text-dark-navy font-medium py-3 px-4 rounded-lg hover:bg-rich-gold/90 transition-colors duration-300 text-sm">
                {method.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;