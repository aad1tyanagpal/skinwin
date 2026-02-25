import React from 'react';

const Warts = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#FBF5E9] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Warts Treatment at Skin Win Clinic
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Safe and effective treatment for skin warts using advanced dermatological techniques under expert care.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* What Are Warts? */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">What Are Warts?</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              Warts are <strong>small, non-cancerous skin growths</strong> caused by a viral infection of the skin, most commonly the <strong>Human Papillomavirus (HPV)</strong>. They can appear on any part of the body and vary in size, shape, and texture.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Warts are <strong>contagious</strong> and can spread through direct skin contact or shared surfaces.
            </p>
          </div>
        </section>

        {/* Types of Warts */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Types of Warts</h2>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-gray-700 mb-6 text-lg">Warts may appear in different forms, including:</p>
            <ul className="space-y-4 mb-6">
              {[
                <span key="common"><strong>Common Warts</strong> – Rough, raised growths usually on hands and fingers</span>,
                <span key="flat"><strong>Flat Warts</strong> – Small, smooth warts often seen on face, arms, or legs</span>,
                <span key="plantar"><strong>Plantar Warts</strong> – Painful warts on the soles of the feet</span>,
                <span key="filiform"><strong>Filiform Warts</strong> – Thin, thread-like warts commonly on face or neck</span>,
                <span key="genital"><strong>Genital Warts</strong> – Appear in the genital area (require special evaluation)</span>
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-2 w-2 bg-[#C09A50] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-[#FBF5E9] p-4 rounded-lg flex items-center">
              <span className="text-2xl mr-3">👉</span>
              <p className="text-gray-800 font-medium italic">Correct identification of wart type is important for proper treatment.</p>
            </div>
          </div>
        </section>

        {/* Why Warts Need Treatment */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Why Warts Need Treatment</h2>
          </div>

          <div className="bg-red-50/50 rounded-2xl p-8 border border-red-100">
            <p className="text-xl font-semibold text-gray-900 mb-6">Warts may require treatment because they can:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Spread to other body parts",
                "Spread to other people",
                "Cause pain or discomfort (especially plantar warts)",
                "Bleed or get infected",
                "Cause cosmetic or confidence concerns",
                "Persist or grow over time"
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

        {/* Warts Treatment Options */}
        <section>
          <div className="flex items-center mb-6">
            <div className="h-8 w-1 bg-[#C09A50] mr-4 rounded-full"></div>
            <h2 className="text-3xl font-bold text-gray-900">Warts Treatment Options</h2>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-gray-700 text-lg mb-6">
              Treatment is selected based on the <strong>type, size, number, and location</strong> of warts.
            </p>

            <div className="space-y-4">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">1️⃣</span>
                <h3 className="text-xl font-bold text-gray-900">Medical / Topical Treatment</h3>
              </div>
              {/* Additional treatments can be added here once provided */}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Warts;