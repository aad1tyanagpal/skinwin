import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsDropdown, setTreatmentsDropdown] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setTreatmentsDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setTreatmentsDropdown(false);
    }, 150); // Small delay to allow mouse movement
  };

  const navItems = [
    { name: 'About Us', path: '/about' },
    {
      name: 'Treatments',
      path: '/treatments',
      hasDropdown: true,
      dropdownItems: [
        {
          name: 'Skin Treatments',
          path: '/treatments/skin-treatments',
          description: 'Advanced skin care & rejuvenation',
          subItems: [
            {
              category: 'Face Rejuvenation',
              items: [
                { name: 'HydraFacial', path: '/treatments/skin-treatments/face-rejuvenation/hydra-facial' },
                { name: 'Chemical Peel', path: '/treatments/skin-treatments/face-rejuvenation/chemical-peel' },
                { name: 'Carbon Facial', path: '/treatments/skin-treatments/face-rejuvenation/carbon-facial' }
              ]
            },
            {
              category: 'Anti-Ageing',
              items: [
                { name: 'Botox', path: '/treatments/skin-treatments/anti-ageing/botox' },
                { name: 'Fillers', path: '/treatments/skin-treatments/anti-ageing/fillers' },
                { name: 'HIFU', path: '/treatments/skin-treatments/anti-ageing/hifu' }
              ]
            },
            {
              category: 'Skin Concerns',
              items: [
                { name: 'Acne', path: '/treatments/skin-treatments/skin-concerns/acne' },
                { name: 'Acne Scars', path: '/treatments/skin-treatments/skin-concerns/acne-scars' },
                { name: 'Pigmentation', path: '/treatments/skin-treatments/skin-concerns/pigmentation' },
                { name: 'Melasma', path: '/treatments/skin-treatments/skin-concerns/melasma' },
                { name: 'Mole', path: '/treatments/skin-treatments/skin-concerns/mole' },
                { name: 'Warts', path: '/treatments/skin-treatments/skin-concerns/warts' },
                { name: 'Psoriasis', path: '/treatments/skin-treatments/skin-concerns/psoriasis' }
              ]
            },
            {
              category: 'Glow Skin Health',
              items: [
                { name: 'Glutathione Therapy', path: '/treatments/skin-treatments/glow-skin-health/glutathione-therapy' }
              ]
            }
          ]
        },
        {
          name: 'Hair Treatments',
          path: '/treatments/hair-treatments',
          description: 'Hair restoration & regrowth solutions',
          subItems: [
            {
              category: 'Hair Loss',
              items: [
                { name: 'Hair Transplant', path: '/treatments/hair-treatments/hair-loss/hair-transplant' },
                { name: 'Beard Transplant', path: '/treatments/hair-treatments/hair-loss/beard-transplant' },
                { name: 'Eyebrow Transplant', path: '/treatments/hair-treatments/hair-loss/eyebrow-transplant' }
              ]
            },
            {
              category: 'Therapies',
              items: [
                { name: 'PRP', path: '/treatments/hair-treatments/therapies/prp' },
                { name: 'GFC PRP', path: '/treatments/hair-treatments/therapies/gfc-prp' },
                { name: 'Mesotherapy', path: '/treatments/hair-treatments/therapies/mesotherapy' },
                { name: 'LLLT', path: '/treatments/hair-treatments/therapies/lllt' },
                { name: 'Medical Therapy', path: '/treatments/hair-treatments/therapies/medical-therapy' }
              ]
            },
            {
              category: 'Scalp Care',
              items: [
                { name: 'Dandruff', path: '/treatments/hair-treatments/scalp-care/dandruff' }
              ]
            }
          ]
        },
        {
          name: 'Laser Treatments',
          path: '/treatments/laser-treatments',
          description: 'Laser hair removal & skin procedures',
          subItems: [
            {
              category: 'Hair Removal',
              items: [
                { name: 'Laser Hair Reduction', path: '/treatments/laser-treatments/hair-removal/laser-hair-reduction' }
              ]
            },
            {
              category: 'Skin Concerns',
              items: [
                { name: 'Laser Acne', path: '/treatments/laser-treatments/skin-concerns/laser-acne' },
                { name: 'Laser Scar', path: '/treatments/laser-treatments/skin-concerns/laser-scar' },
                { name: 'Laser Birthmark', path: '/treatments/laser-treatments/skin-concerns/laser-birthmark' }
              ]
            },
            {
              category: 'Advanced Laser',
              items: [
                { name: 'Tattoo Removal', path: '/treatments/laser-treatments/advanced-laser/tattoo-removal' },
                { name: 'Skin Tightening', path: '/treatments/laser-treatments/advanced-laser/skin-tightening' }
              ]
            }
          ]
        }
      ]
    },
    { name: 'Plastic Surgery', path: '/plastic-surgery' },
    { name: 'Hair Transplant', path: '/treatments/hair-treatments/hair-loss/hair-transplant' },
    { name: 'Concerns', path: '/concerns' },
    { name: 'Results', path: '/results' },
    { name: 'Contact', path: '/contact' }
  ];

  const NavLink = ({ item }) => (
    <div className="relative">
      {item.hasDropdown ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative"
        >
          <button className="flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-gray-600 hover:text-[#C09A50]">
            {item.name}
            <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {treatmentsDropdown && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-white rounded-lg shadow-xl border border-gray-200 py-6 px-6 z-50"
            >
              <div className="grid grid-cols-3 gap-8">
                {item.dropdownItems.map((dropdownItem, index) => (
                  <div key={index} className="space-y-4">
                    <Link
                      to={dropdownItem.path}
                      onClick={() => setIsOpen(false)}
                      className="block group"
                    >
                      <div className="font-semibold text-gray-900 group-hover:text-[#C09A50] transition-colors">
                        {dropdownItem.name}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{dropdownItem.description}</div>
                    </Link>
                    <div className="space-y-2">
                      {dropdownItem.subItems?.map((subCategory, subIndex) => (
                        <div key={subIndex} className="space-y-1">
                          <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                            {subCategory.category}
                          </div>
                          {subCategory.items.map((subItem, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={subItem.path}
                              onClick={() => setIsOpen(false)}
                              className="block text-sm text-gray-600 hover:text-[#C09A50] hover:bg-gray-50 px-2 py-1 rounded transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Link
          to={item.path}
          onClick={() => setIsOpen(false)}
          className="block md:inline-block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-gray-600 hover:text-[#C09A50]"
        >
          {item.name}
        </Link>
      )}
    </div>
  );

  const MobileNavLink = ({ item }) => (
    <div>
      {item.hasDropdown ? (
        <div>
          <div className="px-3 py-2 text-base font-medium text-gray-900 border-b border-gray-200">
            {item.name}
          </div>
          <div className="pl-6 space-y-2">
            {item.dropdownItems.map((dropdownItem, index) => (
              <div key={index} className="space-y-1">
                <Link
                  to={dropdownItem.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#C09A50] hover:bg-gray-50 rounded-md"
                >
                  {dropdownItem.name}
                </Link>
                {dropdownItem.subItems?.map((subCategory, subIndex) => (
                  <div key={subIndex} className="ml-4 space-y-1">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide px-3 py-1">
                      {subCategory.category}
                    </div>
                    {subCategory.items.map((subItem, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={subItem.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-1 text-sm text-gray-600 hover:text-[#C09A50] hover:bg-gray-50 rounded"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Link
          to={item.path}
          onClick={() => setIsOpen(false)}
          className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-[#C09A50] hover:bg-gray-50 rounded-md"
        >
          {item.name}
        </Link>
      )}
    </div>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed w-full z-50 top-0 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/home" className="flex items-center space-x-3 text-gray-800">
              <svg className="w-10 h-10 text-[#C09A50]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-1.026.977-2.19.977-3.434 0-3.517-1.009-6.799-2.753-9.571M12 21V11"></path>
              </svg>
              <span className="font-bold text-2xl tracking-wider">SKIN WIN</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="flex items-baseline space-x-1">
              {navItems.map(item => <NavLink key={item.name} item={item} />)}
            </div>
            <Link to="/contact" className="ml-4 bg-[#C09A50] text-white font-bold py-2 px-5 rounded-lg shadow-md hover:bg-[#B08A40] transition duration-300 text-sm">
              Book Consultation
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-[#C09A50] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#C09A50]"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navItems.map(item => <MobileNavLink key={item.name} item={item} />)}
            <a href="tel:+919256444577" onClick={() => setIsOpen(false)} className="block w-full text-left bg-[#C09A50] text-white font-bold mt-2 py-2 px-3 rounded-md shadow-md hover:bg-[#B08A40] transition duration-300 text-sm">
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MegaMenu;