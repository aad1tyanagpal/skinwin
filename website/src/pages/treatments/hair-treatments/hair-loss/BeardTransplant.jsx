import React from 'react';

const BeardTransplant = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Beard Transplant
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A permanent solution to achieve a fuller, well-shaped, and natural-looking beard using advanced hair transplant techniques.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is a Beard Transplant? */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What Is a Beard Transplant?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              A Beard Transplant is a <strong>hair restoration procedure</strong> in which healthy hair follicles are taken from the scalp (usually the back of the head) and transplanted into areas of the beard with <strong>patchy growth, low density, or complete hair absence</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              The transplanted hair grows naturally and permanently, allowing patients to <strong>shave, trim, and style</strong> their beard as desired.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, beard transplants are performed with <strong>high precision</strong> to ensure correct hair direction, angle, and density for natural results.
            </p>
          </div>
        </section>

        {/* Why Beard Transplant Is Needed */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Why Beard Transplant Is Needed</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-gray-700 mb-6 text-lg">Men may opt for a beard transplant due to:</p>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Patchy or uneven beard growth",
                "Genetic lack of beard density",
                "Beard scars or trauma-related hair loss",
                "Hormonal or developmental factors",
                "Desire for a fuller, well-defined beard"
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
              How Beard Transplant Works
            </h3>
            <ul className="space-y-4 mb-6">
              {[
                "Detailed beard and facial assessment",
                "Donor area selection (usually scalp)",
                "Extraction of healthy hair follicles (FUE technique)",
                "Precise implantation into beard area",
                "Attention to hair angle and direction for natural look"
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

export default BeardTransplant;