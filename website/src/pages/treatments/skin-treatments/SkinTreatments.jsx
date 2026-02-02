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

const SkinTreatments = () => {
  const treatmentCategories = [
    {
      title: 'Face Rejuvenation',
      treatments: [
        { name: 'HydraFacial', path: '/treatments/skin-treatments/face-rejuvenation/hydra-facial' },
        { name: 'Chemical Peel', path: '/treatments/skin-treatments/face-rejuvenation/chemical-peel' },
        { name: 'Carbon Facial', path: '/treatments/skin-treatments/face-rejuvenation/carbon-facial' },
      ]
    },
    {
      title: 'Anti-Ageing',
      treatments: [
        { name: 'Botox', path: '/treatments/skin-treatments/anti-ageing/botox' },
        { name: 'Dermal Fillers', path: '/treatments/skin-treatments/anti-ageing/fillers' },
        { name: 'HIFU Skin Tightening', path: '/treatments/skin-treatments/anti-ageing/hifu' },
      ]
    },
    {
      title: 'Glow & Skin Health',
      treatments: [
        { name: 'Glutathione Therapy', path: '/treatments/skin-treatments/glow-skin-health/glutathione-therapy' },
      ]
    },
    {
      title: 'Skin Concerns',
      treatments: [
        { name: 'Acne & Scars Treatment', path: '/treatments/skin-treatments/skin-concerns/acne' },
        { name: 'Pigmentation & Melasma', path: '/treatments/skin-treatments/skin-concerns/pigmentation' },
        { name: 'Mole Removal', path: '/treatments/skin-treatments/skin-concerns/mole' },
        { name: 'Warts Removal', path: '/treatments/skin-treatments/skin-concerns/warts' },
        { name: 'Psoriasis Treatment', path: '/treatments/skin-treatments/skin-concerns/psoriasis' },
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Skin Treatments
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive care for all your skin needs.
          </p>
        </div>
      </div>

      {/* Intro Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Advanced Skin Treatments at Skin Win Clinic</h2>
        <p className="text-xl text-gray-600 mb-8 font-medium">
          Personalized, doctor-supervised skin treatments designed to improve skin health, texture, and confidence.
        </p>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Care for Healthy, Radiant Skin</h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            At Skin Win Clinic, we offer a wide range of advanced skin treatments to address common and complex skin concerns.
            Each treatment is customized based on your skin type, concern, and lifestyle, ensuring safe procedures and natural-looking results.
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

export default SkinTreatments;