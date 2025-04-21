import React from 'react';
import { useNavigate } from 'react-router-dom';
import BBHolidaysLogo from '../assets/BB Holidays.png';
import ArthaSaarthiLogo from '../features/finance/assets/ArthaSaarthi.png';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
          A to Z Solutions
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 max-w-5xl mx-auto">
          <div
            onClick={() => navigate('/holidays')}
            className="p-6 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-300 rounded-xl bg-white flex flex-col items-center transform hover:-translate-y-1">
            <img
              src={BBHolidaysLogo}
              alt="BB Holidays"
              className="h-45 w-auto mb-6 object-contain"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-4 text-center">
              BB Holidays
            </h2>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Discover amazing holiday packages and tours.
            </p>
          </div>
          <div
            onClick={() => navigate('/finance')}
            className="p-6 sm:p-8 cursor-pointer hover:shadow-xl transition-all duration-300 rounded-xl bg-white flex flex-col items-center transform hover:-translate-y-1">
            <img
              src={ArthaSaarthiLogo}
              alt="ArthaSaarthi Financial Services"
              className="h-45 w-auto mb-6 object-contain"
            />
            <h2 className="text-xl sm:text-2xl font-semibold text-primary-600 mb-4 text-center">
              ArthaSaarthi Financial Services
            </h2>
            <p className="text-gray-600 text-sm sm:text-base text-center">
              Expert financial solutions and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
