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

const WhiteSpots = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        White Spots Treatment at Skin Win Clinic
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Accurate diagnosis and personalised dermatological care to manage white spots and restore healthy, even skin tone.
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* What Are White Spots? */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">What Are White Spots?</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            White spots are areas of skin that appear lighter than the surrounding skin due to <strong>reduced or absent skin pigment (melanin)</strong>. They can vary in size, shape, and number and may appear on any part of the body.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            White spots are <strong>not always vitiligo</strong>. Several skin conditions can cause loss of pigmentation, so proper diagnosis is essential before treatment.
                        </p>
                    </div>
                </section>

                {/* Common Causes */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Common Causes of White Spots</h2>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <p className="text-gray-700 mb-6 text-lg">White spots may occur due to:</p>
                        <ul className="grid md:grid-cols-2 gap-4 mb-6">
                            {[
                                "Vitiligo",
                                "Post-inflammatory hypopigmentation (after eczema, psoriasis, injury)",
                                "Fungal infection (Tinea versicolor)",
                                "Pityriasis alba (common in children)",
                                "Sun damage",
                                "Chemical exposure",
                                "Certain autoimmune conditions"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-[#FBF5E9] p-4 rounded-lg flex items-center">
                            <span className="text-2xl mr-3">👉</span>
                            <p className="text-gray-800 font-medium italic">Identifying the exact cause is crucial for effective treatment.</p>
                        </div>
                    </div>
                </section>

                {/* Types of White Spot Conditions */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Types of White Spot Conditions</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            {
                                title: "1️⃣ Vitiligo",
                                points: ["Autoimmune condition causing loss of pigment", "White patches may spread gradually", "Not contagious"]
                            },
                            {
                                title: "2️⃣ Fungal White Spots",
                                points: ["Caused by superficial fungal infection", "Usually associated with mild scaling or itching"]
                            },
                            {
                                title: "3️⃣ Post-Inflammatory White Spots",
                                points: ["Occur after skin injury, burns, or inflammation", "Often temporary"]
                            },
                            {
                                title: "4️⃣ Pityriasis Alba",
                                points: ["Common in children and young adults", "Dry, light-coloured patches"]
                            }
                        ].map((type, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                                <ul className="space-y-2">
                                    {type.points.map((pt, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Symptoms and Why Treatment is important */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Symptoms of White Spots</h3>
                        <ul className="space-y-4">
                            {[
                                "Light or white patches on skin",
                                "Sharp or ill-defined borders",
                                "No pain (usually)",
                                "Sometimes mild itching or dryness",
                                "Gradual increase or stability in size"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Treatment Is Important</h3>
                        <p className="text-gray-700 font-medium mb-4">Proper treatment is important to:</p>
                        <ul className="space-y-4 mb-4">
                            {[
                                "Identify the correct cause",
                                "Prevent spread (in certain conditions)",
                                "Improve cosmetic appearance",
                                "Reduce anxiety or fear of vitiligo",
                                "Restore skin confidence"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center bg-white p-3 rounded-lg shadow-sm border border-red-50">
                                    <span className="h-2 w-2 bg-red-400 rounded-full mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="font-semibold text-gray-800">Early diagnosis improves treatment outcomes.</p>
                    </div>
                </section>


                {/* Treatment Options */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">White Spots Treatment Options</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-700 text-lg mb-6">
                            Treatment depends on the cause, size, location, and duration of white spots.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Medical Treatment</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Topical medications to stimulate pigmentation</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Anti-fungal treatment (if infection related)</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Immune-modulating therapy (in selected cases)</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced Dermatological Care</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Phototherapy (light-based treatment)</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Supportive skin therapies</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Skin Care & Lifestyle Guidance</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Sun protection advice</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Moisturising and barrier repair</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Trigger avoidance</span></li>
                                </ul>
                            </div>
                        </div>
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
                                    "Accurate diagnosis",
                                    "Targeted treatment",
                                    "Improved skin tone appearance",
                                    "Reduced progression (in certain cases)",
                                    "Better confidence and reassurance"
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
                                    "Gradual response to treatment",
                                    "Skin sensitivity with some therapies",
                                    "Results vary from person to person"
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
                            question="Are white spots always vitiligo?"
                            answer="No. Many conditions can cause white spots."
                        />
                        <FAQItem
                            question="Are white spots contagious?"
                            answer="No. White spots are not contagious."
                        />
                        <FAQItem
                            question="Can white spots be cured completely?"
                            answer="Some types can improve significantly; others can be managed effectively."
                        />
                        <FAQItem
                            question="Do white spots spread?"
                            answer="It depends on the underlying condition."
                        />
                        <FAQItem
                            question="Is early treatment important?"
                            answer="Yes. Early diagnosis improves outcomes."
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default WhiteSpots;
