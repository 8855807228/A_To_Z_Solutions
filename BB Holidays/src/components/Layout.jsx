import { Link, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from '../assets/BB Holidays.png';
import useScrollRestoration from '../hooks/useScrollRestoration';

export function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useScrollRestoration();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path) => {
    return location.pathname === path ?
        'text-holiday'
      : 'text-gray-600 hover:text-holiday';
  };

  const navigation = [{ name: 'Home', href: '/holidays' }];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ?
            'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-white shadow-sm'
        }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/holidays" className="flex items-center">
                <div className="relative overflow-hidden rounded-lg shadow-md bg-white p-1">
                  <img
                    src={Logo}
                    alt="BB Holidays"
                    className="h-10 w-auto sm:h-12 object-contain"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-holiday to-holiday-yellow"></div>
                </div>
                <span className="ml-2 text-lg font-bold text-gray-800 hidden sm:block">
                  <span className="text-holiday">BB</span> Holidays
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${isActiveLink(item.href)} text-sm font-medium transition-colors duration-200`}>
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a href="#quote-request" className="btn-holidays">
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu">
              <svg
                className="h-6 w-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen ?
                      'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden py-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-holiday transition-colors duration-200">
                    {item.name}
                  </Link>
                ))}
                <a
                  href="#quote-request"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 mt-2 text-base font-medium text-white bg-holiday hover:bg-holiday-dark rounded-lg text-center mx-4 transition-colors duration-200">
                  Get a Quote
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-white p-2 rounded-full shadow-md">
                <img
                  src={Logo}
                  alt="BB Holidays"
                  className="h-10 w-auto sm:h-12 object-contain"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold ml-3">
                <span className="text-holiday-light">BB</span> Holidays
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Creating memorable travel experiences since 2017
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
              <a
                href="tel:+918381069577"
                className="inline-flex items-center px-4 py-2 bg-holiday hover:bg-holiday-dark text-white rounded-lg transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +91 8381069577
              </a>
              <a
                href="mailto:bbhushan@a2z-solutions.in"
                className="inline-flex items-center px-4 py-2 bg-holiday-teal hover:bg-holiday-tealDark text-white rounded-lg transition-colors duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                bbhushan@a2z-solutions.in
              </a>
            </div>

            <p className="mt-6 text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} BB Holidays. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
