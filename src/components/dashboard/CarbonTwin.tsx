import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { User, Zap, Car, ShoppingBag, Utensils, Check } from 'lucide-react';

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
        
        {/* AI Insight Box */}
        <div className="mt-8 bg-greenmind-primary/5 border border-greenmind-primary/20 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-greenmind-primary/10 blur-[40px] rounded-full pointer-events-none" />
          
          <p className="text-sm text-gray-300 mb-5 leading-relaxed">
            <span className="font-semibold text-greenmind-primary">AI Insight:</span> Based on your Carbon Twin analysis, transportation contributes 45% of your total emissions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">Recommendations:</h5>
              <ul className="space-y-2.5">
                <li className="text-sm text-gray-400 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-greenmind-primary mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,200,83,0.8)]" />
                  Use public transport 2 days per week
                </li>
                <li className="text-sm text-gray-400 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-greenmind-primary mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,200,83,0.8)]" />
                  Carpool once a week
                </li>
                <li className="text-sm text-gray-400 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-greenmind-primary mt-1.5 shrink-0 shadow-[0_0_8px_rgba(0,200,83,0.8)]" />
                  Consider cycling for short-distance trips
                </li>
              </ul>
            </div>
            
            <div className="bg-black/20 p-4 rounded-lg border border-white/5">
              <h5 className="text-sm font-semibold text-white mb-3">Estimated Impact:</h5>
              <ul className="space-y-2.5">
                <li className="text-sm text-greenmind-secondary flex items-start gap-2 font-medium">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  18% reduction in annual emissions
                </li>
                <li className="text-sm text-greenmind-secondary flex items-start gap-2 font-medium">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  Save approximately 420 kg CO₂ per year
                </li>
                <li className="text-sm text-greenmind-secondary flex items-start gap-2 font-medium">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  Equivalent to planting 28 trees
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
