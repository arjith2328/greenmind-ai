import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-greenmind-bg text-white relative">
      {/* Background glowing effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-greenmind-primary/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-greenmind-accent/10 blur-[120px]" />
      </div>
      
      <Navbar />
      <main className="flex-grow pt-16 z-10 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
