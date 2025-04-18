import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CalendarIcon,
  ClockIcon,
  VideoCameraIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const consultationFeatures = [
  'One-on-one session with a Certified Financial Planner',
  'Comprehensive financial health check',
  'Personalized action plan',
  'Investment strategy discussion',
  'Risk assessment and management',
  'Goal-based planning insights',
  'Tax planning recommendations',
];

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
    .required('Phone number is required'),
  preferredDate: Yup.date().required('Preferred date is required'),
  preferredTime: Yup.string().required('Preferred time is required'),
  consultationType: Yup.string().required('Consultation type is required'),
  message: Yup.string(),
});

const timeSlots = [
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
  '5:00 PM',
];

export default function BookConsultation() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      preferredDate: null,
      preferredTime: '',
      consultationType: 'video',
      message: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Here you would typically make an API call to schedule the consultation
        console.log('Form submitted:', values);
        toast.success(
          'Consultation scheduled successfully! Check your email for details.',
        );
        formik.resetForm();
      } catch (error) {
        toast.error('Failed to schedule consultation. Please try again.');
      }
    },
  });

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-base font-semibold leading-7 text-primary">
              Book a Consultation
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Start Your Financial Journey Today
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Schedule a one-on-one consultation with our financial expert to
              discuss your financial goals and create a personalized plan for
              your success.
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
                    htmlFor="preferredDate"
                    className="block text-sm font-semibold leading-6 text-gray-900">
                    Preferred Date
                  </label>
                  <div className="mt-2.5">
                    <DatePicker
                      id="preferredDate"
                      selected={formik.values.preferredDate}
                      onChange={(date) =>
                        formik.setFieldValue('preferredDate', date)
                      }
                      minDate={new Date()}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                    />
                    {formik.touched.preferredDate &&
                      formik.errors.preferredDate && (
                        <p className="mt-2 text-sm text-red-600">
                          {formik.errors.preferredDate}
                        </p>
                      )}
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="preferredTime"
                  className="block text-sm font-semibold leading-6 text-gray-900">
                  Preferred Time
                </label>
                <div className="mt-2.5">
                  <select
                    id="preferredTime"
                    {...formik.getFieldProps('preferredTime')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {formik.touched.preferredTime &&
                    formik.errors.preferredTime && (
                      <p className="mt-2 text-sm text-red-600">
                        {formik.errors.preferredTime}
                      </p>
                    )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="consultationType"
                  className="block text-sm font-semibold leading-6 text-gray-900">
                  Consultation Type
                </label>
                <div className="mt-2.5">
                  <select
                    id="consultationType"
                    {...formik.getFieldProps('consultationType')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6">
                    <option value="video">Video Call</option>
                    <option value="phone">Phone Call</option>
                    <option value="inPerson">In-Person Meeting</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-gray-900">
                  Additional Notes (Optional)
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    rows={4}
                    {...formik.getFieldProps('message')}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Schedule Consultation
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <div className="grid grid-cols-1 gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  What to Expect
                </h3>
                <ul role="list" className="mt-8 space-y-4">
                  {consultationFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="mt-1 h-5 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-6 text-gray-600">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-primary/5 p-10">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                  Consultation Details
                </h3>
                <dl className="mt-6 space-y-4">
                  <div className="flex gap-x-3">
                    <dt className="flex-none">
                      <ClockIcon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-600">
                      <span className="font-medium text-gray-900">
                        Duration:
                      </span>{' '}
                      90 minutes
                    </dd>
                  </div>
                  <div className="flex gap-x-3">
                    <dt className="flex-none">
                      <VideoCameraIcon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-600">
                      <span className="font-medium text-gray-900">
                        Available Modes:
                      </span>{' '}
                      Video Call, Phone Call, or In-Person Meeting
                    </dd>
                  </div>
                  <div className="flex gap-x-3">
                    <dt className="flex-none">
                      <CalendarIcon
                        className="h-6 w-6 text-primary"
                        aria-hidden="true"
                      />
                    </dt>
                    <dd className="text-sm leading-6 text-gray-600">
                      <span className="font-medium text-gray-900">
                        Availability:
                      </span>{' '}
                      Monday to Saturday, 10 AM to 6 PM
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
