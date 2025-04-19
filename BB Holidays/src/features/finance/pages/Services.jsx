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
    name: 'Cashflow Management & Budgeting',
    description:
      'Master your money before it masters you. We help you track and optimize income & expenses, build smart savings habits, and maintain financial discipline.',
    icon: BanknotesIcon,
    features: [
      'Track and optimize your income & expenses',
      'Build smart savings habits',
      'Maintain financial discipline',
      'Align monthly flows with future goals',
    ],
  },
  {
    name: 'Risk Management & Insurance Planning',
    description:
      'Protect first, then grow. Get the right coverage for life & health insurance without over-insurance and premium overload.',
    icon: ShieldCheckIcon,
    features: [
      'Right-size your life & health insurance',
      'Avoid over-insurance and premium overload',
      "Secure your family's future",
      'Comprehensive risk assessment',
    ],
  },
  {
    name: 'Debt Management & Counselling',
    description:
      'Eliminate debt, embrace freedom. We help you create structured repayment plans and manage EMIs effectively.',
    icon: CreditCardIcon,
    features: [
      'Create a structured repayment plan',
      'Manage EMIs and avoid penalties',
      'Debt consolidation strategies',
      'Credit score improvement',
    ],
  },
  {
    name: 'Investment Planning & Asset Allocation',
    description:
      'Invest wisely, live abundantly. Get expert guidance on diversifying your portfolio across various asset classes.',
    icon: ChartBarIcon,
    features: [
      'Diversify across equity, debt, gold, etc.',
      'SIPs, mutual funds, bonds strategies',
      'Periodic portfolio rebalancing',
      'Risk-adjusted returns optimization',
    ],
  },
  {
    name: 'Retirement Planning',
    description:
      'Live your golden years with dignity. We help you calculate and achieve your ideal retirement corpus.',
    icon: UserGroupIcon,
    features: [
      'Calculate ideal retirement corpus',
      'NPS, pension funds, annuities planning',
      'Inflation-adjusted planning',
      'Healthcare cost consideration',
    ],
  },
  {
    name: 'Tax Planning',
    description:
      'Keep more of what you earn. Optimize your tax outgo through legal and compliant strategies.',
    icon: CalculatorIcon,
    features: [
      'Maximize tax deductions (80C, 80D, etc.)',
      'Tax-efficient investment planning',
      'Tax-saving investment options',
      'Regular tax assessment',
    ],
  },
  {
    name: 'Estate Planning',
    description:
      'Pass on your wealth with peace. Professional guidance on wills, trusts, and succession planning.',
    icon: BuildingLibraryIcon,
    features: [
      'Will drafting and registration',
      'Trust formation guidance',
      'Asset distribution strategy',
      'Legal compliance assurance',
    ],
  },
  {
    name: 'Succession Planning',
    description:
      'Build wealth that lasts generations. Ensure smooth transition of business and assets to the next generation.',
    icon: ArrowPathIcon,
    features: [
      'Business succession strategy',
      'Asset transition planning',
      'Leadership succession',
      'Family wealth preservation',
    ],
  },
];

export default function Services() {
  return (
    <PageTransition>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-primary">
              Our Services
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive Financial Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer a full suite of financial planning services to guide you
              at every stage of your financial journey.
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
                  <dt className="flex items-center gap-x-3 text-lg font-semibold leading-7 text-gray-900">
                    <service.icon
                      className="h-6 w-6 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <ul className="mt-4 space-y-2 text-sm">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <span className="mr-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
