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

// Initialize storage with demo data if empty
const initializeStorage = () => {
  const stored = localStorage.getItem('webinarData');
  if (!stored) {
    localStorage.setItem('webinarData', JSON.stringify(demoWebinars));
  }
  return stored ? JSON.parse(stored) : demoWebinars;
};

export function useWebinars() {
  const [webinars, setWebinars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [registering, setRegistering] = useState(null);
  const [webinarData, setWebinarData] = useState(null);

  useEffect(() => {
    const fetchWebinars = async () => {
      try {
        // Get data from localStorage
        const storedWebinars = initializeStorage();
        setWebinars(storedWebinars);
      } catch (err) {
        setError('Failed to fetch webinars. Please try again later.');
        toast.error('Failed to fetch webinars');
      } finally {
        setIsLoading(false);
      }
    };

    const fetchWebinarData = async () => {
      try {
        const storedData = localStorage.getItem('savedWebinarData');
        setWebinarData(storedData ? JSON.parse(storedData) : null);
      } catch (err) {
        setError('Failed to fetch webinar data');
        toast.error('Failed to fetch webinar data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchWebinars();
    fetchWebinarData();
  }, []);

  const registerForWebinar = async (webinarId) => {
    setRegistering(webinarId);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const updatedWebinars = webinars.map((webinar) =>
        webinar.id === webinarId ?
          { ...webinar, registeredCount: webinar.registeredCount + 1 }
        : webinar,
      );

      // Update localStorage
      localStorage.setItem('webinarData', JSON.stringify(updatedWebinars));
      setWebinars(updatedWebinars);

      toast.success('Registration successful! Check your email for details.');
    } catch (error) {
      toast.error('Failed to register. Please try again.');
    } finally {
      setRegistering(null);
    }
  };

  const updateWebinarData = async (newData) => {
    try {
      // Store in localStorage
      localStorage.setItem('savedWebinarData', JSON.stringify(newData));
      setWebinarData(newData);
      return true;
    } catch (err) {
      setError('Failed to update webinar data');
      toast.error('Failed to update webinar data');
      return false;
    }
  };

  return {
    webinars,
    isLoading,
    error,
    registering,
    registerForWebinar,
    webinarData,
    updateWebinarData,
  };
}
