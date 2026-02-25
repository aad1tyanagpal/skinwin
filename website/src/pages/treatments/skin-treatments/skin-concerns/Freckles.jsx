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

const Freckles = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Freckles Treatment at Skin Win Clinic
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Advanced dermatological care to lighten freckles, improve skin tone, and restore a clearer, even complexion safely and effectively.
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* What Are Freckles? */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">What Are Freckles?</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            Freckles are small, flat, light to dark brown spots that appear on the skin due to <strong>increased melanin production</strong>. They are most commonly seen on sun-exposed areas such as the face, nose, cheeks, shoulders, and arms.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Freckles are <strong>harmless and non-cancerous</strong>, but many people seek treatment for cosmetic reasons or uneven skin tone.
                        </p>
                    </div>
                </section>

                {/* Types of Freckles */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Types of Freckles</h2>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <p className="text-gray-700 mb-6 text-lg">Freckles can be classified into:</p>

                        <div className="space-y-8">
                            {/* Ephelides */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">1</span>
                                    <h3 className="text-xl font-bold text-gray-900">Ephelides</h3>
                                </div>
                                <ul className="space-y-3 pl-11">
                                    {[
                                        "Light brown",
                                        "Appear in childhood",
                                        "Darken with sun exposure and fade in winter"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Lentigines */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">2</span>
                                    <h3 className="text-xl font-bold text-gray-900">Lentigines (Sun Spots)</h3>
                                </div>
                                <ul className="space-y-3 pl-11">
                                    {[
                                        "Darker and persistent",
                                        "Caused by long-term sun exposure",
                                        "Do not fade easily without treatment"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-[#FBF5E9] p-4 rounded-lg flex items-center mt-6">
                            <span className="text-2xl mr-3">👉</span>
                            <p className="text-gray-800 font-medium italic">Correct identification helps plan appropriate treatment.</p>
                        </div>

                    </div>
                </section>


                {/* Causes & Symptoms */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Causes of Freckles</h3>
                        <ul className="space-y-4 mb-4">
                            {[
                                "Genetic predisposition",
                                "Excessive sun exposure",
                                "Fair or light skin type",
                                "Hormonal changes",
                                "Lack of sun protection"
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
                        <p className="font-semibold text-gray-800">Sun exposure is the main trigger for freckles becoming darker and more prominent.</p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Symptoms of Freckles</h3>
                        <ul className="space-y-4">
                            {[
                                "Small, flat brown or tan spots",
                                "Usually painless and non-itchy",
                                "Become darker with sun exposure",
                                "Appear mostly on sun-exposed areas"
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>


                {/* Treatment Options */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Freckles Treatment Options</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-700 text-lg mb-6">
                            Treatment depends on the type, depth, and skin tone.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Medical & Topical Treatment</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Skin-lightening agents</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Pigment-correcting skincare</span></li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200">
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Advanced Dermatological Treatments</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Laser treatment for freckles</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Chemical peels</span></li>
                                    <li className="flex items-start"><span className="text-[#C09A50] mr-2">•</span><span className="text-gray-700">Phototherapy (selected cases)</span></li>
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
                                    "Lightening of freckles",
                                    "Improved skin tone",
                                    "Smoother and clearer complexion",
                                    "Non-surgical options available"
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
                                    "Temporary redness or sensitivity",
                                    "Gradual response over time",
                                    "Results vary based on skin type and sun protection"
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
                            question="Are freckles harmful?"
                            answer="No. Freckles are harmless and non-cancerous."
                        />
                        <FAQItem
                            question="Can freckles be completely removed?"
                            answer="They can be lightened significantly; recurrence is possible with sun exposure."
                        />
                        <FAQItem
                            question="Do freckles come back after treatment?"
                            answer="Yes, without proper sun protection, freckles may reappear."
                        />
                        <FAQItem
                            question="Is laser treatment safe for freckles?"
                            answer="Yes, when performed by trained specialists."
                        />
                        <FAQItem
                            question="Can home remedies remove freckles?"
                            answer="Home remedies are not reliable and may damage skin."
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Freckles;
