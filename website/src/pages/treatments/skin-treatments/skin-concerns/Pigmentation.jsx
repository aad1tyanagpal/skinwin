import React, { useState } from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#C09A50] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 pr-4">{answer}</p>
      </div>
    </div>
  );
};

const Pigmentation = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Pigmentation & Melasma Treatment
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Safe and effective solutions to restore even, radiant skin tone.
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

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Pigmentation and melasma occur due to excess melanin production. Treatment focuses on
              <strong> lightening dark patches, improving skin tone, and preventing recurrence</strong> with safe, gradual methods.
            </p>
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
            <ul className="space-y-4">
              {[
                "Melasma",
                "Dark spots & uneven pigmentation",
                "Hormonal pigmentation"
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
        </section>

        {/* Benefits & Risks */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Benefits & Risks</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#FBF5E9]">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Brighter, even skin tone",
                  "Reduced dark patches"
                ].map((item, index) => (
                  <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3"></span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Possible Risks</h3>
              <ul className="space-y-4">
                {[
                  "Temporary redness or sensitivity"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-red-400 rounded-full mr-3"></span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Before & After section */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Before & After</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-500 text-lg">Images coming soon...</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">FAQ</h2>
          </div>
          <div className="max-w-3xl">
            <FAQItem
              question="Q1. What causes pigmentation and melasma?"
              answer="Pigmentation can be caused by sun exposure, hormonal changes, genetics, or skin inflammation."
            />
            <FAQItem
              question="Q2. Can pigmentation be completely cured?"
              answer="Pigmentation can be effectively reduced and controlled, but maintenance may be required to prevent recurrence."
            />
            <FAQItem
              question="Q3. How long does it take to see results?"
              answer="Visible improvement is usually seen gradually over a few sessions."
            />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Pigmentation;