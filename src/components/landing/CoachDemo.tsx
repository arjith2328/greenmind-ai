import React from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

export const CoachDemo = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              Meet your <span className="text-greenmind-accent">AI Sustainability Coach</span>
            </h2>
            <p className="text-xl text-gray-400">
              Get real-time, personalized recommendations based on your unique carbon twin. Our AI understands your habits and suggests practical, actionable steps to reduce your footprint.
            </p>
            <ul className="space-y-4">
              {['Tailored action plans', 'Context-aware suggestions', 'Gentle nudges & reminders'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-greenmind-primary" />
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
            <div className="glass-panel p-6 rounded-2xl relative z-10 border border-white/10 shadow-2xl">
              <div className="flex items-center space-x-4 mb-6 border-b border-white/10 pb-4">
                <div className="bg-greenmind-accent/20 p-2 rounded-lg">
                  <Brain className="w-6 h-6 text-greenmind-accent" />
                </div>
                <div>
                  <h3 className="font-semibold">Coach Green</h3>
                  <p className="text-xs text-greenmind-primary">Online</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-white/10 p-4 rounded-2xl rounded-tr-sm max-w-[80%] text-sm">
                    I travel 20 km daily to work by car.
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-start"
                >
                  <div className="bg-greenmind-primary/20 border border-greenmind-primary/30 p-4 rounded-2xl rounded-tl-sm max-w-[90%] text-sm">
                    Switching to public transport just twice a week could reduce your emissions by approximately 18% annually. That's equivalent to planting 12 trees!
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-greenmind-accent/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
