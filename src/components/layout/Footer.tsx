import { Leaf, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <footer className="relative bg-[#081C15] overflow-hidden pt-24 pb-12 border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-greenmind-primary/5 blur-[120px] pointer-events-none rounded-b-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-5 lg:col-span-6 space-y-6">
            <Link to="/" aria-label="Home" className="flex items-center gap-3 group inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded-xl">
              <div className="bg-gradient-to-br from-greenmind-primary/20 to-transparent p-2.5 rounded-xl border border-greenmind-primary/20 group-hover:border-greenmind-primary/40 transition-colors">
                <Leaf aria-hidden="true" className="w-7 h-7 text-greenmind-primary" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">GreenMind<span className="text-greenmind-primary">.AI</span></span>
            </Link>
            <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
              AI-Powered Carbon Intelligence Platform.
            </p>
            <p className="text-gray-500 max-w-sm text-sm">
              Building a Sustainable Future Through Artificial Intelligence.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="https://github.com/arjith2328" aria-label="GitHub profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]">
                <GithubIcon aria-hidden="true" className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn profile" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#0077B5] hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]">
                <LinkedinIcon aria-hidden="true" className="w-5 h-5" />
              </a>
              <a href="mailto:hello@greenmind.ai" aria-label="Email us" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-greenmind-primary hover:bg-white/10 hover:scale-110 transition-all duration-300 border border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]">
                <Mail aria-hidden="true" className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-lg">Product</h3>
            <ul className="space-y-4">
              <li><Link to="/#features" className="text-gray-400 hover:text-greenmind-primary transition-colors inline-block hover:translate-x-1 transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded">Features</Link></li>
              <li><Link to="/dashboard" className="text-gray-400 hover:text-greenmind-primary transition-colors inline-block hover:translate-x-1 transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded">Dashboard</Link></li>
              <li><a href="https://github.com/arjith2328" className="text-gray-400 hover:text-greenmind-primary transition-colors inline-block hover:translate-x-1 transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded">GitHub</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-white font-semibold mb-6 tracking-wide text-lg">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-greenmind-primary transition-colors inline-block hover:translate-x-1 transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-greenmind-primary transition-colors inline-block hover:translate-x-1 transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-greenmind-primary transition-colors inline-block hover:translate-x-1 transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15] rounded">Privacy Policy</a></li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; 2026 GreenMind AI. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Designed with</span>
            <Leaf aria-hidden="true" className="w-4 h-4 text-greenmind-primary" />
            <span>for the planet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
