import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '../../../components/PageTransition';
import CustomerSatisfaction from '../assets/Customer Satisfaction First.png';
import Innovation from '../assets/Innovation.png';
import ProfessionalExcellence from '../assets/Professional Excellence.png';
import StrategicPartnerships from '../assets/Strategic Partnerships.png';
import Sustainability from '../assets/Sustainability.png';
import TransparentAdvice from '../assets/Transparent & Ethical Advice.png';

const features = [
  {
    name: 'Customer Satisfaction First',
    description:
      'Your success is our priority. We work tirelessly to ensure you achieve your financial goals.',
    icon: CustomerSatisfaction,
  },
  {
    name: 'Professional Excellence',
    description:
      'Benefit from our certified expertise and continuous professional development.',
    icon: ProfessionalExcellence,
  },
  {
    name: 'Innovation in Planning',
    description:
      'Stay ahead with modern financial strategies and cutting-edge planning tools.',
    icon: Innovation,
  },
  {
    name: 'Strategic Partnerships',
    description:
      'Access top-tier financial products and services through our trusted network.',
    icon: StrategicPartnerships,
  },
  {
    name: 'Sustainable Growth',
    description:
      'Build wealth that lasts with sustainable, long-term financial strategies.',
    icon: Sustainability,
  },
  {
    name: 'Transparent & Ethical Advice',
    description: 'No hidden agendas or commissions. Just your success.',
    icon: TransparentAdvice,
  },
];

export default function Home() {
  return (
    <PageTransition>
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
                At ArthaSaa₹thi Financial Services, we believe financial
                planning is not just about numbers—it's about living a life of
                clarity, purpose, and confidence.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/finance/webinars"
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
              Why Choose Us
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
                    <img
                      src={feature.icon}
                      className="h-12 w-12 flex-none"
                      aria-hidden="true"
                      alt={feature.name}
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
    </PageTransition>
  );
}
