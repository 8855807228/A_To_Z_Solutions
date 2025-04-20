import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const defaultWebinarData = {
  title: "I've Helped 1,000+ People Start SIPs - Now It's Your Turn",
  subtitle:
    "Understand How SIPs in Mutual Funds Work and Why Most People Don't Use Them Right",
  dates: [{ date: '', time: '', language: 'Marathi' }],
  duration: '2 Hours',
  price: '₹500',
  seats: 60,
};

export default function WebinarAdmin() {
  const [webinarData, setWebinarData] = useState(defaultWebinarData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWebinarData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (index, field, value) => {
    setWebinarData((prev) => {
      const newDates = [...prev.dates];
      newDates[index] = {
        ...newDates[index],
        [field]: value,
      };
      return {
        ...prev,
        dates: newDates,
      };
    });
  };

  const addNewDate = () => {
    setWebinarData((prev) => ({
      ...prev,
      dates: [...prev.dates, { date: '', time: '', language: 'Marathi' }],
    }));
  };

  const removeDate = (index) => {
    setWebinarData((prev) => ({
      ...prev,
      dates: prev.dates.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically save the data to your backend
      // For now, we'll just show a success message
      toast.success('Webinar details updated successfully!');
      console.log('Updated webinar data:', webinarData);
    } catch (error) {
      toast.error('Failed to update webinar details');
      console.error('Error updating webinar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Webinar Administration
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Update webinar details and schedule
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-8">
              {/* Basic Details */}
              <div className="bg-white shadow sm:rounded-lg p-6 space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  Basic Details
                </h2>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={webinarData.title}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subtitle"
                      className="block text-sm font-medium text-gray-700">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      name="subtitle"
                      id="subtitle"
                      value={webinarData.subtitle}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-medium text-gray-700">
                        Price
                      </label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        value={webinarData.price}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="seats"
                        className="block text-sm font-medium text-gray-700">
                        Available Seats
                      </label>
                      <input
                        type="number"
                        name="seats"
                        id="seats"
                        value={webinarData.seats}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Session Dates */}
              <div className="bg-white shadow sm:rounded-lg p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Session Dates
                  </h2>
                  <button
                    type="button"
                    onClick={addNewDate}
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                    Add Session
                  </button>
                </div>

                <div className="space-y-4">
                  {webinarData.dates.map((session, index) => (
                    <div
                      key={index}
                      className="flex gap-4 items-start p-4 border rounded-lg">
                      <div className="flex-1 grid grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Date
                          </label>
                          <input
                            type="date"
                            value={session.date}
                            onChange={(e) =>
                              handleDateChange(index, 'date', e.target.value)
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Time
                          </label>
                          <input
                            type="time"
                            value={session.time}
                            onChange={(e) =>
                              handleDateChange(index, 'time', e.target.value)
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Language
                          </label>
                          <select
                            value={session.language}
                            onChange={(e) =>
                              handleDateChange(
                                index,
                                'language',
                                e.target.value,
                              )
                            }
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm">
                            <option value="Marathi">Marathi</option>
                            <option value="English">English</option>
                            <option value="Hindi">Hindi</option>
                          </select>
                        </div>
                      </div>
                      {webinarData.dates.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeDate(index)}
                          className="mt-6 text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
