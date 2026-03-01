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

const CleftPalate = () => {
  const faqs = [
    { question: "Is cleft palate treatable?", answer: "Yes. Cleft palate can be effectively treated with surgery (palatoplasty) and supportive therapies including speech therapy and dental care." },
    { question: "At what age is surgery performed?", answer: "Surgery is often performed in early childhood for best speech and developmental outcomes, but timing depends on individual factors. Older children and adults can also benefit." },
    { question: "Will speech become normal after surgery?", answer: "Speech improves significantly after surgery. Speech therapy is usually recommended after palatoplasty to achieve the best results." },
    { question: "Is cleft palate surgery safe?", answer: "Yes. Cleft palate surgery is a well-established reconstructive procedure performed under general anaesthesia by expert plastic surgeons." },
    { question: "Will more than one surgery be needed?", answer: "Some patients may require additional procedures over time — such as bone grafting, orthodontic treatment, or revision surgery — depending on severity and individual needs." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Reconstructive · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Cleft Palate</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Comprehensive diagnosis and reconstructive surgical care for cleft palate — focused on function, appearance, and long-term wellbeing.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is a Cleft Palate?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">A cleft palate is a <strong>congenital (present at birth) condition</strong> where there is an opening or gap in the roof of the mouth (palate). This occurs when the tissues of the palate do not fuse properly during early pregnancy. It can occur alone or along with a cleft lip.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, cleft palate is assessed and treated with a <strong>patient-first, multidisciplinary approach</strong> — focusing on surgical correction, speech development, hearing care, and long-term wellbeing of the child and family.</p>
            <div className="mt-5 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-amber-800 text-sm font-medium">💛 Cleft palate is not caused by anything the parents intentionally did. It is a developmental variation that is treatable with timely care.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Types of Cleft Palate" />
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { type: "Incomplete Cleft Palate", desc: "Partial opening in the palate — the gap does not extend the full length of the palate", color: "bg-blue-50/50 border-blue-100" },
              { type: "Complete Cleft Palate", desc: "Full opening involving both the hard and soft palate", color: "bg-orange-50/50 border-orange-100" },
              { type: "Submucous Cleft Palate", desc: "Palate appears intact on surface but the underlying muscles are not properly formed", color: "bg-purple-50/50 border-purple-100" },
              { type: "Cleft Lip with Cleft Palate", desc: "Combined involvement of both the lip and palate — requires coordinated surgical planning", color: "bg-red-50/50 border-red-100" },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-6 border ${item.color}`}>
                <p className="font-bold text-gray-900 mb-2">{item.type}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Problems If Left Untreated" />
          <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
            <p className="text-gray-600 mb-5">If untreated, cleft palate can significantly impact a child's development and quality of life:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Difficulty in feeding — especially in infants",
                "Speech and pronunciation problems",
                "Recurrent ear infections",
                "Hearing difficulties",
                "Dental and orthodontic issues",
                "Psychosocial and confidence challenges",
              ].map((item, i) => (
                <div key={i} className="flex items-start bg-white p-3 rounded-lg border border-red-50">
                  <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm font-medium text-green-700 bg-green-50 p-3 rounded-lg">✅ Early evaluation and timely treatment significantly improve all outcomes.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Treatment Approach" />
          <div className="space-y-4">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Primary Surgery — Palatoplasty</h3>
              <p className="text-gray-600 mb-4">Surgery (palatoplasty) is the primary treatment for cleft palate. The goals of surgery include:</p>
              <ul className="space-y-2">
                {["Closing the opening in the palate", "Restoring normal palate structure and function", "Improving speech development", "Preventing food and liquid from entering the nasal cavity"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Additional Supportive Treatments</h3>
              <p className="text-gray-600 mb-4">Depending on individual needs, a comprehensive care plan may also include:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Speech therapy after surgery", "Hearing evaluation and care", "Dental and orthodontic treatment", "Psychological support for child and family", "Nutritional guidance for infants", "Follow-up and revision surgery if needed"].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="How the Surgery Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Detailed clinical examination and assessment",
                "Multidisciplinary team evaluation — surgical, dental, speech",
                "General anaesthesia administered",
                "Palate tissues carefully repositioned and muscles repaired",
                "Gap in the palate closed with precise suturing",
                "Post-operative monitoring and care",
                "Long-term follow-up with staged interventions as needed",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical (Palatoplasty)" }, { label: "Anaesthesia", value: "General" }, { label: "Care Type", value: "Long-term / Staged" }].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-50">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-gray-900 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Improved feeding and swallowing", "Better speech and language development", "Reduced risk of ear infections", "Improved facial function and appearance", "Enhanced quality of life and confidence"].map((item, i) => (
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
                {["Temporary swelling or discomfort post-surgery", "Healing time required", "Some cases may need additional procedures", "Results may vary depending on severity"].map((item, i) => (
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
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Complete pre-operative medical evaluation", "Inform the doctor about all medical history", "Nutritional optimization for infant/child", "Follow all pre-surgery instructions carefully"].map((item, i) => (
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
                {["Follow feeding and oral care instructions carefully", "Avoid any pressure or injury to the palate area", "Attend all follow-up visits as scheduled", "Begin speech therapy as advised", "Attend dental and hearing evaluations as recommended"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Looking for Expert Cleft Palate Care?</h3>
          <p className="text-gray-600 mb-6">Book a consultation with our reconstructive surgical team for a compassionate, thorough assessment and care plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20seeking%20information%20about%20Cleft%20Palate%20Treatment." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default CleftPalate;