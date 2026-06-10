import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-greenmind-primary/5 border-t border-white/10" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 rounded-3xl border border-greenmind-primary/30 shadow-[0_0_50px_rgba(0,200,83,0.1)] relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-greenmind-primary/20 blur-[50px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-greenmind-accent/20 blur-[50px] rounded-full" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
            Ready to meet your <span className="text-greenmind-primary">Carbon Twin</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
            Join thousands of users who are already shaping a greener future with AI-powered insights.
          </p>
          <div className="relative z-10">
            <Link to="/dashboard">
              <Button size="lg" className="text-lg px-10 h-14 bg-white text-black hover:bg-gray-200">
                Start For Free
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
