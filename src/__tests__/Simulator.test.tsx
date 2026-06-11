import type { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { SimulatorPage } from '../pages/SimulatorPage';

// Mock Recharts
vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  BarChart: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Bar: () => <div></div>,
  XAxis: () => <div></div>,
  YAxis: () => <div></div>,
  CartesianGrid: () => <div></div>,
  Tooltip: () => <div></div>,
  Cell: () => <div></div>,
}));

// Mock framer-motion
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual as Record<string, unknown>,
    motion: {
      div: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => {
        const validProps = { ...props };
        delete validProps.initial;
        delete validProps.animate;
        delete validProps.exit;
        delete validProps.transition;
        delete validProps.key;
        delete validProps.whileInView;
        delete validProps.viewport;
        delete validProps.whileHover;
        return <div {...validProps}>{children}</div>;
      }
    }
  };
});

describe('SimulatorPage', () => {
  it('renders simulator and handles slider interactions', () => {
    render(
      <MemoryRouter>
        <SimulatorPage />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Carbon Future Simulator/i)).toBeInTheDocument();
    
    const sliders = document.querySelectorAll('input[type="range"]');
    expect(sliders.length).toBe(3);
    
    const transportSlider = sliders[0];
    
    // Check initial state (2 days)
    expect(screen.getByText(/2 days/i)).toBeInTheDocument();
    
    // Change value
    fireEvent.change(transportSlider, { target: { value: '5' } });
    
    // Check updated state
    expect(screen.getByText(/5 days/i)).toBeInTheDocument();
  });
});
