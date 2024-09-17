"use client";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // AOS kutubxonasini ishga tushiramiz
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi
    });
  }, []);

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

    toast.success("Message sent successfully! (Simulated)", {
      position: "top-right",
      autoClose: 3000,
    });

    setFormData({ name: "", email: "", message: "" });

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex items-center justify-center py-12 px-4">
      <div
        className="relative bg-white/20 backdrop-blur-lg shadow-xl rounded-3xl p-10 max-w-lg w-full border border-white/20"
        data-aos="fade-up"
      >
        <h1
          className="text-4xl font-extrabold text-center mb-6 text-white"
          data-aos="fade-right"
        >
          Contact Us
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div data-aos="fade-left">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-white tracking-wider mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div data-aos="fade-right">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-white tracking-wider mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 mt-1 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all"
              placeholder="you@example.com"
              required
            />
          </div>

          <div data-aos="fade-left">
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-white tracking-wider mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 mt-1 text-white bg-transparent border border-white/30 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>

          <div className="flex justify-center" data-aos="zoom-in">
            <button
              type="submit"
              className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 text-white font-bold py-3 rounded-lg shadow-lg transition-all transform hover:scale-105 ${
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

        {/* Yorqin gradient background */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-pink-500 rounded-lg blur-xl opacity-30"></div>
      </div>
    </div>
  );
};

export default Contact;
