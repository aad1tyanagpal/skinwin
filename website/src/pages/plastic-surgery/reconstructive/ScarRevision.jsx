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

const ScarRevision = () => {
  const faqs = [
    { question: "Can scars be completely removed?", answer: "Complete removal is usually not possible, but scars can be significantly improved in color, texture, depth, and visibility with the right treatment approach." },
    { question: "How many sessions are required?", answer: "The number of sessions depends on scar type and severity. Non-surgical treatments may require multiple sessions; surgical revision may be single-session." },
    { question: "Is scar revision painful?", answer: "Most treatments involve minimal discomfort which is well tolerated. Anaesthesia or numbing is used as appropriate for each procedure." },
    { question: "Is there downtime after scar revision?", answer: "Downtime is minimal for non-surgical treatments. Surgical scar revision may require a short recovery period." },
    { question: "Are old scars treatable?", answer: "Yes, even old scars can be significantly improved with appropriate treatment. Early treatment tends to yield better results, but old scars are absolutely treatable." },
  ];

  const scarTypes = [
    { type: "Acne Scars", desc: "Pitted, box, rolling, or icepick scars after acne", color: "bg-red-50/50 border-red-100" },
    { type: "Surgical Scars", desc: "Scars left after medical or cosmetic surgery", color: "bg-blue-50/50 border-blue-100" },
    { type: "Injury / Trauma Scars", desc: "Scars due to cuts, accidents, or injuries", color: "bg-orange-50/50 border-orange-100" },
    { type: "Burn Scars", desc: "Scars after thermal or chemical burns", color: "bg-yellow-50/50 border-yellow-100" },
    { type: "Hypertrophic Scars", desc: "Thick, raised scars within the injury area", color: "bg-purple-50/50 border-purple-100" },
    { type: "Keloid Scars", desc: "Raised scars that grow beyond the original wound", color: "bg-pink-50/50 border-pink-100" },
    { type: "Depressed / Pitted Scars", desc: "Sunken scars that sit below the skin surface", color: "bg-green-50/50 border-green-100" },
    { type: "Stretch Marks", desc: "Scars due to rapid skin stretching", color: "bg-teal-50/50 border-teal-100" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Reconstructive · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Scar Revision</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Advanced medical and surgical solutions to significantly reduce scar visibility, improve skin texture, and restore confidence.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Scar Revision?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Scar revision is a medical treatment designed to <strong>reduce the appearance of scars</strong>, improve skin texture, and make scars less noticeable. While scars cannot be completely erased, scar revision significantly improves their <strong>color, texture, size, and visibility</strong> — helping the scar blend better with surrounding skin.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, scar revision is performed using <strong>advanced dermatological and surgical techniques</strong>, customized according to scar type, depth, and skin condition — for the best possible outcome for each patient.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Types of Scars Treated" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {scarTypes.map((item, i) => (
              <div key={i} className={`rounded-xl p-5 border ${item.color}`}>
                <p className="font-bold text-gray-900 mb-1 text-sm">{item.type}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Treatment Options" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Non-Surgical Scar Revision</h3>
              <ul className="space-y-3">
                {["Laser scar revision", "Chemical peels", "Microneedling", "PRP / growth factor-based therapies", "Medical topical treatments"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Surgical Scar Revision</h3>
              <ul className="space-y-3">
                {["Excision and re-closure of scars", "Scar repositioning", "Advanced suturing techniques", "Z-plasty or W-plasty for complex scars"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 A personalized treatment plan is created after detailed evaluation of scar type, location, and skin condition.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4">
              {[
                "Detailed scar assessment — type, depth, age, and location",
                "Identification of best treatment technique for the scar",
                "Treatment administered (laser / peel / surgical as planned)",
                "Collagen stimulation and skin renewal triggered",
                "Gradual improvement monitored over sessions",
                "Follow-up and maintenance care advised",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section>
          <SectionHeader title="Who It's For" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Suitable for:</h3>
              <ul className="space-y-3">
                {["Visible or prominent scars", "Acne, injury, or surgical scars", "Old or new scars", "Raised, depressed, or discolored scars", "Scars affecting confidence or appearance"].map((item, i) => (
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
                {["Active skin infections in the treated area", "Certain medical conditions (evaluated during consultation)", "Unrealistic expectations of complete scar removal"].map((item, i) => (
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
                {["Significantly improved scar appearance", "Better skin texture and tone", "Reduced visibility of raised or pitted scars", "Customized approach for each scar type", "Non-surgical options available for many scars", "Boosted confidence and comfort"].map((item, i) => (
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
                {["Temporary redness or mild swelling", "Skin sensitivity for a short period", "Gradual results — multiple sessions may be needed", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Scar Revision Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Treatment Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Treatment</h3>
              <ul className="space-y-3">
                {["Avoid excessive sun exposure before treatment", "Inform the doctor about medications or medical conditions", "Do not pick or irritate the scar", "Follow all instructions provided during consultation"].map((item, i) => (
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
                {["Avoid sun exposure and apply sunscreen as advised", "Use prescribed skincare products only", "Avoid touching or scratching the treated area", "Attend follow-up sessions as recommended"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Improve Your Scar's Appearance?</h3>
          <p className="text-gray-600 mb-6">Book a consultation for a personalized scar assessment and treatment plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Scar%20Revision%20Treatment." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default ScarRevision;