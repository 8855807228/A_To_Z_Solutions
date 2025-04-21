import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col bg-white p-8 shadow-sm rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <dt className="text-center">
        <div className="mb-6 flex justify-center">
          <img
            src={service.icon}
            className="h-16 w-16"
            aria-hidden="true"
            alt={service.name}
          />
        </div>
        <h3 className="text-lg font-semibold leading-7 text-gray-900">
          {service.name}
        </h3>
      </dt>
      <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 text-center">
        <p className="flex-auto">{service.description}</p>
        <div className="mt-6">
          <Link
            to="/finance/webinars"
            className="text-sm font-semibold text-primary hover:text-primary-dark">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </dd>
    </motion.div>
  );
}
