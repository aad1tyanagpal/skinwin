import React from 'react';

const Footer = ({ setActivePage }) => (
  <footer className="bg-white border-t border-gray-200">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Solutions</h3>
          <ul className="mt-4 space-y-4">
            <li><button onClick={() => setActivePage('services')} className="text-base text-gray-600 hover:text-gray-900">Laser Treatments</button></li>
            <li><button onClick={() => setActivePage('services')} className="text-base text-gray-600 hover:text-gray-900">Skin Care</button></li>
            <li><button onClick={() => setActivePage('services')} className="text-base text-gray-600 hover:text-gray-900">Hair Restoration</button></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Clinic</h3>
          <ul className="mt-4 space-y-4">
            <li><button onClick={() => setActivePage('about')} className="text-base text-gray-600 hover:text-gray-900">About</button></li>
            <li><button onClick={() => setActivePage('why-us')} className="text-base text-gray-600 hover:text-gray-900">Why Us</button></li>
            <li><button onClick={() => setActivePage('pricing')} className="text-base text-gray-600 hover:text-gray-900">Pricing</button></li>
          </ul>
        </div>
        <div>
           <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Support</h3>
          <ul className="mt-4 space-y-4">
            <li><button onClick={() => setActivePage('after-care')} className="text-base text-gray-600 hover:text-gray-900">After Care</button></li>
            <li><button onClick={() => setActivePage('contact')} className="text-base text-gray-600 hover:text-gray-900">Contact</button></li>
            <li><a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="flex items-start space-x-3 text-gray-800">
          <svg className="w-10 h-10 text-[#C09A50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-1.026.977-2.19.977-3.434 0-3.517-1.009-6.799-2.753-9.571M12 21V11"></path>
          </svg>
          <span className="font-bold text-2xl tracking-wider">SKIN WIN</span>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-200 pt-8 text-center">
        <p className="text-base text-gray-500">&copy; 2025 Skin Win Clinic. All rights reserved. Crafted for excellence.</p>
      </div>
    </div>
  </footer>
);

export default Footer;