import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { useWebinarContext } from '../context/WebinarContext';
import PageTransition from '../../../components/PageTransition';

export default function WebinarAdmin() {
  const { webinarData: contextData, updateWebinarData } = useWebinarContext();
  const [webinarData, setWebinarData] = useState(contextData);
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

  const handleArrayChange = (section, index, value) => {
    setWebinarData((prev) => {
      const newArray = [...prev[section]];
      newArray[index] = value;
      return {
        ...prev,
        [section]: newArray,
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

  const addArrayItem = (section) => {
    setWebinarData((prev) => ({
      ...prev,
      [section]: [...prev[section], ''],
    }));
  };

  const removeArrayItem = (section, index) => {
    setWebinarData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      updateWebinarData(webinarData);
      console.log(webinarData);
      toast.success('Webinar details updated successfully!');
    } catch (error) {
      toast.error('Failed to update webinar details');
      console.error('Error updating webinar:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSaveChanges = () => {
    return (
      <>
        <alert> Details CHanged</alert>
      </>
    );
  };

  return (
    <PageTransition>
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

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700">
                        Description
                      </label>
                      <textarea
                        name="description"
                        id="description"
                        rows={6}
                        value={webinarData.description}
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

                {/* Topics */}
                <div className="bg-white shadow sm:rounded-lg p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">
                      What You'll Learn
                    </h2>
                    <button
                      type="button"
                      onClick={() => addArrayItem('topics')}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Add Topic
                    </button>
                  </div>

                  <div className="space-y-4">
                    {webinarData.topics.map((topic, index) => (
                      <div key={index} className="flex gap-4">
                        <input
                          type="text"
                          value={topic}
                          onChange={(e) =>
                            handleArrayChange('topics', index, e.target.value)
                          }
                          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('topics', index)}
                          className="text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Audience */}
                <div className="bg-white shadow sm:rounded-lg p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Who Should Attend
                    </h2>
                    <button
                      type="button"
                      onClick={() => addArrayItem('targetAudience')}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Add Target Audience
                    </button>
                  </div>

                  <div className="space-y-4">
                    {webinarData.targetAudience.map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <input
                          type="text"
                          value={item}
                          onChange={(e) =>
                            handleArrayChange(
                              'targetAudience',
                              index,
                              e.target.value,
                            )
                          }
                          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            removeArrayItem('targetAudience', index)
                          }
                          className="text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white shadow sm:rounded-lg p-6 space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-900">
                      Webinar Features
                    </h2>
                    <button
                      type="button"
                      onClick={() => addArrayItem('features')}
                      className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                      Add Feature
                    </button>
                  </div>

                  <div className="space-y-4">
                    {webinarData.features.map((feature, index) => (
                      <div key={index} className="flex gap-4">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) =>
                            handleArrayChange('features', index, e.target.value)
                          }
                          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('features', index)}
                          className="text-red-600 hover:text-red-800">
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Host Information */}
                <div className="bg-white shadow sm:rounded-lg p-6 space-y-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Host Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Host Name
                      </label>
                      <input
                        type="text"
                        value={webinarData.hostInfo.name}
                        onChange={(e) =>
                          setWebinarData((prev) => ({
                            ...prev,
                            hostInfo: {
                              ...prev.hostInfo,
                              name: e.target.value,
                            },
                          }))
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Host Title
                      </label>
                      <input
                        type="text"
                        value={webinarData.hostInfo.title}
                        onChange={(e) =>
                          setWebinarData((prev) => ({
                            ...prev,
                            hostInfo: {
                              ...prev.hostInfo,
                              title: e.target.value,
                            },
                          }))
                        }
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Host Description
                      </label>
                      <textarea
                        value={webinarData.hostInfo.description}
                        onChange={(e) =>
                          setWebinarData((prev) => ({
                            ...prev,
                            hostInfo: {
                              ...prev.hostInfo,
                              description: e.target.value,
                            },
                          }))
                        }
                        rows={4}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6 space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-gray-900">
                          Certifications
                        </h3>
                        <button
                          type="button"
                          onClick={() =>
                            setWebinarData((prev) => ({
                              ...prev,
                              hostInfo: {
                                ...prev.hostInfo,
                                certifications: [
                                  ...prev.hostInfo.certifications,
                                  '',
                                ],
                              },
                            }))
                          }
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                          Add Certification
                        </button>
                      </div>
                      <div className="space-y-4">
                        {webinarData.hostInfo.certifications.map(
                          (cert, index) => (
                            <div key={index} className="flex gap-4">
                              <input
                                type="text"
                                value={cert}
                                onChange={(e) =>
                                  setWebinarData((prev) => {
                                    const newCerts = [
                                      ...prev.hostInfo.certifications,
                                    ];
                                    newCerts[index] = e.target.value;
                                    return {
                                      ...prev,
                                      hostInfo: {
                                        ...prev.hostInfo,
                                        certifications: newCerts,
                                      },
                                    };
                                  })
                                }
                                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setWebinarData((prev) => ({
                                    ...prev,
                                    hostInfo: {
                                      ...prev.hostInfo,
                                      certifications:
                                        prev.hostInfo.certifications.filter(
                                          (_, i) => i !== index,
                                        ),
                                    },
                                  }))
                                }
                                className="text-red-600 hover:text-red-800">
                                Remove
                              </button>
                            </div>
                          ),
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-semibold text-gray-900">
                          Affiliations
                        </h3>
                        <button
                          type="button"
                          onClick={() =>
                            setWebinarData((prev) => ({
                              ...prev,
                              hostInfo: {
                                ...prev.hostInfo,
                                affiliations: [
                                  ...prev.hostInfo.affiliations,
                                  '',
                                ],
                              },
                            }))
                          }
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                          Add Affiliation
                        </button>
                      </div>
                      <div className="space-y-4">
                        {webinarData.hostInfo.affiliations.map(
                          (affiliation, index) => (
                            <div key={index} className="flex gap-4">
                              <input
                                type="text"
                                value={affiliation}
                                onChange={(e) =>
                                  setWebinarData((prev) => {
                                    const newAffiliations = [
                                      ...prev.hostInfo.affiliations,
                                    ];
                                    newAffiliations[index] = e.target.value;
                                    return {
                                      ...prev,
                                      hostInfo: {
                                        ...prev.hostInfo,
                                        affiliations: newAffiliations,
                                      },
                                    };
                                  })
                                }
                                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  setWebinarData((prev) => ({
                                    ...prev,
                                    hostInfo: {
                                      ...prev.hostInfo,
                                      affiliations:
                                        prev.hostInfo.affiliations.filter(
                                          (_, i) => i !== index,
                                        ),
                                    },
                                  }))
                                }
                                className="text-red-600 hover:text-red-800">
                                Remove
                              </button>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onClick={() => onSaveChanges}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
