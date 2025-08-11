import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal'; // Import the Modal component

// Prop validation




// Data for results
const resultsData = {
    skinCare: {
    title: "Advanced Skin Care Results",
    treatments: [
      {
        folder: "Botox",
        title: "Botox Anti-Aging",
        description: "Wrinkle reduction and facial rejuvenation",
        resultCount: 1 // No subfolders, so 1 result
      },
      {
        folder: "Carbon Facial",
        title: "Carbon Facial Treatment",
        description: "Deep pore cleansing and skin brightening",
        resultCount: 1
      },
      {
        folder: "HIFU",
        title: "HIFU Non-Surgical Lift",
        description: "Skin tightening and lifting without surgery",
        resultCount: 3 // Has subfolders 1, 2, 3
      },
      {
        folder: "Pore Clarifying",
        title: "Pore Clarifying Treatment",
        description: "Deep pore cleansing and minimization",
        resultCount: 1
      }
    ]
  },
  laserTreatments: {
    title: "Laser & Pigmentation Results",
    treatments: [
      {
        folder: "Pigmentation",
        title: "Pigmentation Removal",
        description: "Melasma, age spots, and hyperpigmentation treatment",
        resultCount: 1
      },
      {
        folder: "Freckles",
        title: "Freckles Removal",
        description: "Safe and effective freckle removal using Q-Switch laser",
        resultCount: 1
      },
      {
        folder: "Nevus of OTA",
        title: "Nevus of OTA Treatment",
        description: "Birthmark removal with advanced laser technology",
        resultCount: 1
      },
      {
        folder: "Laser Hair Reduction",
        title: "Laser Hair Reduction",
        description: "Permanent hair reduction for face and body",
        resultCount: 1
      }
    ]
  },
  hairRestoration: {
    title: "Hair Restoration Results",
    treatments: [
      {
        folder: "Hair Transplant",
        title: "Hair Transplant (FUE/DHI)",
        description: "Natural hairline restoration with advanced techniques",
        resultCount: 7 // Has subfolders 1-7
      },
      {
        folder: "Beard Transplant",
        title: "Beard Transplant",
        description: "Fuller beard restoration for enhanced appearance",
        resultCount: 1
      },
      {
        folder: "Hair Fall",
        title: "Hair Fall Treatment",
        description: "Non-surgical hair regrowth with PRP and mesotherapy",
        resultCount: 10 // Has subfolders 1-10
      }
    ]
  },
  specialtyTreatments: {
    title: "Specialty Procedures Results",
    treatments: [
      {
        folder: "Acne Scars",
        title: "Acne Scar Treatment",
        description: "Dramatic improvement in acne scarring using advanced treatments",
        resultCount: 9 // Has subfolders 1-9
      },
      {
        folder: "Burn Scar",
        title: "Burn Scar Treatment",
        description: "Scar revision and skin texture improvement",
        resultCount: 1
      },
      {
        folder: "Mole Removal",
        title: "Mole Removal",
        description: "Safe and precise mole removal with minimal scarring",
        resultCount: 1
      },
      {
        folder: "Removal Of DPN",
        title: "DPN Removal",
        description: "Dermatosis Papulosa Nigra removal treatment",
        resultCount: 1
      },
      {
        folder: "Vitiligo",
        title: "Vitiligo Treatment",
        description: "Advanced treatment for vitiligo and skin repigmentation",
        resultCount: 1
      }
    ]
  }
};

const allCategories = ["All", "Advanced Skin Care", "Laser & Pigmentation", "Hair Restoration", "Specialty Procedures"];

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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="grid grid-cols-2 gap-0">
        <div className="relative">
          <img
            src={beforeImage}
            alt={`${treatment.title} - Before treatment`}
            className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(beforeImage, afterImage)}
            onError={(e) => {
              e.target.src = `https://placehold.co/400x300/f3f4f6/6b7280?text=Before+${treatment.title.replace(/\s+/g, '+')}`;
            }}
          />
          <div className="absolute bottom-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
            BEFORE
          </div>
        </div>
        <div className="relative">
          <img
            src={afterImage}
            alt={`${treatment.title} - After treatment`}
            className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openModal(beforeImage, afterImage)}
            onError={(e) => {
              e.target.src = `https://placehold.co/400x300/f3f4f6/6b7280?text=After+${treatment.title.replace(/\s+/g, '+')}`;
            }}
          />
          <div className="absolute bottom-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
            AFTER
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          {treatment.title}
          {treatment.resultCount > 1 && resultIndex && (
            <span className="text-sm font-normal text-gray-500 ml-2">
              (Result {resultIndex} of {treatment.resultCount})
            </span>
          )}
        </h3>
        <p className="text-gray-600 text-sm">{treatment.description}</p>
      </div>
    </div>
  );
};

BeforeAfterCard.propTypes = {
  treatment: PropTypes.object.isRequired,
  resultIndex: PropTypes.number,
  openModal: PropTypes.func.isRequired,
};

const CategorySection = ({ categoryKey, categoryData, isVisible, openModal }) => {
  if (!isVisible) return null;

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
        {categoryData.title}
      </h3>
      <div className="space-y-12">
        {categoryData.treatments.map((treatment, treatmentIndex) => (
          <div key={treatmentIndex}>
            <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              {treatment.title}
            </h4>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {treatment.resultCount > 1 ? (
                Array.from({ length: treatment.resultCount }, (_, index) => (
                  <BeforeAfterCard
                    key={index}
                    treatment={treatment}
                    resultIndex={index + 1}
                    openModal={openModal}
                  />
                ))
              ) : (
                <BeforeAfterCard treatment={treatment} openModal={openModal} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CategorySection.propTypes = {
  categoryKey: PropTypes.string.isRequired,
  categoryData: PropTypes.object.isRequired,
  isVisible: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
};

const Results = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState({ before: '', after: '' });

    const openModal = (beforeUrl, afterUrl) => {
      setModalImages({ before: beforeUrl, after: afterUrl });
      setModalOpen(true);
    };

    const closeModal = () => {
      setModalOpen(false);
      // It's good practice to clear the state, though not strictly necessary
      setTimeout(() => setModalImages({ before: '', after: '' }), 300);
    };

  const getCategoryKey = (categoryName) => {
    const categoryMap = {
      "Advanced Skin Care": "skinCare",
      "Laser & Pigmentation": "laserTreatments",
      "Hair Restoration": "hairRestoration",
      "Specialty Procedures": "specialtyTreatments"
    };
    return categoryMap[categoryName] || null;
  };

  return (
    <div className="bg-white py-20 sm:py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">Our Results</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Transformations That Speak for Themselves
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            See the remarkable before and after results from our advanced treatments. Each transformation represents our commitment to excellence and patient satisfaction.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? 'bg-[#C09A50] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-[#FBF5E9]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results Grid */}
        <div className="mt-16">
          {selectedCategory === "All" ? (
            Object.entries(resultsData).map(([categoryKey, categoryData]) => (
              <CategorySection
                key={categoryKey}
                categoryKey={categoryKey}
                categoryData={categoryData}
                isVisible={true}
                openModal={openModal}
              />
            ))
          ) : (
            Object.entries(resultsData).map(([categoryKey, categoryData]) => {
              const shouldShow = getCategoryKey(selectedCategory) === categoryKey;
              return (
                <CategorySection
                  key={categoryKey}
                  categoryKey={categoryKey}
                  categoryData={categoryData}
                  isVisible={shouldShow}
                  openModal={openModal}
                />
              );
            })
          )}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-[#FBF5E9] rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#C09A50]">50+</div>
              <div className="text-gray-600">Result Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C09A50]">3000+</div>
              <div className="text-gray-600">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C09A50]">1000+</div>
              <div className="text-gray-600">Hair Transplants</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#C09A50]">15+</div>
              <div className="text-gray-600">Treatment Categories</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#C09A50] to-[#B8903D] p-8 rounded-lg text-white">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Begin Your Transformation?
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Join thousands of satisfied patients who have achieved their aesthetic goals with Skin Win.
            </p>
            <button className="bg-white text-[#C09A50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200">
              Book Your Consultation
            </button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 italic">
            *Individual results may vary. Photos shown are actual patient results with proper consent.
            Actual results depend on individual factors and treatment compliance.
          </p>
        </div>
      </div>
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
