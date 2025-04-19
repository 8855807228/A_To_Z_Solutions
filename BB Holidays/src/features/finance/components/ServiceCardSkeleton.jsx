export default function ServiceCardSkeleton() {
  return (
    <div className="flex flex-col bg-white p-8 shadow-sm rounded-xl border border-gray-200">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 bg-gray-200 rounded-full mb-6 shimmer" />
        <div className="h-6 w-40 bg-gray-200 rounded shimmer" />
      </div>
      <div className="mt-4 space-y-3">
        <div className="h-4 w-full bg-gray-200 rounded shimmer" />
        <div className="h-4 w-5/6 bg-gray-200 rounded shimmer" />
        <div className="h-4 w-4/6 bg-gray-200 rounded shimmer" />
      </div>
      <div className="mt-6 flex justify-center">
        <div className="h-4 w-24 bg-gray-200 rounded shimmer" />
      </div>
    </div>
  );
}
