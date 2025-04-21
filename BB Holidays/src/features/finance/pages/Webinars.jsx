import { useState } from 'react';
import { motion } from 'framer-motion';
import More from '../assets/BeTheBetterInvestor.png';
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  VideoCameraIcon,
  CheckCircleIcon,
  AcademicCapIcon,
  UserIcon,
  CheckIcon,
} from '@heroicons/react/24/outline';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useWebinarContext } from '../context/WebinarContext';
import PageTransition from '../../../components/PageTransition';

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
  const { webinarData } = useWebinarContext();
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
    <PageTransition>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <h2 className="text-base font-semibold leading-7 text-primary">
                Upcoming Webinar
              </h2>
              {/* 👇 Inserted PNG Image with Link */}
              <div className="mt-8 flex justify-center">
                <a
                  href="https://your-link-here.com"
                  target="_blank"
                  rel="noopener noreferrer">
                  <img
                    src={More}
                    alt="Webinar Promo Banner"
                    className="w-full max-w-md rounded-xl shadow-lg ring-1 ring-gray-200 hover:scale-105 transition-transform duration-300"
                  />
                </a>
              </div>
              {/* 👆 PNG ends here */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {webinarData.title}
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-600">
                {webinarData.subtitle}
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 whitespace-pre-line">
                {webinarData.description}
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            {/* Left Column */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="grid grid-cols-1 gap-8">
                {/* Session Details */}
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Available Sessions
                  </h3>
                  <div className="mt-4 grid grid-cols-1 gap-6">
                    {webinarData.dates.map((session, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-white p-4 shadow-sm">
                        <dl className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-x-3">
                            <dt className="flex-none">
                              <CalendarIcon
                                className="h-5 w-5 text-primary"
                                aria-hidden="true"
                              />
                            </dt>
                            <dd className="text-sm leading-6 text-gray-600">
                              {new Date(session.date).toLocaleDateString(
                                'en-IN',
                                {
                                  day: 'numeric',
                                  month: 'numeric',
                                  year: 'numeric',
                                },
                              )}
                            </dd>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <dt className="flex-none">
                              <ClockIcon
                                className="h-5 w-5 text-primary"
                                aria-hidden="true"
                              />
                            </dt>
                            <dd className="text-sm leading-6 text-gray-600">
                              {session.time}
                            </dd>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <dt className="flex-none">
                              <UserGroupIcon
                                className="h-5 w-5 text-primary"
                                aria-hidden="true"
                              />
                            </dt>
                            <dd className="text-sm leading-6 text-gray-600">
                              {webinarData.seats} seats only
                            </dd>
                          </div>
                          <div className="flex items-center gap-x-3">
                            <dt className="flex-none">
                              <VideoCameraIcon
                                className="h-5 w-5 text-primary"
                                aria-hidden="true"
                              />
                            </dt>
                            <dd className="text-sm leading-6 text-gray-600">
                              {session.language}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>

                {/* What You'll Learn */}
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 flex items-center gap-2">
                    <CheckCircleIcon className="h-6 w-6 text-primary" />
                    What You'll Learn
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {webinarData.topics.map((topic, index) => (
                      <li key={index} className="flex gap-x-3 items-start">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary" />
                        <span className="text-sm leading-6 text-gray-600">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who Should Attend */}
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 flex items-center gap-2">
                    <UserIcon className="h-6 w-6 text-primary" />
                    Who Should Attend This Webinar
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {webinarData.targetAudience.map((item, index) => (
                      <li key={index} className="flex gap-x-3 items-start">
                        <CheckIcon className="h-5 w-5 flex-none text-primary" />
                        <span className="text-sm leading-6 text-gray-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Host Info */}
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 flex items-center gap-2">
                    <AcademicCapIcon className="h-6 w-6 text-primary" />
                    Meet Your Host – {webinarData.hostInfo.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {webinarData.hostInfo.description}
                  </p>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Certifications & Qualifications:
                    </h4>
                    <ul role="list" className="mt-2 space-y-2">
                      {webinarData.hostInfo.certifications.map(
                        (cert, index) => (
                          <li key={index} className="flex gap-x-3 items-center">
                            <CheckIcon className="h-5 w-5 flex-none text-primary" />
                            <span className="text-sm leading-6 text-gray-600">
                              {cert}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900">
                      Professional Affiliations:
                    </h4>
                    <ul role="list" className="mt-2">
                      {webinarData.hostInfo.affiliations.map(
                        (affiliation, index) => (
                          <li key={index} className="flex gap-x-3 items-center">
                            <CheckIcon className="h-5 w-5 flex-none text-primary" />
                            <span className="text-sm leading-6 text-gray-600">
                              {affiliation}
                            </span>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Registration Form */}
            <motion.div
              className="lg:col-span-5 lg:sticky lg:top-4 lg:h-fit"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Reserve Your Spot Now — {webinarData.price}
                </h3>
                <div className="mt-4 flex items-center gap-x-2 text-sm text-gray-600">
                  <VideoCameraIcon className="h-5 w-5 text-primary" />
                  <span>
                    {webinarData.platform} ({webinarData.platformNote})
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-x-2 text-sm text-gray-600">
                  <ClockIcon className="h-5 w-5 text-primary" />
                  <span>{webinarData.duration}</span>
                </div>
                <p className="mt-4 leading-7 text-gray-600">
                  ⚠️ Only {webinarData.seats} Seats Available — we're keeping it
                  small so you get personalized guidance and a chance to ask
                  your questions directly.
                </p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900">
                    This Webinar Includes:
                  </h4>
                  <ul role="list" className="mt-4 grid grid-cols-1 gap-4">
                    {webinarData.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-5 w-5 flex-none text-primary" />
                        <span className="text-sm leading-6 text-gray-600">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Column - Register Button to Google Form */}
                <motion.div
                  className="lg:col-span-5 lg:sticky lg:top-4 lg:h-fit"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}>
                  <div className="rounded-2xl bg-gray-50 p-8 text-center">
                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900 mb-4">
                      Reserve Your Spot Now — {webinarData.price}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      ⚠️ Limited Seats — Click below to register via Google
                      Form.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScOjQsWm7v8f7qv0SyfZYxMGcZ/register" // ⬅️ Replace with your real form link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full rounded-md bg-primary px-6 py-3 text-white font-semibold text-lg shadow hover:bg-primary-dark transition">
                      Register via Google Form
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
