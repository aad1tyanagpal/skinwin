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

const Acne = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Acne, Pimples & Scars
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Comprehensive medical treatments to control acne and restore smooth, clear skin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ==================== ACNE & PIMPLES SECTION ==================== */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#C09A50] border-b-2 border-[#C09A50] pb-2">Acne & Pimples Treatment</h2>
          </div>

          <div className="space-y-16">
            {/* Procedure Explanation */}
            <section>
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Procedure Explanation</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">What is Acne & Pimples Treatment?</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Acne and pimples occur due to clogged pores, excess oil production, bacterial infection, and hormonal imbalance.
                    At Skin Win Clinic, acne treatment focuses on treating the root cause, controlling active breakouts,
                    and preventing future acne.
                  </p>
                  <p className="text-gray-600 leading-relaxed font-medium">
                    Each treatment plan is customized after a detailed skin assessment and may include medical skincare,
                    advanced procedures, and lifestyle guidance to achieve long-term results.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">How the treatment works:</h4>
                  <ul className="space-y-4">
                    {[
                      "Detailed skin analysis by a medical expert",
                      "Identification of acne type and severity",
                      "Customized treatment plan",
                      "Regular follow-ups for safe and effective results"
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

            {/* Who Is This Treatment For? */}
            <section>
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Who Is This Treatment For?</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Suitable for:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Individuals with active acne or frequent breakouts",
                      "Oily or acne-prone skin",
                      "Teenagers and adults",
                      "Mild, moderate, or severe acne cases",
                      "Acne with redness, inflammation, or pus-filled pimples"
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

                <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    Not suitable for:
                  </h4>
                  <ul className="space-y-4">
                    {[
                      "Certain active skin infections",
                      "Special medical conditions (evaluated during consultation)"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-start text-amber-700 bg-amber-50 p-4 rounded-lg">
                    <span className="text-xl mr-2">👉</span>
                    <p className="text-sm font-medium">A consultation is required to determine the right treatment approach.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits & Risks */}
            <section>
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Benefits & Risks</h3>
              </div>

              <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#FBF5E9]">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h4>
                <ul className="grid md:grid-cols-3 gap-6">
                  {[
                    "Controls active acne and pimples",
                    "Reduces inflammation and redness",
                    "Prevents future breakouts and scarring"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                      <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3"></span>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>
        </div>

        {/* ==================== ACNE SCARS SECTION ==================== */}
        <div>
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-extrabold text-[#C09A50] border-b-2 border-[#C09A50] pb-2">Acne Scar Treatment</h2>
          </div>

          <div className="space-y-16">
            {/* Procedure Explanation */}
            <section>
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Procedure Explanation</h3>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                  Acne scars are caused by deep inflammation that damages skin tissue. Acne scar treatment at
                  Skin Win Clinic focuses on <strong>improving skin texture, reducing scar depth, and stimulating
                    collagen production</strong> using advanced medical techniques.
                </p>
              </div>
            </section>

            {/* Who It's For */}
            <section>
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">Who It’s For</h3>
              </div>

              <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Suitable for:
                </h4>
                <ul className="space-y-4">
                  {[
                    "Pitted, box scars, rolling scars",
                    "Old or stubborn acne scars",
                    "Uneven skin texture due to acne"
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
                <h3 className="text-2xl font-bold text-gray-900">Benefits & Risks</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#FBF5E9]">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Benefits</h4>
                  <ul className="space-y-4">
                    {[
                      "Smoother skin texture",
                      "Reduced scar visibility",
                      "Improved collagen production"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                        <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3"></span>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">Possible Risks</h4>
                  <ul className="space-y-4">
                    {[
                      "Temporary redness",
                      "Mild swelling"
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

            {/* FAQ Section */}
            <section>
              <div className="flex items-center mb-6">
                <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                <h3 className="text-2xl font-bold text-gray-900">FAQ - Acne Scars</h3>
              </div>
              <div className="max-w-3xl">
                <FAQItem
                  question="Q1. Can acne scars be completely removed?"
                  answer="Acne scars can be significantly reduced and improved. Complete removal depends on the type, depth, and severity of the scars."
                />
                <FAQItem
                  question="Q2. How many sessions are required for acne scar treatment?"
                  answer="Multiple sessions are usually required, depending on scar type and skin response."
                />
                <FAQItem
                  question="Q3. Is acne scar treatment painful?"
                  answer="Most procedures involve minimal discomfort. Comfort measures are used when needed."
                />
              </div>
            </section>
          </div>
        </div>

        {/* Prior to Before & After section */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Before & After</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-500 text-lg">Images coming soon...</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Acne;