export const TypingIndicator = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-dark-navy/80 p-3 rounded-lg shadow-md border border-rich-gold/20">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-rich-gold rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-rich-gold rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-rich-gold rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};