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

const BreastAugmentation = () => {
  const faqs = [
    { question: "Will breast augmentation look natural?", answer: "Yes. When implant size, shape, and placement are chosen correctly based on your body proportions, results look natural and balanced." },
    { question: "Is the result permanent?", answer: "Results are long-lasting. Implants are durable but may require replacement after many years. Regular monitoring is recommended." },
    { question: "What is the difference between implants and fat transfer?", answer: "Implants use medical-grade silicone/saline devices for predictable size enhancement. Fat transfer uses your own fat for subtle, natural augmentation. The best option is decided during consultation." },
    { question: "How long is recovery?", answer: "Initial recovery takes 1–2 weeks. Strenuous activity and upper body workouts should be avoided for 4–6 weeks as advised." },
    { question: "Are breast implants safe?", answer: "Yes. When placed by experienced surgeons using approved implants, and monitored regularly, breast implants are safe and well-tolerated." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Breast Surgery · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Breast Augmentation</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Breast Enlargement)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Enhance breast size, shape, and symmetry with safe, natural-looking results — tailored to your body and goals.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Breast Augmentation?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Breast augmentation is a surgical procedure performed to <strong>increase breast size, improve shape, and enhance symmetry</strong>. The procedure is done using breast implants or fat transfer, depending on the patient's body type and expectations.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, breast augmentation is planned with a strong focus on <strong>natural appearance, body proportion, and long-term safety</strong> — every decision is personalized to give you results that feel right for you.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Surgical Options" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: "Breast Implants", tag: "Most Common", tagColor: "bg-[#C09A50]/10 text-[#C09A50]", points: ["Silicone or saline medical-grade implants", "Predictable and customizable size results", "Wide range of shapes and profiles available", "Long-lasting — durable over many years", "Best for significant size enhancement"] },
              { type: "Fat Transfer Augmentation", tag: "Natural Option", tagColor: "bg-green-100 text-green-700", points: ["Uses your own body fat (liposuction + transfer)", "Very natural look and feel", "Subtle enhancement — 1 cup size typically", "No implant-related considerations", "Best for modest natural enhancement"] },
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
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 The most suitable option is decided after detailed consultation and individual assessment.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {["Detailed consultation — body assessment, implant size selection, placement planning", "General anaesthesia administered", "Incision made in the inframammary fold, areola edge, or armpit", "Implant placed behind the breast tissue or chest muscle", "Incisions carefully closed to minimise scarring", "Support bra fitted immediately post-surgery", "Recovery monitoring and follow-up care scheduled"].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical" }, { label: "Anaesthesia", value: "General" }, { label: "Initial Recovery", value: "1–2 weeks" }].map((stat, i) => (
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
                {["Small or underdeveloped breasts", "Loss of breast volume after pregnancy or weight loss", "Breast asymmetry", "Women seeking improved body proportions", "Women with realistic expectations and good overall health"].map((item, i) => (
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
                {["Avoid smoking before and after surgery", "Discuss size expectations clearly during consultation", "Inform about allergies or medical history", "Implants are long-lasting but may need future monitoring"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 Consultation required to confirm suitability and plan the procedure.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Improved breast size and shape", "Better body balance and proportions", "Long-lasting, predictable results", "Improved breast symmetry", "Enhanced confidence and self-image"].map((item, i) => (
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
                {["Temporary swelling or soreness", "Implant-related considerations (long-term monitoring)", "Healing time varies", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Breast Augmentation Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Avoid smoking and alcohol before surgery", "Inform the doctor about medications or medical conditions", "Discuss expectations clearly during consultation", "Arrange support at home for post-surgery recovery"].map((item, i) => (
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
                {["Wear supportive garments as advised", "Avoid heavy lifting and upper-body workouts", "Follow medication and wound-care instructions", "Sleep on your back with head elevated", "Attend all follow-up visits regularly"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Enhance Your Confidence?</h3>
          <p className="text-gray-600 mb-6">Book a confidential consultation with our breast surgery experts for a personalized plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Breast%20Augmentation." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default BreastAugmentation;