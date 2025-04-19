import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const demoTestimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    title: 'Business Owner',
    rating: 5,
    content:
      'Mr. Bharat Bhushan provided excellent guidance for my business financial planning. His strategies helped me optimize my investments and reduce tax liability significantly.',
    date: '2024-03-15',
  },
  {
    id: 2,
    name: 'Priya Patel',
    title: 'IT Professional',
    rating: 5,
    content:
      'The retirement planning services are exceptional. I now have a clear roadmap for my financial future and feel more confident about my investment decisions.',
    date: '2024-02-28',
  },
  {
    id: 3,
    name: 'Arun Kumar',
    title: 'Doctor',
    rating: 5,
    content:
      'Professional, knowledgeable, and always available to answer questions. The personalized financial strategy has already shown positive results.',
    date: '2024-02-10',
  },
  {
    id: 4,
    name: 'Neha Reddy',
    title: 'Entrepreneur',
    rating: 5,
    content:
      'The wealth management services are top-notch. Regular portfolio reviews and proactive adjustments have helped me stay on track with my financial goals.',
    date: '2024-01-25',
  },
];

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setTestimonials(demoTestimonials);
      } catch (err) {
        setError('Failed to fetch testimonials. Please try again later.');
        toast.error('Failed to fetch testimonials');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return {
    testimonials,
    isLoading,
    error,
  };
}
