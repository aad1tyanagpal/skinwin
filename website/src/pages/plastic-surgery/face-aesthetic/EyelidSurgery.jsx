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

const EyelidSurgery = () => {
  const faqs = [
    { question: "Will eyelid surgery improve my vision?", answer: "Yes. If droopy upper eyelids are obstructing your field of vision, blepharoplasty can significantly improve it." },
    { question: "Will scars be visible?", answer: "Scars are minimal and well hidden — upper eyelid incisions are placed in the natural crease, lower eyelid incisions inside the lash line." },
    { question: "How long does recovery take?", answer: "Initial swelling and bruising settle in 1–2 weeks. Most patients return to normal activities within 2 weeks, with final results visible over a few months." },
    { question: "Is eyelid surgery painful?", answer: "Pain is usually mild and easily managed with prescribed medication during the recovery period." },
    { question: "How long do results last?", answer: "Results are long-lasting — typically 10–15 years. Upper eyelid surgery results tend to last longer than lower eyelid." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Face Aesthetic · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Eyelid Surgery</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Blepharoplasty)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Restore a brighter, more youthful eye appearance by removing excess skin, fat, and puffiness from the eyelids.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Eyelid Surgery?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Eyelid surgery (Blepharoplasty) removes <strong>excess skin, fat, and muscle from the upper and/or lower eyelids</strong> to correct droopiness, puffiness, and the tired appearance caused by ageing. It can also improve vision obstruction caused by sagging upper lids.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, blepharoplasty is performed with precision to deliver <strong>natural, refreshed eyes</strong> that look rested — not operated on.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Upper vs Lower Eyelid Surgery" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: "Upper Eyelid Surgery", points: ["Removes droopy, sagging upper lid skin", "Corrects vision obstruction from hooding", "Incision hidden in natural eyelid crease", "Most commonly performed blepharoplasty"] },
              { type: "Lower Eyelid Surgery", points: ["Removes under-eye bags and puffiness", "Addresses dark hollows and wrinkles", "Incision placed inside lower lash line", "Often combined with upper lid surgery"] },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{item.type}</h3>
                <ul className="space-y-3">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex items-start">
                      <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {["Pre-surgical consultation, photographs & treatment planning", "Local anaesthesia with sedation or general anaesthesia administered", "Precise incision made in natural eyelid crease or lash line", "Excess skin, fat, and muscle carefully removed or repositioned", "Incisions closed with fine sutures for minimal scarring", "Recovery monitoring and follow-up care scheduled"].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical" }, { label: "Anaesthesia", value: "Local / General" }, { label: "Initial Recovery", value: "1–2 weeks" }].map((stat, i) => (
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
                {["Droopy or sagging upper eyelids", "Under-eye bags or puffiness", "Age-related eyelid skin excess", "Vision obstruction from hooded upper lids", "Tired, aged appearance around the eyes"].map((item, i) => (
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
                {["Good overall eye and general health required", "Avoid blood-thinning medications before surgery", "Realistic expectations about outcomes", "May be combined with brow lift for better results"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 A consultation is required to confirm suitability.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Brighter, more youthful eye appearance", "Improved field of vision (upper lid)", "Long-lasting results (10–15 years)", "Minimal visible scarring", "Natural-looking, refreshed eyes"].map((item, i) => (
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
                {["Temporary swelling and bruising", "Mild dryness or eye irritation initially", "Healing time required", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Eyelid Surgery Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Avoid smoking and alcohol before surgery", "Inform about all medications and eye conditions", "Avoid blood-thinning medicines as advised", "Arrange for someone to drive you home after surgery"].map((item, i) => (
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
                {["Avoid rubbing or touching the eyes", "Keep the area clean and dry", "Apply cold compress to reduce swelling", "Avoid strenuous activity for a few days", "Follow all medication and eye care instructions"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Want Brighter, More Youthful Eyes?</h3>
          <p className="text-gray-600 mb-6">Book a consultation with our surgical experts for a personalized eyelid surgery plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Eyelid%20Surgery%20(Blepharoplasty)." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default EyelidSurgery;