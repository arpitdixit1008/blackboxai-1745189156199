import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Product', path: '/product' },
  { name: 'How It Works', path: '/how-it-works' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary">
              InnoVistaar
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-primary font-semibold border-b-2 border-primary pb-1'
                    : 'text-gray-700 hover:text-primary transition'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <i className="fas fa-times fa-lg"></i>
              ) : (
                <i className="fas fa-bars fa-lg"></i>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? 'block px-3 py-2 rounded-md text-primary font-semibold'
                    : 'block px-3 py-2 rounded-md text-gray-700 hover:text-primary transition'
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
