// src/pages/Checkout.jsx
import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart, total } = useContext(CartContext);

  const handlePayment = () => {
    alert('Payment successful!');
  };

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-semibold text-center mb-10">Checkout</h1>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p>Quantity: {item.amount}</p>
              </div>
              <p>${item.price * item.amount}</p>
            </div>
          ))}
          <div className="border-t pt-4 mt-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Card Number</label>
            <input type="text" className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">Expiry Date</label>
            <input type="text" className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-900">CVV</label>
            <input type="text" className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md" />
          </div>
          <button onClick={handlePayment} className="bg-primary py-2 px-4 text-white rounded-md w-full">
            Complete Payment
          </button>
        </div>
      </div>
      <Link to="/" className="text-primary hover:underline">Continue Shopping</Link>
    </div>
  );
};

export default Checkout;
