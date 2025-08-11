import React, { useState } from 'react';
import { afterCareData, treatmentCategories } from './afterCareData';
import TreatmentDropdown from './TreatmentDropdown';
import { Link } from 'react-router-dom';

// Icons
const CheckIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const XIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const ClockIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const PhoneIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;

const CareCard = ({ title, content }) => {
  const getSectionStyles = (type) => {
    switch(type) {
      case 'do': return { border: 'border-green-500/50', icon: <CheckIcon className="text-green-500 h-5 w-5" />, headerColor: 'text-green-700' };
      case 'dont': return { border: 'border-red-500/50', icon: <XIcon className="text-red-500 h-5 w-5" />, headerColor: 'text-red-700' };
      case 'expect': return { border: 'border-blue-500/50', icon: <ClockIcon className="text-blue-500 h-5 w-5" />, headerColor: 'text-blue-700' };
      default: return { border: 'border-gray-300/80', icon: <CheckIcon className="h-5 w-5" />, headerColor: 'text-text-primary' };
    }
  };

  return (
    <div className="bg-surface rounded-lg shadow-sm border border-gray-200/80 p-6">
      <h3 className="text-xl font-bold text-text-primary mb-4 pb-3 border-b border-gray-200/80">{title}</h3>
      <div className="space-y-4">
        {content.map((section, index) => {
          const styles = getSectionStyles(section.type);
          return (
            <div key={index}>
              <h4 className={`font-semibold flex items-center space-x-2 ${styles.headerColor}`}>
                {styles.icon}
                <span>{section.heading}</span>
              </h4>
              <ul className="mt-2 space-y-2 pl-7">
                {section.points.map((point, pIndex) => (
                  <li key={pIndex} className="flex items-start space-x-2 text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AfterCare = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredData = selectedCategory === 'all' 
    ? afterCareData 
    : afterCareData.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">After Care</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Post-Treatment Guidelines
          </p>
          <p className="mt-6 max-w-2xl text-xl text-text-secondary mx-auto">
            Follow these essential care instructions to ensure optimal healing and the best possible treatment results.
          </p>
        </header>

        <TreatmentDropdown 
          categories={treatmentCategories}
          onCategorySelect={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        
        <div className="grid gap-8 md:grid-cols-2">
          {filteredData.map((item, index) => (
            <CareCard key={index} title={item.title} content={item.content} />
          ))}
        </div>

        <div className="text-center mt-16">
            <div className="bg-surface rounded-lg p-8 border border-gray-200/80 max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-3 text-primary">
                    <PhoneIcon className="h-6 w-6" />
                    <h3 className="text-2xl font-bold text-text-primary">Need Assistance?</h3>
                </div>
                <p className="text-lg text-text-secondary mb-6">
                If you have any concerns or experience unusual symptoms, contact our clinic immediately.
                </p>
                <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
                Contact Clinic
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AfterCare;
