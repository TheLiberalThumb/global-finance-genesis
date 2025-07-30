
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatButtonProps {
  onClick: () => void;
  hasUnread: boolean;
}

export const ChatButton = ({ onClick, hasUnread }: ChatButtonProps) => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={onClick}
        className="w-16 h-16 rounded-full bg-rich-gold text-dark-navy 
          hover:bg-rich-gold/90 shadow-lg hover:shadow-xl transition-all duration-300 
          hover:scale-110 group border-2 border-rich-gold/20 hover:-translate-y-1"
        style={{
          boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)'
        }}
      >
        <MessageCircle className="w-6 h-6 text-dark-navy group-hover:scale-110 transition-transform duration-300" />
        {hasUnread && (
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse border-2 border-white">
            <div className="w-full h-full bg-red-400 rounded-full animate-ping"></div>
          </div>
        )}
      </Button>
    </div>
  );
};
