import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingSpinner from './components/LoadingSpinner';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy load components
const LandingPage = lazy(() =>
  import('./pages/LandingPage').then((module) => ({
    default: module.LandingPage,
  })),
);
const Tours = lazy(() =>
  import('./pages/Tours').then((module) => ({ default: module.Tours })),
);
const About = lazy(() =>
  import('./pages/About').then((module) => ({ default: module.About })),
);
const Contact = lazy(() =>
  import('./pages/Contact').then((module) => ({ default: module.Contact })),
);
const NotFound = lazy(() =>
  import('./pages/NotFound').then((module) => ({ default: module.NotFound })),
);

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <LandingPage />
                </Suspense>
              }
            />
            <Route
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Layout />
                </Suspense>
              }>
              <Route path="/holidays">
                <Route
                  index
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Tours />
                    </Suspense>
                  }
                />
                <Route
                  path="tours"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Tours />
                    </Suspense>
                  }
                />
                <Route
                  path="about"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <About />
                    </Suspense>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <Contact />
                    </Suspense>
                  }
                />
              </Route>
            </Route>
            <Route
              path="*"
              element={
                <Suspense fallback={<LoadingSpinner />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </AnimatePresence>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
