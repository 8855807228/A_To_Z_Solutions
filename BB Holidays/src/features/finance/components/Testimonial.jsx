import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Testimonial({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-white p-6 shadow-sm rounded-xl hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img
          className="h-10 w-10 rounded-full"
          src={
            testimonial.avatar ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=1a56db&color=fff`
          }
          alt={testimonial.name}
        />
        <div>
          <h3 className="text-sm font-semibold text-gray-900">
            {testimonial.name}
          </h3>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
      </div>
      <div className="flex mb-2">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating ? 'text-yellow-400' : 'text-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 flex-grow">{testimonial.content}</p>
      <p className="text-sm text-gray-400 mt-4">
        {new Date(testimonial.date).toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
        })}
      </p>
    </motion.div>
  );
}
