import React, { useEffect, Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Layout as BBHolidaysLayout } from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoadingSpinner from './components/LoadingSpinner';
import { AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FinanceProvider } from './features/finance/context/FinanceContext';
import { ErrorBoundary } from './components/ErrorBoundary';

// Improve lazy loading with better error handling
const lazyWithErrorBoundary = (importFn) => {
  return lazy(() =>
    importFn().catch((error) => {
      console.error('Error loading component:', error);
      return {
        default: () => (
          <ErrorBoundary
            fallback={
              <div className="text-red-600 p-4">
                Failed to load component. Please try again.
              </div>
            }
          />
        ),
      };
    }),
  );
};

// Lazy load components
const LandingPage = lazyWithErrorBoundary(() =>
  import('./pages/LandingPage').then((module) => {
    if (!module.default)
      throw new Error('Failed to load LandingPage component');
    return module;
  }),
);

const Tours = lazyWithErrorBoundary(() =>
  import('./pages/Tours').then((module) => {
    if (!module.default) throw new Error('Failed to load Tours component');
    return module;
  }),
);

const About = lazyWithErrorBoundary(() =>
  import('./pages/About').then((module) => {
    if (!module.default) throw new Error('Failed to load About component');
    return module;
  }),
);

const Contact = lazyWithErrorBoundary(() =>
  import('./pages/Contact').then((module) => {
    if (!module.default) throw new Error('Failed to load Contact component');
    return module;
  }),
);

const TourDetails = lazyWithErrorBoundary(() =>
  import('./pages/TourDetails').then((module) => {
    if (!module.default)
      throw new Error('Failed to load TourDetails component');
    return module;
  }),
);

const NotFound = lazyWithErrorBoundary(() =>
  import('./pages/NotFound').then((module) => {
    if (!module.default) throw new Error('Failed to load NotFound component');
    return module;
  }),
);

// Finance Components with validation
const FinanceLayout = lazyWithErrorBoundary(() =>
  import('./features/finance/layouts/Layout').then((module) => {
    if (!module.default)
      throw new Error('Failed to load FinanceLayout component');
    return module;
  }),
);

const FinanceHome = lazyWithErrorBoundary(() =>
  import('./features/finance/pages/Home').then((module) => {
    if (!module.default)
      throw new Error('Failed to load FinanceHome component');
    return module;
  }),
);

const FinanceServices = lazyWithErrorBoundary(() =>
  import('./features/finance/pages/Services').then((module) => {
    if (!module.default)
      throw new Error('Failed to load FinanceServices component');
    return module;
  }),
);

const FinanceAbout = lazyWithErrorBoundary(() =>
  import('./features/finance/pages/About').then((module) => {
    if (!module.default)
      throw new Error('Failed to load FinanceAbout component');
    return module;
  }),
);

const FinanceContact = lazyWithErrorBoundary(() =>
  import('./features/finance/pages/Contact').then((module) => {
    if (!module.default)
      throw new Error('Failed to load FinanceContact component');
    return module;
  }),
);

const Webinars = lazyWithErrorBoundary(() =>
  import('./features/finance/pages/Webinars').then((module) => {
    if (!module.default) throw new Error('Failed to load Webinars component');
    return module;
  }),
);

const FinanceExpertise = lazyWithErrorBoundary(() =>
  import('./features/finance/pages/Expertise').then((module) => {
    if (!module.default)
      throw new Error('Failed to load FinanceExpertise component');
    return module;
  }),
);

const WebinarAdmin = lazyWithErrorBoundary(() =>
  import('./features/finance/pages/WebinarAdmin').then((module) => {
    if (!module.default)
      throw new Error('Failed to load WebinarAdmin component');
    return module;
  }),
);

// Create QueryClient with better error handling
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      onError: (error) => {
        console.error('Query error:', error);
        return null;
      },
      select: (data) => {
        // Ensure we're not trying to convert objects to primitives
        if (typeof data === 'object' && data !== null) {
          return JSON.parse(JSON.stringify(data));
        }
        return data;
      },
    },
  },
});

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}>
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              {/* Landing Page - Entry point for both applications */}
              <Route
                path="/"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ErrorBoundary>
                      <LandingPage />
                    </ErrorBoundary>
                  </Suspense>
                }
              />

              {/* BB Holidays Routes */}
              <Route path="/holidays" element={<BBHolidaysLayout />}>
                <Route
                  index
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <Tours />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="tours"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <Tours />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="tours/:id"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <TourDetails />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="about"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <About />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <Contact />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
              </Route>

              {/* Finance Routes */}
              <Route
                path="/finance"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ErrorBoundary>
                      <FinanceProvider>
                        <FinanceLayout />
                      </FinanceProvider>
                    </ErrorBoundary>
                  </Suspense>
                }>
                <Route
                  index
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <FinanceHome />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="services"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <FinanceServices />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="about"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <FinanceAbout />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="contact"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <FinanceContact />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="book-consultation"
                  element={<Navigate to="/finance/webinars" replace />}
                />
                <Route
                  path="webinars"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <Webinars />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="expertise"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <FinanceExpertise />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
                <Route
                  path="webinars/admin"
                  element={
                    <Suspense fallback={<LoadingSpinner />}>
                      <ErrorBoundary>
                        <WebinarAdmin />
                      </ErrorBoundary>
                    </Suspense>
                  }
                />
              </Route>

              <Route
                path="*"
                element={
                  <Suspense fallback={<LoadingSpinner />}>
                    <ErrorBoundary>
                      <NotFound />
                    </ErrorBoundary>
                  </Suspense>
                }
              />
            </Routes>
          </AnimatePresence>
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
