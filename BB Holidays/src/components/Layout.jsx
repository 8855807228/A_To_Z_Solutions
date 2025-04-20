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
        'text-blue-600'
      : 'text-gray-600 hover:text-blue-600';
  };

  const navigation = [
    { name: 'Tours', href: '/holidays/tours' },
    { name: 'About', href: '/holidays/about' },
    { name: 'Contact', href: '/holidays/contact' },
  ];

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
                <img
                  src={Logo}
                  alt="A to Z Solutions"
                  className="h-10 w-auto sm:h-12"
                />
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
              <Link
                to="/holidays/contact"
                className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                Book Now
              </Link>
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
                    className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200">
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/holidays/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 mt-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center mx-4 transition-colors duration-200">
                  Book Now
                </Link>
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
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              A to Z Solutions - Your Trusted Travel Partner
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-4">
              Creating memorable travel experiences since 2017
            </p>
            <div className="space-y-2">
              <p className="text-sm sm:text-base">
                <span className="font-medium">Contact:</span>{' '}
                <a
                  href="tel:+918381069577"
                  className="hover:text-blue-400 transition-colors">
                  +91 8381069577
                </a>
              </p>
              <p className="text-sm sm:text-base">
                <span className="font-medium">Email:</span>{' '}
                <a
                  href="mailto:bbhushan@a2z-solutions.in"
                  className="hover:text-blue-400 transition-colors">
                  bbhushan@a2z-solutions.in
                </a>
              </p>
            </div>
            <p className="mt-6 text-xs sm:text-sm text-gray-500">
              © {new Date().getFullYear()} A to Z Solutions. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
