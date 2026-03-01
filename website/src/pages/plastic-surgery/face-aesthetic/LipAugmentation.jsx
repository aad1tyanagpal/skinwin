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

const LipAugmentation = () => {
  const faqs = [
    { question: "How long do lip augmentation results last?", answer: "Results typically last 6–12 months depending on filler type and individual metabolism. Maintenance sessions help sustain the result." },
    { question: "Will my lips look natural?", answer: "Yes. Our approach is subtle, natural enhancement tailored to your facial features — the goal is fuller, more defined lips, not an overdone look." },
    { question: "Is lip augmentation painful?", answer: "Discomfort is minimal. Numbing cream is applied before the procedure, making it very comfortable for most patients." },
    { question: "Can lip augmentation be reversed?", answer: "Yes. Hyaluronic acid fillers can be dissolved with an enzyme called hyaluronidase if you are unhappy with the result." },
    { question: "Is the procedure safe?", answer: "Yes, when performed by trained medical professionals using approved dermal fillers under proper medical supervision." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Face Aesthetic · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Lip Augmentation</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Enhance lip volume, shape, and definition for a fuller, naturally beautiful smile with precision dermal filler treatment.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is Lip Augmentation?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">Lip Augmentation is a non-surgical cosmetic procedure that uses <strong>dermal fillers to enhance the size, shape, and definition of the lips</strong>. It can add volume to thin lips, improve symmetry, define the lip borders, and restore volume lost due to ageing.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, lip augmentation is performed with a <strong>natural-first philosophy</strong> — precise filler placement that enhances your lips while maintaining facial harmony and avoiding an artificial look.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Quick Facts" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{ icon: "⏱", label: "Procedure Time", value: "30–45 mins" }, { icon: "💉", label: "Anaesthesia", value: "Numbing cream" }, { icon: "🏥", label: "Downtime", value: "Minimal / None" }, { icon: "✨", label: "Results Last", value: "6–12 months" }].map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20 text-center">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{item.label}</p>
                <p className="text-gray-900 font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4">
              {["Detailed consultation and lip analysis", "Selection of appropriate filler type and quantity", "Application of numbing cream for comfort", "Precise filler placement to enhance volume and shape", "Gentle massage for even distribution", "Immediate visible improvement with natural finish"].map((item, i) => (
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
                {["Thin or flat lips wanting more volume", "Loss of lip volume due to ageing", "Uneven or asymmetrical lips", "Poorly defined lip borders", "Anyone seeking natural lip enhancement"].map((item, i) => (
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
                {["Active lip infections or cold sores", "Certain medical conditions (evaluated during consultation)", "Pregnancy or breastfeeding"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 A consultation is required to confirm suitability.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Fuller, well-defined, beautiful lips", "Improved lip symmetry and contour", "Natural-looking, subtle results", "Non-surgical with minimal downtime", "Reversible — fillers can be dissolved if needed"].map((item, i) => (
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
                {["Temporary swelling or bruising", "Mild tenderness for 1–2 days", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Lip Augmentation Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Procedure Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Procedure</h3>
              <ul className="space-y-3">
                {["Avoid alcohol before the procedure", "Inform the doctor about medications and medical conditions", "Avoid blood-thinning medicines if advised", "Keep lips free from active infections or sores"].map((item, i) => (
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
                {["Avoid touching or massaging the lips", "Avoid hot beverages and strenuous activity for 24 hours", "Mild swelling or bruising is normal and temporary", "Avoid heavy makeup on lips for 24 hours", "Follow all aftercare instructions from your doctor"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Want Fuller, More Beautiful Lips?</h3>
          <p className="text-gray-600 mb-6">Book a consultation for a personalized lip enhancement plan — natural results, every time.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Lip%20Augmentation." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default LipAugmentation;