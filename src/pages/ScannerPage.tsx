import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export const ScannerPage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'scanning' | 'success'>('idle');

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInputRef.current?.click();
    }
  };

  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    setStatus('scanning');

    // Simulate AI extraction process
    setTimeout(() => {
      setStatus('success');
    }, 3000);
  };

  const reset = () => {
    setFile(null);
    setStatus('idle');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Magic Bill Scanner</h1>
        <p className="text-gray-400 text-lg">Upload your electricity bills or shopping receipts. Our AI will extract the data and update your Carbon Twin instantly.</p>
      </div>

      <Card className="border-white/10 overflow-hidden relative" aria-live="polite">
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <CardContent className="p-12">
                <div 
                  className="border-2 border-dashed border-white/20 rounded-2xl p-12 flex flex-col items-center justify-center text-center hover:bg-white/5 transition-colors cursor-pointer relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  role="button"
                  tabIndex={0}
                  aria-label="Upload bill or receipt"
                  onKeyDown={handleKeyDown}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-none"
                    onChange={handleFileInput}
                    accept="image/*,.pdf"
                    ref={fileInputRef}
                    aria-label="File upload input"
                    tabIndex={-1}
                  />
                  <div className="bg-greenmind-primary/20 p-4 rounded-full mb-4">
                    <UploadCloud aria-hidden="true" className="w-10 h-10 text-greenmind-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Drag & Drop your bill here</h3>
                  <p className="text-gray-400 mb-6">Supports PDF, JPG, PNG up to 10MB</p>
                  <Button variant="outline" className="pointer-events-none">
                    Browse Files
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          )}

          {status === 'scanning' && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="py-20"
            >
              <CardContent className="flex flex-col items-center justify-center space-y-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-greenmind-accent/20 blur-xl rounded-full animate-pulse" />
                  <Loader2 aria-hidden="true" className="w-16 h-16 text-greenmind-accent animate-spin relative z-10" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">Extracting Data...</h3>
                  <p className="text-gray-400">GreenMind AI is analyzing {file?.name}</p>
                </div>
                
                <div className="w-64 space-y-2 mt-8">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'linear' }}
                    className="h-2 bg-gradient-to-r from-greenmind-primary to-greenmind-accent rounded-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Reading items</span>
                    <span>Calculating footprint</span>
                  </div>
                </div>
              </CardContent>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12"
            >
              <CardContent>
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring' }}
                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle aria-hidden="true" className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Extraction Complete!</h3>
                  <p className="text-gray-400">Your carbon twin has been updated with the new data.</p>
                </div>

                <div className="max-w-md mx-auto bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <FileText aria-hidden="true" className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <p className="font-medium text-white">{file?.name || 'receipt.jpg'}</p>
                      <p className="text-sm text-gray-400">Processed in 2.4s</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Identified Type</span>
                      <span className="font-medium">Electricity Bill</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Usage Found</span>
                      <span className="font-medium">450 kWh</span>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-white/10">
                      <span className="text-gray-400">Carbon Impact</span>
                      <span className="font-bold text-red-400">+185 kg CO₂</span>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-center gap-4">
                  <Button variant="outline" onClick={reset}>Scan Another</Button>
                  <Button className="bg-greenmind-primary text-black hover:bg-greenmind-secondary">
                    View in Dashboard
                  </Button>
                </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </div>
  );
};
