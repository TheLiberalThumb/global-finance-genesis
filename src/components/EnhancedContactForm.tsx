
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { sanitizeInput, sanitizeEmail, validateEmail, validateRequired, validateLength } from '@/utils/inputSanitization';

const EnhancedContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    urgency: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionCount, setSubmissionCount] = useState(0);
  const { toast } = useToast();

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors };
    
    switch (name) {
      case 'name':
        if (!validateRequired(value, 2)) {
          newErrors.name = 'Name must be at least 2 characters';
        } else if (!validateLength(value, 100)) {
          newErrors.name = 'Name must be less than 100 characters';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        if (!validateRequired(value)) {
          newErrors.email = 'Email is required';
        } else if (!validateEmail(value)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'company':
        if (!validateRequired(value)) {
          newErrors.company = 'Company name is required';
        } else if (!validateLength(value, 200)) {
          newErrors.company = 'Company name must be less than 200 characters';
        } else {
          delete newErrors.company;
        }
        break;
      case 'phone':
        if (value && !validateLength(value, 20)) {
          newErrors.phone = 'Phone number must be less than 20 characters';
        } else {
          delete newErrors.phone;
        }
        break;
      case 'message':
        if (!validateRequired(value, 10)) {
          newErrors.message = 'Message must be at least 10 characters';
        } else if (!validateLength(value, 2000)) {
          newErrors.message = 'Message must be less than 2000 characters';
        } else {
          delete newErrors.message;
        }
        break;
    }
    
    setErrors(newErrors);
  };

  const handleInputChange = (name: string, value: string) => {
    // Sanitize input before setting state
    const sanitizedValue = name === 'email' ? sanitizeEmail(value) : sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    validateField(name, sanitizedValue);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    if (submissionCount >= 3) {
      toast({
        title: "Rate Limit Exceeded",
        description: "Please wait before submitting another message.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Validate all required fields
    const requiredFields = ['name', 'email', 'company', 'message'];
    const newErrors: Record<string, string> = {};

    requiredFields.forEach(field => {
      validateField(field, formData[field as keyof typeof formData]);
    });

    if (Object.keys(errors).length > 0 || Object.keys(newErrors).length > 0) {
      setIsSubmitting(false);
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive"
      });
      return;
    }

    try {
      // Additional server-side validation could be added via edge function
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: sanitizeInput(formData.name),
          email: sanitizeEmail(formData.email),
          company: sanitizeInput(formData.company),
          phone: sanitizeInput(formData.phone),
          service: formData.service,
          budget: formData.budget,
          urgency: formData.urgency,
          message: sanitizeInput(formData.message),
          additional_data: {
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent.substring(0, 200), // Limited user agent
            referrer: document.referrer.substring(0, 200) // Limited referrer
          }
        }]);

      if (error) {
        throw error;
      }
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        urgency: ''
      });

      // Increment submission count for basic rate limiting
      setSubmissionCount(prev => prev + 1);
      
      // Reset rate limit after 10 minutes
      setTimeout(() => {
        setSubmissionCount(0);
      }, 10 * 60 * 1000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Full Name *
          </label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className={`bg-dark-navy border-rich-gold/30 text-foreground focus:border-rich-gold focus:ring-2 focus:ring-rich-gold/20 ${
              errors.name ? 'border-red-500' : ''
            }`}
            placeholder="Your full name"
            maxLength={100}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address *
          </label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={`bg-dark-navy border-rich-gold/30 text-foreground focus:border-rich-gold focus:ring-2 focus:ring-rich-gold/20 ${
              errors.email ? 'border-red-500' : ''
            }`}
            placeholder="your.email@company.com"
            maxLength={254}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Company Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-sm font-medium text-foreground">
            Company Name *
          </label>
          <Input
            id="company"
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className={`bg-dark-navy border-rich-gold/30 text-foreground focus:border-rich-gold focus:ring-2 focus:ring-rich-gold/20 ${
              errors.company ? 'border-red-500' : ''
            }`}
            placeholder="Your company name"
            maxLength={200}
            required
          />
          {errors.company && (
            <p className="text-red-500 text-xs mt-1">{errors.company}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={`bg-dark-navy border-rich-gold/30 text-foreground focus:border-rich-gold focus:ring-2 focus:ring-rich-gold/20 ${
              errors.phone ? 'border-red-500' : ''
            }`}
            placeholder="Your phone number"
            maxLength={20}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* Service & Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Service of Interest
          </label>
          <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
            <SelectTrigger className="bg-dark-navy border-rich-gold/30 text-foreground focus:border-rich-gold">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent className="bg-dark-navy border-rich-gold/30">
              <SelectItem value="corporate-finance">Corporate Finance Advisory</SelectItem>
              <SelectItem value="project-investment">Project Investment</SelectItem>
              <SelectItem value="strategic-consulting">Strategic Consulting</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Project Budget Range
          </label>
          <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
            <SelectTrigger className="bg-dark-navy border-rich-gold/30 text-foreground focus:border-rich-gold">
              <SelectValue placeholder="Select budget range" />
            </SelectTrigger>
            <SelectContent className="bg-dark-navy border-rich-gold/30">
              <SelectItem value="50k-100k">$50K - $100K</SelectItem>
              <SelectItem value="100k-500k">$100K - $500K</SelectItem>
              <SelectItem value="500k-1m">$500K - $1M</SelectItem>
              <SelectItem value="1m+">$1M+</SelectItem>
              <SelectItem value="undisclosed">Prefer not to disclose</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Urgency */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Project Urgency
        </label>
        <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
          <SelectTrigger className="bg-dark-navy border-rich-gold/30 text-foreground focus:border-rich-gold">
            <SelectValue placeholder="How urgent is your project?" />
          </SelectTrigger>
          <SelectContent className="bg-dark-navy border-rich-gold/30">
            <SelectItem value="immediate">Immediate (Within 1 week)</SelectItem>
            <SelectItem value="soon">Soon (Within 1 month)</SelectItem>
            <SelectItem value="planning">Planning (2-3 months)</SelectItem>
            <SelectItem value="future">Future consideration</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Project Details *
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange('message', e.target.value)}
          className={`bg-dark-navy border-rich-gold/30 text-foreground focus:border-rich-gold focus:ring-2 focus:ring-rich-gold/20 min-h-[120px] ${
            errors.message ? 'border-red-500' : ''
          }`}
          placeholder="Please describe your project, goals, and any specific requirements..."
          maxLength={2000}
          required
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
        <p className="text-xs text-light-gray">
          {formData.message.length}/2000 characters
        </p>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="cta-primary"
          disabled={isSubmitting || submissionCount >= 3}
          className="w-full md:w-auto min-w-[200px] magnetic-button"
        >
          {isSubmitting ? (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-dark-navy/30 border-t-dark-navy rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : submissionCount >= 3 ? (
            'Rate Limit Reached'
          ) : (
            'Send Message'
          )}
        </Button>
      </div>

      {/* Privacy Notice */}
      <p className="text-xs text-light-gray">
        By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
        All data is encrypted and stored securely.
      </p>
    </form>
  );
};

export default EnhancedContactForm;
