import React, { useState } from "react";
import { Link } from "react-router-dom";

function Balance() {
  const [balance] = useState(1500);
  const [transactions] = useState([
    {
      id: 1,
      type: "Deposit",
      amount: 1000,
      date: "2025-01-15",
      status: "Completed",
    },
    {
      id: 2,
      type: "Bet Win",
      amount: 750,
      date: "2025-01-14",
      status: "Completed",
    },
    {
      id: 3,
      type: "Bet Placed",
      amount: -250,
      date: "2025-01-14",
      status: "Completed",
    },
    {
      id: 4,
      type: "Deposit",
      amount: 500,
      date: "2025-01-13",
      status: "Completed",
    },
    {
      id: 5,
      type: "Bet Win",
      amount: 300,
      date: "2025-01-12",
      status: "Completed",
    },
    {
      id: 6,
      type: "Bet Placed",
      amount: -150,
      date: "2025-01-12",
      status: "Completed",
    },
    {
      id: 7,
      type: "Deposit",
      amount: 1000,
      date: "2025-01-10",
      status: "Completed",
    },
    {
      id: 8,
      type: "Bet Placed",
      amount: -650,
      date: "2025-01-10",
      status: "Completed",
    },
  ]);

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10">
        My Account Balance
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-teal-100 text-lg mb-2">Available Balance</p>
              <p className="text-5xl font-extrabold text-white">
                ₹{balance.toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <Link
                to="/deposit"
                className="bg-white text-teal-600 font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 inline-block mb-2"
              >
                + Deposit
              </Link>
              <p className="text-teal-100 text-sm">Add more funds</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Total Deposited</p>
            <p className="text-2xl font-bold text-white">₹2,500</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Total Winnings</p>
            <p className="text-2xl font-bold text-green-400">₹1,050</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 text-center">
            <p className="text-gray-400 text-sm mb-2">Total Bets</p>
            <p className="text-2xl font-bold text-white">₹1,050</p>
          </div>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
            Transaction History
          </h2>
          <div className="space-y-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="bg-gray-700 rounded-lg p-4 flex justify-between items-center hover:bg-gray-650 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      transaction.amount > 0
                        ? "bg-green-600 bg-opacity-20"
                        : "bg-red-600 bg-opacity-20"
                    }`}
                  >
                    <span
                      className={`text-xl font-bold ${
                        transaction.amount > 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {transaction.amount > 0 ? "+" : "-"}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">
                      {transaction.type}
                    </p>
                    <p className="text-gray-400 text-sm">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`text-xl font-bold ${
                      transaction.amount > 0 ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}₹
                    {Math.abs(transaction.amount)}
                  </p>
                  <p className="text-gray-400 text-sm">{transaction.status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/deposit"
            className="flex-1 bg-teal-500 text-black font-bold py-4 px-6 rounded-xl text-center hover:bg-teal-400 transition-colors duration-300"
          >
            Deposit Funds
          </Link>
          <Link
            to="/livebetting"
            className="flex-1 bg-gray-700 text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300"
          >
            Start Betting
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Balance;
