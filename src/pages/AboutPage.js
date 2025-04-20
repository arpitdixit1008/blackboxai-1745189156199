import React from 'react';

const team = [
  { name: 'John Doe', role: 'CEO', bio: 'Visionary leader driving innovation.' },
  { name: 'Jane Smith', role: 'CTO', bio: 'Tech guru and product architect.' },
  { name: 'Emily Johnson', role: 'COO', bio: 'Operations expert ensuring smooth delivery.' },
];

function AboutPage() {
  return (
    <section className="py-16 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-primary mb-12 text-center">About Us</h1>
        <div className="max-w-4xl mx-auto text-gray-700 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>
            To empower startups and MSMEs with cutting-edge business intelligence tools that drive smarter decisions and sustainable growth.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
          <p>
            To be the leading platform for business intelligence, enabling every startup and MSME to unlock their full potential.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Company Overview</h2>
          <p>
            InnoVistaar is an all-in-one business intelligence platform designed specifically for startups and MSMEs. Our platform integrates powerful analytics, forecasting, and consumer insights to help businesses thrive.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-gray-600">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
