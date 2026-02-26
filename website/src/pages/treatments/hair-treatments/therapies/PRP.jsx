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

const PRP = () => {
  const faqs = [
    {
      question: "How many PRP sessions are required?",
      answer: "Most patients require multiple sessions, usually spaced a few weeks apart."
    },
    {
      question: "When will I see results?",
      answer: "Visible improvement is generally noticed after a few sessions, with gradual hair regrowth."
    },
    {
      question: "Is PRP Therapy painful?",
      answer: "Discomfort is minimal and well tolerated by most patients."
    },
    {
      question: "Is there any downtime?",
      answer: "No significant downtime. Daily activities can be resumed immediately."
    },
    {
      question: "Is PRP Therapy safe?",
      answer: "Yes. PRP uses the patient’s own blood and is performed under medical supervision."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            PRP Therapy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A natural, non-surgical treatment to strengthen hair follicles and promote healthy hair regrowth.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Procedure Explanation */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What is PRP Therapy?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              <strong>PRP (Platelet-Rich Plasma) Therapy</strong> is a regenerative treatment that uses the patient’s own blood to stimulate hair growth. Platelets are rich in growth factors that help strengthen hair roots, reduce hair fall, and improve hair thickness.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, PRP Therapy is performed under medical supervision using advanced processing techniques to ensure safety and effective results.
            </p>
          </div>
        </section>

        {/* How the Procedure Works */}
        <section>
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              How the Procedure Works
            </h3>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Blood sample collection",
                "Separation of platelet-rich plasma",
                "Injection of PRP into targeted scalp areas",
                "Stimulation of dormant hair follicles",
                "Follow-up sessions as required"
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
          </div>
        </section>

        {/* Who It’s For */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              Suitable For:
            </h3>
            <ul className="space-y-4">
              {[
                "Early to moderate hair loss",
                "Thinning hair and reduced hair density",
                "Male and female pattern hair loss",
                "Individuals looking for non-surgical hair regrowth"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-red-100 text-red-600 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              Not Suitable For:
            </h3>
            <ul className="space-y-4">
              {[
                "Advanced baldness with inactive follicles",
                "Certain medical conditions (assessed during consultation)"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-gray-800 font-medium bg-red-100 p-3 rounded-lg border border-red-200">
              👉 A consultation is required to confirm suitability.
            </p>
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
                  "Natural treatment using the patient’s own blood",
                  "Strengthens hair follicles",
                  "Reduces hair fall",
                  "Improves hair thickness and density",
                  "Non-surgical with minimal downtime"
                ].map((item, index) => (
                  <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Possible Risks / Side Effects</h3>
              <ul className="space-y-4">
                {[
                  "Mild scalp tenderness",
                  "Temporary redness or swelling",
                  "Results may vary from person to person"
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
                  "Avoid smoking and alcohol before the procedure",
                  "Inform the doctor about medications or medical history",
                  "Follow all instructions given during consultation"
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
                  "Avoid touching or scratching the scalp",
                  "Follow hair washing and medication instructions",
                  "Avoid strenuous activity for a few days",
                  "Attend follow-up appointments as scheduled"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Patient Transformations</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            See visible improvement in hair thickness and reduced hair fall with PRP Therapy at Skinwin Clinic.
          </p>
          <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-12 text-gray-500 mb-8">
            <span className="block text-lg font-medium">[ PRP Therapy Before & After Gallery – 2–4 Images ]</span>
          </div>
          <p className="text-sm text-gray-500 italic">Disclaimer: Results may vary from person to person.</p>
        </section>

        {/* FAQs */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
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

export default PRP;