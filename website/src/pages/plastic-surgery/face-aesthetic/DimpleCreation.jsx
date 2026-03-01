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

const DimpleCreation = () => {
  const faqs = [
    {
      question: "Is dimple creation permanent?",
      answer: "Dimples usually become permanent over time. Initially, the dimple is visible at rest too, but with time it typically only appears when you smile — just like natural dimples."
    },
    {
      question: "Will there be any visible scars?",
      answer: "No visible external scars. The entire procedure is performed from inside the mouth, so there are no marks on the outer skin."
    },
    {
      question: "Is the procedure painful?",
      answer: "Discomfort is minimal. Local anaesthesia is used, so you won't feel pain during the procedure. Mild soreness after may be present for a day or two."
    },
    {
      question: "How long does the procedure take?",
      answer: "Dimple creation is a very quick procedure, typically completed in 20–30 minutes per dimple under local anaesthesia."
    },
    {
      question: "Can dimples be created on both cheeks?",
      answer: "Yes, dimples can be created on one or both cheeks depending on your preference. The placement and size are customized to suit your facial features."
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">
            Face Aesthetic · Plastic Surgery
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Dimple Creation
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A simple, quick cosmetic procedure to create beautiful, natural-looking dimples that enhance your smile and facial charm.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is */}
        <section>
          <SectionHeader title="What Is Dimple Creation?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Dimple creation is a minor cosmetic surgical procedure designed to create a{' '}
              <strong>natural-looking indentation on the cheeks</strong>. The procedure involves
              making a small internal stitch inside the cheek to form a permanent or semi-permanent
              dimple — with <strong>no visible scars</strong> on the skin surface.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, dimple creation is performed under local anaesthesia as a
              quick outpatient procedure, customized to complement your{' '}
              <strong>unique facial features and smile</strong>.
            </p>
          </div>
        </section>

        {/* Quick Facts */}
        <section>
          <SectionHeader title="Quick Facts" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "⏱", label: "Procedure Time", value: "20–30 mins" },
              { icon: "💉", label: "Anaesthesia", value: "Local" },
              { icon: "🏥", label: "Procedure Type", value: "Outpatient" },
              { icon: "✨", label: "Visible Scars", value: "None" },
            ].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20 text-center">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-gray-900 font-bold">{item.value}</p>
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
                "Consultation to determine ideal dimple placement and size",
                "Area marked based on facial structure and smile",
                "Local anaesthesia applied inside the cheek",
                "Small internal incision made — no external cuts",
                "Internal stitch placed to create the dimple indentation",
                "Procedure completed — no bandages or dressings needed",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-white rounded-xl p-5 border border-blue-50">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-gray-900">After the procedure:</strong> The dimple is initially visible at rest. Over the following weeks, it gradually becomes visible <strong>only when you smile</strong> — just like natural dimples.
              </p>
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
                  "Individuals who desire cheek dimples",
                  "People wanting to enhance their smile",
                  "Those seeking a subtle, charming facial feature",
                  "Adults with healthy facial skin",
                  "Anyone wanting a quick, low-risk cosmetic enhancement",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Customization Options:</h3>
              <ul className="space-y-3">
                {[
                  "Single dimple (one cheek) or double (both cheeks)",
                  "Size of dimple customized to preference",
                  "Placement adjusted to suit your smile and face shape",
                  "Natural proportions maintained throughout",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                👉 A consultation is required to plan the ideal placement for your face.
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
                  "Natural-looking, beautiful dimples",
                  "Quick procedure — done in under 30 minutes",
                  "No visible external scars",
                  "Minimally invasive under local anaesthesia",
                  "Permanent results that look natural when smiling",
                  "Subtle enhancement that complements facial charm",
                ].map((item, i) => (
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
                {[
                  "Temporary mild swelling (settles in a few days)",
                  "Mild soreness or discomfort for 1–2 days",
                  "Dimple visible at rest initially (normalizes over weeks)",
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
            <p className="text-gray-400 text-lg">[ Dimple Creation Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        {/* Pre & Post Care */}
        <section>
          <SectionHeader title="Pre & Post Procedure Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Procedure</h3>
              <ul className="space-y-3">
                {[
                  "Avoid smoking and alcohol before the procedure",
                  "Inform the doctor about any medical conditions",
                  "Maintain good oral hygiene before the procedure",
                  "Follow all pre-procedure instructions provided",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-teal-50/50 rounded-2xl p-8 border border-teal-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">After Procedure</h3>
              <ul className="space-y-3">
                {[
                  "Avoid excessive facial movements initially",
                  "Maintain good oral hygiene as advised",
                  "Mild swelling is normal and will settle in a few days",
                  "Avoid spicy or hard foods for a day or two",
                  "Attend follow-up visits if recommended",
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Want That Charming Smile With Dimples?
          </h3>
          <p className="text-gray-600 mb-6">
            Book a quick consultation — dimple creation can be done in a single short visit!
          </p>
          <a
            href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Dimple%20Creation."
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

export default DimpleCreation;