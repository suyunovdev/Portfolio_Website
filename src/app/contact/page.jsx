"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      toast.error("Please fill in all the fields.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 3000,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    // Instead of sending the data to Telegram API, just show a success message
    toast.success("Message sent successfully! (Simulated)", {
      position: "top-right",
      autoClose: 3000,
    });

    // Reset the form
    setFormData({ name: "", email: "", message: "" });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center py-12 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 focus:ring-2 focus:ring-blue-500 transition-all"
              rows="4"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all transform ${
                isSubmitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:scale-105"
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
