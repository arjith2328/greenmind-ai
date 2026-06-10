import { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Save, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

export const SimulatorPage = () => {
  const [publicTransportDays, setPublicTransportDays] = useState(2);
  const [vegetarianMeals, setVegetarianMeals] = useState(3);
  const [energyReduction, setEnergyReduction] = useState(10);

  const baselineEmissions = 12500; // kg CO2 per year
  const _baselineCost = 4500; // $ per year

  // Simple calculation mock
  const transportSavings = publicTransportDays * 52 * 5; // 5kg per day switched
  const foodSavings = vegetarianMeals * 52 * 3; // 3kg per meal switched
  const energySavings = (baselineEmissions * 0.3 * energyReduction) / 100; // Assuming energy is 30% of baseline

  const totalSaved = transportSavings + foodSavings + energySavings;
  const projectedEmissions = baselineEmissions - totalSaved;
  
  const estimatedCostSavings = (transportSavings * 0.5) + (foodSavings * 1.2) + (energySavings * 0.15);

  const chartData = [
    {
      name: 'Current',
      emissions: baselineEmissions,
    },
    {
      name: 'Projected',
      emissions: projectedEmissions,
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Carbon Future Simulator</h1>
        <p className="text-gray-400">Tweak your lifestyle habits and instantly see the projected impact.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="border-white/10">
            <CardHeader>
              <CardTitle>Adjust Your Habits</CardTitle>
              <CardDescription>Move the sliders to simulate changes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-gray-300">Public Transport Days / Week</label>
                  <span className="text-greenmind-primary font-bold">{publicTransportDays} days</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="7"
                  value={publicTransportDays}
                  onChange={(e) => setPublicTransportDays(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-greenmind-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-gray-300">Plant-Based Meals / Week</label>
                  <span className="text-greenmind-secondary font-bold">{vegetarianMeals} meals</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="21"
                  value={vegetarianMeals}
                  onChange={(e) => setVegetarianMeals(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-greenmind-secondary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-gray-300">Home Energy Reduction (%)</label>
                  <span className="text-greenmind-accent font-bold">{energyReduction}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="5"
                  value={energyReduction}
                  onChange={(e) => setEnergyReduction(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-greenmind-accent"
                />
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-greenmind-primary/20 to-transparent border-greenmind-primary/30">
              <CardContent className="p-6 flex flex-col items-center text-center justify-center">
                <Save className="w-8 h-8 text-greenmind-primary mb-2" />
                <p className="text-sm text-gray-400 font-medium">CO₂ Saved Annually</p>
                <p className="text-2xl font-bold text-white">{Math.round(totalSaved).toLocaleString()} kg</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-greenmind-accent/20 to-transparent border-greenmind-accent/30">
              <CardContent className="p-6 flex flex-col items-center text-center justify-center">
                <DollarSign className="w-8 h-8 text-greenmind-accent mb-2" />
                <p className="text-sm text-gray-400 font-medium">Estimated Cost Savings</p>
                <p className="text-2xl font-bold text-white">${Math.round(estimatedCostSavings).toLocaleString()}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card className="h-full border-white/10 flex flex-col">
            <CardHeader>
              <CardTitle>Impact Visualization</CardTitle>
              <CardDescription>Current vs Projected Annual Emissions</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                    <XAxis dataKey="name" stroke="rgba(255,255,255,0.5)" tickLine={false} axisLine={false} />
                    <YAxis stroke="rgba(255,255,255,0.5)" tickLine={false} axisLine={false} />
                    <Tooltip 
                      cursor={{fill: 'rgba(255,255,255,0.05)'}}
                      contentStyle={{ backgroundColor: '#081C15', borderColor: '#00C853', borderRadius: '8px' }}
                    />
                    <Bar dataKey="emissions" radius={[8, 8, 0, 0]}>
                      {chartData.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? '#4b5563' : '#00C853'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <motion.div 
                key={totalSaved} // Re-animate when totalSaved changes
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm text-gray-400">Equivalent to planting</p>
                  <p className="text-xl font-bold text-white flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-greenmind-primary" />
                    {Math.round(totalSaved / 21)} trees
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-gray-500" />
                <div className="text-right">
                  <p className="text-sm text-gray-400">Or driving</p>
                  <p className="text-xl font-bold text-white">
                    -{Math.round(totalSaved * 4)} km
                  </p>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
