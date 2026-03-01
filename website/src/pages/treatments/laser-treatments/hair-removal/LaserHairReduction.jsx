import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-gray-900 font-medium">{question}</span>
        <svg
          className={`w-5 h-5 text-[#C09A50] transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <p className="mt-3 text-gray-600 leading-relaxed">{answer}</p>}
    </div>
  );
};

const LaserHairReduction = () => {
  const faceAreas = ["Upper lip", "Chin", "Sideburns", "Full face", "Neck"];
  const bodyAreas = ["Underarms", "Arms", "Legs", "Chest", "Back", "Bikini line", "Abdomen"];

  const faqs = [
    {
      question: "How many sessions are required?",
      answer: "6–8 sessions on average, spaced 4–6 weeks apart. Hair grows in cycles, so multiple sessions are essential to target all follicles."
    },
    {
      question: "Is laser hair reduction painful?",
      answer: "Most patients experience mild warmth or tingling, which is well tolerated. The machine has a built-in cooling system for comfort."
    },
    {
      question: "Is laser hair reduction permanent?",
      answer: "Laser provides long-term permanent hair reduction. Occasional maintenance sessions once or twice a year may be advised."
    },
    {
      question: "Is there any downtime after treatment?",
      answer: "No downtime. Normal activities can be resumed immediately after the session."
    },
    {
      question: "Is laser hair reduction safe for Indian skin?",
      answer: "Yes. We use Diode Laser technology which is specifically effective and safe for Indian and darker skin tones."
    },
  ];

  const sectionHeader = (title) => (
    <div className="flex items-center mb-6">
      <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    </div>
  );

  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Laser Hair Reduction
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Safe, effective, and long-term reduction of unwanted hair with advanced Diode Laser technology.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is */}
        <section>
          {sectionHeader("What Is Laser Hair Reduction?")}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Laser Hair Reduction is a medical procedure that uses controlled laser energy to target hair follicles and reduce unwanted hair growth. The laser{' '}
              <strong>selectively damages the hair follicle</strong> without harming surrounding skin, leading to{' '}
              <strong>permanent reduction in hair growth</strong> over multiple sessions.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              At Skin Win Clinic, we use <strong>advanced Diode Laser machines</strong> — one of the most effective and safest technologies, especially for{' '}
              <strong>Indian skin types</strong>. All procedures are performed under medical supervision.
            </p>
            <div className="bg-white border border-[#C09A50]/20 rounded-xl p-5 mt-4">
              <h3 className="font-semibold text-gray-900 mb-3">Why Diode Laser Is Preferred:</h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Suitable for Indian & darker skin tones",
                  "Effective on coarse and thick hair",
                  "Deeper penetration for better follicle destruction",
                  "Built-in cooling system for comfort & safety"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section>
          {sectionHeader("Areas That Can Be Treated")}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Face</h3>
              <ul className="space-y-3">
                {faceAreas.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Body</h3>
              <ul className="space-y-3">
                {bodyAreas.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          {sectionHeader("How the Procedure Works")}
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Skin assessment & hair analysis",
                "Area cleaning and shaving (if required)",
                "Protective eyewear provided",
                "Diode laser applied to target area",
                "Built-in cooling system reduces discomfort",
                "Post-procedure soothing gel applied",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { label: "Session Duration", value: "15–60 mins" },
                { label: "Pain Level", value: "Mild warmth / tingling" },
                { label: "Procedure Type", value: "Outpatient" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-50">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-gray-900 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sessions */}
        <section>
          {sectionHeader("Number of Sessions Required")}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[
                { number: "6–8", label: "Sessions on average" },
                { number: "4–6 weeks", label: "Gap between sessions" },
                { number: "1–2×/year", label: "Maintenance sessions" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20">
                  <p className="text-3xl font-extrabold text-[#C09A50] mb-2">{stat.number}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-sm text-center mt-4">
              Hair grows in cycles — multiple sessions are essential to target all follicles in the active growth phase.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section>
          {sectionHeader("Who It's For")}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Suitable for:</h3>
              <ul className="space-y-3">
                {[
                  "Men & women with unwanted facial or body hair",
                  "Thick or coarse hair growth",
                  "Ingrown hair or razor bump issues",
                  "Sensitive skin irritated by waxing or shaving",
                  "Anyone seeking long-term hair reduction"
                ].map((item, i) => (
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
                {[
                  "Very light or white/grey hair",
                  "Certain active skin infections",
                  "Pregnancy (relative contraindication — consult doctor)"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                👉 Final suitability confirmed after consultation.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits & Risks */}
        <section>
          {sectionHeader("Benefits & Risks")}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Long-term permanent hair reduction",
                  "Smooth and even skin texture",
                  "Reduces ingrown hair and razor bumps",
                  "Quick procedure with minimal discomfort",
                  "Safe for Indian skin tones",
                  "No cuts, burns, or waxing irritation",
                  "Suitable for face and multiple body areas"
                ].map((item, i) => (
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
                {[
                  "Mild redness or swelling (resolves in 1–2 days)",
                  "Warm sensation during treatment",
                  "Rare pigmentation changes if post-care is ignored",
                  "Results may vary from person to person"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Before & After */}
        <section>
          {sectionHeader("Before & After")}
          <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">[ Laser Hair Reduction Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        {/* Pre & Post Care */}
        <section>
          {sectionHeader("Pre & Post Treatment Care")}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Treatment</h3>
              <ul className="space-y-3">
                {[
                  "Avoid waxing, threading, or plucking before treatment",
                  "Avoid sun exposure and tanning",
                  "Shave the area 1–2 days before (if advised)",
                  "Inform the doctor about any skin sensitivity or medications"
                ].map((item, i) => (
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
                {[
                  "Apply soothing gel or cold compress if needed",
                  "Use broad-spectrum sunscreen (SPF 30+) daily",
                  "Avoid sun exposure and heat for 7–10 days",
                  "Avoid hot showers, saunas, and gym for 24–48 hours",
                  "Do not wax, thread, or pluck — shaving is allowed",
                  "Avoid harsh skincare products for a few days"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          {sectionHeader("Frequently Asked Questions")}
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#FBF5E9] rounded-2xl p-8 text-center border border-[#C09A50]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Tired of Shaving & Waxing?</h3>
          <p className="text-gray-600 mb-6">
            Book a consultation and experience safe, effective laser hair reduction with visible results.
          </p>
          <a
            href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Laser%20Hair%20Reduction."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors"
          >
            Book Consultation
          </a>
        </div>

      </div>
    </div>
  );
};

export default LaserHairReduction;