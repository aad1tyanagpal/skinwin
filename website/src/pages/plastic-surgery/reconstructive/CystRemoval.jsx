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

const CystRemoval = () => {
  const faqs = [
    { question: "Are cysts cancerous?", answer: "Most cysts are benign (non-cancerous), but proper evaluation is important to rule out other conditions. Every cyst should be assessed by a doctor." },
    { question: "Is cyst removal painful?", answer: "The procedure is done under local anaesthesia and is usually comfortable. Mild soreness may be present after the procedure for a short time." },
    { question: "Will the cyst come back after removal?", answer: "Complete removal of the cyst wall significantly reduces recurrence. If only drained, there is a higher chance of it returning." },
    { question: "Is there any downtime after cyst removal?", answer: "Most patients resume normal activities shortly after the procedure. Downtime is minimal for most cyst removals." },
    { question: "Will there be a scar?", answer: "Scarring is usually minimal and depends on cyst size and location. Our team uses precise techniques to minimize scarring." },
  ];

  const cystTypes = [
    { type: "Sebaceous Cysts", desc: "Common skin cysts from blocked sebaceous glands, usually on face, neck or back" },
    { type: "Epidermoid Cysts", desc: "Slow-growing cysts under the skin filled with keratin material" },
    { type: "Ganglion Cysts", desc: "Fluid-filled lumps around joints, commonly on wrists or hands" },
    { type: "Pilar Cysts", desc: "Smooth, round cysts arising from hair follicles, common on scalp" },
    { type: "Dermoid Cysts", desc: "Cysts present from birth containing skin cells or other tissue" },
    { type: "Lipomas", desc: "Soft, fatty lumps that grow under the skin, usually benign and painless" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Reconstructive · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Cyst Removal</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Safe, precise surgical removal of skin cysts and lumps with minimal scarring and quick recovery under expert medical care.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Cyst Removal?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Cyst removal is a minor surgical procedure to <strong>safely remove cysts, lumps, and benign skin growths</strong> that form under or within the skin. While most cysts are harmless, they may cause discomfort, become infected, or affect appearance — making removal the preferred solution.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, cyst removal is performed under local anaesthesia as a <strong>clean, precise outpatient procedure</strong> — complete removal of the cyst wall to minimize recurrence, with careful wound closure to reduce scarring.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Types of Cysts Treated" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cystTypes.map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-5 border border-[#C09A50]/20">
                <p className="font-bold text-gray-900 mb-2 text-sm">{item.type}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 Every lump or cyst should be properly evaluated before treatment. Do not squeeze or press cysts at home.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Clinical examination and assessment of cyst type, size, and location",
                "Local anaesthesia applied to the area",
                "Small incision made over or around the cyst",
                "Entire cyst — including the cyst wall — carefully removed",
                "Area thoroughly cleaned",
                "Wound closed with fine sutures to minimize scarring",
                "Dressing applied and aftercare instructions provided",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Anaesthesia", value: "Local" }, { label: "Procedure Type", value: "Outpatient / Minor" }, { label: "Recovery", value: "Quick, same day" }].map((stat, i) => (
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
              <h3 className="text-lg font-bold text-gray-900 mb-4">Removal recommended when cyst is:</h3>
              <ul className="space-y-3">
                {["Growing in size", "Causing pain or discomfort", "Becoming infected or inflamed", "Affecting appearance", "Located in a troublesome area", "Causing anxiety or concern"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Important to Know:</h3>
              <ul className="space-y-3">
                {["Never squeeze or press a cyst at home — this can cause infection", "Active infection may require treatment before surgery", "Cysts should always be evaluated before removal", "Sent for histopathology if clinically indicated"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 Consultation required before any cyst removal procedure.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Complete and clean removal of cyst", "Reduced risk of recurrence", "Quick outpatient procedure", "Minimal scarring with precise technique", "Relief from discomfort and infection risk", "Peace of mind from professional evaluation"].map((item, i) => (
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
                {["Mild soreness or discomfort post-procedure", "Minimal scarring (size-dependent)", "Low risk of recurrence if wall fully removed", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Cyst Removal Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Procedure Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Procedure</h3>
              <ul className="space-y-3">
                {["Do not squeeze or press the cyst", "Inform the doctor about medications or medical conditions", "Keep the area clean before the procedure", "Follow all pre-procedure instructions provided"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">After Procedure</h3>
              <ul className="space-y-3">
                {["Keep the treated area clean and dry", "Follow wound care and dressing instructions", "Avoid touching or scratching the area", "Take prescribed medicines as advised", "Attend follow-up visits as recommended"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Have a Cyst That Needs Attention?</h3>
          <p className="text-gray-600 mb-6">Book a consultation for a proper clinical evaluation and safe removal plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Cyst%20Removal." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default CystRemoval;