import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Welcome to Our Services
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div
            onClick={() => navigate('/holidays')}
            className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary-600 mb-4">
              A to Z Solutions
            </h2>
            <p className="text-gray-600">
              Discover amazing holiday packages and tours.
            </p>
          </div>
          <div
            onClick={() => navigate('/finance')}
            className="card p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold text-primary-600 mb-4">
              ArthaSaarthi Financial Services
            </h2>
            <p className="text-gray-600">
              Expert financial solutions and services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
