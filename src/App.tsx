import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { PageLoader } from './components/ui/PageLoader';

const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const DashboardPage = lazy(() => import('./pages/DashboardPage').then(module => ({ default: module.DashboardPage })));
const CoachPage = lazy(() => import('./pages/CoachPage').then(module => ({ default: module.CoachPage })));
const SimulatorPage = lazy(() => import('./pages/SimulatorPage').then(module => ({ default: module.SimulatorPage })));
const ScannerPage = lazy(() => import('./pages/ScannerPage').then(module => ({ default: module.ScannerPage })));

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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="coach" element={<CoachPage />} />
            <Route path="simulator" element={<SimulatorPage />} />
            <Route path="scanner" element={<ScannerPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
