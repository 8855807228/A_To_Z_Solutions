export default function ServiceCardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full shimmer" />
      </div>
      <div className="h-7 w-3/4 mx-auto shimmer mb-3" />
      <div className="h-4 w-full shimmer mb-4" />
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center">
            <div className="w-1.5 h-1.5 rounded-full shimmer mr-2" />
            <div className="h-4 w-3/4 shimmer" />
          </div>
        ))}
      </div>
    </div>
  );
}
