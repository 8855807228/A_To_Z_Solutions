import React, { useState } from 'react';
import { TourCard } from '../components/TourCard';
import { useQuery } from '@tanstack/react-query';
import PageTransition from '../components/PageTransition';
import TourCardSkeleton from '../components/TourCardSkeleton';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
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
              Discover Amazing Tours
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-blue-100 max-w-2xl">
              Explore our handpicked collection of incredible adventures across
              India
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
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
                      <option value="all">All Durations</option>
                      <option value="1-3">1-3 Days</option>
                      <option value="4-7">4-7 Days</option>
                      <option value="8-14">8-14 Days</option>
                      <option value="15+">15+ Days</option>
                    </select>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Clear Filters Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={clearFilters}
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center">
                <XMarkIcon className="h-4 w-4 mr-1" />
                Clear Filters
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-base sm:text-lg text-gray-600">
              {isLoading ?
                <span className="inline-block">
                  <span className="w-24 h-6 shimmer rounded inline-block align-middle" />
                </span>
              : <>
                  Showing{' '}
                  <span className="font-semibold text-gray-900">
                    {tours.length}
                  </span>{' '}
                  amazing tours
                </>
              }
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {isLoading ?
              Array.from({ length: 6 }).map((_, index) => (
                <TourCardSkeleton key={index} />
              ))
            : tours.map((tour) => <TourCard key={tour.id} tour={tour} />)}
          </div>

          {/* No Results */}
          {!isLoading && tours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No tours found matching your criteria. Try adjusting your
                filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
