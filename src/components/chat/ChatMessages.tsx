import { Message } from '@/types/chat';
import { QuickActions } from './QuickActions';
import { TypingIndicator } from './TypingIndicator';

interface ChatMessagesProps {
  messages: Message[];
  isTyping: boolean;
  onQuickAction: (action: string, text: string) => void;
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export const ChatMessages = ({ messages, isTyping, onQuickAction, messagesEndRef }: ChatMessagesProps) => {
  return (
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
        <QuickActions onQuickAction={onQuickAction} />
      )}

      {/* Typing Indicator */}
      {isTyping && <TypingIndicator />}

      <div ref={messagesEndRef} />
    </div>
  );
};