import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const demoWebinars = [
  {
    id: 1,
    title: 'Introduction to Financial Planning',
    description:
      'Learn the basics of financial planning and how to create a solid foundation for your financial future.',
    date: '2024-05-01',
    time: '10:00 AM IST',
    duration: '60 minutes',
    speaker: 'Mr. Bharat Bhushan',
    capacity: 100,
    registeredCount: 45,
  },
  {
    id: 2,
    title: 'Investment Strategies for 2024',
    description:
      'Discover the latest investment trends and strategies to maximize your returns in the current market.',
    date: '2024-05-15',
    time: '11:00 AM IST',
    duration: '90 minutes',
    speaker: 'Mr. Bharat Bhushan',
    capacity: 75,
    registeredCount: 60,
  },
  {
    id: 3,
    title: 'Tax Planning and Wealth Creation',
    description:
      'Learn effective tax planning strategies and how to build long-term wealth through smart investments.',
    date: '2024-05-30',
    time: '03:00 PM IST',
    duration: '75 minutes',
    speaker: 'Mr. Bharat Bhushan',
    capacity: 50,
    registeredCount: 25,
  },
];

export function useWebinars() {
  const [webinars, setWebinars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [registering, setRegistering] = useState(null);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setWebinars(demoWebinars);
      } catch (err) {
        setError('Failed to fetch webinars. Please try again later.');
        toast.error('Failed to fetch webinars');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWebinars();
  }, []);

  const registerForWebinar = async (webinarId) => {
    setRegistering(webinarId);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setWebinars((prev) =>
        prev.map((webinar) =>
          webinar.id === webinarId ?
            { ...webinar, registeredCount: webinar.registeredCount + 1 }
          : webinar,
        ),
      );

      toast.success('Registration successful! Check your email for details.');
    } catch (error) {
      toast.error('Failed to register. Please try again.');
    } finally {
      setRegistering(null);
    }
  };

  return {
    webinars,
    isLoading,
    error,
    registering,
    registerForWebinar,
  };
}
