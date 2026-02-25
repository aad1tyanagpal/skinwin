import React from 'react';

const Eczema = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Eczema Treatment at Skin Win Clinic
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Comprehensive dermatological care to relieve itching, dryness, and inflammation caused by eczema and improve skin comfort.
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* What Is Eczema? */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">What Is Eczema?</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            <strong>Eczema</strong>, also known as <strong>Atopic Dermatitis</strong>, is a <strong>chronic, non-contagious inflammatory skin condition</strong> that causes <strong>itchy, dry, red, and irritated skin</strong>. It commonly occurs in children but can affect adults as well.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Eczema tends to have <strong>flare-ups and periods of improvement</strong>, and while it cannot be permanently cured, it can be <strong>effectively managed</strong> with proper dermatological care.
                        </p>
                    </div>
                </section>

                {/* Types of Eczema */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Types of Eczema</h2>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <p className="text-gray-700 mb-6 text-lg">Eczema can appear in different forms, including:</p>
                        <ul className="space-y-4 mb-6">
                            {[
                                <span key="atopic"><strong>Atopic Dermatitis</strong> – most common type, often linked with allergies</span>,
                                <span key="contact"><strong>Contact Dermatitis</strong> – caused by contact with irritants or allergens</span>,
                                <span key="nummular"><strong>Nummular Eczema</strong> – coin-shaped patches of irritated skin</span>,
                                <span key="seborrheic"><strong>Seborrheic Dermatitis</strong> – affects oily areas like scalp and face</span>,
                                <span key="dyshidrotic"><strong>Dyshidrotic Eczema</strong> – small blisters on hands and feet</span>
                            ].map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="bg-[#FBF5E9] p-4 rounded-lg flex items-center">
                            <span className="text-2xl mr-3">👉</span>
                            <p className="text-gray-800 font-medium italic">Correct identification of eczema type is important for effective treatment.</p>
                        </div>
                    </div>
                </section>

                {/* Causes & Triggers of Eczema */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Causes & Triggers of Eczema</h2>
                    </div>

                    <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                        <p className="text-xl font-semibold text-gray-900 mb-4">
                            Eczema develops due to a combination of <strong>genetic, immune, and environmental factors</strong>.
                        </p>
                        <p className="text-gray-700 font-medium mb-6">Common triggers include:</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Dry skin",
                                "Allergens (dust, pollen, foods)",
                                "Soaps, detergents, and chemicals",
                                "Stress",
                                "Weather changes",
                                "Sweating",
                                "Certain fabrics"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center bg-white p-4 rounded-xl shadow-sm border border-red-50">
                                    <span className="bg-red-100 text-red-500 p-1 rounded-full mr-3 flex-shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Eczema;
