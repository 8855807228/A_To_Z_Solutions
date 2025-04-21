import { useState, useEffect } from 'react';
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
import { useWebinarContext } from '../context/WebinarContext';
import PageTransition from '../../../components/PageTransition';

export default function Webinars() {
  const { webinarData1 } = useWebinarContext();

  useEffect(() => {
    console.log('Webinar Data from Context:', webinarData1);
  }, [webinarData1]);

  const webinarData = {
    title: "I've Helped 1,000+ People Start SIPs - Now It's Your Turn",
    subtitle:
      "Understand How SIPs in Mutual Funds Work and Why Most People Don't Use Them Right",
    description: `If you've been thinking about investing but feel overwhelmed by too much information — or unsure where to begin — you're not alone. Most people hear about SIPs but never get started simply because no one breaks it down in a way that makes sense.

This 2-hour live webinar is designed to change that. Whether you're just starting out or have delayed investing due to fear or confusion, I'll guide you step-by-step through how SIPs in mutual funds actually work, why they're one of the most powerful tools for building long-term wealth, and how you can get started with as little as ₹500 a month.

You'll learn how to choose the right type of mutual fund for your goals, understand the difference between SIP and lump sum investing, and most importantly — discover the common mistakes most investors make and how to avoid them.

By the end of this session, you'll walk away with clarity, confidence, and a simple action plan to begin your investing journey the very next day.`,
    dates: [
      {
        date: '2025-04-12',
        time: '06:30 PM',
        language: 'Marathi',
      },
      {
        date: '2025-04-13',
        time: '05:00 PM',
        language: 'Marathi',
      },
    ],
    duration: '2 Hours',
    price: '₹500',
    seats: 60,
    topics: [
      'Essential Financial Terms Explained — so you understand investing without any jargon',
      'How Mutual Funds Actually Work — the foundation you need before starting a SIP',
      'What SIP Really Is — and how it helps you invest consistently without timing the market',
      'How SIPs in Mutual Funds Actually Work — demystified with real-life examples',
      'SIP vs Lump Sum — when to choose what, and why',
      'How to Pick the Right Mutual Fund — based on your goals and risk profile',
      '5 Common SIP Mistakes Most People Make — and how to avoid them',
      'How to Stay Disciplined for Long-Term Wealth Creation — even during market ups and downs',
      'How to Track and Review Your SIPs — so you stay on course with your goals',
    ],
    features: [
      'Interactive live session',
      'Expert guidance from CFP',
      'Real-world case studies',
      'Investment strategies',
      'Personalized doubt clearing',
      'Downloadable resources',
    ],
    targetAudience: [
      "You've heard about SIPs but never really understood how they work",
      'You want to start investing but feel confused or afraid of making mistakes',
      "You're tired of keeping money in savings accounts or FDs and want better returns",
      "You've already started a SIP but aren't sure if you've chosen the right fund",
      'You want to understand mutual funds and SIPs in simple, beginner-friendly language',
      "You're looking for expert guidance without being sold any product",
    ],
    hostInfo: {
      name: 'Buddhabhushan More',
      title: 'Certified Financial Planner',
      description: `A Certified Financial Planner, AMFI-Registered MFD (ARN 261263), and an experienced Financial Educator. Over the years, I've helped 1,000+ individuals confidently start their SIPs, understand mutual funds, and make smarter financial decisions — without the jargon, confusion, or sales pressure.`,
      certifications: [
        'AMFI-Registered MFD (ARN 261263)',
        'Mutual Fund Distribution',
        'Investment Advisory',
        'Research Analysis',
        'Retirement Planning',
        'Financial Education',
      ],
      affiliations: [
        'Member of Marathwada Independent Financial Advisors Association (MIFAA)',
      ],
    },
    platform: 'Live on Zoom',
    platformNote: 'Link will be shared post-registration',
  };
  // const { webinarData } = useWebinarContext();

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

              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {webinarData.title}
              </p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-600">
                {webinarData.subtitle}
              </p>
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
                      Click below to register via Google Form.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScOKcdzBjLa_GcVOlix4Z1mKOW29SZn0pIUJTlgM__bFHEnAQ/viewform" // ⬅️ Replace with your real form link
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
