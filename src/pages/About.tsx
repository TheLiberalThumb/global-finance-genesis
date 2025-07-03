import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pb-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-caslon font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-black mb-8 fade-in-up">
            Building Tomorrow's Financial Landscape
          </h1>
          <p className="font-futura text-xl md:text-2xl text-charcoal-black/80 leading-relaxed max-w-4xl mx-auto fade-in-up stagger-delay-1">
            For over 15 years, we've been empowering businesses to achieve their boldest ambitions through strategic capital solutions and expert financial guidance.
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-caslon font-semibold text-3xl md:text-4xl text-charcoal-black mb-12 text-center fade-in-up">
            Our Story
          </h2>
          <div className="space-y-8 fade-in-up stagger-delay-1">
            <p className="font-futura text-lg leading-relaxed text-charcoal-black" style={{ lineHeight: '1.6' }}>
              Gission Global Investment Limited was founded on a simple belief: every business deserves access to world-class financial expertise. What started as a vision to democratize corporate finance has grown into a trusted partnership with companies across infrastructure, energy, and emerging sectors.
            </p>
            <p className="font-futura text-lg leading-relaxed text-charcoal-black" style={{ lineHeight: '1.6' }}>
              We've facilitated over <span className="font-semibold text-primary-yellow">$2+ billion in funding</span>, completed <span className="font-semibold text-primary-yellow">100+ strategic projects</span>, and maintained a <span className="font-semibold text-primary-yellow">98% client satisfaction rate</span>. But numbers only tell part of our story. The real measure of our success lies in the transformational growth we've enabled for our clients.
            </p>
            <p className="font-futura text-lg leading-relaxed text-charcoal-black" style={{ lineHeight: '1.6' }}>
              From helping a Lagos-based startup secure their first major funding round to facilitating a $300M infrastructure project that powers thousands of homes, we're not just moving money—we're building futures.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-primary-yellow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <h3 className="font-futura font-semibold text-2xl text-charcoal-black mb-6">Our Mission</h3>
              <p className="font-futura text-lg leading-relaxed text-charcoal-black/80" style={{ lineHeight: '1.6' }}>
                To empower businesses, governments, and institutions by delivering innovative and strategic financial solutions that catalyze sustainable growth, long-term impact, and inclusive development.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-primary-yellow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-delay-1">
              <h3 className="font-futura font-semibold text-2xl text-charcoal-black mb-6">Our Vision</h3>
              <p className="font-futura text-lg leading-relaxed text-charcoal-black/80" style={{ lineHeight: '1.6' }}>
                To become a trusted global investment partner, consistently recognized for transforming bold ideas into high-impact, scalable, and financially rewarding ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-caslon font-semibold text-3xl md:text-4xl text-charcoal-black mb-16 text-center fade-in-up">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Excellence */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center fade-in-up">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Excellence</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed">
                We uphold the highest standards of ethics, accountability, and compliance in every transaction.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center fade-in-up stagger-delay-1">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Innovation</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed">
                We leverage cutting-edge financial strategies and technologies to deliver superior outcomes.
              </p>
            </div>

            {/* Partnership */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center fade-in-up stagger-delay-2">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2c0-.553-.895-1-2-1H3c-1.105 0-2 .447-2 1v2c0 .553.895 1 2 1h2c1.105 0 2-.447 2-1zm4 4c0-2.21-1.79-4-4-4S3 5.79 3 8s1.79 4 4 4 4-1.79 4-4zm5.5-4c1.38 0 2.5 1.12 2.5 2.5S17.88 7 16.5 7 14 5.88 14 4.5 15.12 3 16.5 3zM21 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zm-1 6v6h-6v-6h6z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Partnership</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed">
                We build lasting relationships based on trust, transparency, and shared success.
              </p>
            </div>

            {/* Impact */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center fade-in-up stagger-delay-3">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Impact</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed">
                Our solutions create measurable value that drives growth and transforms industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Stories Section */}
      <section className="py-20 lg:py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-caslon font-semibold text-3xl md:text-4xl text-charcoal-black mb-16 text-center fade-in-up">
            Stories of Transformation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Success Story 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <div className="text-primary-yellow font-futura font-bold text-sm mb-4">INFRASTRUCTURE</div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">$300M Akwa Ibom Refinery</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed mb-6">
                Secured critical funding for Nigeria's first modular refinery, creating 2,000+ jobs and advancing energy independence across West Africa.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-futura text-sm text-primary-yellow font-semibold">Impact: 2,000+ Jobs</span>
                <svg className="w-5 h-5 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-delay-1">
              <div className="text-primary-yellow font-futura font-bold text-sm mb-4">RENEWABLE ENERGY</div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Lagos Waste-to-Energy</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed mb-6">
                Pioneered sustainable energy solutions, converting 500 tons of waste daily into clean electricity for 100,000 homes.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-futura text-sm text-primary-yellow font-semibold">Impact: 100k Homes</span>
                <svg className="w-5 h-5 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-delay-2">
              <div className="text-primary-yellow font-futura font-bold text-sm mb-4">FINTECH</div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Series A Growth Capital</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed mb-6">
                Helped an emerging fintech startup secure $50M Series A funding, enabling financial inclusion for 1M+ underbanked users.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-futura text-sm text-primary-yellow font-semibold">Impact: 1M+ Users</span>
                <svg className="w-5 h-5 text-primary-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Leadership Preview Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-caslon font-semibold text-3xl md:text-4xl text-charcoal-black mb-6 fade-in-up">
              Meet the Visionaries Behind Our Success
            </h2>
            <p className="font-futura text-lg text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
              Our leadership team combines decades of experience in corporate finance, strategic consulting, and international business development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Team Member Preview 1 */}
            <div className="text-center fade-in-up">
              <div className="w-32 h-32 bg-light-gray rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                  alt="Mike Adesokan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-2">Mike Adesokan</h3>
              <p className="font-futura text-base text-primary-yellow mb-3">Chief Executive Officer</p>
              <p className="font-futura text-sm text-charcoal-black/70 leading-relaxed">
                15+ years in corporate finance and strategic investments across emerging markets.
              </p>
            </div>

            {/* Team Member Preview 2 */}
            <div className="text-center fade-in-up stagger-delay-1">
              <div className="w-32 h-32 bg-light-gray rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612e2c3?w=400&h=400&fit=crop&crop=face" 
                  alt="Rebecca Adesokan" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-2">Rebecca Adesokan</h3>
              <p className="font-futura text-base text-primary-yellow mb-3">Executive Director</p>
              <p className="font-futura text-sm text-charcoal-black/70 leading-relaxed">
                Expert in public-private partnerships and infrastructure financing.
              </p>
            </div>

            {/* Team Member Preview 3 */}
            <div className="text-center fade-in-up stagger-delay-2">
              <div className="w-32 h-32 bg-light-gray rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                  alt="Adeola Emmanuel" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-2">Adeola Emmanuel</h3>
              <p className="font-futura text-base text-primary-yellow mb-3">Business Development Manager</p>
              <p className="font-futura text-sm text-charcoal-black/70 leading-relaxed">
                Specialist in emerging markets and innovative sector growth opportunities.
              </p>
            </div>
          </div>

          <div className="text-center fade-in-up stagger-delay-3">
            <Button className="btn-secondary">
              Meet Our Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 lg:py-24 bg-light-gray">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="font-caslon font-semibold text-3xl md:text-4xl text-charcoal-black mb-16 text-center fade-in-up">
            Recognition & Credentials
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Award 1 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-lg text-charcoal-black mb-2">SEC Licensed</h3>
              <p className="font-futura text-sm text-charcoal-black/70">Securities & Exchange Commission Nigeria</p>
            </div>

            {/* Award 2 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-delay-1">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-lg text-charcoal-black mb-2">ISO Certified</h3>
              <p className="font-futura text-sm text-charcoal-black/70">Quality Management Systems</p>
            </div>

            {/* Award 3 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-delay-2">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M12 7a3 3 0 00-3 3v1a3 3 0 006 0v-1a3 3 0 00-3-3zm0 0V4.5M15 7V4.5" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-lg text-charcoal-black mb-2">Global Partners</h3>
              <p className="font-futura text-sm text-charcoal-black/70">Singapore, Kuwait, UAE</p>
            </div>

            {/* Award 4 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-delay-3">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-lg text-charcoal-black mb-2">ESG Compliant</h3>
              <p className="font-futura text-sm text-charcoal-black/70">Environmental, Social & Governance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Social Impact Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-caslon font-semibold text-3xl md:text-4xl text-charcoal-black mb-6 fade-in-up">
              Building a Better Tomorrow
            </h2>
            <p className="font-futura text-lg text-charcoal-black/80 max-w-4xl mx-auto fade-in-up stagger-delay-1">
              We believe business success and social responsibility go hand in hand. Our commitment to sustainability and community impact drives every decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Environmental Impact */}
            <div className="bg-light-gray rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 fade-in-up">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Clean Energy Focus</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed">
                <span className="font-semibold text-primary-yellow">60%</span> of our portfolio investments are in renewable energy and sustainable infrastructure projects.
              </p>
            </div>

            {/* Social Impact */}
            <div className="bg-light-gray rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 fade-in-up stagger-delay-1">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Community Development</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed">
                Our projects have created <span className="font-semibold text-primary-yellow">10,000+</span> direct and indirect jobs across Africa and the Middle East.
              </p>
            </div>

            {/* Governance */}
            <div className="bg-light-gray rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 fade-in-up stagger-delay-2">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-4">Ethical Standards</h3>
              <p className="font-futura text-base text-charcoal-black/80 leading-relaxed">
                Maintaining <span className="font-semibold text-primary-yellow">100%</span> compliance with international ESG standards and transparent reporting practices.
              </p>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="bg-charcoal-black rounded-lg p-8 md:p-12 text-center fade-in-up stagger-delay-3">
            <h3 className="font-caslon font-semibold text-2xl md:text-3xl text-white mb-8">Our Collective Impact</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="font-caslon font-bold text-3xl md:text-4xl text-primary-yellow mb-2">500MW</div>
                <div className="font-futura text-sm text-white/80">Clean Energy Generated</div>
              </div>
              <div>
                <div className="font-caslon font-bold text-3xl md:text-4xl text-primary-yellow mb-2">10K+</div>
                <div className="font-futura text-sm text-white/80">Jobs Created</div>
              </div>
              <div>
                <div className="font-caslon font-bold text-3xl md:text-4xl text-primary-yellow mb-2">3</div>
                <div className="font-futura text-sm text-white/80">Continents</div>
              </div>
              <div>
                <div className="font-caslon font-bold text-3xl md:text-4xl text-primary-yellow mb-2">15+</div>
                <div className="font-futura text-sm text-white/80">Years of Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-24 bg-light-gray">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="font-caslon font-semibold text-3xl md:text-4xl text-charcoal-black mb-16 text-center fade-in-up">
            Our Journey
          </h2>
          <div className="space-y-12">
            {[
              { year: '2009', milestone: 'Founded with vision to democratize corporate finance' },
              { year: '2015', milestone: 'Mandated by Albader International for Nigeria PPP project' },
              { year: '2018', milestone: 'Expanded operations across Middle East and Africa' },
              { year: '2022', milestone: 'Secured $300M funding for Akwa Ibom refinery project' },
              { year: '2024', milestone: 'Launched waste-to-energy initiative with Lagos State' },
              { year: '2025', milestone: 'Celebrating 15+ years of transformational growth' }
            ].map((item, index) => (
              <div key={item.year} className={`flex items-center fade-in-up stagger-delay-${index + 1}`}>
                <div className="flex-shrink-0 w-24">
                  <div className="w-4 h-4 bg-primary-yellow rounded-full"></div>
                </div>
                <div className="ml-8">
                  <div className="font-futura font-bold text-lg text-primary-yellow mb-2">{item.year}</div>
                  <div className="font-futura text-lg text-charcoal-black">{item.milestone}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-caslon font-semibold text-3xl md:text-4xl text-charcoal-black mb-12 fade-in-up">
            Where We Operate
          </h2>
          <p className="font-futura text-lg leading-relaxed text-charcoal-black/80 mb-12 fade-in-up stagger-delay-1" style={{ lineHeight: '1.6' }}>
            Our strong affiliations with reputable partners from Singapore, Kuwait, and the Middle East enable us to facilitate complex financial transactions across multiple jurisdictions. We bridge financial gaps and provide tailored solutions for businesses and institutions across emerging and high-growth sectors.
          </p>
          
          {/* Geographic Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 fade-in-up stagger-delay-2">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-2">Africa</h3>
              <p className="font-futura text-base text-charcoal-black/70">Nigeria, Lagos, Abuja</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-2">Middle East</h3>
              <p className="font-futura text-base text-charcoal-black/70">Kuwait, UAE, Qatar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="font-futura font-semibold text-xl text-charcoal-black mb-2">Asia Pacific</h3>
              <p className="font-futura text-base text-charcoal-black/70">Singapore, Hong Kong</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-20 lg:py-24 bg-charcoal-black text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-caslon font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-8 fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="font-futura text-xl text-white/80 mb-12 fade-in-up stagger-delay-1">
            Join the companies who trust us to turn their vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-delay-2">
            <Button className="btn-primary">
              Start Your Journey
            </Button>
            <Button className="btn-secondary">
              Download Our Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;