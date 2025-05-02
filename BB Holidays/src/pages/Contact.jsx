import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  UserIcon,
  GlobeAltIcon,
  CalendarIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [quoteData, setQuoteData] = useState({
    fullName: '',
    location: '',
    email: '',
    tourDescription: '',
    mobileNumber: '',
    duration: '',
    persons: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isQuoteSubmitting, setIsQuoteSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    setQuoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Form submitted:', formData);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      alert('Thank you for your message. We will get back to you shortly.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setIsQuoteSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Quote request submitted:', quoteData);

      // Reset form
      setQuoteData({
        fullName: '',
        location: '',
        email: '',
        tourDescription: '',
        mobileNumber: '',
        duration: '',
        persons: '',
      });

      alert(
        'Thank you for your quote request. Our travel experts will be in touch with a personalized quote soon.',
      );
    } catch (error) {
      console.error('Error submitting quote request:', error);
      alert(
        'There was an error submitting your quote request. Please try again.',
      );
    } finally {
      setIsQuoteSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-blue-600 text-white py-16 sm:py-24">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1000&auto=format&fit=crop"
              alt="Contact background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              Got questions about our tours? Want to customize your trip? We're
              here to help!
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <PhoneIcon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Phone
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                    +91 8381069577
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Email
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                    bbhushan@a2z-solutions.in
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPinIcon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Office Location
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                    Aurangabad, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <ClockIcon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Business Hours
                  </h3>
                  <p className="text-base sm:text-lg text-gray-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    required
                    disabled={isSubmitting}></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Request a Quote Section */}
          <div className="mt-16 sm:mt-24">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 md:p-12">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Request a Quote
                </h2>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                  Planning your next adventure? Let us help you design the
                  perfect itinerary—tailored to your preferences and budget.
                </p>
                <div className="mt-4 inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-medium">
                  "One Line Tour Price – Always All Inclusive. No Confusion. No
                  Hidden Costs."
                </div>
              </div>

              <form onSubmit={handleQuoteSubmit} className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <UserIcon className="h-5 w-5 mr-2 text-blue-600" />
                      <span>Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={quoteData.fullName}
                      onChange={handleQuoteChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isQuoteSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <GlobeAltIcon className="h-5 w-5 mr-2 text-blue-600" />
                      <span>Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={quoteData.location}
                      onChange={handleQuoteChange}
                      placeholder="E.g., India, USA, Australia"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isQuoteSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-600" />
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={quoteData.email}
                      onChange={handleQuoteChange}
                      placeholder="We'll use this to send your custom itinerary"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isQuoteSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <PhoneIcon className="h-5 w-5 mr-2 text-blue-600" />
                      <span>Mobile Number</span>
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={quoteData.mobileNumber}
                      onChange={handleQuoteChange}
                      placeholder="So we can reach you quickly for follow-up"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isQuoteSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <CalendarIcon className="h-5 w-5 mr-2 text-blue-600" />
                      <span>Duration in Days</span>
                    </label>
                    <input
                      type="number"
                      name="duration"
                      value={quoteData.duration}
                      onChange={handleQuoteChange}
                      placeholder="How long do you plan to travel?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isQuoteSubmitting}
                      min="1"
                      max="365"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="flex items-center text-gray-700">
                      <UsersIcon className="h-5 w-5 mr-2 text-blue-600" />
                      <span>Number of Persons</span>
                    </label>
                    <input
                      type="number"
                      name="persons"
                      value={quoteData.persons}
                      onChange={handleQuoteChange}
                      placeholder="Solo, couple, family, or group?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isQuoteSubmitting}
                      min="1"
                      max="100"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="flex items-center text-gray-700">
                      <ChatBubbleLeftRightIcon className="h-5 w-5 mr-2 text-blue-600" />
                      <span>Tour Description</span>
                    </label>
                    <textarea
                      name="tourDescription"
                      value={quoteData.tourDescription}
                      onChange={handleQuoteChange}
                      rows="5"
                      placeholder="Tell us where you want to go, the kind of experience you're looking for, or any preferences"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                      required
                      disabled={isQuoteSubmitting}></textarea>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <button
                    type="submit"
                    disabled={isQuoteSubmitting}
                    className="inline-block py-3 px-8 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-400">
                    {isQuoteSubmitting ?
                      'Submitting Request...'
                    : 'Submit Quote Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
