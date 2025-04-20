export default function TourCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative aspect-w-16 aspect-h-9">
        <div className="w-full h-full shimmer" />

        {/* Price Tag */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <div className="px-3 py-1 sm:px-4 sm:py-2 bg-white rounded-full shadow-lg shimmer w-20 sm:w-24 h-6 sm:h-8" />
        </div>

        {/* Wishlist Button */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full shimmer" />
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4">
          <div className="w-16 sm:w-20 h-6 rounded-full shimmer" />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2 sm:mb-3">
          <div className="w-2/3">
            <div className="h-5 sm:h-6 shimmer rounded mb-2" />
            <div className="h-5 sm:h-6 shimmer rounded w-4/5" />
          </div>
          <div className="flex items-center px-2 py-1 rounded-lg bg-gray-50 ml-2">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full shimmer mr-1" />
            <div className="w-8 h-4 sm:h-5 shimmer rounded" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-4 sm:mb-6">
          <div className="h-4 sm:h-5 shimmer rounded w-full" />
          <div className="h-4 sm:h-5 shimmer rounded w-4/5" />
        </div>

        {/* Tour Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 sm:mb-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className={`flex items-center ${i === 2 ? 'col-span-2' : ''}`}>
              <div className="w-4 h-4 sm:w-5 sm:h-5 shimmer rounded-full mr-2" />
              <div className="h-4 sm:h-5 shimmer rounded w-20 sm:w-24" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="h-9 sm:h-11 w-full shimmer rounded-lg" />
      </div>
    </div>
  );
}
