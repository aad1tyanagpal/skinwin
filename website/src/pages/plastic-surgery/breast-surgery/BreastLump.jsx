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

const BreastLump = () => {
  const faqs = [
    { question: "Are all breast lumps cancerous?", answer: "No. Most breast lumps are benign (non-cancerous), but every lump should be properly evaluated to rule out serious conditions. Do not ignore any new lump." },
    { question: "Is a painless breast lump dangerous?", answer: "Not necessarily, but painless lumps should still be checked. Some benign lumps are painless, and so can certain serious conditions. Evaluation is always recommended." },
    { question: "Do all breast lumps need surgery?", answer: "No. Many lumps only require observation or medical treatment. Surgery is recommended only when clinically appropriate." },
    { question: "Can breast lumps occur due to hormones?", answer: "Yes. Hormonal changes during the menstrual cycle, pregnancy, or menopause can cause temporary lumps or breast changes." },
    { question: "Is evaluation painful?", answer: "Clinical examination and most imaging tests are generally comfortable. A biopsy, if advised, is done with local anaesthesia to minimize discomfort." },
  ];

  const causes = [
    { name: "Fibroadenoma", desc: "Common benign lump, usually in younger women — smooth and movable" },
    { name: "Breast Cysts", desc: "Fluid-filled sacs that may fluctuate with hormonal changes" },
    { name: "Fibrocystic Changes", desc: "Lumpy, tender breasts associated with menstrual cycles" },
    { name: "Infections / Abscesses", desc: "Painful lumps with redness or fever requiring medical treatment" },
    { name: "Fat Necrosis", desc: "Lump formation after injury or previous surgery — benign" },
    { name: "Benign Tumors", desc: "Non-cancerous growths that may need monitoring or removal" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Breast Surgery · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Breast Lump</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Accurate diagnosis, expert evaluation, and safe management of breast lumps — with care, confidentiality, and clinical precision.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is a Breast Lump?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">A breast lump is a <strong>localized swelling, thickening, or mass</strong> felt within the breast tissue. Breast lumps are common and <strong>often non-cancerous</strong>, but every lump should be properly evaluated to determine its cause and ensure timely treatment if required.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, breast lumps are assessed with <strong>care, confidentiality, and clinical accuracy</strong> — focusing on early detection, peace of mind, and appropriate management for every patient.</p>
            <div className="mt-5 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-amber-800 text-sm font-medium">⚠️ Most breast lumps are benign, but medical evaluation is essential. Never ignore a new breast lump or change in breast tissue.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Common Causes of Breast Lumps" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {causes.map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-5 border border-[#C09A50]/20">
                <p className="font-bold text-gray-900 mb-2 text-sm">{item.name}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-blue-700 bg-blue-50 p-3 rounded-lg mt-4">ℹ️ Breast cancer is less common but must always be ruled out through proper clinical evaluation.</p>
        </section>

        <section>
          <SectionHeader title="When to Get Checked" />
          <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
            <p className="text-gray-700 font-medium mb-4">You should consult a doctor if you notice:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {["A new lump in the breast or underarm", "Change in size, shape, or feel of the breast", "A painful or painless lump", "Nipple discharge or inversion", "Redness, warmth, or skin changes on the breast", "A lump that does not go away after your menstrual cycle"].map((item, i) => (
                <div key={i} className="flex items-start bg-white p-3 rounded-lg border border-red-50">
                  <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Evaluation & Diagnosis" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <p className="text-gray-600 mb-5">At Skin Win Clinic, breast lump evaluation is thorough, comfortable, and confidential. Assessment may include:</p>
            <ul className="space-y-4">
              {["Detailed clinical examination and history taking", "Medical history and risk factor assessment", "Imaging studies — ultrasound or mammography if required", "Additional tests or biopsy if clinically advised"].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">Each patient is guided step-by-step to ensure clarity, comfort, and confidence throughout the process.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Treatment Options" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Observation & Monitoring", desc: "Small, harmless lumps may only require regular monitoring with scheduled follow-up visits.", color: "bg-green-50/50 border-green-100" },
              { title: "Medical Management", desc: "Infections, hormonal causes, or inflammatory conditions may be treated with appropriate medications.", color: "bg-blue-50/50 border-blue-100" },
              { title: "Minor Surgical Removal", desc: "Recommended for painful or growing lumps, cosmetic concerns, or unclear findings requiring removal.", color: "bg-[#FBF5E9]/50 border-[#C09A50]/20" },
              { title: "Advanced Surgical Management", desc: "When required, surgery is planned with safety, precision, and minimal scarring by our expert team.", color: "bg-purple-50/50 border-purple-100" },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-6 border ${item.color}`}>
                <p className="font-bold text-gray-900 mb-2">{item.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 Treatment is always decided after thorough evaluation — never before. Do not self-diagnose or self-treat.</p>
        </section>

        <section>
          <SectionHeader title="Benefits of Early Evaluation" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ benefit: "Early Diagnosis", desc: "Catch any condition at its most treatable stage" }, { benefit: "Peace of Mind", desc: "Clarity and reassurance for you and your family" }, { benefit: "Better Outcomes", desc: "Early treatment leads to better health and cosmetic results" }, { benefit: "Timely Care", desc: "Prevent complications by not delaying evaluation" }].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-5 border border-[#C09A50]/20 text-center">
                <p className="font-bold text-gray-900 mb-2 text-sm">{item.benefit}</p>
                <p className="text-gray-600 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </section>

        <section>
          <SectionHeader title="Before & After Your Consultation" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Your Consultation</h3>
              <ul className="space-y-3">
                {["Note changes in size, pain, or duration of the lump", "Avoid self-diagnosis or self-treatment", "Do not press or massage the lump repeatedly", "Bring any previous reports or investigations if available"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">After Your Evaluation</h3>
              <ul className="space-y-3">
                {["Follow the doctor's advice carefully", "Attend all follow-up visits as advised", "Take prescribed medications as directed", "Report any new changes in the lump or breast immediately"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="bg-[#FBF5E9] rounded-2xl p-8 text-center border border-[#C09A50]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Noticed a Breast Lump? Don't Wait.</h3>
          <p className="text-gray-600 mb-6">Book a confidential consultation for a proper clinical evaluation — early assessment always leads to better outcomes.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'd%20like%20to%20consult%20about%20a%20Breast%20Lump%20evaluation." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default BreastLump;