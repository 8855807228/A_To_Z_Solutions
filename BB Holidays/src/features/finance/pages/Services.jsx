import { motion } from 'framer-motion';
import {
  BanknotesIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ChartBarIcon,
  UserGroupIcon,
  CalculatorIcon,
  BuildingLibraryIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import PageTransition from '../../../components/PageTransition';

const services = [
  {
    name: 'Tailored Financial Strategies',
    description:
      'We don’t believe in templates. Every plan we build is customized to your unique lifestyle, priorities, and goals.',
    icon: BanknotesIcon,
  },
  {
    name: 'Goal-Based Planning',
    description:
      'Align every financial decision with life goals like education, retirement, travel, or home buying.',
    icon: ShieldCheckIcon,
  },
  {
    name: '360° Financial Review',
    description:
      'Get an integrated approach covering income, expenses, assets, liabilities, insurance, and taxes.',
    icon: CreditCardIcon,
  },
  {
    name: 'Portfolio Management',
    description:
      'Smart investments curated for your risk appetite and wealth-building goals.',
    icon: ChartBarIcon,
  },
  {
    name: 'Risk Reduction',
    description:
      'Shield your finances from uncertainties with sound protection planning.',
    icon: UserGroupIcon,
  },
  {
    name: 'Decision-Making Support',
    description: 'Understand your choices clearly with expert hand-holding.',
    icon: CalculatorIcon,
  },
  {
    name: 'Transparent & Ethical Advice',
    description: 'No commissions. Just your success.',
    icon: BuildingLibraryIcon,
  },
  {
    name: 'Empowerment for Financial Freedom',
    description:
      'Empower you to make smarter money decisions, grow your wealth, and enjoy lifelong financial well-being.',
    icon: ArrowPathIcon,
  },
];

export default function Services() {
  return (
    <PageTransition>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Financial Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Your financial journey deserves more than one-size-fits-all
              advice. That’s why we provide holistic, personalized financial
              guidance designed to empower you with clarity and control.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <motion.div
                  key={service.name}
                  className="flex flex-col rounded-lg bg-white p-6 shadow-lg ring-1 ring-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}>
                  <dt className="flex items-center gap-x-3 text-[20px] font-semibold leading-7 text-gray-900">
                    <service.icon
                      className="h-[88px] w-[88px] flex-none text-primary"
                      aria-hidden="true"
                    />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
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
