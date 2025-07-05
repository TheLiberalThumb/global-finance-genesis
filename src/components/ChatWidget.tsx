import { useState, useRef, useEffect } from 'react';
import { X, Minimize2, Send, MessageCircle, FileText, Calendar, Users, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  type?: 'text' | 'quick-action';
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Initialize with welcome message
  useEffect(() => {
    if (messages.length === 0) {
      setTimeout(() => {
        const welcomeMessage: Message = {
          id: '1',
          content: "👋 Hello! I'm here to help with your corporate finance needs. How can we assist you today?",
          sender: 'agent',
          timestamp: new Date()
        };
        setMessages([welcomeMessage]);
        setHasUnread(true);
      }, 1000);
    }
  }, []);

  const quickActions = [
    { icon: Calendar, text: "Schedule a Consultation", action: "schedule" },
    { icon: FileText, text: "Request a Proposal", action: "proposal" },
    { icon: Users, text: "Learn About Services", action: "services" },
    { icon: Phone, text: "Speak to an Advisor", action: "advisor" }
  ];

  const handleQuickAction = (action: string, text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate agent typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getQuickActionResponse(action),
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1500);
  };

  const getQuickActionResponse = (action: string) => {
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

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate agent typing
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "Thank you for your message! Our team will review your inquiry and get back to you shortly. For urgent matters, please call us at +1 (555) 123-4567.",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openChat}
          className="w-16 h-16 rounded-full bg-rich-gold hover:bg-rich-gold/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
        >
          <MessageCircle className="w-6 h-6 text-dark-navy group-hover:scale-110 transition-transform duration-300" />
          {hasUnread && (
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-96 h-[600px] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="bg-rich-gold p-4 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-dark-navy rounded-full flex items-center justify-center">
              <span className="text-rich-gold font-bold text-lg">GG</span>
            </div>
            <div>
              <h3 className="font-semibold text-dark-navy">Gission Global</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-dark-navy/80">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeChat}
              className="text-dark-navy hover:bg-dark-navy/10 p-1 h-8 w-8"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeChat}
              className="text-dark-navy hover:bg-dark-navy/10 p-1 h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/30">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-rich-gold text-dark-navy'
                    : 'bg-card text-foreground shadow-sm border border-rich-gold/20'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}

          {/* Quick Actions (shown after initial message) */}
          {messages.length === 1 && (
            <div className="grid grid-cols-2 gap-2 mt-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={action.action}
                    variant="outline"
                    className="p-3 h-auto text-left border-rich-gold/20 hover:border-rich-gold hover:bg-rich-gold/10 transition-all duration-300"
                    onClick={() => handleQuickAction(action.action, action.text)}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <Icon className="w-5 h-5 text-foreground" />
                      <span className="text-xs text-foreground text-center leading-tight">
                        {action.text}
                      </span>
                    </div>
                  </Button>
                );
              })}
            </div>
          )}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-card p-3 rounded-2xl shadow-sm border border-rich-gold/20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-rich-gold/20">
          <div className="flex space-x-2">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 border-rich-gold/20 focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_0_3px_rgba(255,215,0,0.2)] bg-card text-foreground"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-rich-gold hover:bg-rich-gold/90 text-dark-navy p-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-light-gray mt-2 text-center">
            We typically respond within minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;