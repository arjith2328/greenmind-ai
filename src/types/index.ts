export type MessageSender = 'user' | 'ai';

export interface Message {
  id: string;
  sender: MessageSender;
  text: string;
}

export interface CarbonScoreData {
  score: number;
  grade: string;
  percentile: number;
}

export interface EmissionSource {
  name: string;
  value: number; // percentage or absolute value
  color?: string;
}

export interface DashboardData {
  totalEmissions: number;
  carbonScore: CarbonScoreData;
  emissionsTrend: Array<{ name: string; emissions: number }>;
  topSources: EmissionSource[];
}

export interface Recommendation {
  title: string;
  description: string;
  impactPercentage: number;
}

export interface CarbonTwinData {
  score: number;
  topSources: EmissionSource[];
  insight: string;
  recommendations: string[];
  estimatedImpact: string[];
}

export interface SustainabilityReportData {
  dateGenerated: string;
  confidence: number;
  carbonScore: CarbonScoreData;
  breakdown: EmissionSource[];
  strengths: string[];
  weaknesses: string[];
  recommendations: Recommendation[];
  predictedSavings: {
    carbonKg: number;
    financialUsd: number;
  };
}

export interface AICoachResponse {
  text: string;
  suggestedGoals?: string[];
  confidence: number;
}

export interface BillScannerResult {
  fileName: string;
  fileType: string;
  extractedUsage: number;
  unit: string;
  carbonImpactKg: number;
  processingTimeMs: number;
}

export interface SimulatorData {
  publicTransportDays: number;
  vegetarianMeals: number;
  energyReduction: number;
  baselineEmissions: number;
  projectedEmissions: number;
  totalSaved: number;
  estimatedCostSavings: number;
  chartData: Array<{ name: string; emissions: number }>;
}
