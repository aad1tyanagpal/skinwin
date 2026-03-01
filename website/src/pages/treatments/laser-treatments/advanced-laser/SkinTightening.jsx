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

const SectionHeader = ({ title }) => (
  <div className="flex items-center mb-6">
    <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
    <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
  </div>
);

const SkinTightening = () => {
  const faqs = [
    {
      question: "How many sessions are required?",
      answer: "The number of sessions depends on skin condition and treatment goals. Multiple sessions are usually recommended for best results."
    },
    {
      question: "Is laser skin tightening painful?",
      answer: "Most patients experience mild warmth or tingling, which is well tolerated. The procedure is generally comfortable."
    },
    {
      question: "Is there any downtime after treatment?",
      answer: "No downtime. Normal activities can be resumed immediately after the session."
    },
    {
      question: "When will I see results?",
      answer: "Initial improvement may be seen early, with gradual tightening and firming visible over several weeks as collagen builds up."
    },
    {
      question: "Is laser skin tightening safe?",
      answer: "Yes, when performed under medical supervision using approved laser technology."
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Laser Skin Tightening
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Non-surgical laser treatment to tighten skin, improve firmness, and enhance facial contours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is */}
        <section>
          <SectionHeader title="What Is Laser Skin Tightening?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Laser Skin Tightening is a non-invasive treatment that uses controlled laser energy to{' '}
              <strong>stimulate collagen and elastin production</strong> in the deeper layers of the skin.
              This results in firmer, smoother, and tighter-looking skin over time — without any surgery.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, laser skin tightening is performed using{' '}
              <strong>advanced, medically approved laser technology</strong> under expert supervision
              to ensure safe, comfortable, and effective results.
            </p>
          </div>
        </section>

        {/* How Collagen Works */}
        <section>
          <SectionHeader title="How It Tightens Your Skin" />
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: "🔆", title: "Laser heat applied", desc: "Controlled energy penetrates deep into skin layers safely" },
              { icon: "⚡", title: "Collagen stimulated", desc: "Heat triggers natural collagen and elastin production" },
              { icon: "✨", title: "Skin firms up", desc: "Gradual tightening and lifting visible over weeks" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20 text-center">
                <span className="text-3xl mb-3 block">{item.icon}</span>
                <p className="font-bold text-gray-900 mb-2">{item.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Skin assessment and treatment planning",
                "Application of laser energy to targeted areas",
                "Heating of deeper skin layers to boost collagen",
                "Gradual tightening and firming of the skin",
                "Follow-up sessions if required",
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
                { label: "Procedure Type", value: "Non-surgical" },
                { label: "Pain Level", value: "Mild warmth / tingling" },
                { label: "Downtime", value: "None" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-50">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-gray-900 font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section>
          <SectionHeader title="Areas That Can Be Treated" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { area: "Face", desc: "Sagging cheeks, jowls, overall facial laxity" },
              { area: "Jawline", desc: "Defined jaw contour and tighter lower face" },
              { area: "Neck", desc: "Loose neck skin and fine lines" },
              { area: "Body", desc: "Arms, abdomen, and other areas of skin laxity" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20 text-center">
                <p className="font-bold text-gray-900 mb-2">{item.area}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section>
          <SectionHeader title="Who It's For" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50/50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Suitable for:</h3>
              <ul className="space-y-3">
                {[
                  "Mild to moderate skin laxity",
                  "Sagging skin on face, jawline, or neck",
                  "Loss of skin firmness due to ageing",
                  "Individuals seeking non-surgical skin tightening",
                  "Post-weight loss skin looseness",
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
                  "Severe skin laxity requiring surgical treatment",
                  "Certain medical or skin conditions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                👉 A consultation is required to confirm suitability.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits & Risks */}
        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Non-surgical and non-invasive",
                  "Improves skin firmness and elasticity",
                  "Stimulates natural collagen production",
                  "No downtime — resume activities immediately",
                  "Minimal discomfort during procedure",
                  "Gradual, natural-looking results",
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
                  "Temporary redness or warmth",
                  "Mild swelling in treated areas",
                  "Results may vary from person to person",
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
          <SectionHeader title="Before & After" />
          <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 text-lg">[ Laser Skin Tightening Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        {/* Pre & Post Care */}
        <section>
          <SectionHeader title="Pre & Post Treatment Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Treatment</h3>
              <ul className="space-y-3">
                {[
                  "Avoid sun exposure and tanning",
                  "Inform the doctor about previous treatments",
                  "Avoid active skin infections in treatment area",
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
                  "Keep treated area clean and protected",
                  "Avoid sun exposure — use sunscreen daily",
                  "Use prescribed creams or skincare as advised",
                  "Follow all aftercare instructions carefully",
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
          <SectionHeader title="Frequently Asked Questions" />
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-[#FBF5E9] rounded-2xl p-8 text-center border border-[#C09A50]/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Want Firmer, Tighter Skin Without Surgery?</h3>
          <p className="text-gray-600 mb-6">
            Book a consultation and let our experts create a personalized skin tightening plan for you.
          </p>
          <a
            href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Laser%20Skin%20Tightening."
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

export default SkinTightening;