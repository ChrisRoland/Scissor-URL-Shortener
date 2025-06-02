import React from 'react';
import bot1 from '../assets/media/bot-sec-1.png';
import bot2 from '../assets/media/bot-sec-2.png';

export default function BotSection() {
  return (
    <div className="bot-sec bg-[#1e3448] relative flex justify-center items-center text-white h-[299px]">
      <img src={bot1} alt="botBg1" className="botBg1 absolute left-0 top-0 w-[600px] h-[300px]" />
      <div className="bot-sec-content container mx-auto text-center relative z-10">
        <h2 className="text-[40px] font-semibold mb-4">Revolutionizing Link Optimization</h2>
        <button className="btn btn-primary">
          Get Started
        </button>
      </div>
      <img src={bot2} alt="botBg2" className=" botBg2 absolute right-0 bottom-0 h-[300px] w-auto" />
    </div>
  );
}