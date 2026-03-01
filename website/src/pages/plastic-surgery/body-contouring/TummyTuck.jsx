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

const TummyTuck = () => {
  const faqs = [
    { question: "Is tummy tuck suitable after pregnancy?", answer: "Yes. It is one of the most common reasons for tummy tuck surgery. It is recommended to wait until you have completed your family planning before the procedure." },
    { question: "Will it remove stretch marks?", answer: "Stretch marks in the lower abdominal area that are removed with the excess skin will be gone. Others may be improved but not all can be fully removed." },
    { question: "How long is recovery?", answer: "Initial recovery typically takes 2–3 weeks. Strenuous activity and heavy lifting should be avoided for 6 weeks or as advised by your surgeon." },
    { question: "Can tummy tuck be combined with liposuction?", answer: "Yes. Tummy tuck is commonly combined with liposuction for comprehensive abdominal contouring. This is planned based on individual assessment." },
    { question: "Is the result permanent?", answer: "Results are long-lasting. Maintaining a stable body weight and avoiding future pregnancies will help preserve the results long-term." },
  ];

  const types = [
    { type: "Full Abdominoplasty", desc: "Complete reshaping of upper and lower abdomen — removes most excess skin and fat, tightens full abdominal muscles", tag: "Most Comprehensive" },
    { type: "Mini Abdominoplasty", desc: "Targets the lower abdomen below the navel — smaller incision, suitable for mild skin laxity", tag: "Minimal Correction" },
    { type: "Extended Abdominoplasty", desc: "Addresses abdomen, flanks, and hips — suitable for patients with significant weight loss", tag: "Post Weight Loss" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Body Contouring · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Tummy Tuck</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Abdominoplasty)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Remove excess abdominal skin, tighten weakened muscles, and achieve a flatter, firmer abdomen — for lasting confidence.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is a Tummy Tuck?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">A tummy tuck (abdominoplasty) is a surgical procedure that <strong>removes excess skin and fat from the abdominal area</strong> and tightens weakened or separated abdominal muscles to create a <strong>flatter, firmer, and better-contoured abdomen</strong>.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, tummy tuck surgery is tailored to each individual — whether post-pregnancy, after weight loss, or due to age-related skin laxity — with a focus on <strong>natural contour and lasting results</strong>.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Types of Tummy Tuck" />
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
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 The most appropriate type is selected after detailed abdominal assessment during consultation.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Detailed consultation — abdominal assessment, muscle evaluation, scar planning",
                "General anaesthesia administered",
                "Horizontal incision made in the lower abdomen (above pubic hairline)",
                "Excess skin and fat carefully removed",
                "Separated or weakened abdominal muscles sutured and tightened",
                "Skin re-draped, navel repositioned if needed",
                "Incisions closed, compression garment and drains placed if required",
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
                {["Loose or sagging abdominal skin after pregnancy", "Post weight-loss skin laxity", "Abdominal muscle separation (diastasis recti)", "Stubborn abdominal fat with skin excess", "Individuals at stable body weight with good health"].map((item, i) => (
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
                {["Planning future pregnancies", "Significant obesity — weight loss recommended first", "Active infections or uncontrolled medical conditions", "Smokers who cannot quit before surgery"].map((item, i) => (
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
                {["Flat, firm, and contoured abdomen", "Tightened and strengthened core muscles", "Improved posture and core stability", "Removal of lower abdominal stretch marks", "Boosted confidence and body image"].map((item, i) => (
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
                {["Temporary swelling and bruising", "Recovery period of 2–3 weeks", "Scarring (well-placed and fades over time)", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Tummy Tuck Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Maintain stable weight before surgery", "Avoid smoking — smoking impairs healing significantly", "Discuss future pregnancy plans with your surgeon", "Follow all pre-surgery preparation instructions"].map((item, i) => (
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
                {["Avoid heavy lifting for 6 weeks as advised", "Wear compression garments as prescribed", "Follow wound care and drain instructions if applicable", "Sleep with knees bent/elevated to reduce tension", "Attend all scheduled follow-up visits"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready for a Flatter, Firmer Abdomen?</h3>
          <p className="text-gray-600 mb-6">Book a consultation with our surgical experts for a personalized assessment and surgical plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Tummy%20Tuck%20(Abdominoplasty)." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default TummyTuck;