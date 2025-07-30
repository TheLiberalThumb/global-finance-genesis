
// Input sanitization utilities
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove basic HTML brackets
    .substring(0, 1000); // Limit length
};

export const sanitizeEmail = (email: string): string => {
  if (!email) return '';
  
  return email
    .trim()
    .toLowerCase()
    .substring(0, 254); // RFC 5321 limit
};

export const sanitizeHtml = (html: string): string => {
  if (!html) return '';
  
  // Basic HTML encoding for display
  return html
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const validateRequired = (value: string, minLength: number = 1): boolean => {
  return value && value.trim().length >= minLength;
};

export const validateLength = (value: string, maxLength: number): boolean => {
  return value.length <= maxLength;
};
