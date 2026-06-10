import * as React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-greenmind-bg py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-greenmind-primary/20 p-2 rounded-lg">
                <Leaf className="w-6 h-6 text-greenmind-primary" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">GreenMind<span className="text-greenmind-primary">.AI</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6">
              Your personal AI-powered carbon intelligence system. Track, understand, and reduce your environmental footprint seamlessly.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/dashboard" className="text-gray-400 hover:text-greenmind-primary transition-colors">Dashboard</Link></li>
              <li><Link to="/coach" className="text-gray-400 hover:text-greenmind-primary transition-colors">AI Coach</Link></li>
              <li><Link to="/simulator" className="text-gray-400 hover:text-greenmind-primary transition-colors">Simulator</Link></li>
              <li><Link to="/scanner" className="text-gray-400 hover:text-greenmind-primary transition-colors">Receipt Scanner</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wide">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-greenmind-primary transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-greenmind-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-greenmind-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-greenmind-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} GreenMind AI. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center">
            Made for a greener future.
          </p>
        </div>
      </div>
    </footer>
  );
};
