export default function TourCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-w-16 aspect-h-9 relative">
        <div className="w-full h-full shimmer" />
        {/* Price Tag */}
        <div className="absolute top-4 right-4">
          <div className="h-8 w-24 bg-white rounded-full shadow-lg shimmer" />
        </div>
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="h-6 w-20 rounded-full shimmer" />
        </div>
      </div>

      <div className="p-6">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-4">
          <div className="h-7 w-2/3 shimmer" />
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
            <div className="h-5 w-5 shimmer rounded-full mr-1" />
            <div className="h-5 w-8 shimmer" />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2 mb-6">
          <div className="h-4 w-full shimmer" />
          <div className="h-4 w-4/5 shimmer" />
        </div>

        {/* Tour Details */}
        <div className="space-y-3 mb-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              <div className="h-5 w-5 shimmer rounded-full mr-2" />
              <div className="h-4 w-1/2 shimmer" />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="h-10 w-full shimmer rounded-lg" />
      </div>
    </div>
  );
}
