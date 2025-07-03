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
      <section className="py-20 lg:py-32 bg-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-charcoal-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-playfair font-bold text-4xl text-charcoal-black mb-6">
                Thank You!
              </h2>
              <p className="text-xl text-medium-gray mb-8">
                We've received your message and will get back to you within 24 hours. 
                Our team is excited to discuss how we can help grow your business.
              </p>
              <Button 
                onClick={() => setIsSubmitted(false)}
                className="btn-secondary"
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
    <section className="py-20 lg:py-32 bg-light-gray">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal-black mb-6">
              Ready to grow your business?
            </h2>
            <p className="text-xl md:text-2xl text-medium-gray leading-relaxed mb-8">
              Join the leading companies who trust us to accelerate their growth 
              through strategic capital solutions and expert advisory services.
            </p>

            {/* Benefits */}
            <div className="space-y-4 mb-8">
              {[
                "Free initial consultation",
                "Tailored financial strategies",
                "Expert guidance throughout",
                "Proven track record of success"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-charcoal-black font-inter text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-playfair font-semibold text-xl text-charcoal-black mb-4">
                Get in Touch Directly
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-contemporary-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-charcoal-black font-inter">hello@gissionglobal.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-contemporary-blue mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-charcoal-black font-inter">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
            <h3 className="font-playfair font-semibold text-3xl text-charcoal-black mb-6 text-center">
              Start the Conversation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-charcoal-black font-inter font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-light-gray rounded-2xl focus:border-primary focus:ring-0 font-inter"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-charcoal-black font-inter font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border-2 border-light-gray rounded-2xl focus:border-primary focus:ring-0 font-inter"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-charcoal-black font-inter font-medium mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-4 border-2 border-light-gray rounded-2xl focus:border-primary focus:ring-0 font-inter"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-charcoal-black font-inter font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-4 border-2 border-light-gray rounded-2xl focus:border-primary focus:ring-0 font-inter resize-none"
                  placeholder="Tell us about your project and how we can help..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-charcoal-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
            
            <p className="text-medium-gray text-sm text-center mt-4 font-inter">
              By submitting this form, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;