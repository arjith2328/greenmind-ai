import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Save, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { StatCard } from '../components/ui/StatCard';
import { SliderInput } from '../components/ui/SliderInput';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { useSimulator } from '../hooks/useSimulator';

export const SimulatorPage = React.memo(() => {
  const {
    publicTransportDays,
    setPublicTransportDays,
    vegetarianMeals,
    setVegetarianMeals,
    energyReduction,
    setEnergyReduction,
    totalSaved,
    estimatedCostSavings,
    chartData
  } = useSimulator();

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
              <SliderInput
                label="Public Transport Days / Week"
                value={publicTransportDays}
                min={0}
                max={7}
                valueSuffix=" days"
                onChange={setPublicTransportDays}
                colorVariant="primary"
              />

              <SliderInput
                label="Plant-Based Meals / Week"
                value={vegetarianMeals}
                min={0}
                max={21}
                valueSuffix=" meals"
                onChange={setVegetarianMeals}
                colorVariant="secondary"
              />

              <SliderInput
                label="Home Energy Reduction (%)"
                value={energyReduction}
                min={0}
                max={50}
                step={5}
                valueSuffix="%"
                onChange={setEnergyReduction}
                colorVariant="accent"
              />
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <StatCard
              variant="vertical"
              title="CO₂ Saved Annually"
              value={Math.round(totalSaved).toLocaleString()}
              valueSuffix="kg"
              icon={<Save aria-hidden="true" className="w-8 h-8 text-greenmind-primary" />}
              className="bg-gradient-to-br from-greenmind-primary/20 to-transparent border-greenmind-primary/30"
            />
            <StatCard
              variant="vertical"
              title="Estimated Cost Savings"
              value={`$${Math.round(estimatedCostSavings).toLocaleString()}`}
              icon={<DollarSign aria-hidden="true" className="w-8 h-8 text-greenmind-accent" />}
              className="bg-gradient-to-br from-greenmind-accent/20 to-transparent border-greenmind-accent/30"
            />
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
                    <Leaf aria-hidden="true" className="w-5 h-5 text-greenmind-primary" />
                    {Math.round(totalSaved / 21)} trees
                  </p>
                </div>
                <ArrowRight aria-hidden="true" className="w-6 h-6 text-gray-500" />
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
});

SimulatorPage.displayName = 'SimulatorPage';
