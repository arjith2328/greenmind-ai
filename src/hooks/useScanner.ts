import { useState, useRef, useCallback } from 'react';
import type { ChangeEvent, DragEvent, KeyboardEvent, RefObject } from 'react';

export type ScannerStatus = 'idle' | 'scanning' | 'success';

export interface ScannerState {
  fileInputRef: RefObject<HTMLInputElement | null>;
  file: File | null;
  status: ScannerStatus;
  error: string | null;
  handleDragOver: (e: DragEvent) => void;
  handleDrop: (e: DragEvent) => void;
  handleFileInput: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: KeyboardEvent) => void;
  reset: () => void;
  triggerFileInput: () => void;
}

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];

/**
 * Custom hook to manage file uploading and scanning state machine for the ScannerPage.
 */
export const useScanner = (): ScannerState => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<ScannerStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback((selectedFile: File) => {
    setError(null);
    
    // File Validation
    if (!ALLOWED_TYPES.includes(selectedFile.type)) {
      setError('Invalid file type. Only JPG, PNG, and PDF are supported.');
      return;
    }
    if (selectedFile.size > MAX_FILE_SIZE) {
      setError('File size exceeds the 10MB limit.');
      return;
    }

    setFile(selectedFile);
    setStatus('scanning');

    // Simulate AI extraction process
    setTimeout(() => {
      setStatus('success');
    }, 3000);
  }, []);

  const handleDragOver = useCallback((e: DragEvent) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  }, [handleFile]);

  const handleFileInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  }, [handleFile]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  }, []);

  const triggerFileInput = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const reset = useCallback(() => {
    setFile(null);
    setStatus('idle');
    setError(null);
  }, []);

  return {
    fileInputRef,
    file,
    status,
    error,
    handleDragOver,
    handleDrop,
    handleFileInput,
    handleKeyDown,
    reset,
    triggerFileInput,
  };
};
