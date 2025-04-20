import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import PageTransition from '../../../components/PageTransition';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const contactInfo = [
  {
    name: 'Office Address',
    description: 'Marathwada, Maharashtra',
    icon: MapPinIcon,
  },
  {
    name: 'Phone',
    description: '+91 8381069577',
    href: 'tel:+918381069577',
    icon: PhoneIcon,
  },
  {
    name: 'Email',
    description: 'bbhushan.more@gmail.com',
    href: 'mailto:bbhushan.more@gmail.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Working Hours',
    description: 'Monday to Saturday: 9:00 AM - 6:00 PM',
    icon: ClockIcon,
  },
];

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Here you would typically make an API call to send the message
        console.log('Form submitted:', values);
        toast.success(
          'Message sent successfully! We will get back to you soon.',
        );
        formik.resetForm();
      } catch (error) {
        toast.error('Failed to send message. Please try again.');
      }
    },
  });

  const handleGoogleFormRedirect = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScOKcdzBjLa_GcVOlix4Z1mKOW29SZn0pIUJTlgM__bFHEnAQ/viewform?pli=1',
      '_blank',
    );
  };

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
                Contact Us
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Get in Touch
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Have questions about our services? Want to start your financial
                planning journey? We're here to help. Reach out to us through
                any of the following channels, fill out the contact form below,
                or use our Google Form.
              </p>
            </motion.div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <form onSubmit={formik.handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold leading-6 text-gray-900">
                      Name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="name"
                        {...formik.getFieldProps('name')}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                      {formik.touched.name && formik.errors.name && (
                        <p className="mt-2 text-sm text-red-600">
                          {formik.errors.name}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900">
                      Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        id="email"
                        {...formik.getFieldProps('email')}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                      {formik.touched.email && formik.errors.email && (
                        <p className="mt-2 text-sm text-red-600">
                          {formik.errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold leading-6 text-gray-900">
                      Phone
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        id="phone"
                        {...formik.getFieldProps('phone')}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                      {formik.touched.phone && formik.errors.phone && (
                        <p className="mt-2 text-sm text-red-600">
                          {formik.errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold leading-6 text-gray-900">
                      Subject
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        id="subject"
                        {...formik.getFieldProps('subject')}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                      {formik.touched.subject && formik.errors.subject && (
                        <p className="mt-2 text-sm text-red-600">
                          {formik.errors.subject}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      rows={4}
                      {...formik.getFieldProps('message')}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                    {formik.touched.message && formik.errors.message && (
                      <p className="mt-2 text-sm text-red-600">
                        {formik.errors.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                    Send Message
                  </button>
                </div>
              </form>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-600 mb-4">
                  Alternatively, you can reach us through our Google Form:
                </p>
                <button
                  onClick={handleGoogleFormRedirect}
                  className="inline-flex items-center px-4 py-2 border border-primary text-sm font-medium rounded-md text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                  Open Google Form
                </button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="grid grid-cols-1 gap-8">
                <div className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Contact Information
                  </h3>
                  <dl className="mt-6 space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.name} className="flex gap-x-3">
                        <dt className="flex-none">
                          <item.icon
                            className="h-6 w-6 text-primary"
                            aria-hidden="true"
                          />
                        </dt>
                        <dd className="text-sm leading-6 text-gray-600">
                          <p className="font-medium text-gray-900">
                            {item.name}
                          </p>
                          {item.href ?
                            <a
                              href={item.href}
                              className="hover:text-primary transition-colors">
                              {item.description}
                            </a>
                          : item.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="rounded-2xl bg-primary/5 p-10">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    Why Contact Us?
                  </h3>
                  <ul
                    role="list"
                    className="mt-6 space-y-4 text-sm leading-6 text-gray-600">
                    <li>Get expert financial guidance</li>
                    <li>Schedule a free consultation</li>
                    <li>Learn about our services</li>
                    <li>Start your financial planning journey</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
