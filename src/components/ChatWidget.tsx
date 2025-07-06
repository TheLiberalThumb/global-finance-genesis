import { useChat } from '@/hooks/useChat';
import { ChatButton } from '@/components/chat/ChatButton';
import { ChatHeader } from '@/components/chat/ChatHeader';
import { ChatMessages } from '@/components/chat/ChatMessages';
import { ChatInput } from '@/components/chat/ChatInput';

const ChatWidget = () => {
  const {
    isOpen,
    messages,
    inputValue,
    setInputValue,
    isTyping,
    hasUnread,
    messagesEndRef,
    inputRef,
    handleQuickAction,
    handleSendMessage,
    handleKeyPress,
    openChat,
    closeChat
  } = useChat();

  if (!isOpen) {
    return <ChatButton onClick={openChat} hasUnread={hasUnread} />;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-[#1B1B1B] rounded-2xl shadow-2xl border-2 border-rich-gold/30 w-96 h-[600px] flex flex-col animate-scale-in">
        <ChatHeader onClose={closeChat} />
        <ChatMessages 
          messages={messages}
          isTyping={isTyping}
          onQuickAction={handleQuickAction}
          messagesEndRef={messagesEndRef}
        />
        <ChatInput 
          inputValue={inputValue}
          setInputValue={setInputValue}
          onSendMessage={handleSendMessage}
          onKeyPress={handleKeyPress}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
};

export default ChatWidget;