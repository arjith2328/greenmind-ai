import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, User } from 'lucide-react';

const chatSequence = [
  { sender: 'user', text: 'I travel 20 km daily by car.' },
  { sender: 'ai', text: 'Switching to public transport twice a week could reduce your annual emissions by approximately 18%.' },
  { sender: 'user', text: 'What if I cycle once a week?' },
  { sender: 'ai', text: 'You could save an additional 120 kg CO₂ annually and improve your sustainability score.' },
  { sender: 'user', text: 'How much impact does that create?' },
  { sender: 'ai', text: 'Equivalent to planting 8 trees every year.' }
];

export const CoachDemo: React.FC = () => {
  const [messages, setMessages] = useState<{sender: string, text: string}[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < chatSequence.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, chatSequence[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex % 2 === 0 ? 1000 : 2500); // AI takes longer to 'type'
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section className="py-32 relative overflow-hidden bg-greenmind-bg border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Meet Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-greenmind-primary to-greenmind-accent">AI Sustainability Coach</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
              Get real-time, personalized recommendations based on your unique carbon twin. Our AI understands your habits and suggests practical, actionable steps to reduce your footprint without compromising your lifestyle.
            </p>
            <ul className="space-y-5">
              {[
                'Tailored action plans just for you',
                'Context-aware lifestyle suggestions',
                'Real-time impact quantification'
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 text-gray-300 text-lg">
                  <div className="w-3 h-3 rounded-full bg-greenmind-primary shadow-[0_0_10px_rgba(0,200,83,0.5)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl relative z-10 border border-white/10 shadow-[0_0_50px_rgba(0,200,83,0.1)] h-[550px] flex flex-col">
              
              {/* Chat Header */}
              <div className="flex items-center space-x-4 mb-8 border-b border-white/10 pb-6 shrink-0">
                <div className="bg-gradient-to-br from-greenmind-primary to-greenmind-accent p-3 rounded-xl shadow-lg relative">
                  <Brain className="w-8 h-8 text-white" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-greenmind-secondary border-2 border-[#081C15] rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white tracking-tight">GreenMind AI</h3>
                  <p className="text-sm text-greenmind-primary font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-greenmind-primary animate-ping" />
                    Analyzing lifestyle...
                  </p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-hide flex flex-col justify-end">
                <AnimatePresence initial={false}>
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-end gap-3`}
                    >
                      {msg.sender === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-greenmind-primary/20 flex items-center justify-center shrink-0 mb-1 border border-greenmind-primary/30">
                          <Brain className="w-4 h-4 text-greenmind-primary" />
                        </div>
                      )}
                      
                      <div className={`
                        p-4 rounded-2xl max-w-[85%] text-base shadow-sm
                        ${msg.sender === 'user' 
                          ? 'bg-white/10 border border-white/5 rounded-br-sm text-white' 
                          : 'bg-greenmind-primary/10 border border-greenmind-primary/20 rounded-bl-sm text-gray-200'}
                      `}>
                        {msg.text}
                      </div>

                      {msg.sender === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mb-1">
                          <User className="w-4 h-4 text-gray-300" />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Typing Indicator */}
                  {currentIndex % 2 !== 0 && currentIndex < chatSequence.length && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start items-end gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-greenmind-primary/20 flex items-center justify-center shrink-0 mb-1 border border-greenmind-primary/30">
                        <Brain className="w-4 h-4 text-greenmind-primary" />
                      </div>
                      <div className="bg-greenmind-primary/10 border border-greenmind-primary/20 p-4 rounded-2xl rounded-bl-sm flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full bg-greenmind-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-2 h-2 rounded-full bg-greenmind-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-2 h-2 rounded-full bg-greenmind-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-greenmind-accent/20 blur-[120px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
