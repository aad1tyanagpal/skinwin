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

const TattooRemoval = () => {
  const faqs = [
    {
      question: "How many sessions are required to remove a tattoo?",
      answer: "6–10 sessions on average, spaced 4–6 weeks apart. The exact number depends on tattoo size, colour, ink depth, age, and your skin type."
    },
    {
      question: "Is laser tattoo removal painful?",
      answer: "Mild to moderate discomfort is expected — similar to rubber band snaps on the skin. It is generally well tolerated."
    },
    {
      question: "Can tattoos be completely removed?",
      answer: "Most tattoos can be significantly faded or completely removed. Results vary based on ink colour, depth, and skin factors."
    },
    {
      question: "Can coloured tattoos be removed?",
      answer: "Yes, especially dark colours. Some colours may require more sessions. Nd:YAG laser is effective for most common ink colours."
    },
    {
      question: "Is laser tattoo removal safe for Indian skin?",
      answer: "Yes. Nd:YAG laser is specifically safe for Indian and darker skin tones when performed by trained professionals."
    },
    {
      question: "Will there be scars after tattoo removal?",
      answer: "When done properly under medical supervision, risk of scarring is minimal."
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Laser Tattoo Removal
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Safe and effective laser treatment to fade and remove unwanted tattoos with minimal risk.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is */}
        <section>
          <SectionHeader title="What Is Laser Tattoo Removal?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Laser Tattoo Removal is a non-surgical procedure that uses advanced laser energy to{' '}
              <strong>break down tattoo ink particles</strong> into smaller fragments, which are
              then gradually eliminated by the body's immune system. It is effective for both
              professional and amateur tattoos of various colours and sizes.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, we use <strong>Nd:YAG laser technology</strong> — one of the
              most effective and safest options for tattoo removal, especially for{' '}
              <strong>Indian skin tones</strong>. All procedures are performed under expert medical supervision.
            </p>
          </div>
        </section>

        {/* How Laser Works on Tattoo */}
        <section>
          <SectionHeader title="How Laser Breaks Down Tattoo Ink" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Laser targets ink", desc: "Laser light is absorbed by tattoo ink particles" },
              { step: "2", title: "Ink shatters", desc: "Energy breaks ink into tiny microscopic fragments" },
              { step: "3", title: "Body clears ink", desc: "Immune system gradually flushes out the fragments" },
              { step: "4", title: "Tattoo fades", desc: "Tattoo lightens progressively after each session" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20 text-center">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#C09A50] text-white font-bold text-lg mb-3">
                  {item.step}
                </span>
                <p className="font-bold text-gray-900 mb-2 text-sm">{item.title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section>
          <SectionHeader title="What Happens During the Procedure" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Tattoo assessment — size, colour, ink depth",
                "Skin cleansing and preparation",
                "Protective eyewear provided",
                "Nd:YAG laser pulses applied to tattoo",
                "Cooling applied to reduce discomfort",
                "Post-procedure soothing care",
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
                { label: "Session Duration", value: "15–45 mins" },
                { label: "Pain Level", value: "Mild to moderate" },
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
          <SectionHeader title="Number of Sessions Required" />
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <div className="grid sm:grid-cols-3 gap-6 text-center mb-6">
              {[
                { number: "6–10", label: "Sessions on average" },
                { number: "4–6 weeks", label: "Gap between sessions" },
                { number: "Varies", label: "Based on tattoo & skin" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20">
                  <p className="text-3xl font-extrabold text-[#C09A50] mb-2">{stat.number}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="bg-gray-50 rounded-xl p-5">
              <p className="text-sm font-semibold text-gray-700 mb-3">Factors that affect number of sessions:</p>
              <ul className="grid sm:grid-cols-2 gap-2">
                {["Tattoo colour", "Ink depth", "Tattoo age", "Skin type", "Size of tattoo", "Amateur vs professional ink"].map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
                  "Unwanted or regretted tattoos",
                  "Faded or distorted tattoos",
                  "Tattoo correction before a cover-up",
                  "Cosmetic tattoo removal (after evaluation)",
                  "Professional or amateur tattoos",
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
                  "Active skin infections over the tattoo",
                  "Certain medical skin conditions",
                  "Pregnancy (relative contraindication)",
                  "Very recent tattoos (assessed during consultation)",
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
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {[
                  "Non-surgical — no cuts or stitches",
                  "Progressive and controlled fading",
                  "Minimal risk of scarring",
                  "Safe for Indian skin tones (Nd:YAG)",
                  "Effective on multiple tattoo colours",
                  "Minimal damage to surrounding skin",
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
                  "Temporary redness or swelling",
                  "Mild blistering or scabbing (rare)",
                  "Temporary skin lightening or darkening",
                  "Results vary based on tattoo characteristics",
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
            <p className="text-gray-400 text-lg">[ Laser Tattoo Removal Before & After Gallery ]</p>
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
                  "Avoid sun exposure or tanning",
                  "Do not apply creams or irritants on tattoo area",
                  "Inform doctor about any medications",
                  "Keep the area clean before session",
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
                  "Apply prescribed healing ointment as advised",
                  "Avoid sun exposure — use sunscreen daily",
                  "Do not pick at scabs or blisters",
                  "Avoid swimming or heat exposure for a few days",
                  "Keep treated area clean and protected",
                  "Follow all doctor's aftercare instructions",
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Want to Remove an Unwanted Tattoo?</h3>
          <p className="text-gray-600 mb-6">
            Book a consultation and get a personalized assessment for safe, effective tattoo removal.
          </p>
          <a
            href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Laser%20Tattoo%20Removal."
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

export default TattooRemoval;