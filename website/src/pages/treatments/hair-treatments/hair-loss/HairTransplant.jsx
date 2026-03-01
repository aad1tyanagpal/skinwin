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

const HairTransplant = () => {
  const faqs = [
    {
      question: "Is hair transplant permanent?",
      answer: "Yes. Transplanted hair follicles are taken from the permanent zone of the scalp. Once transplanted, they continue to grow naturally for life."
    },
    {
      question: "Is the procedure painful?",
      answer: "The procedure is performed under local anesthesia, making it comfortable for most patients. Mild soreness may be felt for a day or two after, which is manageable with prescribed medication."
    },
    {
      question: "When will I see results?",
      answer: "Transplanted hair sheds within the first few weeks — this is normal. New growth begins around month 3, with significant visible results by 6–9 months. Full results are typically seen at 12 months."
    },
    {
      question: "What is the difference between FUE and DHI?",
      answer: "FUE (Follicular Unit Extraction) involves extracting follicles and implanting them into pre-made channels. DHI (Direct Hair Implantation) uses a special Choi implanter pen to implant follicles directly, allowing higher density and more precise placement — with less handling of grafts."
    },
    {
      question: "Is there any downtime?",
      answer: "Most patients return to light daily activities within 2–3 days. Strenuous exercise and heavy work should be avoided for about 10–14 days."
    },
    {
      question: "Will transplanted hair look natural?",
      answer: "Yes. At Skin Win, careful hairline design, correct angle, direction, and density planning ensure results that are completely natural-looking and blend seamlessly with existing hair."
    },
    {
      question: "How many grafts will I need?",
      answer: "The number of grafts depends on the extent of hair loss, donor availability, and desired density. This is assessed during your consultation using a detailed scalp analysis."
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">
            Hair Treatments · Hair Loss Solutions
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Hair Transplant
          </h1>
          <p className="mt-2 text-2xl text-gray-700 font-light">(FUE & DHI)</p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            A permanent, natural-looking solution to restore lost hair and confidence — using advanced FUE and DHI techniques.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              // { label: "Procedure Type", value: "Surgical" },
              // { label: "Anaesthesia", value: "Local" },
              // { label: "Results", value: "9–12 Months" },
              // { label: "Downtime", value: "2–3 Days" },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl px-6 py-3 border border-[#C09A50]/20 shadow-sm text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</p>
                <p className="text-gray-900 font-semibold mt-0.5">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Is */}
        <section>
          <SectionHeader title="What Is Hair Transplant?" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              A <strong>Hair Transplant</strong> is a <strong>permanent surgical solution</strong> for hair loss where healthy hair follicles are extracted from the donor area (typically the back of the scalp) and transplanted to bald or thinning areas.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Skin Win Clinic, we use advanced <strong>FUE (Follicular Unit Extraction)</strong> and <strong>DHI (Direct Hair Implantation)</strong> techniques for precise, natural-looking, and long-lasting results — with minimal scarring and downtime.
            </p>
          </div>
        </section>

        {/* Techniques */}
        <section>
          <SectionHeader title="Techniques We Use" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                type: "FUE — Follicular Unit Extraction",
                desc: "Individual follicles are extracted one by one from the donor area and implanted into recipient sites. Minimally invasive with no linear scar, fast healing, and natural results.",
                color: "border-[#C09A50]/30 bg-[#FBF5E9]/50",
                badge: "Most Common"
              },
              {
                type: "DHI — Direct Hair Implantation",
                desc: "An advanced form of FUE using a special Choi implanter pen. Allows direct implantation without pre-made channels — giving higher density, better graft survival, and more precise control over angle and direction.",
                color: "border-blue-100 bg-blue-50/40",
                badge: "Advanced"
              },
            ].map((item, i) => (
              <div key={i} className={`rounded-2xl p-8 border ${item.color} relative`}>
                <span className="absolute top-4 right-4 text-xs font-semibold bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full">
                  {item.badge}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-3 pr-16">{item.type}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
                  "Male pattern baldness (any stage)",
                  "Receding hairline",
                  "Crown baldness or bald patches",
                  "Female hair thinning or hair loss",
                  "Hair loss due to injury or scarring",
                  "Those seeking a permanent, low-maintenance solution",
                ].map((item, i) => (
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
                {[
                  "Adequate donor hair density is required",
                  "Best suited for stable hair loss (not actively spreading rapidly)",
                  "Good overall health is recommended",
                  "Realistic expectations are important",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-amber-700 bg-amber-50 p-3 rounded-lg">
                👉 A consultation is required to assess suitability and plan the procedure.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <SectionHeader title="How the Procedure Works" />
          <div className="bg-blue-50/50 rounded-2xl p-8 border border-blue-100">
            <ul className="space-y-4 mb-8">
              {[
                "Detailed scalp and hair loss assessment with photographs",
                "Hairline design and graft count planning",
                "Local anesthesia administered to donor and recipient areas",
                "Follicle extraction using FUE / DHI technique",
                "Implantation in natural hair growth direction and angle",
                "Post-procedure dressing and care instructions provided",
                "Follow-up visits to monitor growth progress",
              ].map((item, i) => (
                <li key={i} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-blue-50">
                  <span className="h-7 w-7 rounded-full bg-[#C09A50]/10 text-[#C09A50] flex items-center justify-center font-bold mr-4 flex-shrink-0 text-sm">
                    {i + 1}
                  </span>
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { label: "Technique", value: "FUE / DHI" },
                { label: "Anaesthesia", value: "Local" },
                { label: "Duration", value: "4–8 Hours" },
                { label: "Recovery", value: "2–3 Days" },
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center border border-blue-50">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{stat.label}</p>
                  <p className="text-gray-900 font-semibold">{stat.value}</p>
                </div>
              ))}
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
                  "Permanent and natural-looking hair restoration",
                  "No visible linear scar (FUE/DHI technique)",
                  "Transplanted hair can be cut, styled, and treated normally",
                  "One-time procedure with long-lasting results",
                  "Significant boost in confidence and appearance",
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
                  "Initial shedding of transplanted hair (temporary and normal)",
                  "Mild swelling or redness for a few days",
                  "Healing time varies per individual",
                  "Full results take 9–12 months to appear",
                  "Results may vary based on hair type and extent of loss",
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

        {/* Pre & Post Care */}
        <section>
          <SectionHeader title="Pre & Post Treatment Care" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/40 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                Pre-Treatment Care
              </h3>
              <ul className="space-y-2">
                {[
                  "Avoid smoking and alcohol at least a few days before",
                  "Inform the doctor about medications or medical conditions",
                  "Avoid blood-thinning medicines if advised",
                  "Keep the scalp clean before procedure day",
                  "Do not apply oil, gel or styling products on the day",
                  "Follow all pre-procedure consultation instructions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="h-1.5 w-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50/40 rounded-2xl p-8 border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-green-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Post-Treatment Care
              </h3>
              <ul className="space-y-2">
                {[
                  "Do not touch, scratch, or rub the transplanted area",
                  "Follow the prescribed hair-washing routine carefully",
                  "Avoid strenuous exercise for 10–14 days",
                  "Avoid direct sun, dust, and pollution",
                  "Take prescribed medications as advised",
                  "Avoid smoking and alcohol during initial healing phase",
                  "Attend all follow-up visits as recommended",
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <span className="h-1.5 w-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Results Timeline */}
        <section>
          <SectionHeader title="Results Timeline" />
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#C09A50]/20 hidden sm:block"></div>
            <div className="space-y-4">
              {[
                { time: "Week 1–2", event: "Scabs form and naturally fall off. Mild swelling settles." },
                { time: "Week 2–8", event: "Transplanted hairs shed — this is completely normal and expected." },
                { time: "Month 3–4", event: "New fine hair begins to emerge from transplanted follicles." },
                { time: "Month 6", event: "Significant visible growth. Hair thickens and density improves." },
                { time: "Month 9–12", event: "Full, natural results visible. Hair can be cut and styled freely." },
              ].map((item, i) => (
                <div key={i} className="sm:pl-12 relative flex gap-4 sm:block">
                  <div className="hidden sm:flex absolute left-0 top-4 w-8 h-8 rounded-full bg-[#C09A50] items-center justify-center text-white text-xs font-bold -translate-x-[15px]">
                    {i + 1}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 w-full">
                    <span className="text-[#C09A50] font-semibold text-sm">{item.time}</span>
                    <p className="text-gray-700 mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Availability */}
        <section>
          <SectionHeader title="Availability" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-700 font-semibold mb-4">Hair Transplant Available At:</p>
            <div className="flex flex-wrap gap-3">
              {[
                "✅ Jaipur – Nirman Nagar",
                "✅ Jaipur – Vaishali Nagar",
                "✅ Ajmer",
              ].map((loc, i) => (
                <span key={i} className="bg-white border border-green-200 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                  {loc}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <SectionHeader title="Frequently Asked Questions" />
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-[#FBF5E9] to-white rounded-2xl p-10 border border-[#C09A50]/20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Restore Your Hair?</h3>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Book a consultation with our hair restoration experts and get a personalized assessment and treatment plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-[#C09A50] hover:bg-[#B08A40] text-white font-bold py-3 px-8 rounded-lg shadow-md transition duration-300"
            >
              Book Consultation
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=919773311102&text=Hello%21+I%27m+interested+in+Hair+Transplant+and+would+like+to+know+more.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#C09A50] text-[#C09A50] hover:bg-[#C09A50] hover:text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              WhatsApp Us
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HairTransplant;