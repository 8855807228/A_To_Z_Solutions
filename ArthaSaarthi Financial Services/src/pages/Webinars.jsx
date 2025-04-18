import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const upcomingWebinar = {
  title: 'SIPs & Smart Mutual Fund Investing',
  date: '2024-04-15',
  time: '10:00 AM - 12:00 PM',
  duration: '2 Hours',
  price: '₹499',
  seats: 60,
  topics: [
    'Understanding SIP basics and benefits',
    'Choosing the right mutual funds',
    'Risk assessment and portfolio allocation',
    'Market timing vs. disciplined investing',
    'Common investment mistakes to avoid',
    'Tax implications of mutual fund investments',
    'Live Q&A session',
  ],
  features: [
    'Interactive live session',
    'Expert guidance from CFP',
    'Real-world case studies',
    'Investment strategies',
    'Personalized doubt clearing',
    'Downloadable resources',
  ],
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
});

export default function Webinars() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // Here you would typically make an API call to register the user
        console.log('Form submitted:', values);
        toast.success('Registration successful! Check your email for details.');
        formik.resetForm();
      } catch (error) {
        toast.error('Registration failed. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-base font-semibold leading-7 text-primary">
              Upcoming Webinar
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {upcomingWebinar.title}
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join us for an insightful session on building wealth through
              systematic investing.
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <div className="grid grid-cols-1 gap-8">
              <div className="rounded-2xl bg-gray-50 p-6">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Webinar Details
                </h3>
                <dl className="mt-4 space-y-4">
                  <div className="flex items-center gap-x-4">
                    <dt className="flex-none">
                      <CalendarIcon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-600">
                      {upcomingWebinar.date}
                    </dd>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <dt className="flex-none">
                      <ClockIcon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-600">
                      {upcomingWebinar.time} ({upcomingWebinar.duration})
                    </dd>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <dt className="flex-none">
                      <UserGroupIcon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-600">
                      Limited to {upcomingWebinar.seats} seats
                    </dd>
                  </div>
                  <div className="flex items-center gap-x-4">
                    <dt className="flex-none">
                      <VideoCameraIcon
                        className="h-5 w-5 text-primary"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-600">
                      Live on Zoom
                    </dd>
                  </div>
                </dl>
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  What You'll Learn
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {upcomingWebinar.topics.map((topic) => (
                    <li key={topic} className="flex gap-x-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-gray-600">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Webinar Features
                </h3>
                <ul
                  role="list"
                  className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {upcomingWebinar.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                      <span className="text-sm leading-6 text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="rounded-2xl bg-gray-50 p-8">
              <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                Register Now for {upcomingWebinar.price}
              </h3>
              <p className="mt-4 leading-7 text-gray-600">
                Secure your spot in this exclusive webinar. Limited seats
                available!
              </p>
              <form onSubmit={formik.handleSubmit} className="mt-6 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="name"
                      {...formik.getFieldProps('name')}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                    {formik.touched.name && formik.errors.name && (
                      <p className="mt-2 text-sm text-red-600">
                        {formik.errors.name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      type="email"
                      id="email"
                      {...formik.getFieldProps('email')}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className="mt-2 text-sm text-red-600">
                        {formik.errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    Phone Number
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      id="phone"
                      {...formik.getFieldProps('phone')}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                    {formik.touched.phone && formik.errors.phone && (
                      <p className="mt-2 text-sm text-red-600">
                        {formik.errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Registering...' : 'Register Now'}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
