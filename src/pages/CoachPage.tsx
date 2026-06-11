import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Send, User } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

import type { Message } from '../types';

const initialMessages: Message[] = [
  {
    id: '1',
    sender: 'ai',
    text: "Hi Alex! I'm Coach Green, your personal sustainability AI. Based on your Carbon Twin, I see you've had a spike in transport emissions this week. How can I help you today?"
  }
];

export const CoachPage = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response based on keywords or just a generic response
    setTimeout(() => {
      let responseText = "That's a great question! Based on your current habits, making that change could reduce your weekly footprint by about 5%. I can add this to your active goals if you'd like.";
      
      if (userMessage.text.toLowerCase().includes('flight') || userMessage.text.toLowerCase().includes('travel')) {
        responseText = "Flights are a major source of emissions. If you have to fly, consider economy class and packing light. Alternatively, offset your flight by investing in verified carbon reduction projects directly through our app.";
      } else if (userMessage.text.toLowerCase().includes('food') || userMessage.text.toLowerCase().includes('meat')) {
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
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 h-[calc(100vh-80px)] flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">AI Sustainability Coach</h1>
        <p className="text-gray-400">Ask questions, get personalized advice, and set new goals.</p>
      </div>

      <Card className="flex-1 flex flex-col border-white/10 overflow-hidden bg-greenmind-bg/50">
        <div className="flex-1 p-6 overflow-y-auto space-y-6 custom-scrollbar" aria-live="polite">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-start gap-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`p-2 rounded-xl flex-shrink-0 ${msg.sender === 'ai' ? 'bg-greenmind-accent/20' : 'bg-greenmind-primary/20'}`}>
                  {msg.sender === 'ai' ? (
                    <Brain aria-hidden="true" className="w-6 h-6 text-greenmind-accent" />
                  ) : (
                    <User aria-hidden="true" className="w-6 h-6 text-greenmind-primary" />
                  )}
                </div>
                <div className={`p-4 rounded-2xl max-w-[80%] ${
                  msg.sender === 'user' 
                    ? 'bg-white/10 text-white rounded-tr-sm' 
                    : 'bg-greenmind-primary/10 border border-greenmind-primary/20 text-gray-200 rounded-tl-sm'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-start gap-4">
              <div className="bg-greenmind-accent/20 p-2 rounded-xl flex-shrink-0">
                <Brain aria-hidden="true" className="w-6 h-6 text-greenmind-accent" />
              </div>
              <div className="bg-greenmind-primary/10 border border-greenmind-primary/20 p-4 rounded-2xl rounded-tl-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-greenmind-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-greenmind-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-greenmind-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </motion.div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white/5 border-t border-white/10">
          <form onSubmit={handleSend} className="flex gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask Coach Green for advice..."
              aria-label="Type your message"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]"
            />
            <Button type="submit" aria-label="Send message" disabled={!inputValue.trim() || isTyping} className="bg-greenmind-primary hover:bg-greenmind-secondary text-black rounded-xl px-6">
              <Send aria-hidden="true" className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};
