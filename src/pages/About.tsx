import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, Lightbulb, Handshake, Target, Globe, Award, Users, CircleCheck } from 'lucide-react';
import { useEffect } from 'react';
import { initializeAnimations } from '@/utils/animations';

const About = () => {
  useEffect(() => {
    initializeAnimations();
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Clean White Background */}
      <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
        {/* Subtle background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-light-gray/30"></div>
        
        {/* Subtle floating background elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-20 w-16 h-16 bg-primary-yellow/20 rounded-full floating-animation"></div>
          <div className="absolute top-40 right-32 w-12 h-12 bg-primary-yellow/15 rounded-full floating-animation" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-primary-yellow/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 right-20 w-14 h-14 bg-primary-yellow/25 rounded-full floating-animation" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-20 lg:py-32">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center min-h-[80vh]">
            
            {/* Content Column - 60% */}
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal-black leading-tight hero-content-enter">
                  Building <span className="text-primary-yellow">Tomorrow's</span> Financial Landscape
                </h1>
                <p className="text-lg lg:text-xl xl:text-2xl text-charcoal-black leading-relaxed max-w-2xl hero-content-enter stagger-delay-1">
                  For over 15 years, we've been empowering businesses to achieve their boldest ambitions through strategic capital solutions and expert financial guidance.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 hero-content-enter stagger-delay-2">
                <Button className="bg-primary-yellow text-charcoal-black hover:bg-primary-yellow/90 px-8 py-4 rounded-3xl font-medium text-lg transition-all duration-300 hover:scale-105">
                  Start Your Journey
                </Button>
                <Button className="bg-white text-charcoal-black border-2 border-charcoal-black hover:bg-charcoal-black hover:text-white px-8 py-4 rounded-3xl font-medium text-lg transition-all duration-300">
                  Learn More
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 hero-content-enter stagger-delay-3">
                <div className="text-center counter-up">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-yellow">15+</div>
                  <div className="text-sm text-charcoal-black/70">Years of Excellence</div>
                </div>
                <div className="text-center counter-up stagger-delay-1">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-yellow">$2B+</div>
                  <div className="text-sm text-charcoal-black/70">Funding Facilitated</div>
                </div>
                <div className="text-center counter-up stagger-delay-2">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-yellow">100+</div>
                  <div className="text-sm text-charcoal-black/70">Projects Completed</div>
                </div>
              </div>
            </div>
            
            {/* Animation Space - 40% */}
            <div className="lg:col-span-2 relative hero-content-enter stagger-delay-2">
              <div className="relative w-full h-[600px] lg:h-[700px] bg-white rounded-3xl overflow-hidden">
                
                {/* Animation Container */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white to-light-gray/20">
                  
                  {/* Central Focus Element - Ready for GIF/Animation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-40 h-40 bg-primary-yellow/80 rounded-full flex items-center justify-center coin-float">
                      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Globe className="w-16 h-16 text-charcoal-black" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Animation Elements */}
                  <div className="absolute top-20 left-20 w-20 h-20 bg-primary-yellow/60 rounded-full floating-animation"></div>
                  <div className="absolute top-40 right-10 w-16 h-16 bg-primary-yellow/40 rounded-full coin-float stagger-delay-1"></div>
                  <div className="absolute bottom-40 left-10 w-24 h-24 bg-primary-yellow/30 rounded-full floating-animation stagger-delay-2"></div>
                  <div className="absolute bottom-20 right-20 w-32 h-32 bg-primary-yellow/20 rounded-full coin-float stagger-delay-3"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -translate-x-20 -translate-y-20 w-12 h-12 bg-charcoal-black/10 rounded-full floating-animation stagger-delay-4"></div>
                  
                  {/* Geometric Shapes for Visual Interest */}
                  <div className="absolute top-10 right-1/3 w-8 h-8 bg-charcoal-black/20 transform rotate-45 floating-animation stagger-delay-5"></div>
                  <div className="absolute bottom-10 left-1/3 w-6 h-6 bg-primary-yellow/60 transform rotate-12 coin-float stagger-delay-6"></div>
                  
                </div>
                
                {/* Animation Overlay Text */}
                <div className="absolute bottom-8 left-8 right-8 text-center">
                  <p className="text-sm text-charcoal-black/60 font-medium">
                    Global Financial Solutions
                  </p>
                </div>
                
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Company Story Section - Enhanced with Life */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="heading-lg fade-in-up">Our Story</h2>
                
                {/* Opening Impact Statement */}
                <blockquote className="text-2xl lg:text-3xl font-light text-charcoal-black/90 italic border-l-4 border-primary-yellow pl-6 fade-in-up stagger-delay-1">
                  "We're not just moving money—we're building futures."
                </blockquote>
              </div>
              
              <div className="space-y-6 fade-in-up stagger-delay-2">
                <p className="body-text">
                  Gission Global Investment Limited was founded on a simple belief: every business deserves access to world-class financial expertise. What started as a vision to democratize corporate finance has grown into a trusted partnership with companies across infrastructure, energy, and emerging sectors.
                </p>
                
                {/* Statistics Callouts */}
                <div className="grid grid-cols-2 gap-4 my-8">
                  <div className="bg-primary-yellow/10 p-6 rounded-2xl text-center border border-primary-yellow/20">
                    <div className="heading-md text-primary-yellow">$2B+</div>
                    <div className="caption-text">Funding Facilitated</div>
                  </div>
                  <div className="bg-primary-yellow/10 p-6 rounded-2xl text-center border border-primary-yellow/20">
                    <div className="heading-md text-primary-yellow">98%</div>
                    <div className="caption-text">Client Satisfaction</div>
                  </div>
                </div>
                
                <p className="body-text">
                  From helping a Lagos-based startup secure their first major funding round to facilitating a $300M infrastructure project that powers thousands of homes, we measure our success by the transformational growth we enable for our clients.
                </p>
              </div>
            </div>
            
            {/* Large Supporting Image */}
            <div className="relative fade-in-up stagger-delay-3">
              <div className="aspect-[4/3] bg-gradient-to-br from-charcoal-black to-charcoal-black/80 rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop" 
                  alt="Global business collaboration" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="heading-md text-white mb-2">Global Partnerships</h3>
                  <p className="body-text text-white/80">Building bridges across continents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 lg:py-32 bg-light-gray">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 fade-in-up">Our Purpose</h2>
            <p className="body-text text-xl text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
              Driving meaningful change through strategic financial solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission Card */}
            <Card className="bg-white border-t-4 border-primary-yellow p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up">
              <CardHeader className="pb-6">
                <CardTitle className="heading-md">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-text text-charcoal-black/80">
                  To empower businesses, governments, and institutions by delivering innovative and strategic financial solutions that catalyze sustainable growth, long-term impact, and inclusive development.
                </p>
              </CardContent>
            </Card>

            {/* Vision Card */}
            <Card className="bg-white border-t-4 border-primary-yellow p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 fade-in-up stagger-delay-1">
              <CardHeader className="pb-6">
                <CardTitle className="heading-md">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="body-text text-charcoal-black/80">
                  To become a trusted global investment partner, consistently recognized for transforming bold ideas into high-impact, scalable, and financially rewarding ventures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-6 fade-in-up">What Drives Us</h2>
            <p className="body-text text-xl text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
              Our core values shape every decision, every partnership, and every solution we deliver
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Excellence */}
            <Card className="bg-white p-8 text-center interactive-card group scroll-triggered">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 animate-glow">
                  <Star className="w-10 h-10 text-charcoal-black" />
                </div>
                <h3 className="heading-md">Excellence</h3>
                <p className="body-text text-charcoal-black/80">
                  We uphold the highest standards of ethics, accountability, and compliance in every transaction.
                </p>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="bg-white p-8 text-center interactive-card group scroll-triggered stagger-delay-1">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 animate-pulse-custom">
                  <Lightbulb className="w-10 h-10 text-charcoal-black" />
                </div>
                <h3 className="heading-md">Innovation</h3>
                <p className="body-text text-charcoal-black/80">
                  We leverage cutting-edge financial strategies and technologies to deliver superior outcomes.
                </p>
              </CardContent>
            </Card>

            {/* Partnership */}
            <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-2">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-10 h-10 text-charcoal-black" />
                </div>
                <h3 className="heading-md">Partnership</h3>
                <p className="body-text text-charcoal-black/80">
                  We build lasting relationships based on trust, transparency, and shared success.
                </p>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-3">
              <CardContent className="space-y-6">
                <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-charcoal-black" />
                </div>
                <h3 className="heading-md">Impact</h3>
                <p className="body-text text-charcoal-black/80">
                  Our solutions create measurable value that drives growth and transforms industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey - Professional Timeline */}
      <section className="py-24 lg:py-32 bg-light-gray">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="heading-lg mb-6 fade-in-up">Our Journey</h2>
            <p className="body-text text-xl text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
              Milestones that shaped our path to becoming a trusted global investment partner
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-primary-yellow/30"></div>
            
            <div className="space-y-16">
              {[
                {
                  year: '2009',
                  title: 'Foundation',
                  description: 'Founded with vision to democratize corporate finance and bridge funding gaps in emerging markets',
                  image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&h=300&fit=crop',
                  side: 'left'
                },
                {
                  year: '2015',
                  title: 'Nigeria PPP Mandate',
                  description: 'Mandated by Albader International for landmark public-private partnership project',
                  image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop',
                  side: 'right'
                },
                {
                  year: '2018',
                  title: 'Regional Expansion',
                  description: 'Expanded operations across Middle East and Africa, establishing key partnerships',
                  image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&h=300&fit=crop',
                  side: 'left'
                },
                {
                  year: '2022',
                  title: '$300M Refinery Project',
                  description: 'Secured funding for Akwa Ibom refinery project, advancing energy independence',
                  image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop',
                  side: 'right'
                },
                {
                  year: '2024',
                  title: 'Waste-to-Energy Initiative',
                  description: 'Launched sustainable energy solutions with Lagos State government partnership',
                  image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
                  side: 'left'
                },
                {
                  year: '2025',
                  title: 'Future Forward',
                  description: 'Celebrating 15+ years of transformational growth and expanding into new sectors',
                  image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=500&h=300&fit=crop',
                  side: 'right'
                }
              ].map((milestone, index) => (
                <div key={milestone.year} className={`relative flex ${milestone.side === 'left' ? 'justify-start' : 'justify-end'} scroll-triggered ${milestone.side === 'left' ? 'milestone-enter-left' : 'milestone-enter-right'}`} style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Timeline Dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-yellow rounded-full border-4 border-white shadow-lg z-10 timeline-dot ${index <= 3 ? 'active' : ''}`}></div>
                  
                  {/* Content Card */}
                  <Card className={`w-full max-w-md bg-white interactive-card ${milestone.side === 'left' ? 'mr-8' : 'ml-8'}`}>
                    <div className="aspect-[5/3] overflow-hidden rounded-t-lg interactive-image">
                      <img 
                        src={milestone.image} 
                        alt={milestone.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                          <span className="font-bold text-charcoal-black text-sm">{milestone.year}</span>
                        </div>
                        <h3 className="heading-md">{milestone.title}</h3>
                      </div>
                      <p className="body-text text-charcoal-black/80">{milestone.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Preview Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 fade-in-up">Meet the Visionaries Behind Our Success</h2>
            <p className="body-text text-xl text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
              Our leadership team combines decades of experience in corporate finance, strategic consulting, and international business development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            {/* Mike Adesokan */}
            <div className="text-center group profile-card scroll-triggered">
              <div className="relative mb-6 profile-image">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary-yellow/20 group-hover:border-primary-yellow transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face" 
                    alt="Mike Adesokan" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="profile-overlay"></div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center animate-bounce-slow">
                  <Users className="w-6 h-6 text-charcoal-black" />
                </div>
              </div>
              <h3 className="heading-md mb-2">Mike Adesokan</h3>
              <p className="body-text text-primary-yellow mb-4 font-semibold">Chief Executive Officer</p>
              <p className="body-text text-charcoal-black/70">
                15+ years in corporate finance and strategic investments across emerging markets.
              </p>
            </div>

            {/* Rebecca Adesokan */}
            <div className="text-center group fade-in-up stagger-delay-1">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary-yellow/20 group-hover:border-primary-yellow transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612e2c3?w=400&h=400&fit=crop&crop=face" 
                    alt="Rebecca Adesokan" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-charcoal-black" />
                </div>
              </div>
              <h3 className="heading-md mb-2">Rebecca Adesokan</h3>
              <p className="body-text text-primary-yellow mb-4 font-semibold">Executive Director</p>
              <p className="body-text text-charcoal-black/70">
                Expert in public-private partnerships and infrastructure financing.
              </p>
            </div>

            {/* Adeola Emmanuel */}
            <div className="text-center group fade-in-up stagger-delay-2">
              <div className="relative mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary-yellow/20 group-hover:border-primary-yellow transition-all duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face" 
                    alt="Adeola Emmanuel" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary-yellow rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-charcoal-black" />
                </div>
              </div>
              <h3 className="heading-md mb-2">Adeola Emmanuel</h3>
              <p className="body-text text-primary-yellow mb-4 font-semibold">Business Development Manager</p>
              <p className="body-text text-charcoal-black/70">
                Specialist in emerging markets and innovative sector growth opportunities.
              </p>
            </div>
          </div>

          <div className="text-center fade-in-up stagger-delay-3">
            <Button className="btn-secondary text-lg px-8 py-4">
              Meet Our Full Team
            </Button>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 lg:py-32 bg-charcoal-black text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-white mb-6 fade-in-up">Where We Operate</h2>
            <p className="body-text text-xl text-white/80 max-w-4xl mx-auto fade-in-up stagger-delay-1">
              Our strong affiliations with reputable partners from Singapore, Kuwait, and the Middle East enable us to facilitate complex financial transactions across multiple jurisdictions.
            </p>
          </div>
          
          {/* Global Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center fade-in-up">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-charcoal-black" />
              </div>
              <div className="heading-md text-primary-yellow">3</div>
              <div className="body-text text-white/80">Continents</div>
            </div>
            <div className="text-center fade-in-up stagger-delay-1">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-charcoal-black" />
              </div>
              <div className="heading-md text-primary-yellow">10+</div>
              <div className="body-text text-white/80">Countries</div>
            </div>
            <div className="text-center fade-in-up stagger-delay-2">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-10 h-10 text-charcoal-black" />
              </div>
              <div className="heading-md text-primary-yellow">50+</div>
              <div className="body-text text-white/80">Strategic Partners</div>
            </div>
            <div className="text-center fade-in-up stagger-delay-3">
              <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-charcoal-black" />
              </div>
              <div className="heading-md text-primary-yellow">24/7</div>
              <div className="body-text text-white/80">Global Support</div>
            </div>
          </div>

          {/* Regional Highlights */}
          <div className="grid md:grid-cols-3 gap-8 fade-in-up stagger-delay-4">
            <Card className="bg-white/10 backdrop-blur border border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300">
              <CardContent className="space-y-4">
                <h3 className="heading-md text-white">Africa</h3>
                <p className="body-text text-white/80">Nigeria • Lagos • Abuja</p>
                <p className="caption-text text-white/60">Infrastructure and energy investments</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300">
              <CardContent className="space-y-4">
                <h3 className="heading-md text-white">Middle East</h3>
                <p className="body-text text-white/80">Kuwait • UAE • Qatar</p>
                <p className="caption-text text-white/60">Strategic partnerships and funding</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur border border-white/20 p-8 text-center hover:bg-white/15 transition-all duration-300">
              <CardContent className="space-y-4">
                <h3 className="heading-md text-white">Asia Pacific</h3>
                <p className="body-text text-white/80">Singapore • Hong Kong</p>
                <p className="caption-text text-white/60">Financial services and consulting</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-24 lg:py-32 bg-light-gray">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6 fade-in-up">Recognition & Credentials</h2>
            <p className="body-text text-xl text-charcoal-black/80 max-w-3xl mx-auto fade-in-up stagger-delay-1">
              Trusted by regulators, certified by industry leaders, and recognized for excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* SEC Licensed */}
            <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <CircleCheck className="w-10 h-10 text-charcoal-black" />
                </div>
                <h3 className="heading-md">SEC Licensed</h3>
                <p className="body-text text-charcoal-black/70">Securities & Exchange Commission Nigeria</p>
              </CardContent>
            </Card>

            {/* ISO Certified */}
            <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-1">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-charcoal-black" />
                </div>
                <h3 className="heading-md">ISO Certified</h3>
                <p className="body-text text-charcoal-black/70">Quality Management Systems</p>
              </CardContent>
            </Card>

            {/* Global Partners */}
            <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-2">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-10 h-10 text-charcoal-black" />
                </div>
                <h3 className="heading-md">Global Partners</h3>
                <p className="body-text text-charcoal-black/70">Singapore, Kuwait, UAE</p>
              </CardContent>
            </Card>

            {/* ESG Compliant */}
            <Card className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group fade-in-up stagger-delay-3">
              <CardContent className="space-y-4">
                <div className="w-20 h-20 bg-primary-yellow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-10 h-10 text-charcoal-black" />
                </div>
                <h3 className="heading-md">ESG Compliant</h3>
                <p className="body-text text-charcoal-black/70">Environmental, Social & Governance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-24 lg:py-32 bg-charcoal-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-primary-yellow/10 rounded-full floating-animation"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-primary-yellow/15 rounded-full coin-float"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary-yellow/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="heading-xl text-white mb-8 fade-in-up">
            Ready to Transform Your Business?
          </h2>
          <p className="body-text text-2xl text-white/80 mb-12 fade-in-up stagger-delay-1">
            Join the companies who trust us to turn their vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in-up stagger-delay-2">
            <Button className="btn-primary text-lg px-10 py-5">
              Start Your Journey
            </Button>
            <Button className="bg-white text-charcoal-black hover:bg-white/90 px-10 py-5 rounded-3xl font-medium transition-all duration-300 hover:scale-105 text-lg">
              Download Our Brochure
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;