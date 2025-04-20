import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop',
      bio: 'With over 15 years of experience in the travel industry, John founded A to Z Solutions with a vision to create unforgettable travel experiences.',
    },
    {
      name: 'Jane Smith',
      role: 'Travel Experience Director',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop',
      bio: 'Jane ensures that every tour is crafted to perfection, combining adventure, culture, and comfort in perfect harmony.',
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Operations',
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250&auto=format&fit=crop',
      bio: 'Mike oversees all tour operations, ensuring smooth execution and maintaining our high standards of service.',
    },
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1000&auto=format&fit=crop"
            alt="Travel background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About A to Z Solutions
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Creating memorable travel experiences across India since 2010
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-8">
            A to Z Solutions was founded with a simple yet powerful mission: to
            help travelers discover the true essence of India through carefully
            curated and immersive travel experiences. What started as a small
            team of passionate travelers has grown into one of India's most
            trusted travel companies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Happy Travelers</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Unique Tours</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Destinations</div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md">
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
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Quality Service
            </h3>
            <p className="text-gray-600">
              We maintain the highest standards in every aspect of our tours,
              from accommodation to transportation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Safety First
            </h3>
            <p className="text-gray-600">
              Your safety is our top priority. We follow strict safety protocols
              and work with trusted partners.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
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
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Customer Satisfaction
            </h3>
            <p className="text-gray-600">
              We go above and beyond to ensure every traveler has an exceptional
              experience with us.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you create unforgettable memories across India
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Browse Our Tours
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
