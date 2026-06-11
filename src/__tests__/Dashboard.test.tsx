import type { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { DashboardPage } from '../pages/DashboardPage';

// Mock Recharts
vi.mock('recharts', () => ({
  ResponsiveContainer: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  LineChart: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Line: () => <div></div>,
  XAxis: () => <div></div>,
  YAxis: () => <div></div>,
  CartesianGrid: () => <div></div>,
  Tooltip: () => <div></div>,
  AreaChart: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Area: () => <div></div>,
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', async () => {
  const actual = await vi.importActual('framer-motion');
  return {
    ...actual as Record<string, unknown>,
    motion: {
      div: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => {
        // filter out framer-motion specific props
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
      },
      p: ({ children, ...props }: { children?: ReactNode; [key: string]: unknown }) => {
        const validProps = { ...props };
        delete validProps.initial;
        delete validProps.animate;
        delete validProps.exit;
        delete validProps.transition;
        delete validProps.key;
        delete validProps.whileInView;
        delete validProps.viewport;
        delete validProps.whileHover;
        return <p {...validProps}>{children}</p>;
      }
    }
  };
});

describe('DashboardPage', () => {
  it('renders dashboard with stats', () => {
    render(
      <MemoryRouter>
        <DashboardPage />
      </MemoryRouter>
    );
    
    expect(screen.getAllByText(/Welcome back, Alex/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Weekly Emissions/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/42.5/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Trees Equivalent/i)).toBeInTheDocument();
    expect(screen.getByText(/Active Goal/i)).toBeInTheDocument();
  });
});
