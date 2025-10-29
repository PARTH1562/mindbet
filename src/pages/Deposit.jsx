import React, { useState } from 'react';

function Deposit() {
  const [formData, setFormData] = useState({
    amount: '',
    paymentMethod: '',
  });
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`Depositing ₹${formData.amount} via ${formData.paymentMethod}...`);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl max-w-lg mx-auto">
        <h1 className="text-4xl font-extrabold text-white text-center mb-4">
          Deposit Funds
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Choose your payment method and amount to add more than ₹200.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-300 mb-3"
            >
              Deposit Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              min="10"
              value={formData.amount}
              onChange={handleChange}
              placeholder="e.g. ₹200"
              className="shadow-sm appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-900 transition-colors duration-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="paymentMethod"
              className="block text-sm font-medium text-gray-300 mb-3"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="shadow-sm appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-900 transition-colors duration-300"
              required
            >
              <option value="" disabled>
                Select a method
              </option>
              <option value="credit-card">Credit Card</option>
              <option value="PhonePe">PhonePe</option>
              <option value="GPay">GPay</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-black font-bold py-3 rounded-xl hover:bg-teal-400 transition-colors duration-300"
          >
            Deposit Now
          </button>
        </form>
      </div>
      <div
        className={`fixed bottom-8 right-8 bg-green-600 text-white py-3 px-6 rounded-lg shadow-xl transition-all duration-300 transform ${
          showMessage
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0 hidden'
        }`}
      >
        {message}
      </div>
    </main>
  );
}

export default Deposit;
