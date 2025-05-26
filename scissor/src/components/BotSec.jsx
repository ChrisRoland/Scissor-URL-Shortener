import React from 'react';
import bot1 from '../assets/media/bot-sec-1.png';
import bot2 from '../assets/media/bot-sec-2.png';

export default function BotSection() {
  return (
    <div className="relative py-16">
      <img src={bot1} alt="botBg1" className="absolute left-0 top-0" />
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-4">Revolutionizing Link Optimization</h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <img src={bot2} alt="botBg2" className="absolute right-0 bottom-0" />
    </div>
  );
}