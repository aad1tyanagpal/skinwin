import React, { useState } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';

const Logo = () => (
  <Link to="/" className="flex items-center space-x-2">
    <svg
      className="w-8 h-8 text-primary"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5v7l4 2"
      ></path>
    </svg>
    <span className="font-bold text-2xl tracking-wide text-text-primary">SKIN WIN</span>
  </Link>
);

const NavLink = ({ to, children, onClick }) => (
  <RouterNavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block md:inline-block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
        isActive
          ? 'text-primary'
          : 'text-text-secondary hover:text-primary'
      }`
    }
  >
    {children}
  </RouterNavLink>
);

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/why-us', label: 'Why Us' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/after-care', label: 'After Care' },
    { to: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-surface fixed w-full z-50 top-0 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="ml-4 bg-primary text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-primary-dark transition duration-300 text-sm"
            >
              Book Consultation
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-surface inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-primary focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={closeMenu}>
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block w-full text-left bg-primary text-white font-bold mt-2 py-2 px-3 rounded-md shadow-md hover:bg-primary-dark transition duration-300 text-sm"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;