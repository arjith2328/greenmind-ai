import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { LandingPage } from '../pages/LandingPage';

// Mock Recharts
vi.mock('recharts', () => {
  return {
    ResponsiveContainer: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    AreaChart: ({ children }: { children: ReactNode }) => <div>{children}</div>,
    Area: () => <div></div>,
    XAxis: () => <div></div>,
    YAxis: () => <div></div>,
    CartesianGrid: () => <div></div>,
    Tooltip: () => <div></div>,
  };
});

describe('LandingPage', () => {
  it('renders the hero section with correct text', () => {
    render(
      <MemoryRouter>
        <LandingPage />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Understand Your Impact/i)).toBeInTheDocument();
    expect(screen.getByText(/Shape a Greener Future/i)).toBeInTheDocument();
    
    // Check buttons
    expect(screen.getByText(/Start Tracking/i)).toBeInTheDocument();
    expect(screen.getByText(/Try Simulator/i)).toBeInTheDocument();
  });
});
