// src/pages/AboutUs.jsx
import React from 'react';
import { FaSmile, FaLightbulb, FaHandshake } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-semibold text-center mb-10">About Us</h1>
      <div className="text-center text-lg mb-10">
        <p>Welcome to our store! We are committed to providing you with the best products and customer service. Our team works hard to ensure your satisfaction and a seamless shopping experience.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaSmile className="text-primary text-4xl mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Customer Satisfaction</h2>
            <p>We prioritize customer satisfaction above all else. Your happiness is our success.</p>
          </div>
        </div>
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaLightbulb className="text-primary text-4xl mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Innovation</h2>
            <p>We bring innovative products to enhance your lifestyle and everyday experiences.</p>
          </div>
        </div>
        <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaHandshake className="text-primary text-4xl mb-4 mx-auto" />
            <h2 className="text-2xl font-semibold mb-2">Trust</h2>
            <p>Building trust with our customers through transparency and reliability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
