import React, { useState } from 'react';

const ChevronDownIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className="relative mb-8 max-w-sm mx-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-surface border border-gray-300/80 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
      >
        <span className="text-text-primary">
          {categories[selectedCategory] || 'Select Treatment Category'}
        </span>
        <ChevronDownIcon className={`text-text-secondary transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-surface border border-gray-200/80 rounded-lg shadow-lg z-10">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleCategorySelect(key)}
              className={`w-full px-4 py-3 text-left transition-colors text-sm ${
                key === selectedCategory ? 'bg-primary/10 text-primary font-semibold' : 'text-text-secondary hover:bg-gray-200/50'
              } ${key === Object.keys(categories)[Object.keys(categories).length - 1] ? '' : 'border-b border-gray-200/50'}`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreatmentDropdown;
