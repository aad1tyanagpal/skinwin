import React from 'react';

const Dandruff = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Dandruff Treatment
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Effective medical treatment to control dandruff, itching, and scalp irritation.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Procedure Explanation */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What is Dandruff Treatment?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Dandruff is a common scalp condition caused by excess oil production, fungal growth, dryness, or sensitivity of the scalp. It can lead to flaking, itching, redness, and hair fall if left untreated.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, dandruff treatment focuses on <strong>identifying the root cause</strong>, controlling flakes, soothing the scalp, and preventing recurrence through <strong>medical-grade scalp therapies and personalized care</strong>.
            </p>
          </div>
        </section>

        {/* How the Procedure Works & Who It's For*/}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              How the Treatment Works
            </h3>
            <ul className="space-y-4">
              {[
                "Detailed scalp examination",
                "Identification of dandruff type (dry, oily, fungal, or sensitive scalp)",
                "Customized treatment plan",
                "Medical scalp therapies and prescribed care",
                "Follow-up to prevent recurrence"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4">
            <div className="bg-green-50/50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Suitable For:
              </h3>
              <ul className="space-y-3">
                {[
                  "Persistent dandruff or flaky scalp",
                  "Itching, redness, or scalp irritation",
                  "Oily or dry scalp conditions",
                  "Dandruff-related hair fall"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-2xl p-6 border border-red-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                Not Suitable For:
              </h3>
              <ul className="space-y-3">
                {[
                  "Certain scalp infections requiring specialized care (assessed during consultation)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-800 font-medium text-sm">
                👉 A consultation is required to determine the appropriate treatment.
              </p>
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
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#FBF5E9]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Controls dandruff and scalp flakes",
                  "Reduces itching and irritation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-500 italic text-sm">More details to be provided...</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Dandruff;