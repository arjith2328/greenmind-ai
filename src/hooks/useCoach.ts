import { useState, useRef, useEffect, useCallback } from 'react';
import type { FormEvent } from 'react';
import type { Message } from '../types';

export interface CoachState {
  messages: Message[];
  inputValue: string;
  isTyping: boolean;
  messagesEndRef: React.RefObject<HTMLDivElement | null>;
  setInputValue: (value: string) => void;
  handleSend: (e: FormEvent) => void;
}

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'ai',
    text: "Hi Alex! I'm Coach Green, your personal sustainability AI. Based on your Carbon Twin, I see you've had a spike in transport emissions this week. How can I help you today?"
  }
];

/**
 * Custom hook to manage the AI Coach chat state and interaction logic.
 */
export const useCoach = (): CoachState => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, _setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const setInputValue = useCallback((val: string) => {
    _setInputValue(val.slice(0, 500));
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const handleSend = useCallback((e: FormEvent) => {
    e.preventDefault();
    
    // Sanitize by removing basic HTML tags and restricting length
    const sanitizedInput = inputValue
      .replace(/<[^>]*>?/gm, '') // Strip HTML tags
      .slice(0, 500) // Hard cap at 500 chars
      .trim();

    if (!sanitizedInput) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: sanitizedInput
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response based on keywords or just a generic response
    setTimeout(() => {
      let responseText = "That's a great question! Based on your current habits, making that change could reduce your weekly footprint by about 5%. I can add this to your active goals if you'd like.";
      
      const lowerInput = userMessage.text.toLowerCase();
      if (lowerInput.includes('flight') || lowerInput.includes('travel')) {
        responseText = "Flights are a major source of emissions. If you have to fly, consider economy class and packing light. Alternatively, offset your flight by investing in verified carbon reduction projects directly through our app.";
      } else if (lowerInput.includes('food') || lowerInput.includes('meat')) {
        responseText = "Food accounts for 15% of your footprint. Switching to plant-based meals just two days a week can cut your food-related emissions by 25%. Shall we start a 'Meatless Monday' challenge?";
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: responseText
      };

      setIsTyping(false);
      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  }, [inputValue, setInputValue]);

  return {
    messages,
    inputValue,
    isTyping,
    messagesEndRef,
    setInputValue,
    handleSend
  };
};
