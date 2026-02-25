import React from 'react';

const Urticaria = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                        Urticaria (Hives) Treatment at Skin Win Clinic
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                        Expert diagnosis and personalised treatment to control urticaria, relieve itching, and prevent recurrent flare-ups.
                    </p>
                </div>
            </div>

            {/* Content Sections */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

                {/* What Is Urticaria? */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">What Is Urticaria?</h2>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
                        <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                            <strong>Urticaria</strong>, commonly known as <strong>hives</strong>, is a skin condition characterised by <strong>sudden appearance of red, itchy, raised welts</strong> on the skin. These welts may vary in size, change shape, and move from one area of the body to another.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Urticaria occurs due to the release of histamine and other chemicals from skin cells, leading to swelling and itching.
                        </p>
                    </div>
                </section>

                {/* Types of Urticaria */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Types of Urticaria</h2>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-gray-200">
                        <p className="text-gray-700 mb-6 text-lg">Urticaria can be classified into different types based on duration and triggers:</p>

                        <div className="space-y-8">
                            {/* Acute Urticaria */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">1</span>
                                    <h3 className="text-xl font-bold text-gray-900">Acute Urticaria</h3>
                                </div>
                                <ul className="space-y-3 pl-11">
                                    {[
                                        "Lasts for a few hours to a few weeks",
                                        "Often caused by food, medicines, infections, or insect bites"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Chronic Urticaria */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">2</span>
                                    <h3 className="text-xl font-bold text-gray-900">Chronic Urticaria</h3>
                                </div>
                                <ul className="space-y-3 pl-11">
                                    {[
                                        "Persists for more than 6 weeks",
                                        "May recur daily or intermittently",
                                        "Often has no clearly identifiable cause"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Physical Urticaria */}
                            <div>
                                <div className="flex items-center mb-4">
                                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-bold mr-3">3</span>
                                    <h3 className="text-xl font-bold text-gray-900">Physical Urticaria</h3>
                                </div>
                                <p className="text-gray-700 mb-3 pl-11">Triggered by physical factors such as:</p>
                                <ul className="space-y-3 pl-11">
                                    {[
                                        "Cold or heat",
                                        "Pressure on skin",
                                        "Exercise or sweating",
                                        "Sun exposure"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Causes & Triggers of Urticaria */}
                <section>
                    <div className="flex items-center mb-6">
                        <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
                        <h2 className="text-3xl font-bold text-gray-900">Causes & Triggers of Urticaria</h2>
                    </div>

                    <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
                        <p className="text-gray-700 font-medium mb-6">Urticaria may be triggered by:</p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                                "Certain foods (nuts, eggs, seafood)",
                                // Keep space here if more triggers are expected
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

export default Urticaria;
