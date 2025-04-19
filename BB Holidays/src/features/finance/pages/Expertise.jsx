import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const expertiseAreas = [
  {
    title: 'Cashflow Management & Budgeting',
    tagline: 'Master your money before it masters you.',
    points: [
      'Track and optimize your income & expenses',
      'Build smart savings habits',
      'Maintain financial discipline',
      'Align monthly flows with future goals',
    ],
    result: 'More savings and financial peace of mind.',
    icon: '📊',
  },
  {
    title: 'Risk Management & Insurance Planning',
    tagline: 'Protect first, then grow.',
    points: [
      'Right-size your life & health insurance',
      'Avoid over-insurance and premium overload',
      "Secure your family's future with smart coverage",
    ],
    result: "Financial protection against life's uncertainties.",
    icon: '🛡',
  },
  {
    title: 'Investment Planning & Asset Allocation',
    tagline: 'Invest wisely, live abundantly.',
    points: [
      'Diversify smartly across equity, debt, gold, etc.',
      'Use SIPs, mutual funds, bonds, and more',
      'Periodic rebalancing for market protection',
    ],
    result: 'Long-term growth and goal achievement.',
    icon: '📈',
  },
  {
    title: 'Tax Planning',
    tagline: 'Keep more of what you earn.',
    points: [
      'Use smart deductions (80C, 80D, HRA, LTCG, etc.)',
      'Reduce tax outgo with compliant strategies',
      'Tax-efficient investment and withdrawal planning',
    ],
    result: 'More savings, less stress.',
    icon: '🧾',
  },
];

function ExpertiseCard({ area, index }) {
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
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{area.icon}</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{area.title}</h3>
      <p className="text-blue-600 font-semibold mb-4 italic">{area.tagline}</p>
      <ul className="space-y-2 mb-4">
        {area.points.map((point, i) => (
          <li key={i} className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span className="text-gray-600">{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-gray-700 font-semibold">🔸 Result: {area.result}</p>
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a full suite of financial planning services to guide you at
            every stage
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
