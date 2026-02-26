import React, { useState } from 'react';

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

const Mesotherapy = () => {
  const faqs = [
    {
      question: "What is mesotherapy for hair loss?",
      answer: "Mesotherapy involves injecting a nutrient-rich solution directly into the scalp to nourish hair follicles and strengthen hair roots."
    },
    {
      question: "How many mesotherapy sessions are required?",
      answer: "Multiple sessions are usually required, depending on hair condition and treatment response."
    },
    {
      question: "Is mesotherapy painful?",
      answer: "Discomfort is mild and generally well tolerated."
    },
    {
      question: "When will I start seeing results?",
      answer: "Improvement in hair quality and reduction in hair fall can be noticed gradually after a few sessions."
    },
    {
      question: "Is mesotherapy safe?",
      answer: "Yes. When performed under medical supervision, mesotherapy is safe and effective."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Mesotherapy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Targeted scalp therapy to nourish hair roots and improve hair strength.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Procedure Explanation */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What is Hair Mesotherapy?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg">
              <strong>Mesotherapy</strong> involves injecting a customized blend of vitamins, minerals, amino acids, and growth factors directly into the scalp. This nourishes hair follicles, improves blood circulation, and strengthens hair roots.
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
              How the Procedure Works
            </h3>
            <ul className="space-y-4">
              {[
                "Scalp assessment",
                "Preparation of nutrient solution",
                "Micro-injections into scalp",
                "Strengthening of hair follicles"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
              Who It’s For
            </h3>
            <ul className="space-y-4">
              {[
                "Hair thinning",
                "Weak or damaged hair",
                "Early to moderate hair loss",
                "Patients with nutritional deficiencies"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
                  "Improves hair strength",
                  "Reduces hair fall",
                  "Nourishes scalp directly"
                ].map((item, index) => (
                  <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Possible Risks</h3>
              <ul className="space-y-4">
                {[
                  "Mild discomfort",
                  "Temporary redness"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="h-2 w-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Pre & Post Care */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Pre & Post Treatment Care</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-50/50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                Pre-Treatment Care
              </h3>
              <ul className="space-y-4">
                {[
                  "Ensure scalp is clean and infection-free",
                  "Inform the doctor about scalp sensitivity",
                  "Avoid oiling the scalp before treatment (if advised)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 bg-indigo-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-teal-50/50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                Post-Treatment Care
              </h3>
              <ul className="space-y-4">
                {[
                  "Avoid washing hair immediately after the session",
                  "Follow scalp care instructions",
                  "Attend multiple sessions for best results"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-2 w-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Before & After Results */}
        <section className="bg-gray-50 rounded-3xl p-8 md:p-12 text-center border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Before & After</h2>
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-gray-500 mb-8 max-w-4xl mx-auto">
            <span className="block text-lg font-medium">[ Mesotherapy Before & After Gallery ]</span>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">FAQs</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Mesotherapy;