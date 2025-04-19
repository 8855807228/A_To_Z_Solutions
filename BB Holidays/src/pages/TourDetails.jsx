import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  CalendarIcon,
  CurrencyRupeeIcon,
  TruckIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  TicketIcon,
  StarIcon,
} from '@heroicons/react/24/outline';

// Helper to safely stringify data
const safeStringify = (data) => {
  try {
    return JSON.stringify(data);
  } catch (error) {
    console.error('Error stringifying data:', error);
    return '';
  }
};

// Helper to safely parse dates
const safeParseDateString = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString();
  } catch (error) {
    console.error('Error parsing date:', error);
    return dateString || '';
  }
};

// Safe number formatter
const formatNumber = (value) => {
  try {
    return Number(value).toLocaleString('en-IN');
  } catch (error) {
    console.error('Error formatting number:', error);
    return value?.toString() || '0';
  }
};

// This will be moved to an API service file
const fetchTourDetails = async (tourId) => {
  try {
    // TODO: Replace with actual API endpoint
    const response = await axios.get(`/api/tours/${tourId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching tour details:', error);
    // Return mock data on error
    return {
      id: 1,
      title: 'Ajanta & Ellora Caves Explorer',
      description: 'Discover the ancient Buddhist caves of Ajanta and Ellora.',
      longDescription:
        'A fascinating journey through time exploring the magnificent Ajanta and Ellora Caves.',
      imageUrl: 'https://example.com/ajanta.jpg',
      images: ['https://example.com/ajanta1.jpg'],
      duration: 3,
      location: 'Aurangabad, Maharashtra',
      groupSize: 15,
      price: 12999,
      rating: 4.8,
      category: 'Heritage',
      inclusions: ['Hotel accommodation'],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Ajanta Caves',
          description: 'Arrive in Aurangabad and visit Ajanta Caves.',
        },
      ],
      reviews: [
        {
          id: 1,
          user: 'Rahul M.',
          rating: 5,
          comment: 'Excellent tour!',
          date: '2024-03-15',
        },
      ],
    };
  }
};

const TourDetails = () => {
  const { id } = useParams();
  const [openBooking, setOpenBooking] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    guests: 1,
    roomType: 'standard',
  });

  const {
    data: tour,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['tour', id],
    queryFn: () => fetchTourDetails(id),
    retry: 1,
    refetchOnWindowFocus: false,
    select: (data) => {
      try {
        // Ensure we're working with a clean copy of the data
        return JSON.parse(safeStringify(data));
      } catch (err) {
        console.error('Error processing tour data:', err);
        return null;
      }
    },
  });

  const handleBookingChange = (field) => (event) => {
    const value = event?.target?.value;
    if (value !== undefined) {
      setBookingDetails((prev) => ({
        ...prev,
        [field]: value,
      }));
    }
  };

  const handleBookNow = () => {
    try {
      console.log('Booking details:', safeStringify(bookingDetails));
      setOpenBooking(false);
    } catch (error) {
      console.error('Error processing booking:', error);
    }
  };

  const renderStars = (rating) => {
    try {
      const ratingNum = Number(rating) || 0;
      return [...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          className={`h-5 w-5 ${
            index < Math.floor(ratingNum) ?
              'text-yellow-400 fill-current'
            : 'text-gray-300'
          }`}
        />
      ));
    } catch (error) {
      console.error('Error rendering stars:', error);
      return null;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-400 border-r-transparent"></div>
      </div>
    );
  }

  if (error || !tour) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600">
          {error?.message ||
            'Error loading tour details. Please try again later.'}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tour Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {tour.category || 'Tour'}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {tour.title || 'Tour Details'}
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {renderStars(tour.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  ({tour.reviews?.length || 0} reviews)
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPinIcon className="h-5 w-5" />
                <span>{tour.location || 'Location not specified'}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <ClockIcon className="h-5 w-5" />
                <span>{tour.duration || 0} days</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <UserGroupIcon className="h-5 w-5" />
                <span>Max {tour.groupSize || 0} people</span>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{formatNumber(tour.price)}
                </span>
                <span className="ml-2 text-gray-600">/person</span>
              </div>
              <button
                onClick={() => setOpenBooking(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="prose prose-lg max-w-none mb-12">
              <h2 className="section-title">About This Tour</h2>
              <p className="whitespace-pre-line">
                {tour.longDescription ||
                  tour.description ||
                  'No description available.'}
              </p>
            </section>

            {/* Inclusions */}
            <section className="mb-12">
              <h2 className="section-title">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Array.isArray(tour.inclusions) &&
                  tour.inclusions.map((inclusion, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                      {index % 4 === 0 ?
                        <HomeIcon className="h-5 w-5 text-primary-600" />
                      : index % 4 === 1 ?
                        <BuildingStorefrontIcon className="h-5 w-5 text-primary-600" />
                      : index % 4 === 2 ?
                        <TruckIcon className="h-5 w-5 text-primary-600" />
                      : <TicketIcon className="h-5 w-5 text-primary-600" />}
                      <span className="text-gray-700">{inclusion}</span>
                    </div>
                  ))}
              </div>
            </section>

            {/* Itinerary */}
            <section className="mb-12">
              <h2 className="section-title">Itinerary</h2>
              <div className="space-y-4">
                {Array.isArray(tour.itinerary) &&
                  tour.itinerary.map((day) => (
                    <div
                      key={day.day}
                      className="bg-white rounded-lg shadow-sm p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-600">{day.description}</p>
                    </div>
                  ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="section-title">Reviews</h2>
              <div className="space-y-4">
                {Array.isArray(tour.reviews) &&
                  tour.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">
                          {review.user || 'Anonymous'}
                        </span>
                        <span className="text-sm text-gray-500">
                          {safeParseDateString(review.date)}
                        </span>
                      </div>
                      <div className="flex items-center mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-600">
                        {review.comment || 'No comment provided.'}
                      </p>
                    </div>
                  ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Additional tour information can go here */}
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      {openBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Book Your Tour
            </h2>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Tour Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingDetails.date}
                  onChange={handleBookingChange('date')}
                  min={new Date().toISOString().split('T')[0]}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="guests"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={bookingDetails.guests}
                  onChange={handleBookingChange('guests')}
                  min="1"
                  max={tour.groupSize || 1}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="roomType"
                  className="block text-sm font-medium text-gray-700 mb-1">
                  Room Type
                </label>
                <select
                  id="roomType"
                  name="roomType"
                  value={bookingDetails.roomType}
                  onChange={handleBookingChange('roomType')}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setOpenBooking(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Cancel
              </button>
              <button
                onClick={handleBookNow}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourDetails;
