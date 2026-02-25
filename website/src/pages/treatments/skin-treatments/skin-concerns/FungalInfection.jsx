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

const FungalInfection = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Fungal Infection Treatment at Skin Win Clinic
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Accurate diagnosis and effective dermatological treatment for fungal skin infections to relieve itching, rashes, and prevent recurrence.
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* What Is a Fungal Infection? */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">What Is a Fungal Infection?</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            A fungal infection of the skin is caused by the overgrowth of fungi (dermatophytes or yeast) on the skin. These organisms thrive in <strong>warm, humid, and sweaty areas</strong>, making skin folds and covered areas more prone to infection.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Fungal infections are <strong>common, contagious, and can affect people of all ages</strong> if not treated properly.
                        </p>
                    </div>
                </section>

                {/* Common Types */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Common Types of Fungal Infections</h2>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <p className="text-gray-700 mb-6 text-lg">Skin fungal infections may appear in different forms, including:</p>
                        <ul className="grid md:grid-cols-2 gap-4 mb-6">
                            {[
                                <span key="1"><strong>Ringworm (Tinea)</strong> – circular, red, itchy patches</span>,
                                <span key="2"><strong>Tinea Cruris (Jock Itch)</strong> – affects groin area</span>,
                                <span key="3"><strong>Tinea Corporis</strong> – affects body skin</span>,
                                <span key="4"><strong>Tinea Pedis (Athlete’s Foot)</strong> – affects feet and toes</span>,
                                <span key="5"><strong>Tinea Capitis</strong> – affects scalp</span>,
                                <span key="6"><strong>Candidal Infection</strong> – affects skin folds and moist areas</span>
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-[#FBF5E9] p-4 rounded-lg flex items-center">
                            <span className="text-2xl mr-3">👉</span>
                            <p className="text-gray-800 font-medium italic">Correct identification of fungal type is essential for effective treatment.</p>
                        </div>
                    </div>
                </section>

                {/* Causes & Symptoms */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Causes & Risk Factors</h3>
                        <ul className="space-y-4">
                            {[
                                "Excessive sweating",
                                "Hot and humid climate",
                                "Wearing tight or synthetic clothing",
                                "Poor hygiene",
                                "Sharing towels, clothes, or footwear",
                                "Weakened immunity",
                                "Diabetes",
                                "Prolonged use of steroid creams"
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
                    </div>
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Symptoms of Fungal Infection</h3>
                        <ul className="space-y-4 mb-4">
                            {[
                                "Itching (often severe)",
                                "Red, scaly, or flaky patches",
                                "Circular rashes with clear centre",
                                "Burning sensation",
                                "Skin peeling or cracking",
                                "Discoloration of skin"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-600 italic">Symptoms may worsen if untreated or treated incorrectly.</p>
                    </div>
                </section>


                {/* Treatment Options */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Fungal Infection Treatment Options</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-700 text-lg mb-6">
                            Treatment depends on the type, severity, and extent of infection.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Medical Treatment</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Anti-fungal creams or lotions</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Oral anti-fungal medicines (if required)</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Anti-itch medications</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Supportive Care</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Skin hygiene guidance</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Sweat and moisture control</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Lifestyle and clothing advice</span></li>
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
                                    "Relief from itching and discomfort",
                                    "Complete fungal clearance",
                                    "Reduced recurrence risk",
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
                                    "Medication-related effects (explained during consultation)",
                                    "Results vary depending on compliance"
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
                            question="Is fungal infection contagious?"
                            answer="Yes. It can spread through direct contact or shared items."
                        />
                        <FAQItem
                            question="Can fungal infection recur?"
                            answer="Yes, if treatment is incomplete or hygiene is poor."
                        />
                        <FAQItem
                            question="Do steroid creams cure fungal infection?"
                            answer="No. Steroids can worsen fungal infections."
                        />
                        <FAQItem
                            question="How long does treatment take?"
                            answer="Duration depends on severity and type of infection."
                        />
                        <FAQItem
                            question="Can home remedies cure fungal infection?"
                            answer="Home remedies are not reliable and may delay proper treatment."
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default FungalInfection;
