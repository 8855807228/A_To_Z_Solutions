import { Link, useLocation, Outlet } from 'react-router-dom';
import { useState } from 'react';

export function Layout() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (path) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-600';
  };

  const navigation = [
    { name: 'Tours', href: '/holidays/tours' },
    { name: 'About', href: '/holidays/about' },
    { name: 'Contact', href: '/holidays/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/holidays" className="text-2xl font-bold text-blue-600">
                BB Holidays
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${isActiveLink(item.href)} font-medium transition-colors duration-200`}>
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/holidays/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100">
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
          {isMobileMenuOpen && (
            <div className="md:hidden py-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600">
                  {item.name}
                </Link>
              ))}
              <Link
                to="/holidays/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 mt-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-center mx-4">
                Book Now
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>BB Holidays - Your Trusted Travel Partner</p>
            <p className="mt-2 text-gray-400">
              Contact: +91 8381069577 | Email: bbhushan@a2z-solutions.in
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
