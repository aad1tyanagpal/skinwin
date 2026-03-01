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

const ArmLift = () => {
  const faqs = [
    { question: "Is arm lift surgery a weight-loss procedure?", answer: "No. It is a body-contouring surgery that removes excess skin and fat. It is not a substitute for weight loss." },
    { question: "Will there be scars after arm lift surgery?", answer: "Scars are present but carefully placed along the inner arm where they are least visible. They fade significantly over time." },
    { question: "How long is the recovery period?", answer: "Initial recovery takes 2–3 weeks. Heavy lifting and strenuous arm activity should be avoided for 4–6 weeks or as advised." },
    { question: "Are results permanent?", answer: "Results are long-lasting if a stable weight is maintained. Significant weight gain after surgery can affect the results." },
    { question: "Can arm lift be combined with liposuction?", answer: "Yes. Liposuction is often combined with arm lift to remove excess fat before skin tightening, especially when significant fat is present alongside loose skin." },
  ];

  const causes = [
    { cause: "Significant Weight Loss", desc: "Rapid or large-volume weight loss leaves excess skin that cannot retract on its own" },
    { cause: "Ageing", desc: "Loss of skin elasticity over time causes upper arm skin to sag and lose firmness" },
    { cause: "Genetic Factors", desc: "Some individuals are predisposed to poor skin tone in the upper arms" },
    { cause: "Poor Skin Tone", desc: "Despite regular exercise, skin may not tighten sufficiently in some individuals" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Body Contouring · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Arm Lift Surgery</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Brachioplasty)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Remove excess skin and fat from the upper arms for firmer, better-contoured arms and the confidence to wear what you love.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Arm Lift Surgery?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Arm Lift Surgery (Brachioplasty) is a cosmetic surgical procedure designed to <strong>remove loose, sagging skin and excess fat from the upper arms</strong>. It helps improve arm contour and firmness, especially in individuals who have experienced significant weight loss or age-related skin laxity.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, arm lift surgery is performed with a focus on <strong>natural contours, symmetry, and patient safety</strong> — with careful scar placement to achieve the best aesthetic outcome.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Why Arm Lift Surgery Is Needed" />
          <div className="grid sm:grid-cols-2 gap-4">
            {causes.map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20">
                <p className="font-bold text-gray-900 mb-2">{item.cause}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded-lg mt-4">ℹ️ Exercise alone often cannot tighten excess skin. Arm lift surgery is the most effective solution for sagging upper arm skin.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Detailed consultation and upper arm assessment",
                "Marking of excess skin and fat areas to be addressed",
                "General or local anaesthesia with sedation administered",
                "Incision made along the inner arm (from armpit to elbow as needed)",
                "Excess skin and fat carefully removed",
                "Underlying tissues tightened and reshaped",
                "Wound carefully closed with fine sutures to minimize scarring",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical" }, { label: "Anaesthesia", value: "General / Local + Sedation" }, { label: "Initial Recovery", value: "2–3 weeks" }].map((stat, i) => (
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
                {["Loose or sagging upper arm skin", "Post weight-loss skin laxity", "Arms with poor tone and contour", "Individuals at a stable body weight", "Good overall health with realistic expectations"].map((item, i) => (
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
                {["Uncontrolled medical conditions", "Active skin infections on upper arms", "Ongoing significant weight fluctuation", "Unrealistic expectations about scar visibility"].map((item, i) => (
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
                {["Firmer, more toned upper arms", "Improved arm contour and shape", "Enhanced confidence in sleeveless clothing", "Long-lasting results with stable weight", "Often combined with liposuction for best results"].map((item, i) => (
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
                {["Temporary swelling and bruising", "Scarring along the inner arm (fades over time)", "Healing time of a few weeks required", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Arm Lift Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Avoid smoking and alcohol before surgery", "Inform the doctor about medical conditions or medications", "Maintain a stable body weight", "Follow all pre-surgery instructions provided during consultation"].map((item, i) => (
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
                {["Wear compression garments as advised", "Avoid heavy lifting and strenuous arm activity", "Keep the surgical area clean and dry", "Take prescribed medications as advised", "Attend all follow-up visits regularly"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready for Firmer, Toned Arms?</h3>
          <p className="text-gray-600 mb-6">Book a consultation with our surgical experts for a personalized arm lift assessment and plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Arm%20Lift%20Surgery%20(Brachioplasty)." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default ArmLift;