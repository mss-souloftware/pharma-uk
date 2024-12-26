import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle form field change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulating form submission (Replace with real API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setFormStatus("success");
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Form validation function
  const validateForm = (data) => {
    const errors = {};
    if (!data.name) errors.name = "Name is required.";
    if (!data.email) errors.email = "Email is required.";
    if (!data.message) errors.message = "Message is required.";
    return errors;
  };

  return (
    <>
    <div className="max-w-full ml-0 left-0 py-12 ">
      <h2 className="text-3xl ml-0 text-start font-semibold text-hoverUnderlineColor dark:text-white mb-8">
      Can't find what you are looking for?
      </h2>
      {formStatus === "success" && (
        <div className="text-green-500 text-center mb-4">Your message has been sent successfully!</div>
      )}
      {formStatus === "error" && (
        <div className="text-red-500 text-center mb-4">Oops! Something went wrong. Please try again.</div>
      )}
      <form onSubmit={handleSubmit} className="p-8 pl-0 rounded-lg space-y-6">
        <div className="grid grid-cols-2 grid-rows-1 gap-20">

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoverUnderlineColor dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter your name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-hoverUnderlineColor dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter your email"
            />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
            </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-3 w-full h-32 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Enter your message"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-6 bg-hoverUnderlineColor text-white rounded-lg shadow-md focus:outline-none hover:bg-hoverUnderlineColor transition duration-300 ease-in-out ${
              isSubmitting ? "cursor-not-allowed opacity-50" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
            </>
  );
};

export default Contact;
