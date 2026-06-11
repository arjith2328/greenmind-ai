import type { ReactNode } from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { ScannerPage } from '../pages/ScannerPage';

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
    },
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>
  };
});

describe('ScannerPage', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('handles file upload and scanning process', async () => {
    render(
      <MemoryRouter>
        <ScannerPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/Magic Bill Scanner/i)).toBeInTheDocument();

    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    expect(fileInput).toBeInTheDocument();

    const file = new File(['dummy content'], 'bill.pdf', { type: 'application/pdf' });
    
    // Simulate file selection
    fireEvent.change(fileInput, { target: { files: [file] } });

    // Should transition to scanning state
    expect(screen.getByText(/Extracting Data/i)).toBeInTheDocument();

    // Fast-forward setTimeout
    act(() => {
      vi.runAllTimers();
    });

    // Wait for success state
    expect(screen.getByText(/Extraction Complete!/i)).toBeInTheDocument();
    
    expect(screen.getByText('bill.pdf')).toBeInTheDocument();
  });
});
