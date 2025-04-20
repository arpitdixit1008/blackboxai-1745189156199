import React from 'react';

const integrations = [
  {
    name: 'Power BI',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Power_BI_logo.png',
    alt: 'Power BI Logo',
  },
  {
    name: 'Tableau',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Tableau_Logo.png',
    alt: 'Tableau Logo',
  },
];

function Integration() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">Integrations</h2>
        <div className="flex justify-center space-x-12">
          {integrations.map((integration) => (
            <div key={integration.name} className="flex flex-col items-center">
              <img
                src={integration.logo}
                alt={integration.alt}
                className="h-20 object-contain"
              />
              <p className="mt-2 text-gray-700">{integration.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integration;
