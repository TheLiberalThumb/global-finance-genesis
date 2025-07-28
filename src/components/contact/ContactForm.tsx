
import { Button } from '@/components/ui/button';
import { useMagneticButton } from '@/hooks/useMagneticButton';
import { useState } from 'react';
import { CheckCircle, Send, Phone, Mail, MapPin, MessageCircle, Calendar, Download } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const ContactForm = () => {
  const magneticRef = useMagneticButton(0.2);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    projectType: '',
    fundingRequirement: '',
    timeline: '',
    projectLocation: '',
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
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.role.trim()) {
      newErrors.role = 'Your role is required';
    }
    
    if (!formData.projectType.trim()) {
      newErrors.projectType = 'Please select a project type';
    }
    
    if (!formData.fundingRequirement.trim()) {
      newErrors.fundingRequirement = 'Please select funding requirement';
    }
    
    if (!formData.timeline.trim()) {
      newErrors.timeline = 'Please select project timeline';
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
    
    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: formData.projectType,
          budget: formData.fundingRequirement,
          message: formData.message,
          // Store additional fields in a JSON column or add them to the table
          additional_data: {
            role: formData.role,
            timeline: formData.timeline,
            project_location: formData.projectLocation
          }
        }]);

      if (error) {
        throw error;
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      // You could add toast notification here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Infrastructure Development",
    "Energy Projects", 
    "Public-Private Partnerships",
    "Real Estate Development",
    "Manufacturing & Industrial",
    "Technology & Innovation",
    "Healthcare & Medical",
    "Other"
  ];

  const fundingRequirements = [
    "Under $10M",
    "$10M - $50M", 
    "$50M - $100M",
    "$100M - $300M",
    "$300M+",
    "To be determined"
  ];

  const timelines = [
    "Immediate (Within 1 month)",
    "3-6 months",
    "6-12 months", 
    "12+ months",
    "Planning phase"
  ];

  const roles = [
    "CEO/Managing Director",
    "CFO/Finance Director",
    "Project Manager",
    "Business Development",
    "Investment Manager",
    "Other"
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+234 817 8740 277",
      action: "tel:+2348178740277"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: "WhatsApp",
      value: "+234 817 8740 277",
      action: "https://wa.me/2348178740277"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "adesokankunle@gmail.com",
      action: "mailto:adesokankunle@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Office",
      value: "3 Bayo Ajayi Street, Ikeja, Lagos",
      action: "https://maps.google.com/?q=3+Bayo+Ajayi+Street,+Ikeja,+Lagos"
    }
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

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 scroll-fade-up scroll-stagger-2">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : undefined}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-dark-navy/50 backdrop-blur-sm rounded-lg p-6 border border-rich-gold/30 hover:border-rich-gold/60 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-rich-gold/20 rounded-full flex items-center justify-center text-rich-gold group-hover:bg-rich-gold/30 transition-colors">
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-rich-gold">{method.label}</p>
                  <p className="text-xs text-pure-white/80 break-all">{method.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-navy/50 backdrop-blur-sm rounded-2xl p-8 sm:p-10 lg:p-12 border-2 border-rich-gold/30 scroll-fade-up scroll-stagger-3 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-rich-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-rich-gold" />
                </div>
                <h3 className="text-2xl font-semibold text-rich-gold mb-4">Message Sent Successfully!</h3>
                <p className="text-pure-white/80 max-w-md mx-auto mb-8">
                  Thank you for reaching out. Our team will review your message and respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-rich-gold/50 text-rich-gold hover:bg-rich-gold/10"
                  >
                    Send Another Message
                  </Button>
                  <Button 
                    variant="cta-primary"
                    className="inline-flex items-center gap-2"
                    asChild
                  >
                    <a href="https://calendly.com/adesokankunle" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4" />
                      Schedule Consultation
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-rich-gold/50 text-rich-gold hover:bg-rich-gold/10 inline-flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Company Profile
                  </Button>
                </div>
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
                      <label htmlFor="name" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text"
                        placeholder="Your full name"
                        aria-describedby={errors.name ? "name-error" : undefined}
                      />
                      {errors.name && (
                        <p id="name-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
                          <span className="text-rich-gold">•</span> {errors.name}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text"
                        placeholder="your@company.com"
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
                          <span className="text-rich-gold">•</span> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text"
                        placeholder="Your company name"
                        aria-describedby={errors.company ? "company-error" : undefined}
                      />
                      {errors.company && (
                        <p id="company-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
                          <span className="text-rich-gold">•</span> {errors.company}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="role" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Your Role *
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white transition-all duration-300 cursor-pointer"
                        aria-describedby={errors.role ? "role-error" : undefined}
                      >
                        <option value="" className="bg-card text-light-gray">Select your role</option>
                        {roles.map((role) => (
                          <option key={role} value={role} className="bg-card text-pure-white py-2">
                            {role}
                          </option>
                        ))}
                      </select>
                      {errors.role && (
                        <p id="role-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
                          <span className="text-rich-gold">•</span> {errors.role}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text"
                        placeholder="+234 (0) 806 123 4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="projectLocation" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Project Location
                      </label>
                      <input
                        type="text"
                        id="projectLocation"
                        name="projectLocation"
                        value={formData.projectLocation}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text"
                        placeholder="City, State, Country"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Qualification Section */}
                <div className="space-y-6">
                  <div className="border-l-4 border-rich-gold/50 pl-6">
                    <h3 className="text-lg font-semibold text-rich-gold mb-4">Project Qualification</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="projectType" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Project Type *
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white transition-all duration-300 cursor-pointer"
                        aria-describedby={errors.projectType ? "projectType-error" : undefined}
                      >
                        <option value="" className="bg-card text-light-gray">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type} className="bg-card text-pure-white py-2">
                            {type}
                          </option>
                        ))}
                      </select>
                      {errors.projectType && (
                        <p id="projectType-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
                          <span className="text-rich-gold">•</span> {errors.projectType}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="fundingRequirement" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Funding Requirement *
                      </label>
                      <select
                        id="fundingRequirement"
                        name="fundingRequirement"
                        value={formData.fundingRequirement}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white transition-all duration-300 cursor-pointer"
                        aria-describedby={errors.fundingRequirement ? "fundingRequirement-error" : undefined}
                      >
                        <option value="" className="bg-card text-light-gray">Select funding range</option>
                        {fundingRequirements.map((range) => (
                          <option key={range} value={range} className="bg-card text-pure-white py-2">
                            {range}
                          </option>
                        ))}
                      </select>
                      {errors.fundingRequirement && (
                        <p id="fundingRequirement-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
                          <span className="text-rich-gold">•</span> {errors.fundingRequirement}
                        </p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="timeline" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                        Timeline *
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full h-12 sm:h-14 px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura text-base sm:text-lg text-pure-white transition-all duration-300 cursor-pointer"
                        aria-describedby={errors.timeline ? "timeline-error" : undefined}
                      >
                        <option value="" className="bg-card text-light-gray">Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline} className="bg-card text-pure-white py-2">
                            {timeline}
                          </option>
                        ))}
                      </select>
                      {errors.timeline && (
                        <p id="timeline-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
                          <span className="text-rich-gold">•</span> {errors.timeline}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Details Section */}
                <div className="space-y-6">
                  <div className="border-l-4 border-rich-gold/50 pl-6">
                    <h3 className="text-lg font-semibold text-rich-gold mb-4">Project Overview</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-card-foreground font-futura font-semibold mb-3 text-base sm:text-lg">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full min-h-[100px] sm:min-h-[120px] px-4 sm:px-5 py-3 sm:py-4 bg-card border-2 border-rich-gold/20 rounded-lg focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] hover:border-rich-gold hover:shadow-[0_2px_8px_rgba(255,215,0,0.1)] font-futura resize-y text-base sm:text-lg text-pure-white placeholder:text-light-gray transition-all duration-300 cursor-text leading-relaxed"
                      placeholder="Tell us about your project objectives, timeline, specific requirements, and any other relevant details that will help us understand your needs..."
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
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
                    variant="cta-primary"
                    className="w-full text-base sm:text-lg md:text-xl min-h-[48px] sm:min-h-[56px]"
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
