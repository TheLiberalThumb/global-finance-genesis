import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface ChatInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  onSendMessage: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export const ChatInput = ({ 
  inputValue, 
  setInputValue, 
  onSendMessage, 
  onKeyPress, 
  inputRef 
}: ChatInputProps) => {
  return (
    <div className="p-4 border-t-2 border-rich-gold/30 bg-[#1B1B1B]">
      <div className="flex space-x-3">
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={onKeyPress}
          placeholder="Type your message..."
          className="flex-1 bg-dark-navy/60 border-2 border-rich-gold/30 text-pure-white placeholder:text-light-gray/60 
            focus:border-rich-gold focus:ring-0 focus:shadow-[0_0_20px_rgba(255,215,0,0.3)] 
            transition-all duration-300 rounded-lg font-inter text-sm min-h-[48px]"
        />
        <Button
          onClick={onSendMessage}
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
  );
};