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

const LaserTreatments = () => {
  const treatmentCategories = [
    {
      title: 'Hair Removal',
      treatments: [
        { name: 'Laser Hair Reduction', path: '/treatments/laser-treatments/hair-removal/laser-hair-reduction' },
      ]
    },
    {
      title: 'Skin Concerns',
      treatments: [
        { name: 'Laser Acne Treatment', path: '/treatments/laser-treatments/skin-concerns/laser-acne' },
        { name: 'Laser Scar Revision', path: '/treatments/laser-treatments/skin-concerns/laser-scar' },
        { name: 'Laser Birthmark Removal', path: '/treatments/laser-treatments/skin-concerns/laser-birthmark' },
      ]
    },
    {
      title: 'Advanced Laser',
      treatments: [
        { name: 'Laser Tattoo Removal', path: '/treatments/laser-treatments/advanced-laser/tattoo-removal' },
        { name: 'Laser Skin Tightening', path: '/treatments/laser-treatments/advanced-laser/skin-tightening' },
      ]
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Laser Treatments
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Precision laser technology for skin, hair, and advanced aesthetic concerns.
          </p>
        </div>
      </div>

      {/* Intro Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Laser Treatments at Skin Win Clinic</h2>
        <p className="text-xl text-gray-600 mb-8 font-medium">
          US-FDA approved laser technologies — safe, effective, and tailored to your skin type.
        </p>
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Precision. Safety. Results.</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            At Skin Win Clinic, our laser treatments are performed by trained dermatologists using advanced, clinically proven technology.
            Whether it's permanent hair reduction, pigmentation correction, scar revision, or tattoo removal — every procedure is customized
            for your skin tone, concern, and desired outcome.
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

export default LaserTreatments;