import { X, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ChatHeaderProps {
  onClose: () => void;
}

export const ChatHeader = ({ onClose }: ChatHeaderProps) => {
  return (
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
          onClick={onClose}
          className="text-dark-navy hover:bg-dark-navy/20 p-1 h-8 w-8 rounded-lg transition-all duration-300"
        >
          <Minimize2 className="w-4 h-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="text-dark-navy hover:bg-dark-navy/20 p-1 h-8 w-8 rounded-lg transition-all duration-300"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};