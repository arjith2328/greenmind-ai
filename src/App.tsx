import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { CoachPage } from './pages/CoachPage';
import { SimulatorPage } from './pages/SimulatorPage';
import { ScannerPage } from './pages/ScannerPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="coach" element={<CoachPage />} />
          <Route path="simulator" element={<SimulatorPage />} />
          <Route path="scanner" element={<ScannerPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
