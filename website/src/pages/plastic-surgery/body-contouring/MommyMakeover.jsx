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

const MommyMakeover = () => {
  const faqs = [
    { question: "What procedures are included in a mommy makeover?", answer: "A mommy makeover is customized for each patient and may include a tummy tuck, breast surgery (augmentation, lift, or reduction), liposuction, and other procedures based on individual needs." },
    { question: "When is the right time for a mommy makeover?", answer: "After completing your family and breastfeeding. It is recommended to wait until your weight has stabilized and you are not planning future pregnancies." },
    { question: "Is recovery longer than a single procedure?", answer: "Yes. Recovery is longer because multiple procedures are combined. However, recovering once is often preferred over multiple separate surgeries." },
    { question: "Is it safe to combine multiple procedures?", answer: "Yes, when carefully planned by an experienced surgical team. Combining procedures reduces total anaesthesia time and overall recovery time compared to multiple separate surgeries." },
    { question: "Will results be permanent?", answer: "Results are long-lasting with a stable weight and healthy lifestyle. Future pregnancies may affect the outcomes of the procedures." },
  ];

  const procedures = [
    { name: "Tummy Tuck", desc: "Remove loose abdominal skin and tighten separated muscles", icon: "👕" },
    { name: "Breast Augmentation", desc: "Restore lost breast volume after pregnancy and breastfeeding", icon: "✨" },
    { name: "Breast Lift", desc: "Correct sagging and restore natural breast position", icon: "⬆️" },
    { name: "Liposuction", desc: "Remove stubborn fat from abdomen, flanks, thighs or arms", icon: "💧" },
    { name: "Breast Reduction", desc: "Reduce overly enlarged breasts for proportion and comfort", icon: "⚖️" },
    { name: "Arm / Thigh Lift", desc: "Address loose skin on arms or thighs from post-pregnancy changes", icon: "💪" },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Body Contouring · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Mommy Makeover</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">A fully personalized combination of procedures to restore your body shape and confidence after pregnancy — in one planned surgical session.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is a Mommy Makeover?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">A Mommy Makeover is a <strong>customized combination of cosmetic surgical procedures</strong> designed to address the physical changes that pregnancy, childbirth, and breastfeeding cause to a woman's body. Multiple procedures are combined in <strong>one planned surgical session</strong> — minimizing total recovery time and maximizing transformation.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, every Mommy Makeover is <strong>planned individually</strong> based on the patient's specific concerns, anatomy, and goals — there is no one-size-fits-all approach.</p>
            <div className="mt-5 p-4 bg-pink-50 rounded-xl border border-pink-100">
              <p className="text-pink-800 text-sm font-medium">💛 Best planned after completing your family and once breastfeeding is complete and body weight is stable.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Procedures That Can Be Combined" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedures.map((item, i) => (
              <div key={i} className="bg-[#FBF5E9]/50 rounded-xl p-6 border border-[#C09A50]/20">
                <span className="text-2xl mb-3 block">{item.icon}</span>
                <p className="font-bold text-gray-900 mb-2">{item.name}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 Not all procedures are required for every patient. The combination is decided after thorough evaluation and discussion during consultation.</p>
        </section>

        <section>
          <SectionHeader title="How It Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {[
                "Detailed consultation — identify concerns, select procedure combination",
                "Comprehensive pre-operative health evaluation",
                "General anaesthesia administered",
                "Procedures performed in the planned sequence by the surgical team",
                "All incisions carefully closed to minimize scarring",
                "Compression garments applied as required",
                "Structured recovery plan and follow-up schedule provided",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Procedure Type", value: "Surgical (Combined)" }, { label: "Anaesthesia", value: "General" }, { label: "Recovery", value: "Longer — varies by combination" }].map((stat, i) => (
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
                {["Women with post-pregnancy body changes", "Loose abdominal skin or separated muscles", "Breast sagging, volume loss, or asymmetry", "Stubborn fat deposits that don't respond to diet/exercise", "Women who have completed their family and are at stable weight"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Not recommended if:</h3>
              <ul className="space-y-3">
                {["Planning future pregnancies", "Breastfeeding currently", "Significant weight fluctuation ongoing", "Uncontrolled medical conditions", "Unrealistic expectations"].map((item, i) => (
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
                {["Comprehensive full-body restoration in one session", "Fewer total surgeries and anaesthetics", "Shorter total recovery time vs separate procedures", "Restored body contour, symmetry, and confidence", "Personalized to address your specific concerns"].map((item, i) => (
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
                {["Longer recovery than a single procedure", "Surgical risks vary per procedure combination", "Temporary swelling, bruising, and discomfort", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Mommy Makeover Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Surgery Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Surgery</h3>
              <ul className="space-y-3">
                {["Maintain stable body weight before surgery", "Avoid smoking and alcohol", "Discuss all expectations clearly during consultation", "Arrange at-home support for post-surgery recovery"].map((item, i) => (
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
                {["Follow all wound care and compression garment instructions", "Avoid heavy lifting and strenuous activity", "Maintain proper nutrition and hydration for healing", "Attend all follow-up visits as scheduled"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Reclaim Your Body?</h3>
          <p className="text-gray-600 mb-6">Book a confidential consultation to create a personalized Mommy Makeover plan just for you.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20a%20Mommy%20Makeover." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default MommyMakeover;