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

const OShot = () => {
  const faqs = [
    { question: "Is the O-Shot® safe?", answer: "Yes. It uses the patient's own PRP and is performed under strict medical supervision — completely natural and biocompatible." },
    { question: "How soon are results noticeable?", answer: "Some women notice changes within a few weeks. Results improve gradually as growth factors stimulate tissue regeneration." },
    { question: "Is the O-Shot® a cosmetic procedure?", answer: "No. It is a regenerative medical treatment for intimate wellness — addressing sensitivity, arousal, and vaginal tissue health." },
    { question: "Can it help with urinary incontinence?", answer: "Yes. The O-Shot® may help with mild urinary stress incontinence by improving the health of surrounding tissues." },
    { question: "Is confidentiality maintained?", answer: "Yes. Complete privacy is strictly maintained throughout your consultation and treatment at Skin Win Clinic." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Sexual Wellness · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">O-Shot®</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Orgasm Shot)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Advanced regenerative PRP therapy designed to enhance female sensitivity, improve intimate wellness, and support vaginal tissue health — naturally and non-surgically.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is the O-Shot®?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">The O-Shot® (Orgasm Shot) is a <strong>non-surgical regenerative therapy for women</strong> that uses <strong>Platelet-Rich Plasma (PRP)</strong> derived from the patient's own blood. It is designed to improve blood supply, tissue rejuvenation, and nerve sensitivity in intimate areas.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, the O-Shot® is performed under <strong>strict medical protocols with complete privacy and confidentiality</strong> — a natural, drug-free approach to female intimate wellness and sexual health.</p>
            <div className="mt-5 p-4 bg-pink-50 rounded-xl border border-pink-100">
              <p className="text-pink-800 text-sm font-medium">🔒 All consultations and treatments are completely confidential. Your privacy and comfort are our absolute priority.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="What Is PRP & How Does It Work?" />
          <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
            <p className="text-gray-600 mb-5">PRP (Platelet-Rich Plasma) is prepared from a small sample of your own blood. It contains concentrated growth factors that naturally stimulate healing, tissue regeneration, and improved blood supply.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ step: "1. Blood Collected", desc: "A small blood sample is drawn — similar to a routine blood test" }, { step: "2. PRP Prepared", desc: "Blood is processed in a medical centrifuge to concentrate platelets and growth factors" }, { step: "3. PRP Applied", desc: "Growth factor-rich PRP is carefully injected into targeted areas to stimulate tissue rejuvenation and nerve response" }].map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-5 border border-[#C09A50]/10 text-center">
                  <p className="font-bold text-[#C09A50] mb-2">{item.step}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Who It's For" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Suitable for women experiencing:</h3>
              <ul className="space-y-3">
                {["Reduced sexual sensitivity or arousal", "Difficulty achieving orgasm", "Vaginal dryness", "Mild urinary stress incontinence", "Post-childbirth or age-related intimate changes", "Desire for natural, non-surgical intimate wellness support"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Facts:</h3>
              <div className="space-y-3">
                {[{ label: "Procedure Type", value: "Non-surgical" }, { label: "Uses", value: "Patient's own PRP" }, { label: "Downtime", value: "Minimal" }, { label: "Confidentiality", value: "Strictly maintained" }].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[#C09A50]/10">
                    <span className="text-gray-500 text-sm">{item.label}</span>
                    <span className="text-gray-900 font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 A consultation is required to confirm suitability before treatment.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Improved sensitivity and arousal", "Enhanced orgasmic response", "Improved vaginal tissue health and hydration", "May help with mild urinary incontinence", "Natural, drug-free treatment using own PRP", "Non-surgical with minimal downtime"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Possible Side Effects</h3>
              <ul className="space-y-3">
                {["Mild tenderness (temporary)", "Temporary swelling at injection site", "Results vary from person to person"].map((item, i) => (
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
          <SectionHeader title="Pre & Post Treatment Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Treatment</h3>
              <ul className="space-y-3">
                {["Inform the doctor about medical conditions or medications", "Maintain proper hydration", "Avoid alcohol before the procedure", "Follow all consultation instructions carefully"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">After Treatment</h3>
              <ul className="space-y-3">
                {["Avoid strenuous physical activity for 24 hours", "Maintain intimate hygiene as advised", "Follow all post-procedure instructions provided", "Attend follow-up visits if recommended"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Interested in Female Intimate Wellness?</h3>
          <p className="text-gray-600 mb-6">Book a private, confidential consultation with our experts — all details are kept strictly private.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20O-Shot%20treatment.%20Please%20keep%20this%20confidential." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Private Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default OShot;