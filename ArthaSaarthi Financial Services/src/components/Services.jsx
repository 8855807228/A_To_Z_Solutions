import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import ServiceCardSkeleton from './ServiceCardSkeleton';
import TailoredStrategies from '../assets/Tailored Financial Strategies.png';
import GoalPlanning from '../assets/Goal-Based Planning.png';
import FinancialReview from '../assets/360° Financial Review.png';
import PortfolioManagement from '../assets/Portfolio Management.png';
import RiskReduction from '../assets/Risk Reduction.png';
import DecisionSupport from '../assets/Decision-Making Support.png';

const services = [
  {
    title: 'Comprehensive Financial Review',
    description:
      'We cover every aspect of your finances with our 360° review approach.',
    icon: FinancialReview,
    highlights: [
      'Income & Expenses',
      'Assets & Liabilities',
      'Insurance Coverage',
      'Tax Planning',
    ],
  },
  {
    title: 'Goal-Based Planning',
    description: 'Align your financial decisions with your life goals.',
    icon: GoalPlanning,
    highlights: [
      'Education Planning',
      'Retirement Planning',
      'Home Purchase',
      'Wealth Creation',
    ],
  },
  {
    title: 'Portfolio Management',
    description: 'Expert management of your investment portfolio.',
    icon: PortfolioManagement,
    highlights: [
      'Asset Allocation',
      'Risk Assessment',
      'Regular Monitoring',
      'Performance Review',
    ],
  },
  {
    title: 'Risk Management',
    description: 'Protect your finances from uncertainties.',
    icon: RiskReduction,
    highlights: [
      'Insurance Planning',
      'Emergency Fund',
      'Debt Management',
      'Asset Protection',
    ],
  },
  {
    title: 'Tailored Strategies',
    description: 'Customized financial solutions for your unique needs.',
    icon: TailoredStrategies,
    highlights: [
      'Personalized Plans',
      'Flexible Approach',
      'Regular Updates',
      'Adaptive Solutions',
    ],
  },
  {
    title: 'Expert Guidance',
    description: 'Clear decision-making support at every step.',
    icon: DecisionSupport,
    highlights: [
      'Professional Advice',
      'Market Insights',
      'Regular Consultation',
      'Clear Communication',
    ],
  },
];

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-primary/5 flex items-center justify-center p-4">
          <img
            src={service.icon}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
        {service.title}
      </h3>
      <p className="text-gray-600 mb-4 text-center">{service.description}</p>
      <ul className="space-y-2">
        {service.highlights.map((highlight, i) => (
          <li key={i} className="flex items-center text-sm text-gray-600">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
            {highlight}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function Services() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your financial journey deserves more than one-size-fits-all advice.
            We provide holistic, personalized guidance designed to empower you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? [...Array(6)].map((_, index) => (
                <ServiceCardSkeleton key={index} />
              ))
            : services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
