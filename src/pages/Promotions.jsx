import React, { useState } from 'react';

function Promotions() {
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const promotions = [
    {
      id: 1,
      title: 'Bonus offer',
      description: 'Get a 50% deposit bonus on your first deposit up to ₹200.',
      code: 'MindBet200',
      type: 'promo',
    },
    {
      id: 2,
      title: 'Free Bet',
      description: 'You will get a free bet of up to ₹50',
      conditions: [
        'You win three matches in a row',
        'You win three tosses in a row',
      ],
      type: 'reward',
    },
    {
      id: 3,
      title: 'Refer a Friend',
      description: 'Invite a friend to this app and get a ₹50 free bonus money',
      referralLink: 'MindBet.com/r/user_id_12345',
      type: 'referral',
    },
  ];

  const showMessageBox = (msg, isSuccess = true) => {
    setMessage(msg);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        showMessageBox('Copied to clipboard!');
      })
      .catch(() => {
        showMessageBox('Failed to copy. Please copy manually.', false);
      });
  };

  const handleClaimClick = (promoName) => {
    showMessageBox(`You've claimed the ${promoName}!`);
  };

  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h1 className="text-4xl font-extrabold text-white text-center mb-10">
        My offers
      </h1>
      <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
        Here are our exclusive offers and bonuses
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promotions.map((promo) => (
          <div
            key={promo.id}
            className="bg-gray-800 border-2 border-gray-700 rounded-2xl p-8 shadow-2xl transition-transform duration-300 transform-gpu hover:translate-y-[-5px] hover:shadow-[0_10px_25px_rgba(0,0,0,0.5),0_0_0_4px_rgba(52,211,153,0.4)]"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-2">
              {promo.title}
            </h2>
            <p className="text-gray-300 mb-4">{promo.description}</p>

            {promo.type === 'promo' && (
              <div className="bg-gray-700 border-l-4 border-teal-400 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-300 font-medium">
                  Welcome Code:
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white tracking-widest">
                    {promo.code}
                  </span>
                  <button
                    onClick={() => copyToClipboard(promo.code)}
                    className="bg-gray-600 hover:bg-gray-500 text-sm text-white px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}

            {promo.type === 'reward' && promo.conditions && (
              <div className="bg-gray-700 border-l-4 border-teal-400 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-300 font-medium">if</p>
                <ul className="list-disc list-inside text-sm text-gray-300 mt-2">
                  {promo.conditions.map((condition, index) => (
                    <li key={index}>{condition}</li>
                  ))}
                </ul>
              </div>
            )}

            {promo.type === 'referral' && (
              <div className="bg-gray-700 border-l-4 border-teal-400 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-300 font-medium">
                  Your Referral Link:
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white truncate">
                    {promo.referralLink}
                  </span>
                  <button
                    onClick={() => copyToClipboard(promo.referralLink)}
                    className="bg-gray-600 hover:bg-gray-500 text-sm text-white px-3 py-1 rounded-full transition-colors duration-300"
                  >
                    Copy
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={() => handleClaimClick(promo.title)}
              className="w-full bg-teal-500 text-black font-bold py-3 rounded-xl hover:bg-teal-400 transition-colors duration-300"
            >
              {promo.type === 'referral' ? 'Share Link' : 'Claim Now'}
            </button>
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

export default Promotions;
