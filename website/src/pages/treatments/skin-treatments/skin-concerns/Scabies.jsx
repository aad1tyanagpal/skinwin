import React, { useState } from 'react';

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

const Scabies = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Scabies Treatment at Skin Win Clinic
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Accurate diagnosis and effective treatment of scabies to relieve intense itching, clear skin infestation, and prevent spread.
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* What Is Scabies? */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">What Is Scabies?</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            Scabies is a <strong>highly contagious skin infestation</strong> caused by a microscopic mite called <em>Sarcoptes scabiei</em>. The mite burrows into the upper layer of the skin, causing <strong>severe itching and rash</strong>, especially at night.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Scabies can affect people of all ages and spreads easily through close skin-to-skin contact.
                        </p>
                    </div>
                </section>

                {/* How Scabies Spreads */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">How Scabies Spreads</h2>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <p className="text-gray-700 mb-6 text-lg">Scabies spreads through:</p>
                        <ul className="space-y-4 mb-6">
                            {[
                                "Prolonged skin-to-skin contact",
                                "Close contact with an infected person",
                                "Sharing clothes, bedding, or towels",
                                "Crowded living conditions"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-[#FBF5E9] p-4 rounded-lg flex items-center">
                            <span className="text-2xl mr-3">👉</span>
                            <p className="text-gray-800 font-medium italic">Scabies is NOT caused by poor hygiene.</p>
                        </div>
                    </div>
                </section>

                {/* Symptoms and Areas Affected */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Symptoms</h3>
                        <p className="text-gray-600 mb-4">Symptoms usually appear 2–6 weeks after first exposure and may include:</p>
                        <ul className="space-y-4">
                            {[
                                "Intense itching (worse at night)",
                                "Red rashes or small bumps",
                                "Thin burrow lines on skin",
                                "Crusting or scratch marks",
                                "Skin sores due to excessive scratching"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Areas Affected</h3>
                        <ul className="grid grid-cols-2 gap-4 mb-4">
                            {[
                                "Finger webs",
                                "Wrists",
                                "Elbows",
                                "Armpits",
                                "Waistline",
                                "Groin area",
                                "Buttocks",
                                "Genital area"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="bg-red-100 text-red-500 p-1 rounded-full mr-3 flex-shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-700 italic text-sm">In infants, scabies may also affect the face, scalp, palms, and soles.</p>
                    </div>
                </section>


                {/* Treatment Options */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Scabies Treatment Options</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-700 text-lg mb-6">
                            Treatment aims to eliminate mites and eggs and relieve symptoms.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Medical Treatment</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Prescription anti-scabies medications (topical or oral)</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Anti-itch medications</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Treatment for secondary infections (if present)</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Household & Contact Treatment</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Simultaneous treatment of close contacts</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Washing clothes, bedding, and towels properly</span></li>
                                </ul>
                            </div>
                        </div>

                        <p className="text-gray-800 font-medium mt-6">👉 Treatment is effective only when instructions are followed correctly.</p>
                    </div>
                </section>

                {/* Benefits & Risks */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Benefits & Risks</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-[#FBF5E9]/50 rounded-2xl p-8 border border-[#FBF5E9]">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Benefits</h3>
                            <ul className="space-y-4">
                                {[
                                    "Complete elimination of scabies mites",
                                    "Relief from itching and discomfort",
                                    "Prevention of spread",
                                    "Improved skin health"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                                        <span className="h-2 w-2 bg-[#C09A50] rounded-full mr-3"></span>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Possible Risks / Side Effects</h3>
                            <ul className="space-y-4">
                                {[
                                    "Temporary skin irritation",
                                    "Residual itching for a short period",
                                    "Results depend on correct application and compliance"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="h-2 w-2 bg-red-400 rounded-full mr-3"></span>
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="max-w-3xl">
                        <FAQItem
                            question="Is scabies contagious?"
                            answer="Yes. Scabies spreads through close skin contact."
                        />
                        <FAQItem
                            question="Is scabies caused by dirt or poor hygiene?"
                            answer="No. Anyone can get scabies regardless of cleanliness."
                        />
                        <FAQItem
                            question="Does itching stop immediately after treatment?"
                            answer="Itching may continue for 2–4 weeks after successful treatment."
                        />
                        <FAQItem
                            question="Do family members need treatment?"
                            answer="Yes. Close contacts should be treated simultaneously."
                        />
                        <FAQItem
                            question="Can scabies recur?"
                            answer="Yes, if treatment is incomplete or contacts are untreated."
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Scabies;
