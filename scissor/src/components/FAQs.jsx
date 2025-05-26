import React from 'react';

const faqs = [
  { q: 'How does URL shortening work?', a: 'A long URL is condensed into a short redirect link.' },
  { q: 'Is it necessary to create an account?', a: 'Account recommended for history and analytics.' },
  { q: 'Are links permanent?', a: 'Yes, until you delete or expire them.' },
  { q: 'Can I track performance?', a: 'Yes, see click stats and analytics dashboards.' },
];

export default function FAQs() {
  return (
    <section id="faqs" className="py-16 bg-white">
      <div className="container mx-auto text-center mb-8">
        <span className="inline-block w-12 h-1 bg-blue-600 mb-2"></span>
        <h2 className="text-3xl font-semibold">FAQs</h2>
      </div>
      <div className="container mx-auto max-w-2xl space-y-4">
        {faqs.map(({ q, a }) => (
          <details key={q} className="border rounded p-4">
            <summary className="cursor-pointer font-medium">{q}</summary>
            <p className="mt-2 text-gray-600">{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}