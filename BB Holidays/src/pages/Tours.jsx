import React, { useState } from 'react';
import { TourCard } from '../components/TourCard';
import { useQuery } from '@tanstack/react-query';
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/24/outline';

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

// This will be moved to an API service file
const fetchTours = async (filters) => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Filter tours based on search criteria
  let filteredTours = [...mockTours];

  if (filters.search) {
    const searchLower = filters.search.toLowerCase();
    filteredTours = filteredTours.filter(
      (tour) =>
        tour.title.toLowerCase().includes(searchLower) ||
        tour.description.toLowerCase().includes(searchLower) ||
        tour.location.toLowerCase().includes(searchLower),
    );
  }

  if (filters.category !== 'all') {
    filteredTours = filteredTours.filter(
      (tour) => tour.category.toLowerCase() === filters.category.toLowerCase(),
    );
  }

  // Sort tours
  switch (filters.sortBy) {
    case 'price-low':
      filteredTours.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredTours.sort((a, b) => b.price - a.price);
      break;
    case 'rating':
      filteredTours.sort((a, b) => b.rating - a.rating);
      break;
    case 'duration':
      filteredTours.sort((a, b) => a.duration - b.duration);
      break;
    default:
      // 'recommended' - no sorting needed
      break;
  }

  return filteredTours;
};

export function Tours() {
  const [filters, setFilters] = useState({
    search: '',
    category: 'all',
    sortBy: 'recommended',
    minPrice: 0,
    maxPrice: 100000,
    duration: 'all',
  });

  const {
    data: tours,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tours', filters],
    queryFn: () => fetchTours(filters),
    initialData: mockTours,
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8 bg-red-50 rounded-lg">
          <p className="text-red-600 text-lg font-medium">
            Error loading tours. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Amazing Tours
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Explore our handpicked collection of incredible adventures across
            India
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search and Filters Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
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

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          </div>
        </div>

        {/* Tours Grid */}
        {isLoading ?
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        : <>
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600 text-lg">
                Showing{' '}
                <span className="font-semibold text-gray-900">
                  {tours.length}
                </span>{' '}
                amazing tours
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          </>
        }
      </div>
    </div>
  );
}
