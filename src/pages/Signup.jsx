import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup attempt:", formData);
    // Redirect to home page after signup
    navigate("/");
  };

  return (
    <main className="flex-grow flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-white text-center mb-6">
          Create Your MindBet Account
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Join the smartest way to bet on sports.
        </p>

        <form onSubmit={handleSubmit}>
          {/* Username Input */}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="shadow-sm appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-900 transition-colors duration-300"
              placeholder="Choose a username"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow-sm appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-900 transition-colors duration-300"
              placeholder="yourname@example.com"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-300 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="shadow-sm appearance-none border border-gray-700 rounded-lg w-full py-3 px-4 text-gray-200 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-900 transition-colors duration-300"
              placeholder="******************"
              required
            />
          </div>

          {/* Sign Up Button */}
          <div className="flex items-center justify-between mb-6">
            <button
              type="submit"
              className="w-full bg-teal-500 text-black font-bold py-3 px-4 rounded-full text-lg text-center hover:bg-teal-400 transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center">
            <Link
              to="/login"
              className="inline-block align-baseline font-bold text-sm text-teal-400 hover:text-teal-300 transition-colors duration-300 mr-4"
            >
              Already have an account? Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Signup;
