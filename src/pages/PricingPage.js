import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    features: [
      'Basic analytics',
      'Up to 3 users',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    price: '$49/mo',
    features: [
      'Advanced analytics',
      'Up to 10 users',
      'Priority email support',
      'Integrations with Power BI & Tableau',
    ],
    cta: 'Upgrade Now',
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom analytics solutions',
      'Unlimited users',
      'Dedicated support',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
  },
];

function PricingPage() {
  return (
    <section className="py-16 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Pricing</h1>
        <p className="text-center max-w-2xl mx-auto mb-12 text-gray-700">
          Freemium model to get you started. Upgrade anytime for more features and users.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">{plan.name}</h2>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <button className="bg-primary text-white font-semibold py-3 rounded hover:bg-blue-700 transition">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
