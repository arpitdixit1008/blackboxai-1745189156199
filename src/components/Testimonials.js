import React from 'react';

const testimonials = [
  {
    name: 'Alice Johnson',
    role: 'Founder, StartupX',
    quote: 'InnoVistaar transformed how we analyze our business data. The insights are invaluable!',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Mark Thompson',
    role: 'CEO, MSME Corp',
    quote: 'The platform’s integration with Power BI and Tableau saved us countless hours.',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    name: 'Sophia Lee',
    role: 'Product Manager, Innovate Ltd',
    quote: 'User-friendly and powerful. The best business intelligence tool for startups.',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
];

function Testimonials() {
  return (
    <section className="py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="italic text-gray-700 mb-2">"{testimonial.quote}"</p>
              <h3 className="font-semibold text-primary">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
