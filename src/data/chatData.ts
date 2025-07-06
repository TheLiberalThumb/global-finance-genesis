import { Calendar, FileText, Users, Phone } from 'lucide-react';
import { QuickAction } from '@/types/chat';

export const quickActions: QuickAction[] = [
  { icon: Calendar, text: "Schedule a Consultation", action: "schedule" },
  { icon: FileText, text: "Request a Proposal", action: "proposal" },
  { icon: Users, text: "Learn About Services", action: "services" },
  { icon: Phone, text: "Speak to an Advisor", action: "advisor" }
];

export const getQuickActionResponse = (action: string) => {
  switch (action) {
    case 'schedule':
      return "Perfect! I'd be happy to schedule a consultation for you. What's your preferred time this week? You can also email us at hello@gissionglobal.com or call +1 (555) 123-4567.";
    case 'proposal':
      return "Excellent! To prepare a tailored proposal, could you tell me more about your project? What type of funding or advisory services are you looking for?";
    case 'services':
      return "We specialize in corporate finance, investment advisory, capital raising, and strategic consulting. Which area interests you most? I can connect you with the right specialist.";
    case 'advisor':
      return "I'll connect you with one of our senior advisors right away. Could you share your phone number and the best time to reach you today?";
    default:
      return "Thank you for your interest! How can I best assist you today?";
  }
};