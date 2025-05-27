import React from 'react';

const data = [
  { value: '3M', label: 'Active users' },
  { value: '60M', label: 'Links & QR codes created' },
  { value: '1B', label: 'Clicked & Scanned connections' },
  { value: '300k', label: 'App Integrations' },
];

export default function Stats() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center mb-8">
        <p className="text-lg">One Stop.</p>
        <p className="text-2xl font-semibold">
          Four <span className="text-blue-600">Possibilities</span>.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {data.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded shadow">
            <h2 className="text-3xl font-bold mb-2">{stat.value}</h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}