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

const Gynecomastia = () => {
  const faqs = [
    { question: "Is gynecomastia surgery permanent?", answer: "Yes, results are permanent in most cases. Once glandular tissue is surgically removed, it does not typically regrow." },
    { question: "Will there be visible scars?", answer: "Scars are minimal and usually well hidden — incisions are placed around the areola or in natural chest folds." },
    { question: "When can normal activity resume?", answer: "Light activities can resume within a few days. Chest workouts and strenuous exercise should be avoided for 4–6 weeks as advised." },
    { question: "What causes gynecomastia?", answer: "Common causes include hormonal imbalance, weight gain, certain medications, or genetic factors. A proper evaluation helps determine the cause before treatment." },
    { question: "Can gynecomastia return after surgery?", answer: "If caused by hormonal imbalance or medication, the underlying cause should be addressed. Once removed surgically, recurrence is rare with stable weight and lifestyle." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Reconstructive · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Gynecomastia Surgery</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Male Breast Reduction)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Permanent solution for enlarged male breasts — achieve a flat, masculine, and contoured chest with expert surgical care.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Gynecomastia?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Gynecomastia is the <strong>enlargement of glandular breast tissue in males</strong>, resulting in a fuller, feminized chest appearance. It can affect one or both sides and may cause self-consciousness and discomfort.</p>
            <p className="text-gray-600 leading-relaxed text-lg">Gynecomastia surgery at Skin Win Clinic removes <strong>excess glandular tissue and fat</strong> from the male chest to achieve a flat, firm, and masculine appearance — restoring confidence under expert surgical care.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Grades of Gynecomastia" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { grade: "Grade I", desc: "Minor enlargement, no excess skin", color: "bg-green-50/50 border-green-100" },
              { grade: "Grade II", desc: "Moderate enlargement, no excess skin", color: "bg-yellow-50/50 border-yellow-100" },
              { grade: "Grade III", desc: "Moderate enlargement with some excess skin", color: "bg-orange-50/50 border-orange-100" },
              { grade: "Grade IV", desc: "Marked enlargement with significant excess skin", color: "bg-red-50/50 border-red-100" },
            ].map((item, i) => (
              <div key={i} className={`rounded-xl p-5 border text-center ${item.color}`}>
                <p className="font-bold text-gray-900 mb-2">{item.grade}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 Treatment approach is customized based on grade, tissue composition, and individual assessment.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Pre-surgical consultation, hormonal evaluation & planning",
                "General or local anaesthesia with sedation administered",
                "Incision placed around areola or in chest fold",
                "Excess glandular tissue surgically removed",
                "Liposuction performed if excess fat is also present",
                "Chest skin re-draped and incisions carefully closed",
                "Compression garment applied for post-operative support",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical" }, { label: "Anaesthesia", value: "General / Local" }, { label: "Initial Recovery", value: "1–2 weeks" }].map((stat, i) => (
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
                {["Enlarged male breast tissue (one or both sides)", "Hormonal or weight-related gynecomastia", "Males embarrassed by chest appearance", "Those not responding to lifestyle changes", "Adults with stable weight and good health"].map((item, i) => (
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
                {["Underlying hormonal causes should be addressed first", "Stable body weight recommended before surgery", "Non-smokers or those who can quit before surgery", "Realistic expectations about results"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 Consultation required to confirm suitability and rule out underlying causes.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Flat, firm, masculine chest contour", "Permanent results in most cases", "Minimal, well-hidden scarring", "Improved confidence and self-image", "Comfortable in fitted clothing"].map((item, i) => (
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
                {["Temporary swelling and bruising", "Short recovery period required", "Mild discomfort during healing", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Gynecomastia Surgery Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Avoid smoking and alcohol", "Inform the doctor about hormonal or medical conditions", "Follow all pre-surgery instructions carefully", "Arrange for someone to accompany on surgery day"].map((item, i) => (
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
                {["Wear compression garments as advised", "Avoid chest workouts and heavy lifting initially", "Keep the surgical area clean and dry", "Take prescribed medications as advised", "Attend all follow-up appointments"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready for a Flat, Masculine Chest?</h3>
          <p className="text-gray-600 mb-6">Book a confidential consultation with our surgical experts for a personalized assessment and plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Gynecomastia%20Surgery." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default Gynecomastia;