import React from 'react';

const HairTransplant = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Hair Transplant
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A permanent surgical solution for baldness to restore healthy hair and confidence.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is Hair Transplant? */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What Is Hair Transplant?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              A <strong>Hair Transplant</strong> is a <strong>permanent surgical solution</strong> for baldness where healthy hair follicles are transplanted from the donor area (back of scalp) to bald or thinning areas.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, advanced <strong>FUE technique</strong> is used for natural results.
            </p>
          </div>
        </section>

        {/* How It Works & Best For */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
            <ul className="space-y-4">
              {[
                "Hair follicles extracted individually",
                "Implanted in natural hair pattern",
                "Transplanted hair grows permanently"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Best For
            </h3>
            <ul className="space-y-4">
              {[
                "Advanced hair loss",
                "Receding hairline",
                "Bald patches",
                "Crown baldness"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefits & Recovery */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Benefits & Recovery</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#FBF5E9]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Permanent hair restoration",
                  "Natural-looking results",
                  "Improved confidence"
                ].map((item, index) => (
                  <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3"></span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Recovery
              </h3>
              <ul className="space-y-4">
                {[
                  "Minimal downtime",
                  "Visible growth in 3–4 months",
                  "Final results in 9–12 months"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-blue-400 rounded-full mr-3"></span>
                    <span className="text-gray-700 font-medium">{item}</span>
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

export default HairTransplant;