import React, { useState } from 'react';

const ChevronDownIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const TreatmentDropdown = ({ categories, onCategorySelect, selectedCategory }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCategorySelect = (category) => {
    onCategorySelect(category);
    setIsOpen(false);
  };

  return (
    <div className="relative mb-8">
      <div className="max-w-sm mx-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-[#C09A50] focus:outline-none focus:ring-2 focus:ring-[#C09A50] focus:border-transparent transition-colors"
        >
          <span className="text-gray-700">
            {categories[selectedCategory] || 'Select Treatment Category'}
          </span>
          <ChevronDownIcon className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => handleCategorySelect(key)}
                className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                  key === selectedCategory ? 'bg-[#FBF5E9] text-[#C09A50] font-medium' : 'text-gray-700'
                } ${key === Object.keys(categories)[0] ? 'rounded-t-lg' : ''} ${
                  key === Object.keys(categories)[Object.keys(categories).length - 1] ? 'rounded-b-lg' : 'border-b border-gray-100'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TreatmentDropdown;
