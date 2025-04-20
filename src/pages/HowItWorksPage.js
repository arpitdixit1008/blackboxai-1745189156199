import React from 'react';

const steps = [
  {
    title: 'Data Collection',
    description: 'Gather data from multiple sources including events, sales, inventory, and customer interactions.',
    icon: 'fas fa-database',
  },
  {
    title: 'Data Integration',
    description: 'Integrate data seamlessly with Power BI, Tableau, and other BI tools.',
    icon: 'fas fa-plug',
  },
  {
    title: 'Analysis & Insights',
    description: 'Use advanced analytics to generate actionable business insights.',
    icon: 'fas fa-chart-pie',
  },
  {
    title: 'Decision Making',
    description: 'Empower smarter business decisions with real-time dashboards and reports.',
    icon: 'fas fa-lightbulb',
  },
];

function HowItWorksPage() {
  return (
    <section className="py-16 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">How It Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <i className={`${step.icon} text-primary text-5xl mb-4`}></i>
              <h2 className="text-2xl font-semibold mb-2">{step.title}</h2>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksPage;
