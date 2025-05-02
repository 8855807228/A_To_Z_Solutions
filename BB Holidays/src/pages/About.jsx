import React from 'react';
import PageTransition from '../components/PageTransition';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <PageTransition>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white py-16 sm:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop"
              alt="Travel background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              About BB Holidays
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              A trusted Destination Management Company since 2017
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Our Story Section */}
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Story
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              BB Holidays is a trusted Destination Management and travel Company
              based in Aurangabad, Maharashtra. It specializes in customized
              domestic and international travel.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Since our founding in 2017, we've helped thousands of travelers
              explore India and the world on their terms — with the right
              budget, perfect planning, and a personal touch.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              We proudly serve both B2B and B2C clients, driven by a deep
              passion for travel and a customer-first approach.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              Our experienced professionals constantly innovate to deliver
              curated travel solutions, whether it's a spiritual journey, exotic
              escape, corporate trip, or quick weekend getaway.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8">
              All you need to do is share your destination, travel dates, and
              budget — and BB Holidays will craft a personalized experience
              you'll never forget!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  1000+
                </div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Unique Tours</div>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-md">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  15+
                </div>
                <div className="text-gray-600">Destinations</div>
              </div>
            </div>
          </div>

          {/* Mission Section */}
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
              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
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

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
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

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
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

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
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

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Professional Excellence
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Practicing ethical, efficient, and transparent management.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  Digital Engagement
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Enhancing traveler convenience through smart tech solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
              Our Leadership
            </h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250&auto=format&fit=crop"
                  alt="Mr. Buddhabhushan More"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
                    Mr. Buddhabhushan More
                  </h3>
                  <p className="text-blue-600 mb-3 sm:mb-4">
                    Founder & Managing Director (MD)
                  </p>
                  <div className="flex flex-col space-y-2">
                    <p className="text-sm sm:text-base text-gray-600 flex items-center">
                      <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-600" />
                      bbhushan@a2z-solutions.in
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 flex items-center">
                      <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
                      +91 83810 69577
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8">
              Let us help you create unforgettable memories across India and
              beyond
            </p>
            <a
              href="/holidays/contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold hover:bg-blue-50 transition-colors duration-200">
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
