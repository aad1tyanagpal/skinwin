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

const BrowLift = () => {
  const faqs = [
    { question: "Will a brow lift make my face look unnatural?", answer: "No. When performed correctly, results look natural and balanced — a refreshed, alert appearance without looking surprised or overdone." },
    { question: "Is brow lift permanent?", answer: "Surgical brow lift offers long-lasting results, typically 5–10 years. Non-surgical options using Botox are temporary and require maintenance." },
    { question: "Can brow lift be combined with eyelid surgery?", answer: "Yes. Brow lift is frequently combined with eyelid surgery (blepharoplasty) for more comprehensive upper face rejuvenation and better results." },
    { question: "Is the procedure painful?", answer: "Discomfort is usually mild and well managed with anaesthesia during surgery and prescribed medication post-procedure." },
    { question: "Is there downtime after brow lift?", answer: "Surgical brow lift requires 1–2 weeks of initial recovery. Non-surgical Botox brow lift has minimal downtime." },
  ];

  return (
    <div className="bg-white">
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">Face Aesthetic · Plastic Surgery</p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">Brow Lift</h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(Forehead Lift)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Lift sagging eyebrows, smooth forehead lines, and restore a refreshed, youthful upper face appearance.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        <section>
          <SectionHeader title="What Is a Brow Lift?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">A Brow Lift (Forehead Lift) is a surgical or non-surgical procedure designed to <strong>raise sagging eyebrows, reduce forehead wrinkles, and soften frown lines</strong> between the eyebrows. It restores a more alert, open, and youthful upper face appearance.</p>
            <p className="text-gray-600 leading-relaxed text-lg">At Skin Win Clinic, brow lift procedures are tailored to each patient's anatomy and goals, offering both <strong>surgical and non-surgical options</strong> for upper face rejuvenation.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Surgical vs Non-Surgical Brow Lift" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { type: "Surgical Brow Lift", tag: "Permanent", tagColor: "bg-green-100 text-green-700", points: ["Long-lasting results (5–10 years)", "Suitable for moderate to significant brow sagging", "Incisions hidden in hairline", "Performed under anaesthesia", "Single procedure, lasting correction"] },
              { type: "Non-Surgical Brow Lift (Botox)", tag: "Temporary", tagColor: "bg-blue-100 text-blue-700", points: ["Temporary results (3–6 months)", "Suitable for mild brow sagging", "No incisions or downtime", "Quick in-clinic procedure", "Maintenance sessions required"] },
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
          <p className="text-sm text-amber-700 bg-amber-50 p-3 rounded-lg mt-4">👉 The most suitable option is decided after detailed facial assessment and consultation.</p>
        </section>

        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-6">
              {["Pre-procedure consultation, photographs & planning", "Anaesthesia or numbing administered (depending on type)", "Incisions made in the hairline (surgical) or Botox injected (non-surgical)", "Forehead muscles and tissues lifted and repositioned", "Excess skin removed (surgical) or muscles relaxed (Botox)", "Incisions closed carefully to minimise scarring"].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0">{i + 1}</span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4">
              {[{ label: "Options", value: "Surgical / Non-surgical" }, { label: "Anaesthesia", value: "General / Local" }, { label: "Recovery", value: "1–2 weeks (surgical)" }].map((stat, i) => (
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
                {["Sagging or low-positioned eyebrows", "Heavy brow that makes eyes look tired or angry", "Deep forehead lines and wrinkles", "Frown lines between the eyebrows", "Upper face ageing concerns"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Often Combined With:</h3>
              <ul className="space-y-3">
                {["Eyelid surgery (Blepharoplasty)", "Facelift for complete facial rejuvenation", "Botox for dynamic forehead lines", "Dermal fillers for volume restoration"].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">👉 Consultation required to determine best approach.</p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Benefits & Risks" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#C09A50]/20">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                {["Lifted, naturally arched eyebrows", "Smoother forehead and reduced wrinkles", "More alert and refreshed eye appearance", "Long-lasting results (surgical)", "Natural-looking, balanced outcome"].map((item, i) => (
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
                {["Temporary swelling and bruising", "Healing time required (surgical)", "Scarring (minimal, hidden in hairline)", "Results may vary from person to person"].map((item, i) => (
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
            <p className="text-gray-400 text-lg">[ Brow Lift Before & After Gallery ]</p>
            <p className="text-gray-400 text-sm mt-2">Disclaimer: Results may vary from person to person.</p>
          </div>
        </section>

        <section>
          <SectionHeader title="Pre & Post Procedure Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Before Procedure</h3>
              <ul className="space-y-3">
                {["Avoid smoking and alcohol before treatment", "Inform the doctor about medications or medical conditions", "Avoid blood-thinning medicines if advised", "Follow all pre-procedure instructions provided"].map((item, i) => (
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
                {["Avoid touching or massaging the treated area", "Avoid strenuous activity and heat exposure initially", "Use prescribed medications and skincare only", "Protect the area from sun exposure", "Attend all follow-up visits as recommended"].map((item, i) => (
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
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Want a More Refreshed, Youthful Upper Face?</h3>
          <p className="text-gray-600 mb-6">Book a consultation — we'll recommend the best brow lift approach for your unique facial anatomy.</p>
          <a href="https://wa.me/919773311102?text=Hello!%20I'm%20interested%20in%20Brow%20Lift%20Surgery." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#C09A50] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#B08A40] transition-colors">Book Consultation</a>
        </div>

      </div>
    </div>
  );
};

export default BrowLift;