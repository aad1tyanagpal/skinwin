import React, { useState } from 'react';

const Header = ({ setActivePage, activePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'About', 'Services', 'Why Us', 'Pricing', 'After Care', 'Contact'];

  const NavLink = ({ page }) => (
    <button
      onClick={() => { setActivePage(page.toLowerCase().replace(' ', '-')); setIsOpen(false); }}
      className={`block md:inline-block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        activePage === page.toLowerCase().replace(' ', '-')
          ? 'text-[#C09A50]'
          : 'text-gray-600 hover:text-[#C09A50]'
      }`}
    >
      {page}
    </button>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => setActivePage('home')} className="flex items-center space-x-3 text-gray-800">
              <svg className="w-10 h-10 text-[#C09A50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-1.026.977-2.19.977-3.434 0-3.517-1.009-6.799-2.753-9.571M12 21V11"></path>
              </svg>
              <span className="font-bold text-2xl tracking-wider">SKIN WIN</span>
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-1">
              {navItems.map(item => <NavLink key={item} page={item} />)}
            </div>
            <button onClick={() => setActivePage('contact')} className="ml-4 bg-[#C09A50] text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-[#B08A40] transition duration-300 text-sm">
              Book Consultation
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#C09A50] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C09A50]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => <NavLink key={item} page={item} />)}
             <button onClick={() => { setActivePage('contact'); setIsOpen(false); }} className="block w-full text-left bg-[#C09A50] text-white font-bold mt-2 py-2 px-3 rounded-md shadow-md hover:bg-[#B08A40] transition duration-300 text-sm">
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;