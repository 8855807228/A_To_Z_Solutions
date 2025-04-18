import React from 'react';
import { Link } from 'react-router-dom';
import {
  StarIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
} from '@heroicons/react/24/outline';

export const TourCard = ({ tour }) => {
  const {
    id,
    title,
    description,
    imageUrl,
    duration,
    location,
    groupSize,
    price,
    rating,
    category,
  } = tour;

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

  return (
    <div className="card group">
      <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-1 mb-2">
          {renderStars(rating)}
          <span className="ml-2 text-sm text-gray-600">
            {rating.toFixed(1)}
          </span>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <ClockIcon className="h-5 w-5 mr-2" />
            <span className="text-sm">{duration} days</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="h-5 w-5 mr-2" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <UserGroupIcon className="h-5 w-5 mr-2" />
            <span className="text-sm">Max {groupSize} people</span>
          </div>
          <div className="flex items-center text-gray-600">
            <CurrencyRupeeIcon className="h-5 w-5 mr-2" />
            <span className="text-sm">{price.toLocaleString('en-IN')}</span>
          </div>
        </div>

        <Link to={`/tours/${id}`} className="btn w-full text-center">
          View Details
        </Link>
      </div>
    </div>
  );
};
