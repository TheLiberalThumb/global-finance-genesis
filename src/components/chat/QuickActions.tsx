import { Button } from '@/components/ui/button';
import { quickActions } from '@/data/chatData';

interface QuickActionsProps {
  onQuickAction: (action: string, text: string) => void;
}

export const QuickActions = ({ onQuickAction }: QuickActionsProps) => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-4">
      {quickActions.map((action) => {
        const Icon = action.icon;
        return (
          <Button
            key={action.action}
            variant="outline"
            className="p-3 h-auto text-left bg-dark-navy/60 border-2 border-rich-gold/30 hover:border-rich-gold 
              hover:bg-rich-gold/10 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] 
              transition-all duration-300 rounded-lg group"
            onClick={() => onQuickAction(action.action, action.text)}
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
  );
};