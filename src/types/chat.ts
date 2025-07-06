export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  type?: 'text' | 'quick-action';
}

export interface QuickAction {
  icon: any;
  text: string;
  action: string;
}