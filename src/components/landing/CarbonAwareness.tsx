import React from 'react';
import { motion } from 'framer-motion';
import { 
  Car, 
  Zap, 
  Sparkles, 
  Fingerprint, 
  LineChart, 
  PieChart, 
  Receipt, 
  Map,
  Calculator
} from 'lucide-react';

const awarenessFeatures = [
  {
    icon: <Car aria-hidden="true" className="w-8 h-8 text-greenmind-primary" />,
    title: 'Transportation Emissions Tracking',
    description: 'Track daily travel emissions and identify high-impact carbon sources.'
  },
  {
    icon: <Zap aria-hidden="true" className="w-8 h-8 text-greenmind-secondary" />,
    title: 'Electricity Consumption Monitoring',
    description: 'Analyze household energy usage and estimate carbon emissions.'
  },
  {
    icon: <Calculator aria-hidden="true" className="w-8 h-8 text-greenmind-accent" />,
    title: 'Carbon Footprint Calculator',
    description: 'Calculate emissions from transportation, electricity, food habits, shopping, and lifestyle activities.'
  },
  {
    icon: <Sparkles aria-hidden="true" className="w-8 h-8 text-white" />,
    title: 'AI Sustainability Coach',
    description: 'Provide personalized carbon reduction recommendations.'
  },
  {
    icon: <Fingerprint aria-hidden="true" className="w-8 h-8 text-greenmind-primary" />,
    title: 'Carbon Twin Technology',
    description: 'Create a digital environmental profile of the user.'
  },
  {
    icon: <LineChart aria-hidden="true" className="w-8 h-8 text-greenmind-secondary" />,
    title: 'Future Emission Forecasting',
    description: 'Predict future carbon emissions based on current habits.'
  },
  {
    icon: <Receipt aria-hidden="true" className="w-8 h-8 text-greenmind-accent" />,
    title: 'Bill-Based Carbon Analysis',
    description: 'Extract utility bill information and estimate carbon impact.'
  },
  {
    icon: <PieChart aria-hidden="true" className="w-8 h-8 text-white" />,
    title: 'Environmental Impact Visualization',
    description: 'Convert carbon savings into: Trees Planted, Energy Saved, and Distance Not Driven.'
  },
  {
    icon: <Map aria-hidden="true" className="w-8 h-8 text-greenmind-primary" />,
    title: 'Personalized Carbon Reduction Roadmap',
    description: 'Generate step-by-step sustainability plans with projected carbon savings.'
  }
];

export const CarbonAwareness: React.FC = () => {
  return (
    <section className="py-32 relative z-10 bg-[#081C15]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-greenmind-primary/20 blur-[100px] rounded-full pointer-events-none"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight relative z-10"
          >
            How GreenMind AI Solves Carbon Footprint Awareness
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 max-w-3xl mx-auto text-xl relative z-10"
          >
            Helping individuals understand, track, predict, and reduce their carbon footprint through AI-powered sustainability intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awarenessFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 border border-white/10 bg-gradient-to-br from-white/10 to-transparent group overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-greenmind-primary/0 group-hover:bg-greenmind-primary/5 transition-colors duration-500" />
              <div className="bg-black/30 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 glass-panel border-greenmind-primary/30 bg-gradient-to-r from-greenmind-primary/10 via-transparent to-greenmind-secondary/10 p-8 md:p-10 rounded-3xl text-center shadow-[0_0_30px_rgba(0,200,83,0.15)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 leading-relaxed relative z-10 max-w-4xl mx-auto">
            "GreenMind AI directly addresses the Carbon Footprint Awareness challenge by helping users understand, monitor, forecast, and reduce carbon emissions through actionable AI-powered insights."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
