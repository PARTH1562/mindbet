import React from 'react';

function Sports() {
  const sports = [
    {
      name: 'Cricket',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mb-4 text-teal-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zM12 4a8 8 0 00-6.17 13.11l1.5-1.5a6 6 0 014.67-9.61zM12 12a4 4 0 11-4-4 4 4 0 014 4z" />
        </svg>
      ),
    },
    {
      name: 'Football',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mb-4 text-teal-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zM12 4a8 8 0 00-6.17 13.11l1.5-1.5a6 6 0 014.67-9.61zM16 12a4 4 0 11-4-4 4 4 0 014 4z" />
        </svg>
      ),
    },
    {
      name: 'Basketball',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mb-4 text-teal-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zM12 4a8 8 0 00-6.17 13.11l1.5-1.5a6 6 0 014.67-9.61zM12 12a4 4 0 11-4-4 4 4 0 014 4z" />
        </svg>
      ),
    },
    {
      name: 'Tennis',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mb-4 text-teal-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zM12 4a8 8 0 00-6.17 13.11l1.5-1.5a6 6 0 014.67-9.61zM12 12a4 4 0 11-4-4 4 4 0 014 4z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10">
        Find Sports
      </h1>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        Find your favorite sport and Let's place a bet
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sports.map((sport, index) => (
          <a
            key={index}
            href="#"
            className="bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 transform-gpu hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          >
            {sport.icon}
            <h3 className="text-xl font-bold text-white">{sport.name}</h3>
          </a>
        ))}
      </div>
    </main>
  );
}

export default Sports;
