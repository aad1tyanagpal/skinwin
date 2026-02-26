import React from 'react';
import { Link } from 'react-router-dom';

const SurgeryCategory = ({ title, treatments }) => (
  <div className="mb-14">
    <h3 className="text-3xl font-bold text-gray-900 mb-8 border-b-2 border-gray-100 pb-4 flex items-center">
      <div className="h-6 w-1.5 bg-[#C09A50] mr-4 rounded-full"></div>
      {title}
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {treatments.map((treatment) => (
        <Link
          key={treatment.name}
          to={treatment.path}
          className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-800 group-hover:text-[#C09A50] transition-colors flex items-center justify-between">
              <span className="pr-4">{treatment.name}</span>
              <svg className="w-5 h-5 flex-shrink-0 text-gray-300 group-hover:text-[#C09A50] transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </h4>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const PlasticSurgery = () => {
  const surgeryCategories = [
    {
      title: 'Face Aesthetic',
      treatments: [
        { name: 'Rhinoplasty (Nose Surgery)', path: '/plastic-surgery/face-aesthetic/rhinoplasty' },
        { name: 'Face Lift (Rhytidectomy)', path: '/plastic-surgery/face-aesthetic/face-lift' },
        { name: 'Dimple Creation', path: '/plastic-surgery/face-aesthetic/dimple-creation' },
        { name: 'Eyelid Surgery (Blepharoplasty)', path: '/plastic-surgery/face-aesthetic/eyelid-surgery' },
        { name: 'Face & Neck Lift', path: '/plastic-surgery/face-aesthetic/face-neck-lift' },
        { name: 'Lip Augmentation', path: '/plastic-surgery/face-aesthetic/lip-augmentation' },
        { name: 'Brow Lift', path: '/plastic-surgery/face-aesthetic/brow-lift' },
        { name: 'Chin Implant', path: '/plastic-surgery/face-aesthetic/chin-implant' },
        { name: 'Cheek Implant', path: '/plastic-surgery/face-aesthetic/cheek-implant' }
      ]
    },
    {
      title: 'Body Contouring',
      treatments: [
        { name: 'Liposuction', path: '/plastic-surgery/body-contouring/liposuction' },
        { name: 'Tummy Tuck (Abdominoplasty)', path: '/plastic-surgery/body-contouring/tummy-tuck' },
        { name: 'Mommy Makeover', path: '/plastic-surgery/body-contouring/mommy-makeover' },
        { name: 'Arm Lift (Brachioplasty)', path: '/plastic-surgery/body-contouring/arm-lift' },
        { name: 'Thigh Lift', path: '/plastic-surgery/body-contouring/thigh-lift' }
      ]
    },
    {
      title: 'Breast Surgery',
      treatments: [
        { name: 'Breast Augmentation', path: '/plastic-surgery/breast-surgery/breast-augmentation' },
        { name: 'Breast Reduction', path: '/plastic-surgery/breast-surgery/breast-reduction' },
        { name: 'Breast Lump', path: '/plastic-surgery/breast-surgery/breast-lump' }
      ]
    },
    {
      title: 'Reconstructive Surgery',
      treatments: [
        { name: 'Gynecomastia (Male Breast Reduction)', path: '/plastic-surgery/reconstructive/gynecomastia' },
        { name: 'Cyst Removal', path: '/plastic-surgery/reconstructive/cyst-removal' },
        { name: 'Hand Surgery', path: '/plastic-surgery/reconstructive/hand-surgery' },
        { name: 'Scar Revision Treatment', path: '/plastic-surgery/reconstructive/scar-revision' },
        { name: 'Cleft Palate', path: '/plastic-surgery/reconstructive/cleft-palate' }
      ]
    },
    {
      title: 'Sexual Wellness',
      treatments: [
        { name: 'P-Shot® (Priapus Shot)', path: '/plastic-surgery/sexual-wellness/p-shot' },
        { name: 'O-Shot® (Orgasm Shot)', path: '/plastic-surgery/sexual-wellness/o-shot' }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Plastic Surgery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Transformative aesthetic and reconstructive procedures by expert surgeons.
          </p>
        </div>
      </div>

      {/* Intro Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-gray-50 rounded-3xl p-8 mb-12 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">World-Class Plastic Surgery at Skin Win Clinic</h2>
          <p className="text-gray-600 leading-relaxed text-lg font-medium">
            Whether you're looking to enhance your natural beauty, restore function, or target a specific aesthetic goal. Our comprehensive range of plastic surgery options are designed to deliver exceptional, confidence-boosting results naturally and safely.
          </p>
        </div>
      </div>

      {/* Treatments List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {surgeryCategories.map((category, index) => (
          <SurgeryCategory key={index} title={category.title} treatments={category.treatments} />
        ))}
      </div>
    </div>
  );
};

export default PlasticSurgery;