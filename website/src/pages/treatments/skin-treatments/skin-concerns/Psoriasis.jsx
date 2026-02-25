import React from 'react';

const Psoriasis = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Psoriasis Treatment at Skin Win Clinic
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive dermatological care to control psoriasis symptoms, reduce flare-ups, and improve skin comfort and quality of life.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is Psoriasis? */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What Is Psoriasis?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              <strong>Psoriasis</strong> is a <strong>chronic, non-contagious autoimmune skin condition</strong> in which skin cells multiply faster than normal, leading to <strong>thick, red patches covered with silvery-white scales</strong>. It can affect the skin, scalp, nails, and sometimes joints.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Psoriasis is a <strong>long-term condition</strong> with periods of flare-ups and remission, but with proper treatment it can be <strong>effectively controlled</strong>.
            </p>
          </div>
        </section>

        {/* Common Types of Psoriasis */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Common Types of Psoriasis</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-gray-700 mb-6 text-lg">Psoriasis can appear in different forms, including:</p>
            <ul className="space-y-4 mb-6">
              {[
                <span key="plaque"><strong>Plaque Psoriasis</strong> – most common type; thick, scaly patches</span>,
                <span key="scalp"><strong>Scalp Psoriasis</strong> – affects scalp and hairline</span>,
                <span key="guttate"><strong>Guttate Psoriasis</strong> – small drop-like lesions, often after infection</span>,
                <span key="inverse"><strong>Inverse Psoriasis</strong> – smooth patches in skin folds</span>,
                <span key="pustular"><strong>Pustular Psoriasis</strong> – pus-filled blisters (less common)</span>,
                <span key="nail"><strong>Nail Psoriasis</strong> – pitting, discoloration, nail thickening</span>
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#FBF5E9] p-4 rounded-lg flex items-center">
              <span className="text-2xl mr-3">👉</span>
              <p className="text-gray-800 font-medium italic">Correct identification of psoriasis type is essential for effective management.</p>
            </div>
          </div>
        </section>

        {/* Causes & Triggers of Psoriasis */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Causes & Triggers of Psoriasis</h2>
          </div>

          <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
            <p className="text-xl font-semibold text-gray-900 mb-6">
              Psoriasis is caused by <strong>immune system dysfunction</strong>, but flare-ups may be triggered by:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Stress",
                "Infections",
                "Cold weather",
                "Skin injury",
                "Certain medications",
                "Smoking or alcohol",
                "Hormonal changes"
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-red-50">
                  <span className="bg-red-100 text-red-500 p-1 rounded-full mr-3 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Psoriasis;