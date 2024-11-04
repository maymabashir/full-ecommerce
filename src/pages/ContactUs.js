// src/pages/ContactUs.jsx
import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-semibold text-center mb-10">Contact Us</h1>
      <div className="flex flex-wrap justify-center mb-10">
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaEnvelope className="text-primary text-4xl mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Email Us</h2>
            <p>contact@ourstore.com</p>
          </div>
        </div>
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaPhoneAlt className="text-primary text-4xl mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Call Us</h2>
            <p>+123 456 7890</p>
          </div>
        </div>
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaMapMarkerAlt className="text-primary text-4xl mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Visit Us</h2>
            <p>123 Main Street, Anytown, USA</p>
          </div>
        </div>
      </div>
      <form className="max-w-lg mx-auto">
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Name</label>
          <input type="text" className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <input type="email" className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md" />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-gray-900">Message</label>
          <textarea className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md"></textarea>
        </div>
        <button type="submit" className="bg-primary py-2 px-4 text-white rounded-md">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
