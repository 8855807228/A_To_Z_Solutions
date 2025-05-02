import React, { useState } from 'react';
import { TourCard } from '../components/TourCard';
import { useQuery } from '@tanstack/react-query';
import PageTransition from '../components/PageTransition';
import TourCardSkeleton from '../components/TourCardSkeleton';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
  BuildingOfficeIcon,
  UsersIcon,
  UserGroupIcon,
  TicketIcon,
  TruckIcon,
  HomeModernIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

// Mock data
const mockTours = [
  {
    id: 1,
    title: 'Ajanta & Ellora Caves Explorer',
    description:
      'Discover the ancient Buddhist caves of Ajanta and Ellora, a UNESCO World Heritage site featuring remarkable rock-cut architecture.',
    imageUrl:
      'https://images.unsplash.com/photo-1590136831894-d1be1495d577?q=80&w=1000&auto=format&fit=crop',
    duration: 3,
    location: 'Aurangabad, Maharashtra',
    groupSize: 15,
    price: 12999,
    rating: 4.8,
    category: 'Heritage',
  },
  {
    id: 2,
    title: 'Spiritual Golden Triangle',
    description:
      'Experience the spiritual journey through Delhi, Agra, and Varanasi with temple visits and sacred ceremonies.',
    imageUrl:
      'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000&auto=format&fit=crop',
    duration: 7,
    location: 'Delhi-Agra-Varanasi',
    groupSize: 20,
    price: 35999,
    rating: 4.7,
    category: 'Spiritual',
  },
];

const fetchTours = async (filters) => {
  // Simulating API call with mock data
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockTours;
};

export default function Tours() {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    sortBy: 'recommended',
    minPrice: 0,
    maxPrice: 100000,
    duration: 'all',
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const {
    data: tours,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tours', filters],
    queryFn: () => fetchTours(filters),
    initialData: mockTours,
  });

  const clearFilters = () => {
    setFilters({
      search: '',
      category: 'all',
      sortBy: 'recommended',
      minPrice: 0,
      maxPrice: 100000,
      duration: 'all',
    });
  };

  if (error) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center p-8 bg-red-50 rounded-lg">
            <p className="text-red-600 text-lg font-medium">
              Error loading tours. Please try again later.
            </p>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
              BB Holidays
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-blue-100 max-w-3xl">
              A trusted Destination Management Company based in Aurangabad,
              Maharashtra, specializing in customized domestic and international
              travel.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg sm:text-xl text-blue-100 max-w-3xl">
              <span className="font-semibold text-amber-300">
                One Line Tour Price – Always All Inclusive.
              </span>{' '}
              No Confusion. No Hidden Costs.
            </motion.p>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a wide range of services under one roof, ensuring a
                seamless experience from planning to travel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Corporate Travel */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Corporate Travel
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    End-to-end solutions for MICE: Meetings, Incentives,
                    Conferences, Exhibitions
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Corporate transport contracts for employee travel and
                    business logistics
                  </li>
                </ul>
              </div>

              {/* B2B */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <UsersIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Business to Business (B2B)
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Tie-ups with national & international Destination Management
                    Companies (DMCs)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Shared growth through collaborative and sustainable tourism
                    models
                  </li>
                </ul>
              </div>

              {/* B2C */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <UserGroupIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Business to Customer (B2C)
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Customized family holidays, honeymoon packages, group tours
                    & solo adventures
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Memorable experiences tailored to individual travel goals
                  </li>
                </ul>
              </div>

              {/* Train, Travel & Flight Bookings */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TicketIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Train, Travel & Flight Bookings
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Domestic and international bookings via a dedicated travel
                    desk
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Hassle-free reservation handling across all platforms
                  </li>
                </ul>
              </div>

              {/* PAN India Taxi & Bus Services */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TruckIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  PAN India Taxi & Bus Services
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Advance and online booking for taxis, coaches & buses
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Reliable, clean vehicles with trained drivers for local and
                    long-distance trips
                  </li>
                </ul>
              </div>

              {/* Hotel Bookings */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <HomeModernIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Hotel Bookings
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Access to competitive rates for hotels ranging from budget
                    to luxury
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Bookable in advance for a stress-free experience
                  </li>
                </ul>
              </div>

              {/* Passport & Visa Consultation */}
              <div className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow mx-auto md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <IdentificationIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Passport & Visa Consultation
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Step-by-step support for passport applications and visa
                    processes
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Ideal for both leisure and business travelers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Discover Our Tours
          </h2>

          {/* Search and Filters Card */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
            {/* Search Bar */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search tours..."
                value={filters.search}
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-700"
              />
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Mobile Filter Toggle */}
            <div className="md:hidden mb-4">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="w-full flex items-center justify-between px-4 py-2 border-2 border-gray-200 rounded-lg text-gray-700 hover:border-blue-500 transition-colors">
                <span className="flex items-center">
                  <FunnelIcon className="h-5 w-5 mr-2" />
                  Filters
                </span>
                <span className="text-sm text-gray-500">
                  {isFilterOpen ? 'Hide' : 'Show'}
                </span>
              </button>
            </div>

            {/* Filters */}
            <AnimatePresence>
              {(isFilterOpen ||
                !window.matchMedia('(max-width: 768px)').matches) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 overflow-hidden">
                  {/* Category Filter */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      value={filters.category}
                      onChange={(e) =>
                        setFilters({ ...filters, category: e.target.value })
                      }
                      className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                      <option value="all">All Categories</option>
                      <option value="Heritage">Heritage</option>
                      <option value="Spiritual">Spiritual</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Wildlife">Wildlife</option>
                    </select>
                  </div>

                  {/* Sort By */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Sort By
                    </label>
                    <select
                      value={filters.sortBy}
                      onChange={(e) =>
                        setFilters({ ...filters, sortBy: e.target.value })
                      }
                      className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                      <option value="recommended">Recommended</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Rating</option>
                      <option value="duration">Duration</option>
                    </select>
                  </div>

                  {/* Duration Filter */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Duration
                    </label>
                    <select
                      value={filters.duration}
                      onChange={(e) =>
                        setFilters({ ...filters, duration: e.target.value })
                      }
                      className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                      <option value="all">Any Duration</option>
                      <option value="1-3">1-3 Days</option>
                      <option value="4-7">4-7 Days</option>
                      <option value="8-14">8-14 Days</option>
                      <option value="15+">15+ Days</option>
                    </select>
                  </div>

                  {/* Clear Filters Button */}
                  <div className="flex items-end lg:col-span-3">
                    <button
                      onClick={clearFilters}
                      className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                      <XMarkIcon className="h-4 w-4 mr-1" />
                      Clear Filters
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Tour Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {isLoading ?
              [...Array(6)].map((_, index) => <TourCardSkeleton key={index} />)
            : tours?.map((tour) => <TourCard key={tour.id} tour={tour} />)}
          </div>

          {tours?.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No tours found matching your criteria
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters or search term
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Contact CTA Section */}
        <div className="bg-gray-100 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Let us create a custom tour package just for you. Contact our
              travel experts for a personalized experience.
            </p>
            <a
              href="/holidays/contact"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
              Request a Custom Quote
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
