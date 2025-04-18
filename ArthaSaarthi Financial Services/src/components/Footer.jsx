const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ArthaSaarthi</h3>
            <p className="text-gray-400 mb-4">
              Your Trusted Financial Partner. Plan Smart. Invest Wisely. Prosper
              Always!
            </p>
            <div className="space-y-2">
              <p className="flex items-center">
                <span className="mr-2">📱</span>
                <a href="tel:+918381069577" className="hover:text-white">
                  +91 8381069577
                </a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">📧</span>
                <a
                  href="mailto:bbhushan.more@gmail.com"
                  className="hover:text-white">
                  bbhushan.more@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white">
                  Our Expertise
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Book Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Certifications
            </h4>
            <ul className="space-y-2 text-sm">
              <li>AMFI-Registered Mutual Fund Distributor (ARN 261263)</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} ArthaSaarthi Financial Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
