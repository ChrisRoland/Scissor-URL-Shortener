import React from 'react';

export default function UrlForm() {
  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="flex-1 mb-6 md:mb-0">
          <input type="text" placeholder="Paste URL here..." className="w-full p-3 rounded border" />
          <div className="flex mt-4 space-x-4">
            <div className="relative flex-1">
              <select className="w-full p-3 border rounded appearance-none">
                <option value="">Choose Domain</option>
                <option>.com</option>
                <option>.org</option>
                <option>.xyz</option>
              </select>
              <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
            </div>
            <input type="text" placeholder="Type Alias here" className="flex-1 p-3 border rounded" />
          </div>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Trim URL
          </button>
          <p className="text-sm text-gray-500 mt-2">
            By clicking Trim URL, I agree to the <a href="#" className="underline">Terms of Service</a>, <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Use of Cookies</a>.
          </p>
        </div>
        <div className="flex-1 text-center">
          <img src="/media/mid-sec-1.png" alt="midBg1" className="mx-auto" />
        </div>
      </div>
    </div>
  );
}