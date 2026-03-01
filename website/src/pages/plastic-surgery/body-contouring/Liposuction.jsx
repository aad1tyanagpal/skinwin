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

const Liposuction = () => {
  const faqs = [
    { question: "Is liposuction a weight-loss surgery?", answer: "No. Liposuction is a body contouring procedure that removes localized fat deposits. It is not a treatment for obesity or significant weight loss." },
    { question: "Are the results permanent?", answer: "Fat cells removed by liposuction do not return. However, maintaining results requires a healthy lifestyle — significant weight gain can affect the outcome." },
    { question: "How long is the downtime?", answer: "Downtime varies depending on the areas treated and the amount of fat removed. Most patients resume light activities within a week and full activity within a few weeks." },
    { question: "Can multiple areas be treated in one session?", answer: "Yes. Multiple areas can often be treated in a single session, depending on the volume of fat and individual safety considerations." },
    { question: "Will there be loose skin after liposuction?", answer: "Liposuction works best in individuals with good skin elasticity. Those with significantly loose skin may benefit from combining liposuction with a skin tightening procedure." },
  ];

  const areas = [
    { area: "Abdomen", icon: "👕" },
    { area: "Flanks / Love Handles", icon: "🫁" },
    { area: "Thighs", icon: "🦵" },
    { area: "Upper Arms", icon: "💪" },
    { area: "Back", icon: "🔙" },
    { area: "Chin & Neck", icon: "🫦" },
    { area: "Hips & Buttocks", icon: "🩱" },
    { area: "Chest (Male)", icon: "🧔" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Body Contouring · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Liposuction</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Precisely remove stubborn, localized fat deposits and achieve a smoother, better-contoured body — safely and effectively.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Liposuction?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Liposuction is a surgical procedure that <strong>removes localized fat deposits</strong> from specific areas of the body to improve contour and proportion. It targets stubborn fat that does not respond to diet and exercise — sculpting a slimmer, more defined silhouette.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, liposuction is performed with <strong>precision, safety, and a focus on natural-looking results</strong>. It is not a weight-loss surgery — it is a body shaping procedure for individuals close to their ideal weight.</p>
            <div className="mt-5 p-4 bg-amber-50 rounded-xl border border-amber-100">
              <p className="text-amber-800 text-sm font-medium">⚠️ Liposuction is a body contouring procedure, not a treatment for obesity. Best results are seen in individuals close to their ideal body weight with good skin elasticity.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Common Treatment Areas" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {areas.map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-5 border border-[#C09A50]/20 text-center">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="font-semibold text-gray-900 text-sm">{item.area}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Detailed consultation — body assessment, target areas marked",
                "General or local anaesthesia with sedation administered",
                "Small incisions made in the target area",
                "Tumescent fluid injected to loosen fat and minimize bleeding",
                "Thin cannula inserted to break up and suction fat",
                "Incisions closed and compression garment applied",
                "Recovery monitoring and follow-up care scheduled",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical" }, { label: "Anaesthesia", value: "General / Local + Sedation" }, { label: "Initial Recovery", value: "1–2 weeks" }].map((stat, i) => (
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
                {["Localized fat deposits that don't respond to diet/exercise", "Good skin elasticity", "Individuals close to their ideal body weight", "Stable body weight for at least 6 months", "Good overall health with realistic expectations"].map((item, i) => (
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
                {["Significant obesity or large-volume fat removal goals", "Poor skin elasticity (may need skin removal procedure)", "Active infections or uncontrolled medical conditions", "Unrealistic expectations of dramatic weight loss"].map((item, i) => (
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
                {["Improved body contour and proportion", "Targeted removal of stubborn fat", "Long-lasting results with healthy lifestyle", "Can treat multiple areas in one session", "Boost in confidence and self-image"].map((item, i) => (
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
                {["Temporary swelling and bruising", "Mild discomfort during recovery", "Uneven contour if skin elasticity is poor", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Liposuction Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Maintain stable body weight", "Avoid smoking and alcohol", "Inform the doctor about all medications", "Follow all pre-surgery instructions carefully"].map((item, i) => (
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
                {["Wear compression garments as advised", "Avoid heavy physical activity initially", "Follow wound care instructions carefully", "Maintain a healthy diet and lifestyle", "Attend all follow-up visits regularly"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Contour Your Body?</h3>
          <p className="text-gray-600 mb-6">Book a consultation with our surgical experts for a personalized body contouring assessment and plan.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Liposuction." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default Liposuction;