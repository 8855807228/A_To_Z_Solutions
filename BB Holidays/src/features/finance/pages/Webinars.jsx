import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  VideoCameraIcon,
  AcademicCapIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import PageTransition from '../../../components/PageTransition';
import { useFinance } from '../context/FinanceContext';
import WebinarImage from '../assets/BeTheBetterInvestor.png';

const upcomingWebinar = {
  title: "I've Helped 1,000+ People Start SIPs - Now It's Your Turn",
  subtitle:
    "Understand How SIPs in Mutual Funds Work and Why Most People Don't Use Them Right",
  dates: [
    { date: '2025-04-12', time: '6:30 PM', language: 'Marathi' },
    { date: '2025-04-13', time: '5:00 PM', language: 'Marathi' },
  ],
  duration: '2 Hours',
  price: '₹500',
  seats: 60,
  topics: [
    'Essential Financial Terms Explained',
    'How Mutual Funds Actually Work',
    'What SIP Really Is',
    'How SIPs in Mutual Funds Actually Work',
    'SIP vs Lump Sum',
    'How to Pick the Right Mutual Fund',
    '5 Common SIP Mistakes Most People Make',
    'How to Stay Disciplined for Long-Term Wealth Creation',
    'How to Track and Review Your SIPs',
  ],
  features: [
    'Live interactive session',
    'Real-life examples',
    'Personalized guidance',
    'Q&A session',
    'Beginner-friendly language',
    'No product selling',
  ],
  targetAudience: [
    "You've heard about SIPs but never really understood how they work",
    'You want to start investing but feel confused or afraid of making mistakes',
    "You're tired of keeping money in savings accounts or FDs and want better returns",
    "You've already started a SIP but aren't sure if you've chosen the right fund",
    'You want to understand mutual funds and SIPs in simple, beginner-friendly language',
    "You're looking for expert guidance without being sold any product",
  ],
  hostDetails: {
    name: 'Buddhabhushan More',
    credentials: [
      'Certified Financial Planner',
      'AMFI-Registered MFD (ARN 261263)',
      'Financial Educator',
    ],
    certifications: [
      'Mutual Fund Distribution',
      'Investment Advisory',
      'Research Analysis',
      'Retirement Planning',
      'Financial Education',
    ],
  },
};

export default function Webinars() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { webinarRegistrations, setWebinarRegistrations } = useFinance();

  const handleGoogleFormRedirect = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScOKcdzBjLa_GcVOlix4Z1mKOW29SZn0pIUJTlgM__bFHEnAQ/viewform',
    );
  };

  return (
    <PageTransition>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <h2 className="text-base font-semibold leading-7 text-primary">
                Live Webinar
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {upcomingWebinar.title}
              </p>
              <p className="mt-4 text-xl font-semibold text-gray-600">
                {upcomingWebinar.subtitle}
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src={WebinarImage}
                  alt="Be The Better Investor"
                  className="w-full max-w-lg rounded-lg shadow-lg" // Changed from max-w-xl to max-w-lg
                />
              </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                If you've been thinking about investing but feel overwhelmed by
                too much information — or unsure where to begin — you're not
                alone. Most people hear about SIPs but never get started simply
                because no one breaks it down in a way that makes sense.
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
                {/* Webinar Details */}
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Available Sessions
                  </h3>
                  <dl className="mt-4 space-y-4">
                    {upcomingWebinar.dates.map((session, index) => (
                      <div key={index} className="rounded-lg bg-white p-4">
                        <div className="flex items-center gap-x-4">
                          <dt className="flex-none">
                            <CalendarIcon
                              className="h-5 w-5 text-primary"
                              aria-hidden="true"
                            />
                          </dt>
                          <dd className="text-sm leading-6 text-gray-600">
                            {session.date}
                          </dd>
                        </div>
                        <div className="mt-2 flex items-center gap-x-4">
                          <dt className="flex-none">
                            <ClockIcon
                              className="h-5 w-5 text-primary"
                              aria-hidden="true"
                            />
                          </dt>
                          <dd className="text-sm leading-6 text-gray-600">
                            {session.time} | {session.language}
                          </dd>
                        </div>
                      </div>
                    ))}
                    <div className="flex items-center gap-x-4">
                      <dt className="flex-none">
                        <VideoCameraIcon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd className="text-sm leading-6 text-gray-600">
                        Live on Zoom (Link shared post-registration)
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
                  </dl>
                </div>

                {/* What You'll Learn */}
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    What You'll Learn
                  </h3>
                  <ul role="list" className="mt-4 grid grid-cols-1 gap-4">
                    {upcomingWebinar.topics.map((topic) => (
                      <li key={topic} className="flex gap-x-3">
                        <CheckCircleIcon className="h-6 w-6 flex-none text-primary" />
                        <span className="text-sm leading-6 text-gray-600">
                          {topic}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who Should Attend */}
                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Who Should Attend This Webinar
                  </h3>
                  <ul role="list" className="mt-4 grid grid-cols-1 gap-4">
                    {upcomingWebinar.targetAudience.map((item) => (
                      <li key={item} className="flex gap-x-3">
                        <CheckCircleIcon className="h-6 w-6 flex-none text-primary" />
                        <span className="text-sm leading-6 text-gray-600">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meet Your Host */}
                <div className="rounded-2xl bg-gray-50 p-6">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Meet Your Host – {upcomingWebinar.hostDetails.name}
                  </h3>
                  <div className="mt-4 space-y-6">
                    <p className="text-sm leading-6 text-gray-600">
                      A {upcomingWebinar.hostDetails.credentials.join(', ')},
                      with extensive experience in helping individuals make
                      smarter financial decisions.
                    </p>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Certified by NISM in:
                      </h4>
                      <ul className="mt-2 grid grid-cols-1 gap-2">
                        {upcomingWebinar.hostDetails.certifications.map(
                          (cert) => (
                            <li
                              key={cert}
                              className="flex items-center gap-x-3">
                              <AcademicCapIcon className="h-5 w-5 text-primary" />
                              <span className="text-sm text-gray-600">
                                {cert}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="sticky top-8">
                <div className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Register Now for {upcomingWebinar.price} Only
                  </h3>
                  <div className="mt-4 space-y-4">
                    <p className="text-sm leading-6 text-gray-600">
                      Secure your spot in this exclusive webinar. Limited seats
                      available!
                    </p>
                    <ul role="list" className="space-y-3">
                      {upcomingWebinar.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckCircleIcon className="h-5 w-5 flex-none text-primary" />
                          <span className="text-sm leading-6 text-gray-600">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 space-y-4">
                    <button
                      onClick={handleGoogleFormRedirect}
                      className="w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors">
                      Reserve Your Spot Now
                    </button>
                    <p className="text-xs text-center text-gray-500">
                      Complete registration form to receive Zoom link
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
