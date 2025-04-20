import React from 'react';

const modules = [
  {
    icon: 'fas fa-chart-line',
    title: 'Event ROI Analyzer',
    features: [
      'Track event performance',
      'Measure ROI accurately',
      'Generate detailed reports',
    ],
  },
  {
    icon: 'fas fa-warehouse',
    title: 'Inventory Management System',
    features: [
      'Real-time stock tracking',
      'Automated reorder alerts',
      'Inventory forecasting',
    ],
  },
  {
    icon: 'fas fa-chart-bar',
    title: 'Sales Forecasting Tool',
    features: [
      'Predict sales trends',
      'Analyze historical data',
      'Customizable forecasting models',
    ],
  },
  {
    icon: 'fas fa-tachometer-alt',
    title: 'Financial Dashboard',
    features: [
      'Visualize financial KPIs',
      'Cash flow analysis',
      'Budget tracking',
    ],
  },
  {
    icon: 'fas fa-user-friends',
    title: 'Consumer Behavior Analyzer',
    features: [
      'Customer segmentation',
      'Behavioral analytics',
      'Personalized marketing insights',
    ],
  },
];

function ProductPage() {
  return (
    <section className="py-16 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">Product Modules</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div
              key={module.title}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition"
            >
              <i className={`${module.icon} text-primary text-4xl mb-4`}></i>
              <h2 className="text-2xl font-semibold mb-4">{module.title}</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {module.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Benefits of Integration</h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            Seamlessly integrate with popular BI tools like Power BI and Tableau to enhance your data analysis capabilities and streamline your business intelligence workflows.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;
