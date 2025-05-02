import { StarIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function TourCard({ tour }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}>
      <Link to={`/holidays/tours/${tour.id}`} className="block group">
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
          <img
            src={tour.imageUrl}
            alt={tour.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

          {/* Price Tag */}
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-holiday-yellow text-gray-900 font-bold shadow-lg">
              <span className="text-sm">
                ₹{tour.price.toLocaleString('en-IN')}
              </span>
            </span>
          </div>

          {/* Title and Details */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-2">
            <span className="px-2 py-1 bg-holiday text-white text-xs font-medium rounded-full w-fit">
              {tour.category}
            </span>
            <h3 className="text-white font-semibold line-clamp-1 text-lg">
              {tour.title}
            </h3>
            <div className="flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(tour.rating) ? 'text-holiday-yellow' : 'text-gray-400'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-xs text-white font-medium bg-black/40 px-2 py-0.5 rounded-full">
                {tour.rating}
              </span>
            </div>
          </div>

          {/* Ribbon */}
          {tour.featured && (
            <div className="absolute -top-1 -left-1 z-10">
              <div className="bg-holiday-teal text-white text-xs font-bold px-4 py-1 transform rotate-[-45deg] translate-y-3 shadow-md">
                FEATURED
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
