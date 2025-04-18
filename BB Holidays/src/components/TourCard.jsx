import { StarIcon } from '@heroicons/react/20/solid';
import {
  MapPinIcon,
  UserGroupIcon,
  ClockIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

export function TourCard({ tour }) {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={tour.imageUrl}
          alt={tour.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
          <span className="text-lg font-bold text-gray-900">
            ₹{tour.price.toLocaleString('en-IN')}
          </span>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 left-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors duration-200">
          <HeartIcon className="h-6 w-6 text-gray-600 hover:text-red-500 transition-colors duration-200" />
        </button>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <span className="px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-full">
            {tour.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
            {tour.title}
          </h3>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <span className="ml-1 font-semibold text-gray-900">
              {tour.rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 line-clamp-2">{tour.description}</p>

        {/* Tour Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm">{tour.location}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm">
              {tour.duration} {tour.duration === 1 ? 'Day' : 'Days'}
            </span>
          </div>

          <div className="flex items-center text-gray-600">
            <UserGroupIcon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-sm">Max {tour.groupSize} people</span>
          </div>
        </div>

        {/* View Details Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center">
          View Details
          <svg
            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
