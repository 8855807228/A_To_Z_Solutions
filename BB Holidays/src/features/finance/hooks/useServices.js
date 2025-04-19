import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import FinancialReview from '../assets/360° Financial Review.png';
import GoalPlanning from '../assets/Goal-Based Planning.png';
import Portfolio from '../assets/Portfolio Management.png';
import RiskReduction from '../assets/Risk Reduction.png';
import TailoredStrategies from '../assets/Tailored Financial Strategies.png';
import DecisionSupport from '../assets/Decision-Making Support.png';

const demoServices = [
  {
    id: 1,
    name: '360° Financial Review',
    description:
      'Comprehensive analysis of your current financial situation, including assets, liabilities, income, and expenses.',
    icon: FinancialReview,
  },
  {
    id: 2,
    name: 'Goal-Based Planning',
    description:
      'Create a roadmap to achieve your financial objectives, from retirement planning to education funding.',
    icon: GoalPlanning,
  },
  {
    id: 3,
    name: 'Portfolio Management',
    description:
      'Professional management of your investment portfolio with regular monitoring and rebalancing.',
    icon: Portfolio,
  },
  {
    id: 4,
    name: 'Risk Management',
    description:
      'Identify and mitigate financial risks through insurance planning and diversification strategies.',
    icon: RiskReduction,
  },
  {
    id: 5,
    name: 'Tailored Financial Strategies',
    description:
      'Custom financial solutions designed specifically for your unique situation and goals.',
    icon: TailoredStrategies,
  },
  {
    id: 6,
    name: 'Decision-Making Support',
    description:
      'Expert guidance for major financial decisions, backed by thorough analysis and research.',
    icon: DecisionSupport,
  },
];

export function useServices() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setServices(demoServices);
      } catch (err) {
        setError('Failed to fetch services. Please try again later.');
        toast.error('Failed to fetch services');
      } finally {
        setIsLoading(false);
      }
    };

    fetchServices();
  }, []);

  return {
    services,
    isLoading,
    error,
  };
}
