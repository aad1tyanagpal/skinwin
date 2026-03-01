import React from 'react';
import { Link } from 'react-router-dom';

const TreatmentCategory = ({ title, treatments }) => (
  <div className="mb-12">
    <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {treatments.map((treatment) => (
        <Link
          key={treatment.name}
          to={treatment.path}
          className="group block bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
        >
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#C09A50] transition-colors flex items-center justify-between">
              {treatment.name}
              <svg className="w-5 h-5 text-gray-400 group-hover:text-[#C09A50] transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h4>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const HairTreatments = () => {
  const treatmentCategories = [
    {
      title: 'Hair Loss Solutions',
      treatments: [
        { name: 'Hair Transplant', path: '/treatments/hair-treatments/hair-loss/hair-transplant' },
        { name: 'Beard Transplant', path: '/treatments/hair-treatments/hair-loss/beard-transplant' },
        { name: 'Eyebrow Transplant', path: '/treatments/hair-treatments/hair-loss/eyebrow-transplant' },
      ]
    },
    {
      title: 'Hair Strength & Growth Therapies',
      treatments: [
        { name: 'PRP Therapy', path: '/treatments/hair-treatments/therapies/prp' },
        { name: 'GFC PRP Therapy', path: '/treatments/hair-treatments/therapies/gfc-prp' },
        { name: 'Mesotherapy', path: '/treatments/hair-treatments/therapies/mesotherapy' },
        { name: 'LLLT (Low Level Laser Therapy)', path: '/treatments/hair-treatments/therapies/lllt' },
        { name: 'Medical Therapy', path: '/treatments/hair-treatments/therapies/medical-therapy' },
      ]
    },
    {
      title: 'Scalp Care',
      treatments: [
        { name: 'Dandruff Treatment', path: '/treatments/hair-treatments/scalp-care/dandruff' },
      ]
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Hair Treatments
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Advanced solutions for hair loss, regrowth, and scalp health.
          </p>
        </div>
      </div>

      {/* Intro Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Hair Treatments at Skin Win Clinic</h2>
        <p className="text-xl text-gray-600 mb-8 font-medium">
          From surgical transplants to regenerative therapies — personalized, doctor-supervised care for every hair concern.
        </p>
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Restore Your Hair, Restore Your Confidence</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            At Skin Win Clinic, we combine advanced surgical techniques with proven non-surgical therapies to address hair loss at every stage.
            Each treatment plan is customized based on your hair type, degree of loss, and lifestyle — ensuring safe, natural-looking, and long-lasting results.
          </p>
        </div>
      </div>

      {/* Treatments List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {treatmentCategories.map((category, index) => (
          <TreatmentCategory key={index} title={category.title} treatments={category.treatments} />
        ))}
      </div>
    </div>
  );
};

export default HairTreatments;