import { motion } from 'framer-motion';
import { Leaf, Car, Zap } from 'lucide-react';

const equivalents = [
  {
    icon: <Leaf className="w-8 h-8 text-greenmind-primary" />,
    value: '65',
    label: 'Trees Planted',
    color: 'text-greenmind-primary',
    bg: 'bg-greenmind-primary/10',
    border: 'border-greenmind-primary/30'
  },
  {
    icon: <Car className="w-8 h-8 text-greenmind-secondary" />,
    value: '5452',
    label: 'km Not Driven',
    color: 'text-greenmind-secondary',
    bg: 'bg-greenmind-secondary/10',
    border: 'border-greenmind-secondary/30'
  },
  {
    icon: <Zap className="w-8 h-8 text-greenmind-accent" />,
    value: '1200',
    label: 'kWh Saved',
    color: 'text-greenmind-accent',
    bg: 'bg-greenmind-accent/10',
    border: 'border-greenmind-accent/30'
  }
];

export const ImpactVisualization = () => {
  return (
    <section className="py-32 relative bg-greenmind-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/10 relative overflow-hidden shadow-2xl">
          {/* Background Gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-greenmind-primary/10 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-greenmind-accent/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Your Carbon Reduction: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-greenmind-primary to-greenmind-secondary text-6xl md:text-7xl mt-2 block">
                  1363 kg CO₂
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-lg">
                Small daily changes compound into massive global impact. See what your choices actually mean for the planet.
              </p>
            </motion.div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">Equivalent To:</h3>
              <div className="grid grid-cols-1 gap-6">
                {equivalents.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className={`flex items-center space-x-6 p-6 rounded-2xl border ${item.border} bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300`}
                  >
                    <div className={`${item.bg} p-4 rounded-xl`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white tracking-tight flex items-baseline space-x-2">
                        <span>{item.value}</span>
                        <span className={`text-lg font-medium ${item.color}`}>{item.label.split(' ')[0]}</span>
                      </div>
                      <p className="text-gray-400 text-lg">{item.label.split(' ').slice(1).join(' ')}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
