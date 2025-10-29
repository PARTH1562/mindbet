import React, { useState } from 'react';

function LiveBetting() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const matches = [
    {
      id: 1,
      teamA: 'India',
      teamB: 'England',
      sport: 'Cricket',
      scoreA: 1,
      scoreB: 0,
      time: '2nd Inning- Tomorrow',
      oddsA: 1.85,
      oddsB: 2.1,
      oddsDraw: 15.0,
    },
    {
      id: 2,
      teamA: 'West Indies',
      teamB: 'Srilanka',
      sport: 'Cricket',
      scoreA: 0,
      scoreB: 1,
      time: '2nd Inning- Tomorrow',
      oddsA: 2.5,
      oddsB: 2.8,
      oddsDraw: 3.1,
    },
    {
      id: 3,
      teamA: 'India',
      teamB: 'Australia',
      sport: 'Cricket',
      scoreA: 0,
      scoreB: 0,
      time: ' Toss , 3:00 PM',
      oddsA: 1.65,
      oddsB: 2.3,
      oddsDraw: null,
    },
    {
      id: 4,
      teamA: 'India',
      teamB: 'Australia',
      sport: 'Cricket',
      scoreA: 245,
      scoreB: 246,
      time: '30.2 Overs',
      oddsA: 1.2,
      oddsB: 4.5,
      oddsDraw: null,
    },
  ];

  const handleBetClick = (bet, odds) => {
    setMessage(`Bet placed on ${bet} with odds of ${odds}!`);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10">
        Live Betting
      </h1>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto"></p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <div
            key={match.id}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform duration-300 transform-gpu"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold uppercase text-teal-400 bg-teal-800 bg-opacity-30 px-3 py-1 rounded-full">
                Live
              </span>
              <span className="text-xs font-medium text-gray-400">
                {match.sport}
              </span>
            </div>
            <div className="text-center mb-6">
              <div className="flex justify-center items-center space-x-4">
                <div className="flex-grow text-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    {match.teamA}
                  </h3>
                </div>
                <span className="text-2xl md:text-3xl font-extrabold text-teal-500">
                  {match.scoreA}
                </span>
                <span className="text-xl md:text-2xl text-gray-500 font-bold mx-2">
                  -
                </span>
                <span className="text-2xl md:text-3xl font-extrabold text-teal-500">
                  {match.scoreB}
                </span>
                <div className="flex-grow text-center">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                    {match.teamB}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">{match.time}</p>
            </div>
            <div className="flex justify-between items-center space-x-4">
              <button
                onClick={() => handleBetClick(match.teamA, match.oddsA)}
                className="w-1/3 bg-gray-700 text-gray-200 font-bold py-3 px-2 rounded-xl text-center transition-transform duration-200 hover:bg-teal-500 hover:text-black"
              >
                <span className="block text-xs font-light">Win</span>
                <span className="block text-lg mt-1">{match.oddsA}</span>
              </button>
              {match.oddsDraw ? (
                <button
                  onClick={() => handleBetClick('draw', match.oddsDraw)}
                  className="w-1/3 bg-gray-700 text-gray-200 font-bold py-3 px-2 rounded-xl text-center transition-transform duration-200 hover:bg-teal-500 hover:text-black"
                >
                  <span className="block text-xs font-light">Draw</span>
                  <span className="block text-lg mt-1">{match.oddsDraw}</span>
                </button>
              ) : (
                <div className="w-1/3 text-center"></div>
              )}
              <button
                onClick={() => handleBetClick(match.teamB, match.oddsB)}
                className="w-1/3 bg-gray-700 text-gray-200 font-bold py-3 px-2 rounded-xl text-center transition-transform duration-200 hover:bg-teal-500 hover:text-black"
              >
                <span className="block text-xs font-light">Win</span>
                <span className="block text-lg mt-1">{match.oddsB}</span>
              </button>
            </div>
          </div>
        ))}
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

export default LiveBetting;
