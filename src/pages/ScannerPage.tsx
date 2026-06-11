import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UploadCloud, FileText, CheckCircle, Loader2 } from 'lucide-react';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useScanner } from '../hooks/useScanner';

export const ScannerPage = React.memo(() => {
  const {
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
  } = useScanner();

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
                  className={`border-2 border-dashed ${error ? 'border-red-500/50 hover:bg-red-500/5' : 'border-white/20 hover:bg-white/5'} rounded-2xl p-12 flex flex-col items-center justify-center text-center transition-colors cursor-pointer relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-greenmind-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#081C15]`}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  role="button"
                  tabIndex={0}
                  aria-label="Upload bill or receipt"
                  onKeyDown={handleKeyDown}
                  onClick={triggerFileInput}
                >
                  <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer pointer-events-none"
                    onChange={handleFileInput}
                    accept="image/jpeg,image/png,application/pdf"
                    ref={fileInputRef}
                    aria-label="File upload input"
                    tabIndex={-1}
                  />
                  <div className={`${error ? 'bg-red-500/20 text-red-500' : 'bg-greenmind-primary/20 text-greenmind-primary'} p-4 rounded-full mb-4`}>
                    <UploadCloud aria-hidden="true" className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Drag & Drop your bill here</h3>
                  <p className="text-gray-400 mb-4">Supports PDF, JPG, PNG up to 10MB</p>
                  
                  {error && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="text-red-400 text-sm font-medium bg-red-500/10 px-4 py-2 rounded-lg mb-6 border border-red-500/20"
                    >
                      {error}
                    </motion.p>
                  )}

                  <Button variant="outline" className={`pointer-events-none ${error ? 'border-red-500/30 text-red-400' : ''}`}>
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
});

ScannerPage.displayName = 'ScannerPage';
