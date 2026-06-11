import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 3D Earth Simulation Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-60">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
          className="w-[800px] h-[800px] rounded-full border-[1px] border-greenmind-primary/20 relative"
        >
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-greenmind-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-greenmind-accent/20 rounded-full blur-3xl" />
          
          {/* Simulated Continents using SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full text-greenmind-primary/20 fill-current opacity-50 absolute inset-0 transform rotate-45 scale-75">
            <path d="M40,20 Q50,10 60,20 T80,30 Q90,50 80,70 T50,90 Q30,80 20,60 T40,20 Z" />
            <path d="M10,40 Q20,30 30,50 T40,70 Q20,80 10,60 T10,40 Z" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Understand Your Impact.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-greenmind-primary to-greenmind-accent">
              Shape a Greener Future.
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-6 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 font-light"
        >
          Your AI-powered personal carbon intelligence system. Track your emissions, visualize your digital twin, and receive personalized coaching.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, type: 'spring' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/dashboard" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded-lg block">
            <Button size="lg" className="w-full sm:w-auto text-lg bg-greenmind-primary text-black hover:bg-greenmind-secondary shadow-[0_0_20px_rgba(0,200,83,0.4)] transition-all">
              Start Tracking
            </Button>
          </Link>
          <Link to="/simulator" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded-lg block">
            <Button size="lg" variant="glass" className="w-full sm:w-auto text-lg group">
              Try Simulator 
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
