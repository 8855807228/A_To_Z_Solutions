import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  UsersIcon,
  UserGroupIcon,
  TicketIcon,
  TruckIcon,
  HomeModernIcon,
  EnvelopeIcon,
  PhoneIcon,
  GlobeAltIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import BuddhabhushanImage from '../features/finance/assets/myself-removebg-preview.png';

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-holiday-sand">
        {/* Hero Section - Updated with new colors */}
        <div className="holidays-gradient text-white shadow-xl">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
            <div className="max-w-5xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
                Creating Unforgettable Travel Experiences
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block bg-holiday-yellow text-gray-800 px-6 py-3 rounded-full text-lg font-bold shadow-lg transform hover:scale-105 transition-transform">
                No Hidden Costs • All-Inclusive Packages • Quality Service
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 text-center">
                At BB Holidays, our mission is to contribute to an inclusive,
                sustainable, and inspiring travel ecosystem by focusing on:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {/* Mission Values */}
                <div className="holidays-card p-6 sm:p-8">
                  <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-holiday"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Customer Satisfaction First
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    We aim to deliver exceptional, value-packed, high-quality
                    travel experiences.
                  </p>
                </div>

                <div className="holidays-card p-6 sm:p-8">
                  <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-holiday"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Strategic Partnerships
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Collaborating with trusted local and international DMCs to
                    enhance tour value and reach.
                  </p>
                </div>

                <div className="holidays-card p-6 sm:p-8">
                  <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-holiday"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Innovation
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Introducing unique destination concepts and curated travel
                    ideas.
                  </p>
                </div>

                <div className="holidays-card p-6 sm:p-8">
                  <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                    <svg
                      className="w-6 h-6 text-holiday"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                    Sustainability
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">
                    Promoting eco-friendly tourism and supporting local
                    communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-holiday-sand py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a wide range of services under one roof, ensuring a
                seamless experience from planning to travel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Corporate Travel */}
              <div className="holidays-card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                  <BuildingOfficeIcon className="h-6 w-6 text-holiday" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Corporate Travel
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    End-to-end solutions for MICE: Meetings, Incentives,
                    Conferences, Exhibitions
                  </li>
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Corporate transport contracts for employee travel and
                    business logistics
                  </li>
                </ul>
              </div>

              {/* B2B */}
              <div className="holidays-card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                  <UsersIcon className="h-6 w-6 text-holiday" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">B2B</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Exclusive partner rates for travel agencies and tour
                    operators
                  </li>
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    White-labeled booking solutions for travel businesses
                  </li>
                </ul>
              </div>

              {/* B2C */}
              <div className="holidays-card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                  <UserGroupIcon className="h-6 w-6 text-holiday" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Business to Customer (B2C)
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Customized family holidays, honeymoon packages, group tours
                    & solo adventures
                  </li>
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Memorable experiences tailored to individual travel goals
                  </li>
                </ul>
              </div>

              {/* Train, Travel & Flight Bookings */}
              <div className="holidays-card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                  <TicketIcon className="h-6 w-6 text-holiday" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Train, Travel & Flight Bookings
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Domestic and international bookings via a dedicated travel
                    desk
                  </li>
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Hassle-free reservation handling across all platforms
                  </li>
                </ul>
              </div>

              {/* PAN India Taxi & Bus Services */}
              <div className="holidays-card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                  <TruckIcon className="h-6 w-6 text-holiday" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  PAN India Taxi & Bus Services
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Advance and online booking for taxis, coaches & buses
                  </li>
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Reliable, clean vehicles with trained drivers for local and
                    long-distance trips
                  </li>
                </ul>
              </div>

              {/* Hotel Bookings */}
              <div className="holidays-card p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-light/20 rounded-lg flex items-center justify-center mb-4">
                  <HomeModernIcon className="h-6 w-6 text-holiday" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Hotel Bookings
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Access to competitive rates for hotels ranging from budget
                    to luxury
                  </li>
                  <li className="flex items-start">
                    <span className="text-holiday mr-2">•</span>
                    Bookable in advance for a stress-free experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="holidays-gradient-reverse text-white py-12 my-12 shadow-lg">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Ready to plan your dream vacation?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Our travel experts are here to help you create the perfect
              itinerary tailored to your preferences and budget.
            </p>
            <a
              href="#quote-request"
              className="inline-flex items-center px-6 py-3 bg-white text-holiday-tealDark font-bold rounded-lg shadow-md hover:bg-holiday-yellow hover:text-gray-800 transition-colors duration-200">
              Get Started Now
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About Us
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                BB Holidays is a trusted Destination Management and travel
                Company based in Aurangabad, Maharashtra. It specializes in
                customized domestic and international travel.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Since our founding in 2017, we've helped thousands of travelers
                explore India and the world on their terms — with the right
                budget, perfect planning, and a personal touch.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                We proudly serve both B2B and B2C clients, driven by a deep
                passion for travel and a customer-first approach.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6">
                Our experienced professionals constantly innovate to deliver
                curated travel solutions, whether it's a spiritual journey,
                exotic escape, corporate trip, or quick weekend getaway.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-10">
                All you need to do is share your destination, travel dates, and
                budget — and BB Holidays will craft a personalized experience
                you'll never forget!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center mb-12">
                <div className="p-6 bg-white rounded-xl shadow-md">
                  <div className="text-2xl sm:text-3xl font-bold text-holiday-teal mb-2">
                    1000+
                  </div>
                  <div className="text-gray-600">Happy Travelers</div>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md">
                  <div className="text-2xl sm:text-3xl font-bold text-holiday-teal mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Unique Tours</div>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-md">
                  <div className="text-2xl sm:text-3xl font-bold text-holiday-teal mb-2">
                    15+
                  </div>
                  <div className="text-gray-600">Destinations</div>
                </div>
              </div>

              <div className="mt-10 mb-12">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  Our Leadership
                </h3>
                <div className="max-w-md mx-auto">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                    <img
                      src={BuddhabhushanImage}
                      alt="Mr. Buddhabhushan More"
                      className="w-full h-64 object-contain bg-gray-50"
                    />
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                        Mr. Buddhabhushan More
                      </h3>
                      <p className="text-holiday-teal mb-3 sm:mb-4">
                        Founder & Managing Director (MD)
                      </p>
                      <div className="flex flex-col space-y-2">
                        <p className="text-sm sm:text-base text-gray-600 flex items-center">
                          <EnvelopeIcon className="h-5 w-5 mr-2 text-holiday-teal" />
                          bbhushan@a2z-solutions.in
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 flex items-center">
                          <PhoneIcon className="h-5 w-5 mr-2 text-holiday-teal" />
                          +91 83810 69577
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Request Section - Replaced form with contact information */}
        <div className="bg-holiday-sand py-12 sm:py-16" id="quote-request">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Request a Quote
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
                  Planning your next adventure? Contact us directly for a
                  personalized quote tailored to your preferences and budget.
                </p>
                <div className="mt-4 inline-block bg-holiday-yellow text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                  "One Line Tour Price – Always All Inclusive. No Confusion. No
                  Hidden Costs."
                </div>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-holiday-teal rounded-xl p-8 border-2 border-holiday-teal">
                  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="flex-shrink-0">
                      <img
                        src={BuddhabhushanImage}
                        alt="Mr. Buddhabhushan More"
                        className="w-36 h-36 object-contain rounded-full bg-white p-2 border-2 border-holiday-teal"
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Contact Mr. Buddhabhushan More
                      </h3>
                      <p className="text-gray-600 mb-4">
                        For personalized travel quotes and expert assistance
                      </p>

                      <div className="flex flex-col space-y-4">
                        <a
                          href="tel:+918381069577"
                          className="flex items-center justify-center md:justify-start text-lg text-holiday-tealDark font-medium">
                          <PhoneIcon className="h-6 w-6 mr-2" />
                          +91 8381069577
                        </a>
                        <a
                          href="mailto:bbhushan@a2z-solutions.in"
                          className="flex items-center justify-center md:justify-start text-lg text-holiday-tealDark font-medium">
                          <EnvelopeIcon className="h-6 w-6 mr-2" />
                          bbhushan@a2z-solutions.in
                        </a>
                        <div className="flex items-center justify-center md:justify-start text-lg text-gray-700">
                          <MapPinIcon className="h-6 w-6 mr-2" />
                          Aurangabad, Maharashtra
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Got questions about our tours? Want to customize your trip?
                We're here to help!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-teal rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <PhoneIcon className="h-6 w-6 text-holiday-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Phone
                </h3>
                <p className="text-gray-600 text-center">+91 8381069577</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-teal rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <EnvelopeIcon className="h-6 w-6 text-holiday-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Email
                </h3>
                <p className="text-gray-600 text-center">
                  bbhushan@a2z-solutions.in
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-teal rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <MapPinIcon className="h-6 w-6 text-holiday-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Location
                </h3>
                <p className="text-gray-600 text-center">
                  Aurangabad, Maharashtra
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-holiday-teal rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <ClockIcon className="h-6 w-6 text-holiday-teal" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  Business Hours
                </h3>
                <p className="text-gray-600 text-center">
                  Monday - Saturday: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ready to start your adventure?
              </h3>
              <a
                href="tel:+918381069577"
                className="inline-block py-3 px-8 bg-holiday-teal text-white rounded-lg text-lg font-medium hover:bg-holiday-tealDark transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
