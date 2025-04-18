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

// This will be moved to an API service file
const fetchTourDetails = async (tourId) => {
  // TODO: Replace with actual API endpoint
  const response = await axios.get(`/api/tours/${tourId}`);
  return response.data;
};

export const TourDetails = () => {
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
    // Temporary mock data until API is ready
    initialData: {
      id: 1,
      title: 'Ajanta & Ellora Caves Explorer',
      description:
        'Discover the ancient Buddhist caves of Ajanta and Ellora, a UNESCO World Heritage site featuring remarkable rock-cut architecture.',
      longDescription: `Embark on a fascinating journey through time as you explore the magnificent Ajanta and Ellora Caves, 
        a testament to India's rich cultural heritage. This carefully curated tour offers:
        
        • Expert-guided tours of all major caves
        • Detailed explanations of Buddhist, Hindu, and Jain art
        • Photography sessions during optimal lighting conditions
        • Local cuisine experiences
        • Comfortable accommodation in Aurangabad
        • Air-conditioned transport throughout the tour`,
      imageUrl: 'https://example.com/ajanta.jpg',
      images: [
        'https://example.com/ajanta1.jpg',
        'https://example.com/ajanta2.jpg',
        'https://example.com/ajanta3.jpg',
      ],
      duration: 3,
      location: 'Aurangabad, Maharashtra',
      groupSize: 15,
      price: 12999,
      rating: 4.8,
      category: 'Heritage',
      inclusions: [
        'Hotel accommodation',
        'Breakfast and dinner',
        'AC vehicle',
        'Expert guide',
        'Monument entrance fees',
        'Photography permits',
      ],
      itinerary: [
        {
          day: 1,
          title: 'Arrival & Ajanta Caves',
          description:
            'Arrive in Aurangabad, transfer to hotel, and visit Ajanta Caves in the afternoon.',
        },
        {
          day: 2,
          title: 'Ellora Caves Exploration',
          description:
            'Full day exploration of Ellora Caves with expert guide.',
        },
        {
          day: 3,
          title: 'Local Sightseeing & Departure',
          description: 'Morning visit to Bibi Ka Maqbara and departure.',
        },
      ],
      reviews: [
        {
          id: 1,
          user: 'Rahul M.',
          rating: 5,
          comment:
            'Excellent tour with knowledgeable guides. The caves were breathtaking!',
          date: '2024-03-15',
        },
        {
          id: 2,
          user: 'Sarah K.',
          rating: 4,
          comment:
            'Great experience, though it was quite hot. The hotel was comfortable.',
          date: '2024-03-10',
        },
      ],
    },
  });

  const handleBookingChange = (field) => (event) => {
    setBookingDetails((prev) => ({
      ...prev,
      [field]: event.target?.value ?? event,
    }));
  };

  const handleBookNow = () => {
    // TODO: Implement booking logic
    console.log('Booking details:', bookingDetails);
    setOpenBooking(false);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <StarIcon
        key={index}
        className={`h-5 w-5 ${
          index < Math.floor(rating) ?
            'text-yellow-400 fill-current'
          : 'text-gray-300'
        }`}
      />
    ));
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary-400 border-r-transparent"></div>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-600">
          Error loading tour details. Please try again later.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tour Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-2">
              <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {tour.category}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {tour.title}
            </h1>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {renderStars(tour.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  ({tour.reviews?.length} reviews)
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <MapPinIcon className="h-5 w-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <ClockIcon className="h-5 w-5" />
                <span>{tour.duration} days</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <UserGroupIcon className="h-5 w-5" />
                <span>Max {tour.groupSize} people</span>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-baseline mb-4">
                <span className="text-3xl font-bold text-gray-900">
                  ₹{tour.price.toLocaleString('en-IN')}
                </span>
                <span className="ml-2 text-gray-600">/person</span>
              </div>
              <button
                onClick={() => setOpenBooking(true)}
                className="btn w-full">
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
              <p className="whitespace-pre-line">{tour.longDescription}</p>
            </section>

            {/* Inclusions */}
            <section className="mb-12">
              <h2 className="section-title">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.inclusions.map((inclusion, index) => (
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
                {tour.itinerary.map((day) => (
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
                {tour.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">
                        {review.user}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
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
                  className="input"
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
                  max={tour.groupSize}
                  className="input"
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
                  className="input">
                  <option value="standard">Standard Room</option>
                  <option value="deluxe">Deluxe Room</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => setOpenBooking(false)}
                className="btn-secondary">
                Cancel
              </button>
              <button onClick={handleBookNow} className="btn">
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
