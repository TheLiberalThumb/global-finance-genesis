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
          className="w-16 h-16 rounded-full bg-gradient-to-r from-rich-gold via-yellow-400 to-rich-gold 
            hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] shadow-lg transition-all duration-300 
            hover:scale-110 group border-2 border-rich-gold/20"
        >
          <MessageCircle className="w-6 h-6 text-rich-gold group-hover:scale-110 transition-transform duration-300" />
          {hasUnread && (
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse border-2 border-white">
              <div className="w-full h-full bg-red-400 rounded-full animate-ping"></div>
            </div>
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-[#1B1B1B] rounded-2xl shadow-2xl border-2 border-rich-gold/30 w-96 h-[600px] flex flex-col animate-scale-in">
        {/* Header */}
        <div className="bg-gradient-to-r from-rich-gold via-yellow-400 to-rich-gold p-4 rounded-t-2xl flex items-center justify-between shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-dark-navy rounded-full flex items-center justify-center shadow-md">
              <span className="text-rich-gold font-bold text-lg">GG</span>
            </div>
            <div>
              <h3 className="font-semibold text-dark-navy font-inter">Gission Global</h3>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-dark-navy/80 font-inter">Online</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={closeChat}
              className="text-dark-navy hover:bg-dark-navy/20 p-1 h-8 w-8 rounded-lg transition-all duration-300"
            >
              <Minimize2 className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeChat}
              className="text-dark-navy hover:bg-dark-navy/20 p-1 h-8 w-8 rounded-lg transition-all duration-300"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#1B1B1B]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-lg transition-all duration-300 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-rich-gold via-yellow-400 to-rich-gold text-dark-navy shadow-lg'
                    : 'bg-dark-navy/80 text-pure-white shadow-md border border-rich-gold/20 hover:border-rich-gold/40'
                }`}
              >
                <p className="text-sm leading-relaxed font-inter">{message.content}</p>
                <p className={`text-xs mt-1 font-inter ${
                  message.sender === 'user' ? 'text-dark-navy/70' : 'text-light-gray/80'
                }`}>
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
                    className="p-3 h-auto text-left bg-dark-navy/60 border-2 border-rich-gold/30 hover:border-rich-gold 
                      hover:bg-rich-gold/10 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] 
                      transition-all duration-300 rounded-lg group"
                    onClick={() => handleQuickAction(action.action, action.text)}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <Icon className="w-5 h-5 text-rich-gold group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-xs text-pure-white text-center leading-tight font-inter group-hover:text-rich-gold transition-colors duration-300">
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
              <div className="bg-dark-navy/80 p-3 rounded-lg shadow-md border border-rich-gold/20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-rich-gold rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-rich-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-rich-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t-2 border-rich-gold/30 bg-[#1B1B1B]">
          <div className="flex space-x-3">
            <Input
              ref={inputRef}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 bg-dark-navy/60 border-2 border-rich-gold/30 text-pure-white placeholder:text-light-gray/60 
                focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
                transition-all duration-300 rounded-lg font-inter text-sm min-h-[48px]"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="bg-gradient-to-r from-rich-gold via-yellow-400 to-rich-gold hover:shadow-[0_0_25px_rgba(255,215,0,0.4)] 
                text-dark-navy p-3 rounded-lg transition-all duration-300 hover:scale-105 
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[48px] min-w-[48px]"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-xs text-light-gray/80 mt-3 text-center font-inter">
            We typically respond within minutes • Powered by Gission Global
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;