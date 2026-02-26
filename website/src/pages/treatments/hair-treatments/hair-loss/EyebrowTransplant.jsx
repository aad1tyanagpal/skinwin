import React from 'react';

const EyebrowTransplant = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Eyebrow Transplant
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A permanent solution to restore thin, sparse, or missing eyebrows with natural-looking hair growth.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is an Eyebrow Transplant? */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What Is an Eyebrow Transplant?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              An Eyebrow Transplant is a <strong>hair restoration procedure</strong> in which healthy hair follicles are extracted from the scalp (usually from the back of the head) and carefully implanted into the eyebrow area to restore <strong>density, shape, and symmetry</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              The procedure requires <strong>high precision</strong>, as eyebrow hair grows in a specific direction and angle. At Skin Win Clinic, eyebrow transplants are performed with meticulous attention to detail to achieve <strong>natural and aesthetically pleasing results</strong>.
            </p>
          </div>
        </section>

        {/* Why Eyebrow Transplant Is Needed */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Why Eyebrow Transplant Is Needed</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-gray-700 mb-6 text-lg">Eyebrow hair loss or thinning may occur due to:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Over-plucking or threading",
                "Genetic factors",
                "Trauma or scars",
                "Medical conditions",
                "Age-related thinning",
                "Previous cosmetic procedures"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Procedure Explanation & How It Works */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Procedure Explanation</h2>
          </div>

          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              How Eyebrow Transplant Works
            </h3>
            <ul className="space-y-4 mb-6">
              {[
                "Detailed eyebrow assessment and design planning",
                "Selection of suitable donor hair (scalp)",
                "Extraction of fine hair follicles using FUE technique",
                "Precise implantation following natural eyebrow direction",
                "Careful placement for symmetry and density"
              ].map((item, index) => (
                <li key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="text-blue-500 mr-3 flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-800 font-medium italic">The procedure is performed under local anesthesia and is minimally invasive.</p>
          </div>
        </section>

        {/* Who It's For */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Who It’s For</h2>
          </div>
          <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Suitable for:
            </h3>
            <p className="text-gray-700 italic">More details to be provided...</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default EyebrowTransplant;