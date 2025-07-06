import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useState } from 'react';

const ContactForm = () => {
  const magneticRef = useMagneticButton(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    "Corporate Finance Advisory",
    "Project Investment", 
    "Capital Raising",
    "Public-Private Partnerships",
    "Strategic Consulting",
    "Mergers & Acquisitions"
  ];

  const budgetRanges = [
    "Under $100K",
    "$100K - $500K", 
    "$500K - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "Over $10M"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-fade-up">
          <h2 className="heading-lg mb-4 sm:mb-6 text-foreground">
            Start Your Journey
          </h2>
          <p className="body-text text-light-gray max-w-3xl mx-auto scroll-fade-up scroll-stagger-1">
            Tell us about your project and objectives. Our team will respond within 24 hours with a customized proposal.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-navy rounded-xl p-8 lg:p-12 border border-rich-gold/20 scroll-fade-up scroll-stagger-2">
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-inter font-medium text-sm text-pure-white mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold focus:ring-1 focus:ring-rich-gold/20 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block font-inter font-medium text-sm text-pure-white mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold focus:ring-1 focus:ring-rich-gold/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-inter font-medium text-sm text-pure-white mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold focus:ring-1 focus:ring-rich-gold/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block font-inter font-medium text-sm text-pure-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold focus:ring-1 focus:ring-rich-gold/20 transition-all duration-300"
                    placeholder="+234 (0) 806 123 4567"
                  />
                </div>
              </div>

              {/* Service & Budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-inter font-medium text-sm text-pure-white mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white focus:outline-none focus:border-rich-gold focus:ring-1 focus:ring-rich-gold/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="bg-background text-pure-white">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-inter font-medium text-sm text-pure-white mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white focus:outline-none focus:border-rich-gold focus:ring-1 focus:ring-rich-gold/20 transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range} className="bg-background text-pure-white">
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-inter font-medium text-sm text-pure-white mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-rich-gold/20 rounded-lg text-pure-white placeholder:text-light-gray focus:outline-none focus:border-rich-gold focus:ring-1 focus:ring-rich-gold/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project, objectives, timeline, and any specific requirements..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button 
                  ref={magneticRef}
                  variant="cta-primary" 
                  className="magnetic-button px-12 py-4"
                  type="submit"
                >
                  Send Message
                </Button>
                
                <p className="font-inter text-xs text-light-gray mt-4">
                  By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;