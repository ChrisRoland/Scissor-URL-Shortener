import React from 'react';
import line from '../assets/media/line.png';
import illustration from '../assets/media/USL.png';
import blob from '../assets/media/blob.png';
import disk from '../assets/media/disk.png';

export default function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center py-16 px-6">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-semibold mb-4">
            Optimize Your Online Experience with Our<br />
            Advanced{' '}
            <span className="relative inline-block text-blue-600">
              <img src={line} alt="underline" className="absolute -bottom-1 left-0 w-full h-2"/>
              URL Shortening
            </span>{' '}
            Solution
          </h1>
          <p className="mb-6 text-gray-600">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization options
            to reinforce your brand presence and enhance user engagement.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Sign Up
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center relative">
          <img src={illustration} alt="Illustration" className="z-10" />
          <img src={blob} alt="blob" className="absolute -top-10 left-10" />
          <img src={disk} alt="disk" className="absolute -bottom-10 right-10" />
        </div>
      </div>
    </section>
  );
}