import React from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#C09A50] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const HydraFacial = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Hydra Facial
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Instant glow, deep hydration, and healthier skin with a non-invasive facial treatment.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Procedure Explanation */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Procedure Explanation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is HydraFacial?</h3>
              <p className="text-gray-600 leading-relaxed">
                HydraFacial is a non-invasive, multi-step facial treatment that deeply cleanses, exfoliates,
                extracts impurities, and hydrates the skin using medical-grade serums. It improves overall
                skin health while delivering instant glow with no downtime.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How the procedure works:</h3>
              <ul className="space-y-4">
                {[
                  "Gentle cleansing and exfoliation",
                  "Painless extraction of impurities",
                  "Deep hydration with nourishing serums",
                  "Skin protection and glow enhancement"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Who It's For */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Who It's For</h2>
          </div>

          <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#FBF5E9]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Dull or dehydrated skin",
                "Uneven skin tone and texture",
                "Mild pigmentation and clogged pores",
                "All skin types, including sensitive skin",
                "Anyone looking for instant glow and maintenance care"
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3"></span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Risks */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Benefits & Risks</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Benefits
              </h3>
              <ul className="space-y-4">
                {[
                  "Instant glow and hydration",
                  "Improved skin texture and clarity",
                  "No pain and no downtime",
                  "Safe for regular skin maintenance"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
                Possible Risks
              </h3>
              <ul className="space-y-4">
                {[
                  "Very mild redness in rare cases",
                  "Results may vary from person to person"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HydraFacial;