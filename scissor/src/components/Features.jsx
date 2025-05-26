import React from 'react';
// Ideally extract SVGs or use <svg> inline
const features = [
  {
    title: 'URL Shortening',
    description: 'Shorten your URL at scale with custom redirects.',
    iconClass: 'fas fa-link',
  },
  {
    title: 'Custom URLs',
    description: 'Create branded links and custom domains.',
    iconClass: 'fas fa-user-tag',
  },
  {
    title: 'QR Codes',
    description: 'Generate and track QR codes with analytics.',
    iconClass: 'fas fa-qrcode',
  },
  {
    title: 'Analytics',
    description: 'Deep insights on link and code performance.',
    iconClass: 'fas fa-chart-line',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center mb-8">
        <span className="inline-block w-12 h-1 bg-blue-600 mb-2"></span>
        <h2 className="text-3xl font-semibold">
          Why Choose <span className="text-blue-600">Scissor</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          Scissor is the hub for all link management needs: shortening, custom URLs,
          QR code generation, and advanced analytics.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((f) => (
          <div key={f.title} className="bg-white p-6 rounded shadow text-center">
            <div className="text-4xl text-blue-600 mb-4">
              <i className={f.iconClass}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}