import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import BBHolidaysLogo from '../assets/BB Holidays.png';
import ArthaSaarthiLogo from '../assets/ArthaSaarthi.png';

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-4xl font-bold text-center text-gray-900 mb-12"
          data-aos="fade-down"
          data-aos-delay="100">
          Welcome to Our Services
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            onClick={() => navigate('/holidays/tours')}
            className="card p-6 cursor-pointer hover:shadow-lg transition-shadow"
            data-aos="fade-right"
            data-aos-delay="200">
            <div className="flex items-center justify-center mb-4">
              <img
                src={BBHolidaysLogo}
                alt="BB Holidays"
                className="h-20 w-auto object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              BB Holidays
            </h2>
            <p className="text-gray-600">
              Discover amazing holiday packages and tours.
            </p>
          </div>

          <Link
            to="/finance"
            className="card p-6 cursor-pointer hover:shadow-lg transition-shadow"
            data-aos="fade-left"
            data-aos-delay="300">
            <div className="flex items-center justify-center mb-4">
              <img
                src={ArthaSaarthiLogo}
                alt="ArthaSaarthi"
                className="h-20 w-auto object-contain"
              />
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              ArthaSaarthi Financial Services
            </h2>
            <p className="text-gray-600">
              Expert financial solutions and services.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};
