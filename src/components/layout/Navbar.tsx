import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'AI Coach', path: '/coach' },
    { name: 'Simulator', path: '/simulator' },
    { name: 'Scanner', path: '/scanner' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10 bg-greenmind-bg/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" aria-label="Home" className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded-lg">
              <div className="bg-greenmind-primary/20 p-2 rounded-lg group-hover:bg-greenmind-primary/30 transition-colors">
                <Leaf aria-hidden="true" className="w-6 h-6 text-greenmind-primary" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">GreenMind<span className="text-greenmind-primary">.AI</span></span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'px-3 py-2 rounded-md text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]',
                    isActive(link.path) ? 'text-white' : 'text-gray-300 hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-greenmind-primary rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
              <Button variant="default" size="sm">Get Started</Button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]"
            >
              {isOpen ? <X aria-hidden="true" className="block h-6 w-6" /> : <Menu aria-hidden="true" className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]',
                    isActive(link.path) ? 'bg-greenmind-primary/20 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
