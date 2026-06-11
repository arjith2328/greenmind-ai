import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.stubGlobal('ResizeObserver', class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
});

vi.stubGlobal('IntersectionObserver', class IntersectionObserver {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
});

window.HTMLElement.prototype.scrollIntoView = function() {};
window.HTMLElement.prototype.hasPointerCapture = function() { return false; };
