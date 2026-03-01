import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal';

const resultsData = {
  skinCare: {
    title: "Advanced Skin Care",
    treatments: [
      { folder: "Botox", title: "Botox Anti-Aging", description: "Wrinkle reduction and facial rejuvenation", resultCount: 1 },
      { folder: "Carbon Facial", title: "Carbon Facial Treatment", description: "Deep pore cleansing and skin brightening", resultCount: 1 },
      { folder: "HIFU", title: "HIFU Non-Surgical Lift", description: "Skin tightening and lifting without surgery", resultCount: 3 },
      { folder: "Pore Clarifying", title: "Pore Clarifying Treatment", description: "Deep pore cleansing and minimization", resultCount: 1 },
    ]
  },
  laserTreatments: {
    title: "Laser & Pigmentation",
    treatments: [
      { folder: "Pigmentation", title: "Pigmentation Removal", description: "Melasma, age spots, and hyperpigmentation treatment", resultCount: 1 },
      { folder: "Freckles", title: "Freckles Removal", description: "Safe and effective freckle removal using Q-Switch laser", resultCount: 1 },
      { folder: "Nevus of OTA", title: "Nevus of OTA Treatment", description: "Birthmark removal with advanced laser technology", resultCount: 1 },
      { folder: "Laser Hair Reduction", title: "Laser Hair Reduction", description: "Permanent hair reduction for face and body", resultCount: 1 },
    ]
  },
  hairRestoration: {
    title: "Hair Restoration",
    treatments: [
      { folder: "Hair Transplant", title: "Hair Transplant (FUE/DHI)", description: "Natural hairline restoration with advanced techniques", resultCount: 7 },
      { folder: "Beard Transplant", title: "Beard Transplant", description: "Fuller beard restoration for enhanced appearance", resultCount: 1 },
      { folder: "Hair Fall", title: "Hair Fall Treatment", description: "Non-surgical hair regrowth with PRP and mesotherapy", resultCount: 10 },
    ]
  },
  specialtyTreatments: {
    title: "Specialty Procedures",
    treatments: [
      { folder: "Acne Scars", title: "Acne Scar Treatment", description: "Dramatic improvement in acne scarring", resultCount: 9 },
      { folder: "Burn Scar", title: "Burn Scar Treatment", description: "Scar revision and skin texture improvement", resultCount: 1 },
      { folder: "Mole Removal", title: "Mole Removal", description: "Safe and precise mole removal with minimal scarring", resultCount: 1 },
      { folder: "Removal Of DPN", title: "DPN Removal", description: "Dermatosis Papulosa Nigra removal treatment", resultCount: 1 },
      { folder: "Vitiligo", title: "Vitiligo Treatment", description: "Advanced phototherapy and medical management", resultCount: 1 },
      { folder: "Nevus of OTA", title: "Nevus of OTA", description: "Birthmark removal treatment", resultCount: 1 },
    ]
  },
};

const allCategories = ["All", "Advanced Skin Care", "Laser & Pigmentation", "Hair Restoration", "Specialty Procedures"];

const categoryMap = {
  "Advanced Skin Care": "skinCare",
  "Laser & Pigmentation": "laserTreatments",
  "Hair Restoration": "hairRestoration",
  "Specialty Procedures": "specialtyTreatments",
};

const BeforeAfterCard = ({ treatment, resultIndex = 1, openModal }) => {
  let beforeImage, afterImage;

  if (treatment.resultCount > 1) {
    beforeImage = `/results/${treatment.folder}/${resultIndex}/${resultIndex}.png`;
    afterImage = `/results/${treatment.folder}/${resultIndex}/${resultIndex}-${resultIndex}.png`;
  } else {
    beforeImage = `/results/${treatment.folder}/1.png`;
    afterImage = `/results/${treatment.folder}/1-1.png`;
  }

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-[#C09A50]/30 hover:shadow-xl transition-all duration-300">
      <div className="grid grid-cols-2 relative">
        <div className="relative overflow-hidden">
          <img
            src={beforeImage}
            alt={`${treatment.title} - Before`}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
            onClick={() => openModal(beforeImage, afterImage)}
            onError={(e) => { e.target.src = `https://placehold.co/400x300/f3f4f6/9ca3af?text=Before`; }}
          />
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2.5 py-1 rounded uppercase tracking-wider font-medium">Before</span>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={afterImage}
            alt={`${treatment.title} - After`}
            className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
            onClick={() => openModal(beforeImage, afterImage)}
            onError={(e) => { e.target.src = `https://placehold.co/400x300/f3f4f6/9ca3af?text=After`; }}
          />
          <span className="absolute bottom-2 right-2 bg-[#C09A50] text-white text-xs px-2.5 py-1 rounded uppercase tracking-wider font-medium">After</span>
        </div>
        {/* Expand hint */}
        <div
          onClick={() => openModal(beforeImage, afterImage)}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        >
          <div className="bg-black/40 rounded-full p-2">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          </div>
        </div>
      </div>
      <div className="px-5 py-4">
        <h3 className="font-semibold text-gray-900 text-sm">
          {treatment.title}
          {treatment.resultCount > 1 && resultIndex && (
            <span className="text-gray-400 font-normal ml-1.5">#{resultIndex}</span>
          )}
        </h3>
        <p className="text-gray-500 text-xs mt-0.5">{treatment.description}</p>
      </div>
    </div>
  );
};

const CategorySection = ({ categoryData, isVisible, openModal }) => {
  if (!isVisible) return null;
  return (
    <div className="mb-20">
      {categoryData.treatments.map((treatment, i) => (
        <div key={i} className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-5 w-1 bg-[#C09A50] rounded-full flex-shrink-0"></div>
            <h4 className="text-xl font-bold text-gray-900">{treatment.title}</h4>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {treatment.resultCount > 1
              ? Array.from({ length: treatment.resultCount }, (_, index) => (
                  <BeforeAfterCard key={index} treatment={treatment} resultIndex={index + 1} openModal={openModal} />
                ))
              : <BeforeAfterCard treatment={treatment} openModal={openModal} />
            }
          </div>
        </div>
      ))}
    </div>
  );
};

const Results = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState({ before: '', after: '' });

  const openModal = (before, after) => { setModalImages({ before, after }); setModalOpen(true); };
  const closeModal = () => { setModalOpen(false); setTimeout(() => setModalImages({ before: '', after: '' }), 300); };

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-divider mx-auto mb-6"></div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-5">
            Real Results
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Visible transformations achieved through expert care and personalized treatment plans. Every photo represents a real patient journey.
          </p>
          <p className="text-xs text-gray-400 mt-4 italic">*Results may vary from person to person.</p>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { value: "3,000+", label: "Happy Patients" },
              { value: "1,000+", label: "Hair Transplants" },
              { value: "50+", label: "Result Photos" },
              { value: "15+", label: "Treatment Types" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-[#C09A50]">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#C09A50] text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#FBF5E9] hover:text-[#C09A50]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category heading */}
        {selectedCategory !== "All" && (
          <div className="text-center mb-12">
            <div className="gold-divider mx-auto mb-5"></div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900">
              {selectedCategory}
            </h2>
          </div>
        )}

        {/* Results */}
        {selectedCategory === "All"
          ? Object.entries(resultsData).map(([key, data]) => (
              <div key={key}>
                <div className="text-center mb-10">
                  <div className="gold-divider mx-auto mb-5"></div>
                  <h2 className="font-serif text-3xl font-semibold text-gray-900">{data.title}</h2>
                </div>
                <CategorySection categoryData={data} isVisible={true} openModal={openModal} />
              </div>
            ))
          : Object.entries(resultsData).map(([key, data]) => (
              <CategorySection
                key={key}
                categoryData={data}
                isVisible={categoryMap[selectedCategory] === key}
                openModal={openModal}
              />
            ))
        }

      </div>

      {/* CTA */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-gray-400 mb-8">
            Join thousands of satisfied patients who have achieved their aesthetic goals at Skin Win Clinic.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#C09A50] hover:bg-[#B08A40] text-white font-bold py-3 px-10 rounded-xl shadow-md transition duration-300"
          >
            Book Your Consultation
          </Link>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        beforeImage={modalImages.before}
        afterImage={modalImages.after}
      />
    </div>
  );
};

export default Results;