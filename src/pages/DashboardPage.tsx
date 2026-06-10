import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Target, TrendingDown } from 'lucide-react';
import { CarbonTwin } from '../components/dashboard/CarbonTwin';
import { CarbonChart } from '../components/dashboard/CarbonChart';
import { Card, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

export const DashboardPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
          <p className="text-gray-400">Here's your carbon intelligence summary for this week.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
          <Badge variant="glass" className="px-3 py-1.5 text-sm gap-2">
            <Award className="w-4 h-4 text-yellow-400" />
            Level 12 Eco-Warrior
          </Badge>
          <Badge variant="glass" className="px-3 py-1.5 text-sm gap-2">
            <Leaf className="w-4 h-4 text-greenmind-primary" />
            2,450 Green Points
          </Badge>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="bg-gradient-to-br from-greenmind-bg to-greenmind-primary/10 border-greenmind-primary/30">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Weekly Emissions</p>
                  <p className="text-3xl font-bold text-white">42.5 <span className="text-sm font-normal text-gray-400">kg CO₂</span></p>
                </div>
                <div className="bg-greenmind-primary/20 p-3 rounded-xl">
                  <TrendingDown className="w-6 h-6 text-greenmind-primary" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-greenmind-primary font-medium">
                <span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded mr-2">-12%</span> vs last week
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-white/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Trees Equivalent</p>
                  <p className="text-3xl font-bold text-white">18.2 <span className="text-sm font-normal text-gray-400">trees</span></p>
                </div>
                <div className="bg-greenmind-accent/20 p-3 rounded-xl">
                  <Leaf className="w-6 h-6 text-greenmind-accent" />
                </div>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-400 font-medium">
                Needed to offset your emissions
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-white/10">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Active Goal</p>
                  <p className="text-xl font-bold text-white">Plastic-Free Week</p>
                </div>
                <div className="bg-greenmind-secondary/20 p-3 rounded-xl">
                  <Target className="w-6 h-6 text-greenmind-secondary" />
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1 text-gray-400">
                  <span>Progress</span>
                  <span>4/7 Days</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-greenmind-secondary h-1.5 rounded-full" style={{ width: '57%' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }} className="h-full">
            <CarbonTwin />
          </motion.div>
        </div>
        <div className="lg:col-span-2">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="h-full">
            <CarbonChart />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
