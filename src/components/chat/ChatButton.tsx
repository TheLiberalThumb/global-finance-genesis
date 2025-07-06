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
        className="w-16 h-16 rounded-full bg-gradient-to-r from-rich-gold via-yellow-400 to-rich-gold 
          hover:shadow-[0_0_30px_rgba(255,215,0,0.6)] shadow-lg transition-all duration-300 
          hover:scale-110 group border-2 border-rich-gold/20"
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