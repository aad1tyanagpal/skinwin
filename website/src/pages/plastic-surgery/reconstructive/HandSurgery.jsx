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

const HandSurgery = () => {
  const faqs = [
    { question: "Is hand surgery painful?", answer: "Pain is usually mild and well controlled with local anaesthesia during the procedure and prescribed medication post-operatively." },
    { question: "How long is recovery?", answer: "Recovery depends on the specific condition treated. Most patients can return to light activities within days to a few weeks." },
    { question: "Will hand function improve after surgery?", answer: "Yes. The primary goal of hand surgery is to restore and improve hand function, comfort, and quality of life." },
    { question: "Will physiotherapy be needed after hand surgery?", answer: "For some conditions (such as carpal tunnel or tendon repairs), physiotherapy is recommended after surgery to restore full range of motion and strength." },
    { question: "Is hand surgery done under general anaesthesia?", answer: "Most hand surgeries are performed under local or regional anaesthesia, making them safe, comfortable, and suitable as outpatient procedures." },
  ];

  const conditions = [
    { name: "Trigger Finger", desc: "Locking or catching of finger during bending due to tendon sheath inflammation", icon: "🖐" },
    { name: "Ganglion Cysts", desc: "Fluid-filled cysts typically forming on the wrist or hand joints", icon: "🔵" },
    { name: "Carpal Tunnel Syndrome", desc: "Nerve compression at the wrist causing pain, numbness, and weakness", icon: "⚡" },
    { name: "Hand Injuries", desc: "Injuries to tendons, nerves, or bones requiring surgical repair", icon: "🩹" },
    { name: "Dupuytren's Contracture", desc: "Abnormal thickening of tissue causing fingers to bend toward palm", icon: "🤜" },
    { name: "Hand Deformities", desc: "Congenital or acquired hand deformities affecting function and appearance", icon: "✋" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Reconstructive · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Hand Surgery</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Surgical management of hand conditions to restore function, relieve pain, and improve quality of life under expert surgical care.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Hand Surgery?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Hand surgery addresses <strong>medical, functional, and cosmetic issues of the hand</strong> — including injuries, deformities, nerve compression, tendon problems, cysts, and congenital conditions. The hands are complex structures, and even minor problems can significantly affect daily life.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, hand surgery is performed with <strong>precision and care</strong> to restore full function, relieve discomfort, and improve the appearance of the hand under expert reconstructive surgical supervision.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Conditions Treated" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conditions.map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="font-bold text-gray-900 mb-2">{item.name}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 A thorough evaluation is conducted before any surgical procedure to determine the most appropriate treatment.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Detailed clinical evaluation and assessment of the hand condition",
                "Investigation including X-rays or nerve studies if required",
                "Local or regional anaesthesia administered",
                "Precise surgical approach tailored to specific condition",
                "Careful repair, release, or removal performed",
                "Wound closure with fine sutures",
                "Physiotherapy and follow-up care as advised",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Anaesthesia", value: "Local / Regional" }, { label: "Procedure Type", value: "Outpatient / Day-care" }, { label: "Recovery", value: "Condition-dependent" }].map((stat, i) => (
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
                {["Improved hand function and movement", "Pain relief and comfort", "Better quality of daily life", "Treatment of infection or inflammation", "Improved appearance of the hand"].map((item, i) => (
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
                {["Temporary stiffness or swelling", "Healing time varies by condition", "Physiotherapy may be required", "Results may vary from person to person"].map((item, i) => (
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
                {["Inform the doctor about medical conditions or medications", "Avoid smoking before surgery", "Follow all pre-procedure instructions carefully", "Arrange for assistance at home if needed post-surgery"].map((item, i) => (
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
                {["Follow all hand movement restrictions given", "Keep the surgical site clean and dry", "Attend physiotherapy sessions if advised", "Take prescribed medications as directed", "Attend all follow-up visits regularly"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Experiencing Hand Pain or Restricted Movement?</h3>
          <p className="text-gray-600 mb-6">Book a consultation for a thorough hand evaluation and personalized surgical plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Hand%20Surgery." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default HandSurgery;