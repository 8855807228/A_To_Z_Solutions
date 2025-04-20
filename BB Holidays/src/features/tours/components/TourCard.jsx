import React from 'react';
import { Link } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/24/solid';

export const TourCard = ({ tour }) => {
  const { id, title, imageUrl, price, rating, category } = tour;

  return (
    <Link to={`/tours/${id}`} className="block group">
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

        {/* Price Tag */}
        <div className="absolute top-3 right-3 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
            <span className="text-sm font-bold text-gray-900">
              ₹{price.toLocaleString('en-IN')}
            </span>
          </span>
        </div>

        {/* Title and Details */}
        <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-2">
          <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full w-fit">
            {category}
          </span>
          <h3 className="text-white font-semibold line-clamp-1">{title}</h3>
          <div className="flex items-center">
            <StarIcon className="h-4 w-4 text-yellow-400" />
            <span className="ml-1 text-xs text-white/90">{rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
