import type { ReactNode } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { CoachPage } from '../pages/CoachPage';

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
    },
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>
  };
});

// Mock ResizeObserver
vi.stubGlobal('ResizeObserver', class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
});

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

describe('CoachPage', () => {
  it('renders chat interface and handles user interaction', () => {
    render(
      <MemoryRouter>
        <CoachPage />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/AI Sustainability Coach/i)).toBeInTheDocument();
    expect(screen.getByText(/Ask questions, get personalized advice, and set new goals/i)).toBeInTheDocument();
    
    // Check initial AI message
    expect(screen.getByText(/Hi Alex! I'm Coach Green/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(/Ask Coach Green for advice/i);
    expect(input).toBeInTheDocument();
    
    // Simulate typing
    fireEvent.change(input, { target: { value: 'How can I reduce emissions?' } });
    expect(input).toHaveValue('How can I reduce emissions?');
    
    // Submit form / click send
    const form = input.closest('form');
    if (form) {
      fireEvent.submit(form);
    }
    
    // Check if user message is added
    expect(screen.getByText('How can I reduce emissions?')).toBeInTheDocument();
  });
});
