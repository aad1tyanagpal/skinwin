import React, { useState } from 'react';
import { afterCareData, treatmentCategories } from './afterCareData';
import TreatmentDropdown from './TreatmentDropdown';

// Your existing icons (keeping them as is)
const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const XIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Enhanced CareCard component (keeping your existing styling)
const CareCard = ({ title, content }) => {
  const [activeSection, setActiveSection] = useState(null);

  const getSectionStyles = (type) => {
    switch(type) {
      case 'do':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          icon: <CheckIcon />,
          iconColor: 'text-green-600',
          textColor: 'text-green-800',
          headerColor: 'text-green-900'
        };
      case 'dont':
        return {
          bg: 'bg-red-50',
          border: 'border-red-200',
          icon: <XIcon />,
          iconColor: 'text-red-600',
          textColor: 'text-red-800',
          headerColor: 'text-red-900'
        };
      case 'expect':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          icon: <ClockIcon />,
          iconColor: 'text-blue-600',
          textColor: 'text-blue-800',
          headerColor: 'text-blue-900'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          icon: <CheckIcon />,
          iconColor: 'text-gray-600',
          textColor: 'text-gray-800',
          headerColor: 'text-gray-900'
        };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-5">
      <h3 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">{title}</h3>
      
      <div className="space-y-3">
        {content.map((section, index) => {
          const styles = getSectionStyles(section.type);
          const isActive = activeSection === index;
          
          return (
            <div key={index} className={`${styles.bg} ${styles.border} border rounded-lg overflow-hidden`}>
              <button
                onClick={() => setActiveSection(isActive ? null : index)}
                className="w-full p-3 text-left flex items-center justify-between hover:bg-black/5 transition-colors"
              >
                <div className="flex items-center space-x-2">
                  <span className={styles.iconColor}>{styles.icon}</span>
                  <h4 className={`font-semibold ${styles.headerColor}`}>{section.heading}</h4>
                </div>
                <svg className={`w-4 h-4 ${styles.iconColor} transition-transform ${isActive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isActive && (
                <div className="px-3 pb-3">
                  <ul className="space-y-2">
                    {section.points.map((point, pIndex) => (
                      <li key={pIndex} className={`flex items-start space-x-2 ${styles.textColor}`}>
                        <span className="w-1 h-1 rounded-full bg-current mt-2 flex-shrink-0"></span>
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main AfterCare component with filtering
const AfterCare = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredData = selectedCategory === 'all' 
    ? afterCareData 
    : afterCareData.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-[#FBF5E9] py-16 pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Keeping your existing header intact */}
        <div className="text-center mb-12">
          <h2 className="text-sm text-[#C09A50] font-semibold tracking-wide uppercase mb-2">After Care</h2>
          <p className="text-3xl font-extrabold tracking-tight text-gray-900 mb-4">
            Post-Treatment Guidelines
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these essential care instructions to ensure optimal healing and the best possible treatment results.
          </p>
        </div>

        {/* Category filter dropdown */}
        <TreatmentDropdown 
          categories={treatmentCategories}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        
        {/* Treatment cards grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {filteredData.map((item, index) => (
            <CareCard key={index} title={item.title} content={item.content} />
          ))}
        </div>

        {/* Keeping your existing contact section intact */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <svg className="w-5 h-5 text-[#C09A50]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <h3 className="font-bold text-gray-900">Need Assistance?</h3>
            </div>
            <p className="text-gray-600 mb-4">
              If you have any concerns or experience unusual symptoms, contact our clinic immediately.
            </p>
            <button className="bg-[#C09A50] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#A0824A] transition-colors">
              Contact Clinic
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterCare;
