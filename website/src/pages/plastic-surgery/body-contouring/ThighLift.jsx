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

const ThighLift = () => {
  const faqs = [
    { question: "Is thigh lift surgery a weight-loss procedure?", answer: "No. Thigh lift is a body-contouring surgery that removes excess skin and fat. It is not a substitute for weight loss." },
    { question: "Will there be scars after thigh lift surgery?", answer: "Scars are present but placed carefully in natural skin folds (inner thigh or groin crease) where they are least visible. They fade significantly over time." },
    { question: "How long is recovery?", answer: "Initial recovery takes 2–3 weeks. Strenuous physical activity and heavy lifting should be avoided for 4–6 weeks or as advised by your surgeon." },
    { question: "Are results permanent?", answer: "Results are long-lasting if a stable weight is maintained. Significant weight changes or further skin laxity with age may affect results over time." },
    { question: "Can thigh lift be combined with liposuction?", answer: "Yes. Liposuction is commonly combined with thigh lift to remove excess fat before skin tightening, for more comprehensive contouring." },
  ];

  const types = [
    { type: "Inner Thigh Lift", desc: "Targets sagging skin of the inner thighs — incision placed in the groin crease", tag: "Most Common" },
    { type: "Outer Thigh Lift", desc: "Improves the outer thigh and hip contour — incision placed near the hip", tag: "Hip & Outer Thigh" },
    { type: "Mini Thigh Lift", desc: "For mild skin laxity near the groin area — smaller incision, minimal correction", tag: "Mild Correction" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Body Contouring · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Thigh Lift Surgery</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Thighplasty)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Remove excess skin and fat from the thighs for smoother, firmer, and better-proportioned legs — and the confidence to move freely.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Thigh Lift Surgery?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Thigh Lift Surgery (Thighplasty) is a cosmetic surgical procedure designed to <strong>remove loose, sagging skin and excess fat from the inner or outer thighs</strong>. It creates smoother, firmer, and more proportionate thighs — especially beneficial for individuals who have experienced significant weight loss or age-related skin laxity.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, thigh lift surgery is planned with a focus on <strong>natural contours, symmetry, and patient safety</strong> — with carefully placed incisions for the most discreet results.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Types of Thigh Lift Procedures" />
          <div className="space-y-4">
            {types.map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-bold text-gray-900">{item.type}</p>
                    <span className="text-xs font-semibold text-[#C09A50] bg-[#C09A50]/10 px-2 py-1 rounded-full">{item.tag}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 The surgical approach is customized after detailed evaluation during your consultation.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Detailed consultation and thigh assessment",
                "Marking of excess skin and fat areas",
                "General anaesthesia administered",
                "Incisions made in the planned location (inner groin crease or outer hip)",
                "Excess skin and fat surgically removed",
                "Underlying tissues tightened and reshaped for contour",
                "Wound carefully closed with fine sutures to minimize visible scarring",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical" }, { label: "Anaesthesia", value: "General" }, { label: "Initial Recovery", value: "2–3 weeks" }].map((stat, i) => (
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
                {["Loose or sagging thigh skin", "Post weight-loss skin laxity", "Thighs with poor tone or contour", "Inner thigh chafing or discomfort", "Individuals with stable body weight and good health"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Not suitable if:</h3>
              <ul className="space-y-3">
                {["Uncontrolled medical conditions", "Active skin infections in the treated area", "Ongoing significant weight fluctuation", "Unrealistic expectations about scar visibility"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Firmer, smoother, and better-proportioned thighs", "Improved comfort while walking and exercising", "Reduced inner thigh chafing", "Better confidence in fitted clothing and swimwear", "Long-lasting results with stable weight"].map((item, i) => (
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
                {["Temporary swelling and bruising", "Scarring (carefully placed, fades over time)", "Healing time of 2–3 weeks required", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Thigh Lift Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Avoid smoking and alcohol before surgery", "Inform the doctor about medical conditions or medications", "Maintain a stable body weight", "Follow all pre-surgery instructions provided"].map((item, i) => (
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
                {["Wear compression garments as advised", "Avoid strenuous physical activity and heavy lifting", "Keep the surgical area clean and dry", "Take prescribed medications as directed", "Attend all follow-up visits regularly"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready for Firmer, Smoother Thighs?</h3>
          <p className="text-gray-600 mb-6">Book a consultation with our surgical experts for a personalized thigh lift assessment and plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Thigh%20Lift%20Surgery." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default ThighLift;