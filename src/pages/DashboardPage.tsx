import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Target, TrendingDown } from 'lucide-react';
import { CarbonTwin } from '../components/dashboard/CarbonTwin';
import { CarbonChart } from '../components/dashboard/CarbonChart';
import { Badge } from '../components/ui/Badge';
import { StatCard } from '../components/ui/StatCard';
import { ReportGenerator } from '../components/dashboard/ReportGenerator';

export const DashboardPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl font-bold">Welcome back, Alex</h1>
          <p className="text-gray-400">Here's your carbon intelligence summary for this week.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col sm:flex-row items-end sm:items-center gap-4">
          <ReportGenerator />
          <div className="flex gap-3">
            <Badge variant="glass" className="px-3 py-1.5 text-sm gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              Level 12 Eco-Warrior
            </Badge>
            <Badge variant="glass" className="px-3 py-1.5 text-sm gap-2">
              <Leaf className="w-4 h-4 text-greenmind-primary" />
              2,450 Green Points
            </Badge>
          </div>
        </motion.div>
      </div>

      <h2 className="sr-only">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <StatCard
            title="Weekly Emissions"
            value="42.5"
            valueSuffix="kg CO₂"
            icon={<TrendingDown aria-hidden="true" className="w-6 h-6 text-greenmind-primary" />}
            iconContainerClassName="bg-greenmind-primary/20"
            className="bg-gradient-to-br from-greenmind-bg to-greenmind-primary/10 border-greenmind-primary/30"
            footer={
              <div className="flex items-center text-greenmind-primary">
                <span className="text-green-400 bg-green-400/10 px-2 py-0.5 rounded mr-2">-12%</span> vs last week
              </div>
            }
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <StatCard
            title="Trees Equivalent"
            value="18.2"
            valueSuffix="trees"
            icon={<Leaf aria-hidden="true" className="w-6 h-6 text-greenmind-accent" />}
            iconContainerClassName="bg-greenmind-accent/20"
            footer="Needed to offset your emissions"
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <StatCard
            title="Active Goal"
            value="Plastic-Free Week"
            icon={<Target aria-hidden="true" className="w-6 h-6 text-greenmind-secondary" />}
            iconContainerClassName="bg-greenmind-secondary/20"
            footer={
              <div className="w-full">
                <div className="flex justify-between text-sm mb-1 text-gray-400 font-normal">
                  <span>Progress</span>
                  <span>4/7 Days</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div className="bg-greenmind-secondary h-1.5 rounded-full" style={{ width: '57%' }} />
                </div>
              </div>
            }
          />
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
