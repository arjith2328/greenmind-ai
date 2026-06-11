import { useState } from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, TrendingUp, Brain, Leaf } from 'lucide-react';

const cards = [
  {
    title: 'Carbon Twin',
    description: 'Create a digital representation of your environmental impact.',
    icon: <Fingerprint className="w-8 h-8 text-greenmind-primary" />,
    gradient: 'from-greenmind-primary/20 to-transparent'
  },
  {
    title: 'Future Forecasting',
    description: 'Predict future carbon emissions based on current habits.',
    icon: <TrendingUp className="w-8 h-8 text-greenmind-secondary" />,
    gradient: 'from-greenmind-secondary/20 to-transparent'
  },
  {
    title: 'AI Sustainability Coach',
    description: 'Receive personalized recommendations powered by AI.',
    icon: <Brain className="w-8 h-8 text-greenmind-accent" />,
    gradient: 'from-greenmind-accent/20 to-transparent'
  },
  {
    title: 'Real-World Impact',
    description: 'Visualize carbon savings as trees planted, energy saved, and emissions reduced.',
    icon: <Leaf className="w-8 h-8 text-white" />,
    gradient: 'from-white/20 to-transparent'
  }
];

// Floating particles component
const generateParticles = () => {
  return [...Array(15)].map(() => ({
    x1: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
    y1: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
    op1: Math.random() * 0.5 + 0.2,
    y2: Math.random() * -200 - 100,
    x2: Math.random() * 100 - 50,
    dur: Math.random() * 10 + 10
  }));
};

const Particles = () => {
  const [particles] = useState<ReturnType<typeof generateParticles>>(generateParticles);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-greenmind-primary/20 blur-[1px]"
          initial={{
            x: p.x1,
            y: p.y1,
            opacity: p.op1
          }}
          animate={{
            y: [null, p.y2],
            x: [null, p.x2],
            opacity: [null, 0]
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      ))}
    </div>
  );
};

export const WhyItMatters: React.FC = () => {
  return (
    <section className="py-32 relative bg-greenmind-bg overflow-hidden">
      <Particles />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white"
          >
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-greenmind-primary to-greenmind-accent">GreenMind AI</span> Matters
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Transforming sustainability awareness into measurable action through AI-powered carbon intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-greenmind-primary/20 to-greenmind-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className={`relative h-full glass-panel p-10 rounded-3xl border border-white/10 bg-gradient-to-br ${card.gradient} hover:border-white/20 transition-colors duration-300 shadow-2xl`}>
                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/5 shadow-inner">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{card.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
