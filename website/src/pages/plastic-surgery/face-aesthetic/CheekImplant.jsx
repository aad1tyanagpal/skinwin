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

const CheekImplant = () => {
  const faqs = [
    { question: "Are cheek implants permanent?", answer: "Yes, cheek implants are designed to provide long-lasting, permanent results." },
    { question: "Will cheek implants look natural?", answer: "Yes. Proper sizing and placement ensure natural facial proportions — enhanced cheekbones that complement the rest of your face." },
    { question: "Is there visible scarring?", answer: "No visible external scars. Incisions are placed inside the mouth or discreetly along the lower eyelid area." },
    { question: "Can cheek implants be combined with other procedures?", answer: "Yes. They are often combined with rhinoplasty, chin implant, facelift, or fat grafting for comprehensive facial enhancement." },
    { question: "Is the procedure painful?", answer: "Discomfort is usually mild and well managed with anaesthesia during surgery and prescribed medication post-procedure." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Face Aesthetic · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Cheek Implant</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Cheek Augmentation)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Enhance mid-face volume and facial contours with well-defined, naturally contoured cheeks for a youthful, structured appearance.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is a Cheek Implant?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">A Cheek Implant (Cheek Augmentation) is a cosmetic surgical procedure designed to <strong>enhance cheek volume, projection, and facial balance</strong>. Medical-grade implants are placed over the cheekbones (malar area) to create more defined, youthful, and structured facial contours.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, cheek implants are planned with precision to ensure <strong>natural facial harmony</strong> — avoiding an overfilled or artificial appearance while enhancing the midface beautifully.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Why Cheek Augmentation Is Needed" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { reason: "Flat Cheeks", desc: "Genetically flat or underdeveloped cheekbones" },
              { reason: "Volume Loss", desc: "Age-related fat loss from the midface" },
              { reason: "Facial Asymmetry", desc: "Unequal cheek volume on left and right sides" },
              { reason: "Weight Loss", desc: "Post-weight loss hollowing of the cheeks" },
              { reason: "Poor Definition", desc: "Desire for sharper, more structured cheekbones" },
              { reason: "Overall Facial Balance", desc: "To improve harmony between eyes, nose, and jawline" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-5 border border-[#C09A50]/20">
                <p className="font-bold text-gray-900 mb-1 text-sm">{item.reason}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Surgical vs Non-Surgical Options" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: "Surgical Cheek Implants", tag: "Permanent", tagColor: "bg-green-100 text-green-700", points: ["Medical-grade silicone implants over cheekbones", "Permanent and highly predictable results", "Incision hidden inside mouth or lower eyelid", "Ideal for significant cheek enhancement"] },
              { type: "Non-Surgical (Dermal Filler)", tag: "Temporary", tagColor: "bg-blue-100 text-blue-700", points: ["Hyaluronic acid filler for volume enhancement", "Immediate results with minimal downtime", "Temporary — lasts 12–18 months", "Reversible if desired"] },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{item.type}</h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.tagColor}`}>{item.tag}</span>
                </div>
                <ul className="space-y-3">
                  {item.points.map((p, j) => (
                    <li key={j} className="flex items-start">
                      <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{p}</span>
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
              {["Detailed facial assessment and contour analysis", "Selection of suitable implant size and shape", "Anaesthesia administered", "Small incision placed inside the mouth or lower eyelid", "Implants precisely placed and positioned over cheekbones", "Incisions carefully closed to minimise visible scarring"].map((item, i) => (
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
                {["Flat or under-developed cheeks", "Age-related facial volume loss", "Facial asymmetry", "Individuals seeking permanent cheek enhancement", "Those wanting sharper cheekbone definition"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Not suitable for:</h3>
              <ul className="space-y-3">
                {["Active facial infections", "Certain medical conditions (evaluated during consultation)", "Unrealistic expectations"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 Consultation required to confirm suitability.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Enhanced cheekbone definition", "Improved facial balance and symmetry", "Youthful, contoured facial appearance", "Permanent, natural-looking results", "Boosted confidence and self-image"].map((item, i) => (
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
                {["Temporary swelling or bruising", "Mild discomfort during healing", "Rare implant-related complications", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Cheek Implant Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Avoid smoking and alcohol before surgery", "Inform the doctor about medications or medical conditions", "Avoid blood-thinning medicines if advised", "Follow all pre-surgery instructions during consultation"].map((item, i) => (
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
                {["Avoid touching or applying pressure on cheeks", "Follow oral hygiene or wound care instructions carefully", "Avoid strenuous activity initially", "Take prescribed medications as advised", "Attend all follow-up visits regularly"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Want Sharper, More Defined Cheekbones?</h3>
          <p className="text-gray-600 mb-6">Book a consultation for a personalized cheek augmentation assessment and plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Cheek%20Implant%20Surgery." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default CheekImplant;