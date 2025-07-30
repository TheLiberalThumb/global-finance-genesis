import FloatingElements from '@/components/FloatingElements';

const OfficeLocations = () => {
  const locations = [
    {
      city: "Lagos",
      country: "Nigeria",
      address: "3 Bayo Ajayi Street\nOff Lateef Jakande Road\nIkeja, Lagos, Nigeria",
      phone: "+234 817 8740 277",
      email: "hello@gissionglobal.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM",
      isHeadquarters: true
    },
    {
      city: "London",
      country: "United Kingdom", 
      address: "Waterman House\n1 Lord Street\nGravesend DA12 1AW\nKent, United Kingdom",
      phone: "+44 7455 551196",
      email: "hello@gissionglobal.com",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      isHeadquarters: false
    },
    {
      city: "Abuja",
      country: "Nigeria",
      address: "Flat 5, 34/36 Okotie Ebo Crescent\nUtako, Abuja, Nigeria",
      phone: "+234 803 380 1950",
      email: "hello@gissionglobal.com", 
      hours: "Monday - Friday: 9:00 AM - 5:00 PM",
      isHeadquarters: false
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden section-morph">
      <FloatingElements />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Our Locations
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Visit us at any of our strategically located offices across Nigeria and the United Kingdom. Each location is staffed with experienced professionals ready to serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div
              key={`${location.city}-${location.country}`}
              className={`wlf-card-premium relative scroll-fade-up scroll-stagger-${index + 1}`}
            >
              {location.isHeadquarters && (
                <div className="absolute -top-3 -right-3 bg-rich-gold text-dark-navy text-xs font-bold px-3 py-1 rounded-full">
                  Headquarters
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-playfair font-semibold text-2xl text-card-foreground mb-1">
                  {location.city}
                </h3>
                <div className="text-rich-gold font-medium text-sm uppercase tracking-wide">
                  {location.country}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex items-start mb-2">
                    <svg className="w-4 h-4 text-rich-gold mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <pre className="font-inter text-sm text-light-gray whitespace-pre-line leading-relaxed">
                      {location.address}
                    </pre>
                  </div>
                </div>

                <div className="flex items-center">
                  <svg className="w-4 h-4 text-rich-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-inter text-sm text-light-gray">{location.phone}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-4 h-4 text-rich-gold mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-inter text-sm text-light-gray">{location.email}</span>
                </div>

                <div className="flex items-start">
                  <svg className="w-4 h-4 text-rich-gold mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <pre className="font-inter text-sm text-light-gray whitespace-pre-line leading-relaxed">
                    {location.hours}
                  </pre>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-rich-gold/10">
                <button className="w-full bg-rich-gold/10 text-rich-gold font-medium py-2 px-4 rounded-lg hover:bg-rich-gold/20 transition-colors duration-300 text-sm">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
