import { motion } from 'framer-motion';
import { Scan, Brain, LineChart, Globe } from 'lucide-react';

const features = [
  {
    icon: <Globe aria-hidden="true" className="w-8 h-8 text-greenmind-primary" />,
    title: 'AI Carbon Twin',
    description: 'We create a dynamic digital twin of your carbon footprint, constantly learning and adapting to your lifestyle.'
  },
  {
    icon: <Brain aria-hidden="true" className="w-8 h-8 text-greenmind-accent" />,
    title: 'Personal Sustainability Coach',
    description: 'Get actionable, tailored advice from our AI coach to reduce emissions without compromising your lifestyle.'
  },
  {
    icon: <LineChart aria-hidden="true" className="w-8 h-8 text-greenmind-secondary" />,
    title: 'Future Simulator',
    description: 'Test potential lifestyle changes and visualize your carbon savings before committing to them.'
  },
  {
    icon: <Scan aria-hidden="true" className="w-8 h-8 text-white" />,
    title: 'Magic Bill Scanner',
    description: 'Upload receipts and bills. Our AI instantly extracts data to update your carbon profile automatically.'
  }
];

export const Features = () => {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            How GreenMind Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A seamless journey to understanding and reducing your environmental impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
