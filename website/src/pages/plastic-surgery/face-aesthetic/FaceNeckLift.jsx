import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center text-left">
        <span className="text-gray-900 font-medium">{question}</span>
        <svg className={`w-5 h-5 text-[#C09A50] transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const FaceNeckLift = () => {
  const faqs = [
    { question: "Will the results look natural?", answer: "Yes. The goal is natural-looking rejuvenation — a refreshed, rested appearance that does not look 'pulled' or overdone." },
    { question: "How long do results last?", answer: "Results are long-lasting, typically 7–10 years. Ageing continues naturally, but you will always appear younger than without the procedure." },
    { question: "Is downtime required?", answer: "Yes. Initial recovery takes 2–3 weeks. Most patients resume light activities after 2 weeks, with final results settling over several months." },
    { question: "Can face lift and neck lift be done together?", answer: "Yes, and they are frequently combined for comprehensive facial rejuvenation, addressing both the face and neck in a single procedure." },
    { question: "Will there be visible scars?", answer: "Incisions are carefully hidden along the hairline, behind the ears, and under the chin. Scars fade significantly over time." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Face Aesthetic · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Face & Neck Lift</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Comprehensive facial rejuvenation to tighten sagging skin, restore youthful contours, and redefine the jawline and neck.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is a Face & Neck Lift?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">A Face & Neck Lift is a comprehensive surgical procedure that <strong>tightens loose skin, underlying tissues, and muscles</strong> of the face and neck to reduce sagging, wrinkles, and jowls. It addresses multiple signs of ageing in a single surgical session for a harmonious, rejuvenated result.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, the procedure is performed with a focus on <strong>natural-looking, long-lasting rejuvenation</strong> — turning back the clock while preserving your unique features.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="What It Addresses" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { concern: "Sagging Facial Skin", desc: "Lifts and tightens drooping cheeks and midface" },
              { concern: "Jowls", desc: "Removes and tightens excess skin along jawline" },
              { concern: "Deep Wrinkles", desc: "Smooths nasolabial folds and facial creases" },
              { concern: "Loose Neck Skin", desc: "Firms and tightens sagging neck and turkey neck" },
              { concern: "Loss of Jawline", desc: "Redefines and sharpens the lower facial contour" },
              { concern: "Neck Bands", desc: "Tightens platysmal bands for a smoother neck" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20">
                <p className="font-bold text-gray-900 mb-1">{item.concern}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {["Pre-surgical consultation, photographs & treatment planning", "General anaesthesia or sedation administered", "Incisions made along hairline, temples, and behind the ears", "Underlying facial muscles and tissues lifted and tightened", "Excess skin carefully removed and remaining skin re-draped", "Neck muscles tightened and neck skin addressed separately", "Incisions closed meticulously to minimise scarring"].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical" }, { label: "Anaesthesia", value: "General / Sedation" }, { label: "Initial Recovery", value: "2–3 weeks" }].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-50">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-gray-900 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Who It's For" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Suitable for:</h3>
              <ul className="space-y-3">
                {["Sagging facial skin and jowls", "Loose or sagging neck skin", "Deep wrinkles and facial folds", "Loss of jawline and neck definition", "Adults in good overall health with realistic expectations"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Often Combined With:</h3>
              <ul className="space-y-3">
                {["Eyelid surgery (Blepharoplasty)", "Brow lift for upper face rejuvenation", "Fat grafting for volume restoration", "Laser resurfacing for skin texture"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 A consultation is required to confirm suitability and plan the procedure.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Comprehensive facial & neck rejuvenation", "Improved jawline and neck contour", "Long-lasting results (7–10 years)", "Natural-looking, balanced outcome", "Significant improvement in self-confidence"].map((item, i) => (
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
                {["Temporary swelling and bruising", "Recovery period of 2–3 weeks", "Scarring (minimal, hidden in hairline)", "Mild discomfort during healing"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Before & After" />
          <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">[ Face & Neck Lift Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Avoid smoking and alcohol", "Inform about all medications and medical conditions", "Avoid blood-thinning medicines as advised", "Arrange for post-surgery support at home"].map((item, i) => (
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
                {["Avoid sun exposure during healing", "Follow skincare and wound care instructions", "Avoid strenuous activities and heavy lifting", "Sleep with head elevated to reduce swelling", "Attend all follow-up visits as scheduled"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </section>

        <div className="bg-[#FBF5E9] rounded-2xl p-8 text-center border border-[#C09A50]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready for a Complete Facial Transformation?</h3>
          <p className="text-gray-600 mb-6">Book a consultation with our surgical experts for a personalized face & neck lift plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Face%20%26%20Neck%20Lift%20Surgery." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default FaceNeckLift;