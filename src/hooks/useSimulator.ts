import { useState, useMemo } from 'react';

export interface SimulatorState {
  publicTransportDays: number;
  setPublicTransportDays: (days: number) => void;
  vegetarianMeals: number;
  setVegetarianMeals: (meals: number) => void;
  energyReduction: number;
  setEnergyReduction: (percent: number) => void;
  totalSaved: number;
  estimatedCostSavings: number;
  baselineEmissions: number;
  projectedEmissions: number;
  chartData: Array<{ name: string; emissions: number }>;
}

/**
 * Custom hook to manage the state and calculations for the Carbon Simulator.
 * Uses useMemo to prevent unnecessary recalculation of heavy derivation logic.
 */
export const useSimulator = (): SimulatorState => {
  const [publicTransportDays, _setPublicTransportDays] = useState(2);
  const [vegetarianMeals, _setVegetarianMeals] = useState(3);
  const [energyReduction, _setEnergyReduction] = useState(10);

  const setPublicTransportDays = (days: number) => {
    if (isNaN(days)) return;
    _setPublicTransportDays(Math.max(0, Math.min(7, days)));
  };

  const setVegetarianMeals = (meals: number) => {
    if (isNaN(meals)) return;
    _setVegetarianMeals(Math.max(0, Math.min(21, meals)));
  };

  const setEnergyReduction = (percent: number) => {
    if (isNaN(percent)) return;
    _setEnergyReduction(Math.max(0, Math.min(100, percent)));
  };

  const baselineEmissions = 12500; // kg CO2 per year

  // Memoize all calculations to prevent recalculation on every render
  const { totalSaved, estimatedCostSavings, projectedEmissions, chartData } = useMemo(() => {
    const transportSavings = publicTransportDays * 52 * 5; // 5kg per day switched
    const foodSavings = vegetarianMeals * 52 * 3; // 3kg per meal switched
    const energySavings = (baselineEmissions * 0.3 * energyReduction) / 100; // Assuming energy is 30% of baseline

    const calculatedTotalSaved = transportSavings + foodSavings + energySavings;
    const calculatedProjectedEmissions = baselineEmissions - calculatedTotalSaved;
    const calculatedEstimatedCostSavings = (transportSavings * 0.5) + (foodSavings * 1.2) + (energySavings * 0.15);

    const calculatedChartData = [
      {
        name: 'Current',
        emissions: baselineEmissions,
      },
      {
        name: 'Projected',
        emissions: calculatedProjectedEmissions,
      }
    ];

    return {
      totalSaved: calculatedTotalSaved,
      estimatedCostSavings: calculatedEstimatedCostSavings,
      projectedEmissions: calculatedProjectedEmissions,
      chartData: calculatedChartData,
    };
  }, [publicTransportDays, vegetarianMeals, energyReduction]);

  return {
    publicTransportDays,
    setPublicTransportDays,
    vegetarianMeals,
    setVegetarianMeals,
    energyReduction,
    setEnergyReduction,
    totalSaved,
    estimatedCostSavings,
    baselineEmissions,
    projectedEmissions,
    chartData,
  };
};
