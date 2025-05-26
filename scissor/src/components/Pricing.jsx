import React from 'react';

const plans = [
  { name: 'Basic', price: 'Free', features: [
      'Unlimited URL Shortening',
      'Basic Analytics',
    ],
    isPrimary: false,
  },
  { name: 'Pro', price: '$12/mo', features: [
      'Custom Domains',
      'QR Code Generation',
      'Advanced Analytics',
    ],
    isPrimary: true,
  },
  { name: 'Enterprise', price: 'Contact Us', features: [
      'Dedicated Account Manager',
      'Team Collaboration',
      'SLA & Support',
    ],
    isPrimary: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto text-center mb-8">
        <span className="inline-block w-12 h-1 bg-blue-600 mb-2"></span>
        <h2 className="text-3xl font-semibold">
          A <span className="text-blue-600">price perfect</span> for your needs
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Plans for personal, business, and enterprise – we’ve got you covered.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className={`border rounded p-6 flex flex-col ${plan.isPrimary ? 'border-blue-600' : 'border-gray-200'}`}>
            <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="flex-1 mb-6 space-y-2">
              {plan.features.map((feat) => (
                <li key={feat} className="flex items-center">
                  <i className="fas fa-check text-green-500 mr-2"></i>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button className={`mt-auto ${plan.isPrimary ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'} py-2 rounded hover:opacity-90`}>Select</button>
          </div>
        ))}
      </div>
    </section>
  );
}