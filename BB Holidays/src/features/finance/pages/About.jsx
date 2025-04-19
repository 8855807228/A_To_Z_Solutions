import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  UserGroupIcon,
  CheckBadgeIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import FounderImage from '../assets/myself-removebg-preview.png';
import PageTransition from '../../../components/PageTransition';

const certifications = [
  'Certified Financial Planner',
  'AMFI-Registered Mutual Fund Distributor (ARN 261263)',
  'NISM Certified - Mutual Fund Distribution',
  'NISM Certified - Investment Advisory',
  'NISM Certified - Research Analysis',
  'NISM Certified - Retirement Planning',
  'NISM Certified - Financial Education',
];

const achievements = [
  'Helped 1,000+ individuals start their investment journey',
  'Member of Marathwada Independent Financial Advisors Association (MIFAA)',
  'Trusted partnerships with leading mutual funds and insurance providers',
  'Regular speaker at financial literacy workshops',
  'Featured in local media for financial expertise',
];

export default function About() {
  return (
    <PageTransition>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}>
              <h2 className="text-base font-semibold leading-7 text-primary">
                About Us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Your Trusted Financial Partner
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                At ArthaSaa₹thi Financial Services, we believe in empowering
                individuals with the knowledge and tools they need to make
                informed financial decisions. Our mission is to help you achieve
                true financial freedom through expert guidance and personalized
                solutions.
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
                <div className="rounded-2xl bg-gray-50 p-10">
                  <div className="flex items-center gap-8 mb-6">
                    <img
                      src={FounderImage}
                      alt="Buddhabhushan More"
                      className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                        Meet Buddhabhushan More
                      </h3>
                      <p className="text-primary font-medium mt-1">
                        Certified Financial Planner
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-7 text-gray-600">
                    A Certified Financial Planner with a passion for helping
                    individuals achieve their financial goals. With years of
                    experience in the financial services industry, Buddhabhushan
                    has helped numerous clients navigate their financial journey
                    with confidence.
                  </p>
                  <div className="mt-8 flex items-center gap-x-6">
                    <a
                      href="tel:+918381069577"
                      className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      Contact Now
                    </a>
                    <a
                      href="mailto:bbhushan.more@gmail.com"
                      className="text-sm font-semibold leading-6 text-gray-900">
                      Email <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Professional Certifications
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {certifications.map((cert) => (
                      <li key={cert} className="flex gap-x-3">
                        <AcademicCapIcon
                          className="h-6 w-6 flex-none text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-6 text-gray-600">
                          {cert}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Achievements & Recognition
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {achievements.map((achievement) => (
                      <li key={achievement} className="flex gap-x-3">
                        <CheckBadgeIcon
                          className="h-6 w-6 flex-none text-primary"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-6 text-gray-600">
                          {achievement}
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
              <div className="grid grid-cols-1 gap-8">
                <div className="rounded-2xl bg-gray-50 p-8">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Why Choose ArthaSaarthi?
                  </h3>
                  <dl className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-sm font-medium leading-6 text-gray-900">
                        <UserGroupIcon
                          className="h-5 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        Client-Centric Approach
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-600">
                        Your goals and comfort are our top priority
                      </dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-sm font-medium leading-6 text-gray-900">
                        <CheckBadgeIcon
                          className="h-5 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        Expert Guidance
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-600">
                        Professional and certified advice
                      </dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-sm font-medium leading-6 text-gray-900">
                        <BuildingOfficeIcon
                          className="h-5 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        Transparent Process
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-600">
                        Clear communication and no hidden fees
                      </dd>
                    </div>
                    <div className="flex flex-col">
                      <dt className="flex items-center gap-x-3 text-sm font-medium leading-6 text-gray-900">
                        <AcademicCapIcon
                          className="h-5 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        Educational Approach
                      </dt>
                      <dd className="mt-1 text-sm leading-6 text-gray-600">
                        We explain every step clearly
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="rounded-2xl bg-primary/5 p-8">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Our Mission
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    To empower individuals with financial knowledge and guide
                    them towards achieving their life goals through smart
                    financial planning. We believe in building long-term
                    relationships based on trust, transparency, and mutual
                    success.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
