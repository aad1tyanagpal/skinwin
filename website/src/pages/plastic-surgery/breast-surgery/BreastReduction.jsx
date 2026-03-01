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

const BreastReduction = () => {
  const faqs = [
    { question: "Will breast reduction affect breastfeeding?", answer: "It may affect breastfeeding ability in some cases. This is an important consideration to discuss during your consultation before planning the surgery." },
    { question: "Is breast reduction permanent?", answer: "Yes. Results are long-lasting, though significant weight changes or future pregnancies can affect outcomes over time." },
    { question: "Will there be visible scars?", answer: "There will be scars, but they are carefully placed and fade significantly over time. Scar placement is discussed and planned during consultation." },
    { question: "How long is recovery?", answer: "Initial recovery takes 2–3 weeks. Strenuous activity, heavy lifting, and upper body workouts should be avoided for 4–6 weeks as advised." },
    { question: "Can breast reduction relieve back and shoulder pain?", answer: "Yes. Reducing breast size and weight relieves the strain on the neck, shoulders, and back — many patients experience significant pain relief after surgery." },
  ];

  const symptoms = [
    { concern: "Neck & Shoulder Pain", desc: "Chronic pain caused by the weight of overly large breasts" },
    { concern: "Back Pain & Posture Issues", desc: "Spinal strain and poor posture due to heavy breast weight" },
    { concern: "Skin Irritation", desc: "Rashes, chafing, or infections under the breast fold" },
    { concern: "Bra Strap Grooving", desc: "Deep indentations on shoulders from bra straps bearing weight" },
    { concern: "Exercise Limitations", desc: "Difficulty in physical activity due to discomfort" },
    { concern: "Self-Consciousness", desc: "Emotional discomfort or difficulty finding well-fitting clothing" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Breast Surgery · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Breast Reduction Surgery</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Relieve physical discomfort and achieve a well-proportioned, comfortable, and confident body with expert breast reduction surgery.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Breast Reduction Surgery?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Breast reduction surgery removes <strong>excess breast fat, tissue, and skin</strong> to achieve a breast size that is more proportionate to the body. It also helps relieve physical discomfort caused by overly large breasts — including neck, shoulder, and back pain.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, breast reduction focuses on <strong>comfort, symmetry, and aesthetic balance</strong> — improving quality of life while delivering a natural, proportionate result.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Problems It Addresses" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {symptoms.map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20">
                <p className="font-bold text-gray-900 mb-2">{item.concern}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {["Detailed consultation — breast assessment, size goals, scar planning", "General anaesthesia administered", "Incisions made using the planned pattern (anchor, lollipop, or peri-areolar)", "Excess breast tissue, fat, and skin carefully removed", "Breast reshaped and nipple repositioned to natural position", "Incisions closed with fine sutures to minimise scarring", "Support garment applied and recovery plan provided"].map((item, i) => (
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
                {["Overly large or heavy breasts causing physical discomfort", "Neck, shoulder, or upper back pain from breast weight", "Skin irritation or rashes under the breast fold", "Posture issues related to breast size", "Difficulty exercising or finding well-fitting clothes", "Women with realistic expectations and stable weight"].map((item, i) => (
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
                {["Maintain stable body weight before surgery", "Avoid smoking before and after surgery", "Discuss future pregnancy plans with your surgeon", "Breastfeeding ability may be affected — discuss during consultation"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 Consultation required to confirm suitability and surgical plan.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Significant relief from neck, shoulder, and back pain", "Improved posture and mobility", "Better body proportion and balance", "Relief from skin irritation under breasts", "Improved ability to exercise and be active", "Enhanced confidence and quality of life"].map((item, i) => (
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
                {["Temporary swelling or bruising", "Recovery period of 2–3 weeks required", "Scarring (fades significantly over time)", "May affect breastfeeding ability", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Breast Reduction Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Maintain stable body weight", "Avoid smoking before and after surgery", "Discuss future pregnancy plans with your surgeon", "Follow all pre-surgery instructions carefully"].map((item, i) => (
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
                {["Wear compression or support garments as advised", "Avoid heavy lifting and strenuous activity", "Follow wound care and medication instructions carefully", "Sleep with upper body slightly elevated", "Attend all follow-up visits regularly"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready for Relief and Better Proportions?</h3>
          <p className="text-gray-600 mb-6">Book a confidential consultation with our breast surgery experts for a personalized assessment and plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Breast%20Reduction%20Surgery." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default BreastReduction;