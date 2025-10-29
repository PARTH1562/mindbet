import React, { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleBetNow = (matchType, teamA, teamB) => {
    setMessage(`Bet placed on ${matchType}: ${teamA} vs ${teamB}`);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const featuredMatches = [
    {
      id: 1,
      type: "Test Match",
      date: "Oct 2, 2025",
      teamA: "India",
      teamB: "West Indies",
      oddsA: "1.50",
      oddsB: "2.00",
    },
    {
      id: 2,
      type: "ODI",
      date: "Oct 19, 2025",
      teamA: "India",
      teamB: "Australia",
      oddsA: "1.75",
      oddsB: "2.25",
    },
    {
      id: 3,
      type: "IPL",
      date: "March 20, 2026",
      teamA: "MI",
      teamB: "CSK",
      oddsA: "1.50",
      oddsB: "2.00",
    },
  ];

  const features = [
    {
      title: "Live Odds",
      description: "Real-time odds that update instantly.",
    },
    {
      title: "Secure",
      description: "Your security is our top priority.",
    },
    {
      title: "24/7 Support",
      description: "We are always here for you.",
    },
  ];

  return (
    <main className="py-12 flex-grow">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="bg-gray-800 p-8 md:p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Apka Mind Apki Bet
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's experience with us the smartest way to bet on sports with live
            oddds and exclusive offers.
          </p>
          <Link to="/signup">
            <button className="bg-teal-500 text-black font-bold py-3 px-10 rounded-full text-lg shadow-xl hover:bg-teal-400 transition-colors duration-300">
              Join MindBet Now
            </button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Featured Matches
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredMatches.map((match) => (
            <div
              key={match.id}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{match.type}</h3>
                <p className="text-gray-400 text-sm">{match.date}</p>
              </div>
              <div className="flex items-center justify-between w-full my-4">
                <div className="flex-1 text-center">
                  <span className="text-lg font-bold">{match.teamA}</span>
                  <p className="text-sm text-gray-400">{match.oddsA}</p>
                </div>
                <span className="text-gray-500 text-lg mx-4">vs</span>
                <div className="flex-1 text-center">
                  <span className="text-lg font-bold">{match.teamB}</span>
                  <p className="text-sm text-gray-400">{match.oddsB}</p>
                </div>
              </div>
              <button
                onClick={() =>
                  handleBetNow(match.type, match.teamA, match.teamB)
                }
                className="bg-teal-500 text-black font-semibold py-2 px-6 rounded-full w-full hover:bg-teal-400 transition-colors duration-300"
              >
                Bet Now
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Always Choose MindBet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-2xl shadow-lg transform hover:translate-y-2 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div
        className={`fixed bottom-8 right-8 bg-green-600 text-white py-3 px-6 rounded-lg shadow-xl transition-all duration-300 transform ${
          showMessage
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 hidden"
        }`}
      >
        {message}
      </div>
    </main>
  );
}

export default Home;
