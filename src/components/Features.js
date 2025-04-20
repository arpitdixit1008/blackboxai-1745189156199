import React from 'react';

const features = [
  {
    icon: 'fas fa-chart-line',
    title: 'Event ROI Analyzer',
    description: 'Measure the success of your events with detailed ROI analytics.',
  },
  {
    icon: 'fas fa-warehouse',
    title: 'Inventory Management System',
    description: 'Keep track of your stock levels and optimize inventory flow.',
  },
  {
    icon: 'fas fa-chart-bar',
    title: 'Sales Forecasting Tool',
    description: 'Predict future sales trends to make informed decisions.',
  },
  {
    icon: 'fas fa-tachometer-alt',
    title: 'Financial Dashboard',
    description: 'Visualize your financial data with intuitive dashboards.',
  },
  {
    icon: 'fas fa-user-friends',
    title: 'Consumer Behavior Analyzer',
    description: 'Understand your customers better with behavior insights.',
  },
];

function Features() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <i className={`${feature.icon} text-primary text-4xl mb-4`}></i>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
