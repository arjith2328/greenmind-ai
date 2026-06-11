import { motion } from 'framer-motion';
import { 
  Car, 
  Zap, 
  Sparkles, 
  Fingerprint, 
  LineChart, 
  PieChart, 
  Receipt, 
  Map 
} from 'lucide-react';

const awarenessFeatures = [
  {
    icon: <Car aria-hidden="true" className="w-8 h-8 text-greenmind-primary" />,
    title: 'Transportation Emissions Tracking',
    description: 'Monitor your daily commute and travel emissions with precision.'
  },
  {
    icon: <Zap aria-hidden="true" className="w-8 h-8 text-greenmind-accent" />,
    title: 'Electricity Consumption Monitoring',
    description: 'Keep tabs on your energy usage and identify areas for efficiency.'
  },
  {
    icon: <Sparkles aria-hidden="true" className="w-8 h-8 text-greenmind-secondary" />,
    title: 'AI Sustainability Recommendations',
    description: 'Receive smart, actionable advice tailored to your lifestyle.'
  },
  {
    icon: <Fingerprint aria-hidden="true" className="w-8 h-8 text-white" />,
    title: 'Carbon Twin Technology',
    description: 'A digital mirror of your environmental footprint that learns and adapts.'
  },
  {
    icon: <LineChart aria-hidden="true" className="w-8 h-8 text-greenmind-primary" />,
    title: 'Future Emission Forecasting',
    description: 'Predict the long-term impact of your current lifestyle choices.'
  },
  {
    icon: <PieChart aria-hidden="true" className="w-8 h-8 text-greenmind-accent" />,
    title: 'Environmental Impact Visualization',
    description: 'See your carbon footprint in clear, easy-to-understand visual formats.'
  },
  {
    icon: <Receipt aria-hidden="true" className="w-8 h-8 text-greenmind-secondary" />,
    title: 'Bill-Based Carbon Analysis',
    description: 'Automatically extract emissions data from your uploaded receipts and bills.'
  },
  {
    icon: <Map aria-hidden="true" className="w-8 h-8 text-white" />,
    title: 'Personalized Carbon Reduction Roadmap',
    description: 'Follow a step-by-step guide designed specifically to help you reach net-zero.'
  }
];

export const CarbonAwareness = () => {
  return (
    <section className="py-24 relative z-10 bg-[#081C15]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-white"
          >
            Carbon Footprint Awareness Impact
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            How GreenMind AI solves the Carbon Footprint Awareness challenge by giving you full visibility and control over your environmental impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awarenessFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-white/10 bg-white/5"
            >
              <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
