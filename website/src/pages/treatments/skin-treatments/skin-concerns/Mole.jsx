import React, { useState } from 'react';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#C09A50] mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 pr-4">{answer}</p>
      </div>
    </div>
  );
};

const Mole = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Mole, Wart & Skintag Removal
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Safe, medically supervised removal of moles, warts, and skin tags for smooth, clear skin.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">

        {/* ==================== MOLE REMOVAL SECTION ==================== */}
        <section>
          <div className="bg-white">
            <h2 className="text-3xl font-extrabold text-[#C09A50] border-b-2 border-[#C09A50] pb-2 mb-8 inline-block">Mole Removal</h2>
            <p className="text-lg text-gray-700 mb-8 font-medium">
              Safe and effective removal of skin moles for medical and cosmetic reasons under expert dermatological care.
            </p>

            <div className="space-y-12">
              {/* What Is A Mole? */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">What Is a Mole?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A mole (medically called <strong>nevus</strong>) is a common skin growth formed due to clusters of pigment-producing cells.
                  Moles can be <strong>flat or raised</strong>, light or dark in colour, and may appear anywhere on the body.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Most moles are <strong>benign (non-cancerous)</strong>, but some may require removal due to:
                </p>
                <ul className="mt-4 space-y-3 pl-2">
                  {[
                    "Cosmetic concerns",
                    "Irritation or repeated injury",
                    "Changes in size, colour, or shape",
                    "Medical evaluation requirements"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="h-1.5 w-1.5 bg-gray-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-start bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <span className="text-xl mr-2">ℹ️</span>
                  <p className="text-sm text-blue-800 font-medium">At Skin Win Clinic, every mole is <strong>clinically examined before removal</strong> to ensure safety.</p>
                </div>
              </div>

              {/* Why Mole Removal Is Done */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Mole Removal Is Done</h3>
                <div className="bg-[#FBF5E9]/30 rounded-2xl p-8 border border-[#FBF5E9]">
                  <p className="text-gray-700 font-medium mb-4">Mole removal may be advised for:</p>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {[
                      "Prominent or visible moles on face or body",
                      "Moles causing irritation or bleeding",
                      "Rapidly growing or changing moles",
                      "Moles located in friction areas (neck, waist, underarms)",
                      "Cosmetic or confidence concerns",
                      "Doctor-advised medical reasons"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start bg-white p-3 rounded-lg shadow-sm">
                        <CheckIcon />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-start text-amber-700 bg-amber-50 p-4 rounded-lg border border-amber-100">
                    <span className="text-xl mr-2">👉</span>
                    <p className="text-sm font-medium">Not all moles need removal; evaluation is essential.</p>
                  </div>
                </div>
              </div>

              {/* Types of Mole Removal Procedures */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Mole Removal Procedures</h3>
                <p className="text-gray-700 mb-6">The method of mole removal depends on the mole’s <strong>size, depth, type, and location</strong>.</p>

                <div className="space-y-6">
                  <div className="bg-white border border-gray-200 hover:border-[#C09A50] transition-colors rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="bg-[#C09A50] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold">1</span>
                      Laser Mole Removal
                    </h4>
                    <ul className="space-y-2 pl-11">
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-3"></span>
                        Suitable for small, superficial moles
                      </li>
                      <li className="flex items-center text-gray-600">
                        <span className="h-1.5 w-1.5 bg-gray-400 rounded-full mr-3"></span>
                        Minimal downtime
                      </li>
                    </ul>
                  </div>
                  {/* Placeholder for other methods if needed, or just keep Laser for now based on image */}
                  <div className="bg-white border border-gray-200 hover:border-[#C09A50] transition-colors rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="bg-[#C09A50] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold">2</span>
                      Surgical Excision
                    </h4>
                    <p className="text-gray-600 pl-11 mb-2">For deeper, larger, or raised moles. The mole is carefully cut out, and stitches may be used.</p>
                  </div>
                  <div className="bg-white border border-gray-200 hover:border-[#C09A50] transition-colors rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                      <span className="bg-[#C09A50] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 font-bold">3</span>
                      Radiofrequency (RF) Ablation
                    </h4>
                    <p className="text-gray-600 pl-11 mb-2">Uses high-frequency energy to remove the mole with precision and minimal scarring.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className="border-gray-200" />

        {/* ==================== WARTS & SKIN TAGS SECTION ==================== */}
        <section>
          <div className="bg-white">
            <h2 className="text-3xl font-extrabold text-[#C09A50] border-b-2 border-[#C09A50] pb-2 mb-8 inline-block">Warts & Skin Tag Removal</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Skin Tags */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skin Tags</h3>
                <p className="text-gray-600 mb-4">
                  Skin tags are small, soft, benign skin growths, often found on the neck, armpits, groin, or eyelids. They are harmless but can be annoying or cosmetically undesirable.
                </p>
                <h4 className="font-bold text-gray-800 mb-2">Removal Methods:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckIcon /> RF Cautery
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckIcon /> Surgical Excision (for larger tags)
                  </li>
                </ul>
              </div>

              {/* Warts */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Warts</h3>
                <p className="text-gray-600 mb-4">
                  Warts are rough skin growths caused by the HPV virus. They can appear anywhere, looking like small cauliflower bumps or solid blisters. They are contagious and should be treated to prevent spread.
                </p>
                <h4 className="font-bold text-gray-800 mb-2">Removal Methods:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <CheckIcon /> Radiofrequency Removal
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckIcon /> Laser Removal
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckIcon /> Medical Treatment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Common Questions</h2>
          </div>
          <div className="max-w-3xl">
            <FAQItem
              question="Q1. Is mole/wart removal painful?"
              answer="Most procedures are performed under local anesthesia, ensuring minimal to no pain during the removal."
            />
            <FAQItem
              question="Q2. Will there be a scar?"
              answer="Our experts use advanced techniques like Laser and RF to minimize scarring. Any small mark usually fades over time."
            />
            <FAQItem
              question="Q3. Is the procedure permanent?"
              answer="Yes, once completely removed, the mole or skin tag usually does not grow back in the same spot. Warts may require follow-up as they are viral."
            />
            <FAQItem
              question="Q4. How long does healing take?"
              answer="Healing typically takes 5–10 days, depending on the size of the removal and the method used. A small scab may form and fall off naturally."
            />
          </div>
        </section>

        {/* Prior to Before & After section */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Before & After</h2>
          </div>
          <div className="bg-gray-50 rounded-2xl p-12 text-center border-2 border-dashed border-gray-200">
            <p className="text-gray-500 text-lg">Images coming soon...</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Mole;