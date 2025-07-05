import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="w-20 h-20 bg-rich-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-dark-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-caslon font-bold text-4xl text-card-foreground mb-6">
                Thank You!
              </h2>
              <p className="text-xl text-light-gray mb-8">
                We've received your message and will get back to you within 24 hours. 
                Our team is excited to discuss how we can help grow your business.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                variant="cta-secondary"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div className="slide-in-left">
            <h2 className="heading-lg mb-8 text-foreground">
              Ready to grow your business?
            </h2>
            <p className="body-text text-light-gray mb-10">
              Join the leading companies who trust us to accelerate their growth 
              through strategic capital solutions and expert advisory services.
            </p>

            {/* Benefits */}
            <div className="space-y-6 mb-10">
              {[
                "Free initial consultation",
                "Tailored financial strategies", 
                "Expert guidance throughout",
                "Proven track record of success"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-rich-gold rounded-full mr-6"></div>
                  <span className="text-light-gray font-futura text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="wealthsimple-card">
              <h3 className="heading-md mb-6 text-card-foreground">
                Get in Touch Directly
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-rich-gold mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-card-foreground font-futura text-lg">hello@gissionglobal.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-rich-gold mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-card-foreground font-futura text-lg">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="wealthsimple-card slide-in-right">
            <h3 className="heading-md mb-8 text-center text-card-foreground">
              Start the Conversation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-card-foreground font-futura font-semibold mb-3 text-lg">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                     className="w-full h-14 px-5 py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-card-foreground font-futura font-semibold mb-3 text-lg">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                     className="w-full h-14 px-5 py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-card-foreground font-futura font-semibold mb-3 text-lg">
                  Company
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-14 px-5 py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-card-foreground font-futura font-semibold mb-3 text-lg">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full min-h-[120px] px-5 py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura resize-y text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text leading-relaxed"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="cta-primary"
                className="w-full text-xl"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-dark-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
            
            <p className="caption-text text-center mt-6">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;