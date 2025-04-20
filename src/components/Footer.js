import React from 'react';

const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Product', href: '/product' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Twitter', href: 'https://twitter.com', icon: 'fab fa-twitter' },
  { name: 'Facebook', href: 'https://facebook.com', icon: 'fab fa-facebook-f' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'fab fa-linkedin-in' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'fab fa-instagram' },
];

function Footer() {
  return (
    <footer className="bg-secondary text-gray-700 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-semibold text-primary">InnoVistaar</h2>
          <p className="text-sm mt-1">&copy; {new Date().getFullYear()} InnoVistaar. All rights reserved.</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-primary transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition"
              aria-label={social.name}
            >
              <i className={`${social.icon} fa-lg`}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
