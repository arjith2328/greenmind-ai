import React from 'react';
import { Loader2 } from 'lucide-react';

export const PageLoader: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <Loader2 className="w-12 h-12 text-greenmind-primary animate-spin" />
    </div>
  );
};
