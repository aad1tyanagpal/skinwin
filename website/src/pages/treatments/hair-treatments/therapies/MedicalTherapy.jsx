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

const MedicalTherapy = () => {
  const faqs = [
    {
      question: "What does medical hair loss treatment include?",
      answer: "Medical therapy includes doctor-prescribed medicines and supplements designed to control hair fall and support hair regrowth."
    },
    {
      question: "Who is medical therapy suitable for?",
      answer: "It is most effective for early-stage hair loss, diffuse hair fall, or hair loss caused by nutritional or hormonal imbalance."
    },
    {
      question: "How long do I need to take the medicines?",
      answer: "Duration varies depending on the condition and response to treatment. Regular follow-up is required."
    },
    {
      question: "Are there any side effects of medical treatment?",
      answer: "Side effects are usually mild and depend on the medication. All details are explained during consultation."
    },
    {
      question: "Can medical therapy be combined with other treatments?",
      answer: "Yes. Medical therapy is often combined with PRP, GFC, or LLLT for better results."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Medical Therapy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Doctor-prescribed medical treatment to control hair fall and support regrowth.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Procedure Explanation */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What is Medical Hair Loss Therapy?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg">
              Medical therapy includes clinically approved medications and supplements that help control hair fall, improve hair quality, and correct underlying deficiencies. Treatment is customized based on diagnosis and hair loss type.
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
                "Medical evaluation",
                "Identification of nutritional or hormonal causes",
                "Prescription of appropriate medicines",
                "Regular monitoring and adjustments"
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
                "Early hair loss",
                "Diffuse hair fall",
                "Nutritional or hormonal hair loss",
                "Men and women"
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
                  "Controls hair fall",
                  "Improves scalp health",
                  "Non-invasive treatment"
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
                  "Mild side effects depending on medication",
                  "Requires regular follow-up"
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

export default MedicalTherapy;