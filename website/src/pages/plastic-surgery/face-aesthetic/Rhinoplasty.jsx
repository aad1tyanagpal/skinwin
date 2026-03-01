import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-gray-900 font-medium">{question}</span>
        <svg
          className={`w-5 h-5 text-[#C09A50] transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
};

const SectionHeader = ({ title }) => (
  <div className="flex items-center mb-6">
    <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
  </div>
);

const Rhinoplasty = () => {
  const faqs = [
    {
      question: "Is rhinoplasty permanent?",
      answer: "Yes, results are long-lasting once healing is complete. The structural changes made during surgery are permanent."
    },
    {
      question: "Will there be visible scars?",
      answer: "Scars are minimal and usually well hidden — typically inside the nose or in the natural crease between the nostrils."
    },
    {
      question: "How long is recovery?",
      answer: "Initial recovery takes 1–2 weeks. Swelling gradually settles over a few months, with final results visible after about a year."
    },
    {
      question: "Is rhinoplasty painful?",
      answer: "Discomfort is manageable and well controlled with prescribed medication during the recovery period."
    },
    {
      question: "Can rhinoplasty fix breathing problems too?",
      answer: "Yes. Functional rhinoplasty corrects structural issues like a deviated septum that cause breathing difficulties."
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">
            Face Aesthetic · Plastic Surgery
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Rhinoplasty
          </h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Nose Surgery)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Reshape, refine, and restore your nose for improved facial harmony and natural-looking results.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is */}
        <section>
          <SectionHeader title="What Is Rhinoplasty?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Rhinoplasty is a surgical procedure performed to improve the{' '}
              <strong>shape, size, proportion, or function of the nose</strong>. It can be
              done for cosmetic enhancement as well as to correct breathing problems caused
              by structural issues such as a deviated septum.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, rhinoplasty is performed with precision and artistry to
              deliver <strong>natural-looking results</strong> that complement your unique
              facial features — under expert surgical supervision.
            </p>
          </div>
        </section>

        {/* Types */}
        <section>
          <SectionHeader title="Types of Rhinoplasty" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                type: "Cosmetic Rhinoplasty",
                desc: "Reshapes the nose to improve appearance — correcting humps, width, tip shape, or asymmetry for better facial balance.",
                color: "border-[#C09A50]/30 bg-[#FBF5E9]/50"
              },
              {
                type: "Functional Rhinoplasty",
                desc: "Corrects structural issues like a deviated septum or collapsed nasal valves to improve breathing and nasal function.",
                color: "border-blue-100 bg-blue-50/40"
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${item.color}`}>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.type}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section>
          <SectionHeader title="Who It's For" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Suitable for:</h3>
              <ul className="space-y-3">
                {[
                  "Crooked or asymmetrical nose",
                  "Broad, flat, or overly large nose",
                  "Nose hump or bump on the bridge",
                  "Drooping or bulbous nasal tip",
                  "Breathing difficulties due to structural issues",
                  "Post-injury nasal deformity",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important Considerations:</h3>
              <ul className="space-y-3">
                {[
                  "Best suited for adults with fully developed facial structure",
                  "Good overall health is required before surgery",
                  "Realistic expectations are important for satisfaction",
                  "Non-smokers or those who can stop smoking before surgery",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                👉 A consultation is required to confirm suitability and plan the procedure.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Pre-surgical consultation, photographs & planning",
                "General or local anaesthesia administered",
                "Incisions made (open or closed technique)",
                "Reshaping of bone, cartilage, and soft tissue",
                "Incisions closed, splint or cast applied",
                "Recovery monitoring and follow-up care",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Procedure Type", value: "Surgical" },
                { label: "Anaesthesia", value: "General / Local" },
                { label: "Recovery", value: "1–2 weeks initial" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-50">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-gray-900 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits & Risks */}
        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Improved facial harmony and proportion",
                  "Enhanced nose shape and symmetry",
                  "Better nasal breathing (functional correction)",
                  "Long-lasting, permanent results",
                  "Boost in self-confidence and appearance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Possible Risks</h3>
              <ul className="space-y-3">
                {[
                  "Temporary swelling and bruising",
                  "Healing time varies per individual",
                  "Mild discomfort during recovery",
                  "Final results take several months to fully settle",
                  "Results may vary from person to person",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section>
          <SectionHeader title="Before & After" />
          <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">[ Rhinoplasty Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        {/* Pre & Post Care */}
        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {[
                  "Avoid smoking and alcohol before surgery",
                  "Inform the doctor about all medications and medical conditions",
                  "Avoid blood-thinning medicines as advised",
                  "Follow all pre-surgery instructions carefully",
                  "Arrange for someone to accompany you on surgery day",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">After Surgery</h3>
              <ul className="space-y-3">
                {[
                  "Avoid touching or putting pressure on the nose",
                  "Follow all medication and cleaning instructions",
                  "Avoid strenuous activity and heavy exercise",
                  "Avoid sun exposure during healing",
                  "Attend all follow-up visits as scheduled",
                  "Sleep with head elevated to reduce swelling",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#FBF5E9] rounded-2xl p-8 text-center border border-[#C09A50]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to Reshape Your Nose?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a consultation with our surgical experts for a personalized assessment and treatment plan.
          </p>
          <a
            href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Rhinoplasty%20(Nose%20Surgery)."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors"
          >
            Book Consultation
          </a>
        </div>

      </div>
    </div>
  );
};

export default Rhinoplasty;