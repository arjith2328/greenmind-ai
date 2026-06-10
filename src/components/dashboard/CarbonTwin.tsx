import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { User, Zap, Car, ShoppingBag, Utensils } from 'lucide-react';

export const CarbonTwin = () => {
  return (
    <Card className="h-full border-greenmind-primary/20">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-2xl mb-1">Your Carbon Twin</CardTitle>
            <CardDescription>Digital representation of your footprint</CardDescription>
          </div>
          <Badge variant="glass" className="text-greenmind-primary text-sm px-3 py-1">
            Score: 780
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-center justify-around py-8 gap-8">
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* Animated rings representing footprint categories */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-4 border-dashed border-greenmind-primary/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border-2 border-greenmind-accent/40"
            />
            <div className="bg-greenmind-primary/10 w-32 h-32 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,200,83,0.3)]">
              <User className="w-16 h-16 text-greenmind-primary" />
            </div>
          </div>
          
          <div className="flex-1 w-full space-y-4">
            <h4 className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-wider">Top Emission Sources</h4>
            {[
              { icon: <Car className="w-4 h-4" />, name: 'Transport', value: '45%', color: 'bg-greenmind-primary' },
              { icon: <Zap className="w-4 h-4" />, name: 'Energy', value: '30%', color: 'bg-greenmind-secondary' },
              { icon: <Utensils className="w-4 h-4" />, name: 'Food', value: '15%', color: 'bg-greenmind-accent' },
              { icon: <ShoppingBag className="w-4 h-4" />, name: 'Shopping', value: '10%', color: 'bg-white' },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${item.color}/20 text-white`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="text-sm text-gray-400">{item.value}</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div className={`${item.color} h-1.5 rounded-full`} style={{ width: item.value }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
