import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CurrencyRupeeIcon,
  ClockIcon,
  DocumentChartBarIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Tailored Financial Strategies',
    description:
      'Customized plans designed around your unique lifestyle, priorities, and goals.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Goal-Based Planning',
    description:
      'Align every financial decision with life goals like education, retirement, travel, or home buying.',
    icon: ChartBarIcon,
  },
  {
    name: '360° Financial Review',
    description:
      'Comprehensive approach covering income, expenses, assets, liabilities, insurance, and taxes.',
    icon: ClockIcon,
  },
  {
    name: 'Portfolio Management',
    description:
      'Smart investments curated for your risk appetite and wealth-building goals.',
    icon: CurrencyRupeeIcon,
  },
  {
    name: 'Risk Reduction',
    description:
      'Shield your finances from uncertainties with sound protection planning.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Transparent & Ethical Advice',
    description: 'No hidden agendas or commissions. Just your success.',
    icon: UserGroupIcon,
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary-light/20">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="/finance/webinars" className="inline-flex space-x-6">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20">
                  Latest Updates
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                  <span>Join our next webinar</span>
                  <span aria-hidden="true">&rarr;</span>
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Your Path to Financial Freedom
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              At ArthaSaa₹thi Financial Services, we believe financial planning
              is not just about numbers—it's about living a life of clarity,
              purpose, and confidence.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/finance/book-consultation"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Book Free Consultation
              </Link>
              <Link
                to="/finance/services"
                className="text-sm font-semibold leading-6 text-gray-900">
                Learn More <span aria-hidden="true">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Comprehensive Solutions
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for financial success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Whether you're looking to grow your wealth, secure your family's
            future, or plan your legacy, we're here to guide you every step of
            the way.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
