import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { DashboardData } from '../../types';

const data: DashboardData['emissionsTrend'] = [
  { name: 'Mon', emissions: 12.5 },
  { name: 'Tue', emissions: 11.2 },
  { name: 'Wed', emissions: 14.1 },
  { name: 'Thu', emissions: 10.8 },
  { name: 'Fri', emissions: 15.3 },
  { name: 'Sat', emissions: 8.4 },
  { name: 'Sun', emissions: 7.2 },
];

export const CarbonChart: React.FC = React.memo(() => {
  return (
    <Card className="border-white/10">
      <CardHeader>
        <CardTitle className="text-xl">Weekly Emissions Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00C853" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#00C853" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="rgba(255,255,255,0.5)" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                dy={10} 
              />
              <YAxis 
                stroke="rgba(255,255,255,0.5)" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(8, 28, 21, 0.9)', 
                  border: '1px solid rgba(0, 200, 83, 0.3)',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="emissions" 
                stroke="#00C853" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorEmissions)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
});

CarbonChart.displayName = 'CarbonChart';
