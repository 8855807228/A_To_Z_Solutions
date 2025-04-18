import { Link } from 'react-router-dom';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const navigation = {
  services: [
    {
      name: 'Financial Planning',
      href: '/finance/services#financial-planning',
    },
    {
      name: 'Investment Advisory',
      href: '/finance/services#investment-advisory',
    },
    { name: 'Risk Management', href: '/finance/services#risk-management' },
    { name: 'Tax Planning', href: '/finance/services#tax-planning' },
    {
      name: 'Retirement Planning',
      href: '/finance/services#retirement-planning',
    },
  ],
  company: [
    { name: 'About Us', href: '/finance/about' },
    { name: 'Meet the Expert', href: '/finance/about#expert' },
    { name: 'Testimonials', href: '/finance/testimonials' },
    { name: 'Contact', href: '/finance/contact' },
  ],
  resources: [
    { name: 'Webinars', href: '/finance/webinars' },
    { name: 'Blog', href: '/finance/blog' },
    { name: 'FAQs', href: '/finance/faqs' },
    { name: 'Privacy Policy', href: '/finance/privacy-policy' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link to="/finance" className="text-2xl font-bold text-white">
              ArthaSaarthi
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Your Trusted Financial Partner - Plan Smart. Invest Wisely.
              Prosper Always!
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5 text-primary-light" />
                <a
                  href="tel:+918381069577"
                  className="text-sm text-gray-300 hover:text-white">
                  +91 8381069577
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5 text-primary-light" />
                <a
                  href="mailto:bbhushan.more@gmail.com"
                  className="text-sm text-gray-300 hover:text-white">
                  bbhushan.more@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Certifications
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="text-sm leading-6 text-gray-300">
                    AMFI Registered (ARN 261263)
                  </li>
                  <li className="text-sm leading-6 text-gray-300">
                    Certified Financial Planner
                  </li>
                  <li className="text-sm leading-6 text-gray-300">
                    NISM Certified
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} ArthaSaarthi Financial Services.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
