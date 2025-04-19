import { useState } from 'react';
import toast from 'react-hot-toast';

export function useContactForm(initialValues = {}) {
  const [formData, setFormData] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e, onSuccess) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Call success callback if provided
      if (onSuccess) {
        onSuccess(formData);
      }

      // Reset form
      setFormData(initialValues);
      toast.success(
        "Message sent successfully! We'll get back to you shortly.",
      );
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFormData,
  };
}
