import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TailoredStrategies from '../assets/Tailored Financial Strategies.png';
import GoalPlanning from '../assets/Goal-Based Planning.png';
import FinancialReview from '../assets/360° Financial Review.png';
import PortfolioManagement from '../assets/Portfolio Management.png';
import RiskReduction from '../assets/Risk Reduction.png';
import DecisionSupport from '../assets/Decision-Making Support.png';

const services = [
  {
    title: 'Tailored Financial Strategies',
    description:
      'Not one-size-fits-all. Every plan we build is customized to your unique lifestyle, priorities, and goals.',
    icon: TailoredStrategies,
  },
  {
    title: 'Goal-Based Planning',
    description:
      'We align finances with life. Align every financial decision with life goals like education, retirement, travel, or home buying.',
    icon: GoalPlanning,
  },
  {
    title: '360° Financial Review',
    description:
      'We cover every aspect. Get an integrated approach covering income, expenses, assets, liabilities, insurance, and taxes.',
    icon: FinancialReview,
  },
  {
    title: 'Portfolio Management',
    description:
      'Curated investments for your risk appetite and wealth-building goals.',
    icon: PortfolioManagement,
  },
  {
    title: 'Risk Reduction',
    description:
      'Shield your finances from uncertainties with sound protection planning.',
    icon: RiskReduction,
  },
  {
    title: 'Decision-Making Support',
    description: 'Understand your choices clearly with expert hand-holding.',
    icon: DecisionSupport,
  },
];

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const MotionDiv = motion.div;

  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">
        <img
          src={service.icon}
          alt={service.title}
          className="h-16 w-auto object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600">{service.description}</p>
    </MotionDiv>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Achieve Your Financial Goals with Expert Guidance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your financial journey deserves more than one-size-fits-all advice.
            We provide holistic, personalized financial guidance designed to
            empower you with clarity and control.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
