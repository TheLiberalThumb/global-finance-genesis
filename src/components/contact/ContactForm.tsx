import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

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
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Project details are required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
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
          <div className="bg-dark-navy/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border-2 border-rich-gold/30 scroll-fade-up scroll-stagger-2 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-rich-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-rich-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-rich-gold mb-4">Message Sent Successfully!</h3>
                <p className="text-pure-white/80 max-w-md mx-auto mb-8">
                  Thank you for reaching out. Our team will review your message and respond within 24 hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-rich-gold/50 text-rich-gold hover:bg-rich-gold/10"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information Section */}
                <div className="space-y-6">
                  <div className="border-l-4 border-rich-gold/50 pl-6">
                    <h3 className="text-lg font-semibold text-rich-gold mb-4">Contact Information</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-inter font-semibold text-rich-gold text-sm tracking-wide">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-5 py-4 bg-[#1B1B1B] border-2 rounded-lg text-pure-white text-base placeholder:text-light-gray/60 
                          focus:outline-none focus:border-rich-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                          transition-all duration-300 hover:border-rich-gold/60 min-h-[56px]
                          ${errors.name ? 'border-red-400/70' : 'border-rich-gold/30'}`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <span className="text-rich-gold">•</span> {errors.name}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block font-inter font-semibold text-rich-gold text-sm tracking-wide">
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-5 py-4 bg-[#1B1B1B] border-2 rounded-lg text-pure-white text-base placeholder:text-light-gray/60 
                          focus:outline-none focus:border-rich-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                          transition-all duration-300 hover:border-rich-gold/60 min-h-[56px]
                          ${errors.email ? 'border-red-400/70' : 'border-rich-gold/30'}`}
                        placeholder="your@company.com"
                      />
                      {errors.email && (
                        <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                          <span className="text-rich-gold">•</span> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Company Information Section */}
                <div className="space-y-6">
                  <div className="border-l-4 border-rich-gold/50 pl-6">
                    <h3 className="text-lg font-semibold text-rich-gold mb-4">Company Details</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-inter font-semibold text-rich-gold text-sm tracking-wide">
                        COMPANY NAME
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-[#1B1B1B] border-2 border-rich-gold/30 rounded-lg text-pure-white text-base placeholder:text-light-gray/60 
                          focus:outline-none focus:border-rich-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                          transition-all duration-300 hover:border-rich-gold/60 min-h-[56px]"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block font-inter font-semibold text-rich-gold text-sm tracking-wide">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-[#1B1B1B] border-2 border-rich-gold/30 rounded-lg text-pure-white text-base placeholder:text-light-gray/60 
                          focus:outline-none focus:border-rich-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                          transition-all duration-300 hover:border-rich-gold/60 min-h-[56px]"
                        placeholder="+234 (0) 806 123 4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Service & Budget Section */}
                <div className="space-y-6">
                  <div className="border-l-4 border-rich-gold/50 pl-6">
                    <h3 className="text-lg font-semibold text-rich-gold mb-4">Project Requirements</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block font-inter font-semibold text-rich-gold text-sm tracking-wide">
                        SERVICE OF INTEREST
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-[#1B1B1B] border-2 border-rich-gold/30 rounded-lg text-pure-white text-base 
                          focus:outline-none focus:border-rich-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                          transition-all duration-300 hover:border-rich-gold/60 min-h-[56px] cursor-pointer"
                      >
                        <option value="" className="bg-[#1B1B1B] text-light-gray/60">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-[#1B1B1B] text-pure-white py-2">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block font-inter font-semibold text-rich-gold text-sm tracking-wide">
                        PROJECT BUDGET
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-5 py-4 bg-[#1B1B1B] border-2 border-rich-gold/30 rounded-lg text-pure-white text-base 
                          focus:outline-none focus:border-rich-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                          transition-all duration-300 hover:border-rich-gold/60 min-h-[56px] cursor-pointer"
                      >
                        <option value="" className="bg-[#1B1B1B] text-light-gray/60">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-[#1B1B1B] text-pure-white py-2">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Details Section */}
                <div className="space-y-6">
                  <div className="border-l-4 border-rich-gold/50 pl-6">
                    <h3 className="text-lg font-semibold text-rich-gold mb-4">Project Overview</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block font-inter font-semibold text-rich-gold text-sm tracking-wide">
                      PROJECT DETAILS *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className={`w-full px-5 py-4 bg-[#1B1B1B] border-2 rounded-lg text-pure-white text-base placeholder:text-light-gray/60 
                        focus:outline-none focus:border-rich-gold focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                        transition-all duration-300 hover:border-rich-gold/60 resize-none
                        ${errors.message ? 'border-red-400/70' : 'border-rich-gold/30'}`}
                      placeholder="Tell us about your project objectives, timeline, specific requirements, and any other relevant details that will help us understand your needs..."
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                        <span className="text-rich-gold">•</span> {errors.message}
                      </p>
                    )}
                    <p className="text-light-gray/60 text-sm mt-2">
                      Include information about your objectives, timeline, and specific requirements
                    </p>
                  </div>
                </div>

                {/* Submit Section */}
                <div className="text-center pt-8 border-t border-rich-gold/20">
                  <Button 
                    ref={magneticRef}
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-rich-gold via-yellow-400 to-rich-gold text-dark-navy font-bold text-lg 
                      px-12 py-4 rounded-lg min-h-[56px] w-full sm:w-auto
                      hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 
                      active:scale-95 transition-all duration-300 
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                      magnetic-button"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-dark-navy/30 border-t-dark-navy rounded-full animate-spin" />
                        Sending Message...
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                  
                  <div className="mt-6 space-y-2">
                    <p className="font-inter text-sm text-pure-white/80 flex items-center justify-center gap-2">
                      <CheckCircle className="w-4 h-4 text-rich-gold" />
                      We respond within 24 hours
                    </p>
                    <p className="font-inter text-xs text-light-gray/60">
                      By submitting this form, you agree to our privacy policy and terms of service.
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;