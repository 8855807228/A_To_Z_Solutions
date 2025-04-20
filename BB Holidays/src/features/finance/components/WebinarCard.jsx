import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

export default function WebinarCard({
  webinar,
  index,
  onRegister,
  isRegistering,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {webinar.title}
        </h3>
        <p className="text-gray-600 mb-4">{webinar.description}</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-600">
            <CalendarIcon className="h-5 w-5 text-primary mr-2" />
            <span>
              {new Date(webinar.date).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <ClockIcon className="h-5 w-5 text-primary mr-2" />
            <span>
              {webinar.time} ({webinar.duration})
            </span>
          </div>
          <div className="flex items-center text-gray-600">
            <UserGroupIcon className="h-5 w-5 text-primary mr-2" />
            <span>
              {webinar.registeredCount} / {webinar.capacity} registered
            </span>
          </div>
        </div>

        <button
          onClick={() => onRegister(webinar.id)}
          disabled={isRegistering === webinar.id}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors duration-200 relative">
          {isRegistering === webinar.id ?
            <>
              <span className="opacity-0">Register Now</span>
              <a href="https://forms.gle/jyhgiST9zx1ahzW49"></a>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            </>
          : 'Register Now'}
        </button>
      </div>
    </motion.div>
  );
}
