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

const FaceLift = () => {
  const faqs = [
    {
      question: "Will my face look natural after a facelift?",
      answer: "Yes. The goal of a facelift at Skin Win Clinic is natural-looking rejuvenation — restoring a refreshed, youthful appearance without an overdone look."
    },
    {
      question: "How long do facelift results last?",
      answer: "Results are long-lasting, typically 7–10 years. Ageing continues naturally after surgery, but you will always look younger than if you had not had the procedure."
    },
    {
      question: "Is there downtime after a facelift?",
      answer: "Yes. Initial recovery takes 2–3 weeks. Most patients can return to light activities within 2 weeks, with full healing over a few months."
    },
    {
      question: "Will there be visible scars?",
      answer: "Incisions are carefully placed along the hairline and behind the ears to minimize visibility. Scars fade significantly over time."
    },
    {
      question: "Is a facelift painful?",
      answer: "Discomfort is manageable and controlled with prescribed medication during recovery. Most patients describe it as mild to moderate."
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
            Face Lift
          </h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Rhytidectomy)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Turn back the clock with a surgical facelift that tightens sagging skin and restores a youthful, refreshed appearance.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is */}
        <section>
          <SectionHeader title="What Is a Face Lift?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              A Face Lift (Rhytidectomy) is a surgical procedure that tightens sagging skin and
              underlying tissues of the face and neck, restoring a{' '}
              <strong>youthful and refreshed appearance</strong>. It addresses the visible signs
              of ageing — including loose skin, deep wrinkles, sagging jowls, and neck laxity.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, facelifts are performed with a focus on{' '}
              <strong>natural-looking rejuvenation</strong> — lifting and tightening without
              creating an artificial or "pulled" look, under expert surgical care.
            </p>
          </div>
        </section>

        {/* Signs It Addresses */}
        <section>
          <SectionHeader title="Signs of Ageing It Addresses" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { concern: "Sagging Cheeks", desc: "Restores lifted, defined cheek contour" },
              { concern: "Jowls", desc: "Tightens loose skin along the jawline" },
              { concern: "Deep Wrinkles", desc: "Smooths nasolabial folds and facial creases" },
              { concern: "Neck Laxity", desc: "Firms loose, sagging neck skin" },
              { concern: "Loss of Jawline", desc: "Redefines and sharpens the lower face" },
              { concern: "Skin Laxity", desc: "Overall tightening for a refreshed look" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20">
                <p className="font-bold text-gray-900 mb-1">{item.concern}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Pre-surgical consultation, photographs & treatment planning",
                "General or local anaesthesia with sedation administered",
                "Incisions made along the hairline, temples, and behind ears",
                "Underlying facial muscles and tissues tightened",
                "Excess skin removed and remaining skin gently re-draped",
                "Incisions carefully closed to minimise visible scarring",
                "Recovery monitoring and scheduled follow-up care",
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
                { label: "Anaesthesia", value: "General / Sedation" },
                { label: "Initial Recovery", value: "2–3 weeks" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-50">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-gray-900 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
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
                  "Sagging facial skin and jowls",
                  "Deep wrinkles and facial folds",
                  "Loose or sagging neck skin",
                  "Loss of jawline definition",
                  "Adults with good overall health",
                  "Those with realistic expectations",
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
                  "Non-smokers or those who can quit before surgery",
                  "Stable overall health without uncontrolled conditions",
                  "Realistic expectations about outcomes",
                  "May be combined with neck lift for better results",
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

        {/* Benefits & Risks */}
        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Youthful, refreshed facial appearance",
                  "Improved jawline and neck contour",
                  "Long-lasting results (7–10 years)",
                  "Natural-looking rejuvenation",
                  "Significant boost in self-confidence",
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
                  "Recovery period of 2–3 weeks required",
                  "Scarring (minimal, hidden in hairline & behind ears)",
                  "Mild discomfort during healing",
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
            <p className="text-gray-400 text-lg">[ Face Lift Before & After Gallery ]</p>
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
                  "Avoid sun exposure during healing period",
                  "Follow all skincare and wound care instructions",
                  "Avoid strenuous activities and heavy lifting",
                  "Sleep with head elevated to reduce swelling",
                  "Attend all follow-up visits as scheduled",
                  "Avoid smoking — it significantly delays healing",
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
            Ready to Restore Your Youthful Appearance?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a consultation with our surgical experts for a personalized facelift assessment and plan.
          </p>
          <a
            href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Face%20Lift%20Surgery."
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

export default FaceLift;