import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, CheckCircle, AlertTriangle, ArrowRight, Download } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../ui/Button';
import type { SustainabilityReportData } from '../../types';

const COLORS = ['#00C853', '#00E676', '#64FFDA', '#4b5563'];

export const ReportGenerator: React.FC = React.memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const reportData: SustainabilityReportData = useMemo(() => ({
    dateGenerated: new Date().toLocaleDateString(),
    confidence: 94,
    carbonScore: { score: 85, grade: 'A-', percentile: 15 },
    breakdown: [
      { name: 'Transport', value: 45, color: '#00C853' },
      { name: 'Energy', value: 30, color: '#00E676' },
      { name: 'Food', value: 15, color: '#64FFDA' },
      { name: 'Waste', value: 10, color: '#4b5563' },
    ],
    strengths: [
      'Excellent reduction in home energy usage (30% below national average).',
      'Consistent plant-based diet choices have saved ~120kg CO₂ this month.'
    ],
    weaknesses: [
      'Commuting emissions remain high due to daily solo car travel.',
      'Single-use plastics observed in recent grocery receipt scans.'
    ],
    recommendations: [
      {
        title: 'Adopt Public Transit',
        description: 'Switching to train/bus 2 days a week cuts transport emissions by 40%.',
        impactPercentage: 40
      },
      {
        title: 'Smart Thermostat',
        description: 'Automating home temp can save an extra 15% on heating/cooling.',
        impactPercentage: 15
      }
    ],
    predictedSavings: {
      carbonKg: 450,
      financialUsd: 320
    }
  }), []);

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-greenmind-primary text-black hover:bg-greenmind-secondary shadow-[0_0_15px_rgba(0,200,83,0.4)] flex items-center gap-2 font-medium"
      >
        <Sparkles aria-hidden="true" className="w-4 h-4" />
        Generate AI Sustainability Report
      </Button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel border border-white/10 rounded-3xl shadow-2xl bg-[#081C15] flex flex-col scrollbar-hide"
            >
              {/* Report Header */}
              <div className="p-6 md:p-8 border-b border-white/10 flex justify-between items-start bg-gradient-to-r from-greenmind-primary/10 to-transparent">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-greenmind-primary" />
                    <span className="text-greenmind-primary font-semibold text-sm tracking-widest uppercase">AI Generated</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">ESG Sustainability Report</h2>
                  <p className="text-gray-400 mt-1 text-sm">Generated on {reportData.dateGenerated} • Confidence: {reportData.confidence}%</p>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  aria-label="Close report"
                  className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]"
                >
                  <X aria-hidden="true" className="w-5 h-5 text-gray-300" />
                </button>
              </div>

              {/* Report Content */}
              <div className="p-6 md:p-8 space-y-8 flex-1">
                
                {/* Score & Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Score */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center relative overflow-hidden shadow-inner">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-greenmind-primary/20 rounded-full blur-[40px]" />
                    <p className="text-gray-400 font-medium mb-2">Overall Carbon Score</p>
                    <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-greenmind-primary to-greenmind-secondary">
                      {reportData.carbonScore.score}<span className="text-3xl text-gray-500">/100</span>
                    </div>
                    <p className="mt-2 text-xl font-bold text-white">Grade: {reportData.carbonScore.grade}</p>
                    <p className="mt-2 text-sm text-greenmind-primary bg-greenmind-primary/10 px-3 py-1 rounded-full border border-greenmind-primary/20">
                      Top {reportData.carbonScore.percentile}% of GreenMind Users
                    </p>
                  </div>

                  {/* Chart */}
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner">
                    <p className="text-gray-400 font-medium mb-4">Emission Breakdown</p>
                    <div className="h-48 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={reportData.breakdown}
                            innerRadius={50}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                          >
                            {reportData.breakdown.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color || COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip 
                            contentStyle={{ backgroundColor: '#081C15', borderColor: '#00C853', borderRadius: '8px' }}
                            itemStyle={{ color: '#fff' }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex justify-center gap-4 text-xs mt-2 text-gray-400 font-medium">
                      {reportData.breakdown.map((entry, index) => (
                        <span key={index} className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color || COLORS[index % COLORS.length] }} /> 
                          {entry.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Strengths & Weaknesses */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                      <CheckCircle className="w-5 h-5 text-greenmind-primary" />
                      Sustainability Strengths
                    </h3>
                    <ul className="space-y-4">
                      {reportData.strengths.map((str, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-greenmind-primary mt-1.5 shrink-0" />
                          {str}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-white mb-4">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      Areas for Improvement
                    </h3>
                    <ul className="space-y-4">
                      {reportData.weaknesses.map((weak, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-1.5 shrink-0" />
                          {weak}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 relative overflow-hidden shadow-inner">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-greenmind-accent/10 blur-[60px] rounded-full pointer-events-none" />
                  <h3 className="text-lg font-bold text-white mb-4 relative z-10">AI Recommended Actions</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                    {reportData.recommendations.map((rec, i) => (
                      <div key={i} className={`bg-black/20 border border-white/5 p-4 rounded-xl flex items-start gap-3 group transition-colors cursor-default backdrop-blur-sm hover:border-${i % 2 === 0 ? 'greenmind-primary' : 'greenmind-accent'}/30`}>
                        <div className={`bg-${i % 2 === 0 ? 'greenmind-primary' : 'greenmind-accent'}/20 p-2 rounded-lg shrink-0`}>
                          <ArrowRight className={`w-4 h-4 text-${i % 2 === 0 ? 'greenmind-primary' : 'greenmind-accent'} group-hover:translate-x-1 transition-transform`} />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">{rec.title}</p>
                          <p className="text-xs text-gray-400 mt-1 leading-relaxed">{rec.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Predicted Savings */}
                <div className="bg-gradient-to-r from-greenmind-primary/10 to-greenmind-secondary/10 border border-greenmind-primary/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_20px_rgba(0,200,83,0.1)]">
                  <div>
                    <h3 className="text-lg font-bold text-white">Predicted Annual Savings</h3>
                    <p className="text-sm text-gray-400">If all recommendations are implemented</p>
                  </div>
                  <div className="flex gap-8">
                    <div className="text-center">
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Carbon</p>
                      <p className="text-2xl font-black text-greenmind-primary">-{reportData.predictedSavings.carbonKg} <span className="text-base font-medium">kg</span></p>
                    </div>
                    <div className="text-center">
                      <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Financial</p>
                      <p className="text-2xl font-black text-white">+${reportData.predictedSavings.financialUsd}</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Footer */}
              <div className="p-6 md:p-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 bg-black/40 backdrop-blur-md">
                <p className="text-xs text-gray-500 font-medium">This report is AI-generated and for guidance purposes only.</p>
                <Button className="bg-white/10 hover:bg-white/20 text-white flex items-center gap-2 border border-white/10">
                  <Download className="w-4 h-4" />
                  Export PDF
                </Button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
});

ReportGenerator.displayName = 'ReportGenerator';
