import React, { useState } from 'react';

// Icons (keeping existing)
const CheckCircleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const CalculatorIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 002 2z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CogIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// Complete Package Data with proper savings calculations[1]
const comprehensivePackages = {
  skinTransformation: [
    {
      tier: "Premium",
      name: "Glow & Hydrate",
      bestFor: "Men & women (20–40) with dullness, mild pigmentation, dehydration",
      services: [
        { name: "HydraFacial", price: 10000, description: "Deep cleansing & hydration boost" },
        { name: "Cleanup Facial", price: 12000, description: "Pore purification therapy" },
        { name: "Photo Facial", price: 24000, description: "IPL pigmentation correction" }
      ],
      frequency: "6+1 each, every 3–4 weeks",
      howItWorks: "Removes buildup, hydrates, evens tone",
      technology: "HydraFacial MD®, IPL PhotoFacial",
      resultsTimeline: {
        month1: "Fresh glow",
        month3: "Pigmentation fades", 
        month6: "Brighter skin"
      },
      maintenance: "Monthly HydraFacial or bi-monthly Photo Facial",
      individualTotal: 46000,
      packagePrice: 45000,
      savings: 1000,
      whyWorks: "Triple approach to cleansing, hydration & pigment correction, synced with skin cycles",
      whyChoose: "Ideal entry-level transformation plan for visible glow with minimal downtime",
      gradient: "from-blue-500 to-blue-700"
    },
    {
      tier: "Deluxe",
      name: "Radiance Restore",
      bestFor: "Brides-to-be, professionals, anti-aging seekers (25–45)",
      services: [
        { name: "Advanced HydraFacial", price: 15000, description: "Premium hydration therapy" },
        { name: "Korean Glass Facial", price: 24000, description: "Glass skin effect treatment" },
        { name: "Photo Facial", price: 24000, description: "Advanced pigmentation correction" },
        { name: "PRP", price: 9000, description: "Collagen regeneration therapy" }
      ],
      frequency: "Facials 6+1, PRP monthly",
      howItWorks: "Hydration + collagen stimulation + pore minimization",
      technology: "HydraFacial Elite®, Korean Glass infusion, IPL, Regen PRP Kit",
      resultsTimeline: {
        month1: "Plump glow",
        month3: "Pigmentation reduced",
        month5: "Glass skin effect"
      },
      maintenance: "PRP every 6 months, facial monthly",
      individualTotal: 72000,
      packagePrice: 72000,
      savings: 0,
      whyWorks: "Combines event-ready glow with deeper collagen repair",
      whyChoose: "Balanced mix of instant results & long-term anti-aging benefits",
      gradient: "from-purple-500 to-purple-700"
    },
    {
      tier: "Platinum",
      name: "Ultimate Rejuvenation",
      bestFor: "Severe pigmentation, acne scars, deep lines (30+)",
      services: [
        { name: "E-Facial", price: 42000, description: "Advanced oxygenation therapy" },
        { name: "Pumpkin Facial", price: 30000, description: "Enzyme resurfacing treatment" },
        { name: "Advanced HydraFacial", price: 15000, description: "Medical-grade hydration" },
        { name: "PRP-DermaPen", price: 17500, description: "Micro-needling with PRP" }
      ],
      frequency: "Facials 6+1, PRP monthly",
      howItWorks: "Collagen induction + resurfacing + hydration",
      technology: "OxyGeneo®, Pumpkin Enzyme Peel, HydraFacial Elite®, DermaPen 4™, Regen PRP Kit",
      resultsTimeline: {
        month1: "Freshness boost",
        month3: "Scar fading starts",
        month6: "Peak youthful glow"
      },
      maintenance: "Yearly PRP + seasonal facials",
      individualTotal: 104500,
      packagePrice: 130000,
      savings: 0, // Actually costs more due to comprehensive treatment
      whyWorks: "Total skin overhaul with advanced tech & medical-grade therapies",
      whyChoose: "The most intensive package — best for reversing years of damage in months",
      gradient: "from-amber-500 to-amber-700"
    }
  ],
  hairRestoration: [
    {
      tier: "Premium",
      name: "Volume Boost",
      bestFor: "Men & women in early thinning stages",
      services: [
        { name: "SMP", price: 48000, description: "Scalp micropigmentation coverage" },
        { name: "PRP Hair", price: 9000, description: "Growth factor therapy" }
      ],
      frequency: "SMP 6+1, PRP monthly",
      howItWorks: "Cosmetic density + regrowth trigger",
      technology: "MicroArt® SMP System, Regen PRP Kit",
      resultsTimeline: {
        month1: "SMP coverage",
        month3: "Fine regrowth",
        month6: "Maintained density"
      },
      maintenance: "PRP every 4–6 months",
      individualTotal: 57000,
      packagePrice: 60000,
      savings: 0,
      whyWorks: "Combines instant cosmetic coverage with biological regrowth",
      whyChoose: "Quickest visible change without surgery",
      gradient: "from-green-500 to-green-700"
    },
    {
      tier: "Deluxe",
      name: "Crown Revival",
      bestFor: "Noticeable hairline/crown thinning",
      services: [
        { name: "SMP", price: 48000, description: "Scalp micropigmentation" },
        { name: "SMB", price: 60000, description: "Scalp microblading technique" },
        { name: "Advanced PRP", price: 9000, description: "Enhanced growth factors" },
        { name: "1000-Graft Transplant", price: 16500, description: "Permanent hair grafts" }
      ],
      frequency: "SMP & SMB 6+1, PRP monthly",
      howItWorks: "Cosmetic density + follicle stimulation + permanent hair grafts",
      technology: "MicroArt® SMP, Precision Microblading, Regen PRP Kit, NeoGraft®",
      resultsTimeline: {
        month2: "PRP boost",
        month4: "Transplant growth visible",
        month6: "Full coverage"
      },
      maintenance: "PRP yearly, SMP refresh in 2 years",
      individualTotal: 133500,
      packagePrice: 135000,
      savings: 0,
      whyWorks: "Hybrid of cosmetic artistry & permanent hair restoration",
      whyChoose: "Balanced solution for those wanting both quick coverage & permanent regrowth",
      gradient: "from-teal-500 to-teal-700"
    },
    {
      tier: "Platinum",
      name: "Full Growth Mastery",
      bestFor: "Severe thinning, bald patches",
      services: [
        { name: "SMP", price: 48000, description: "Advanced scalp micropigmentation" },
        { name: "SMB", price: 60000, description: "Precision microblading" },
        { name: "GFC-PRP", price: 21000, description: "Growth factor concentrate" },
        { name: "2000-Graft Transplant", price: 33000, description: "Maximum graft transplant" }
      ],
      frequency: "SMP & SMB 6+1, PRP monthly",
      howItWorks: "Intensive regeneration + permanent coverage",
      technology: "MicroArt® SMP, Precision Microblading, YCellbio GFC-PRP Kit, NeoGraft®",
      resultsTimeline: {
        month1: "SMP coverage",
        month3: "GFC PRP regrowth",
        month6: "Thick, even scalp coverage"
      },
      maintenance: "PRP yearly, SMP refresh in 2 years",
      individualTotal: 162000,
      packagePrice: 165000,
      savings: 0,
      whyWorks: "Uses highest potency PRP + maximum graft count for unmatched density",
      whyChoose: "Ultimate choice for complete transformation in advanced hair loss cases",
      gradient: "from-emerald-500 to-emerald-700"
    }
  ],
  laserHairRemoval: [
    {
      tier: "Premium",
      name: "Everyday Smooth",
      bestFor: "Women tired of waxing/threading small zones",
      services: [
        { name: "Underarms", price: 6000, description: "Complete underarm hair removal" },
        { name: "Bikini", price: 12000, description: "Bikini area hair removal" },
        { name: "Upper Lip", price: 3000, description: "Upper lip hair removal" },
        { name: "Chin", price: 3000, description: "Chin hair removal" }
      ],
      frequency: "6+1 each, 4–6 weeks apart",
      howItWorks: "Laser disables hair follicles",
      technology: "Candela GentleMax Pro® – Alexandrite & Nd:YAG",
      resultsTimeline: {
        month1: "20–30% reduction",
        month3: "50% reduction",
        month6: "90% reduction"
      },
      maintenance: "Annual touch-up",
      individualTotal: 24000,
      packagePrice: 33000,
      savings: 0,
      whyWorks: "Quick relief from common grooming trouble zones",
      whyChoose: "Perfect starter plan for LHR beginners",
      gradient: "from-pink-500 to-pink-700"
    },
    {
      tier: "Deluxe",
      name: "Smooth & Confident",
      bestFor: "Large-zone smoothness seekers",
      services: [
        { name: "Full Legs", price: 27000, description: "Complete leg hair removal" },
        { name: "Underarms", price: 6000, description: "Underarm hair removal" },
        { name: "Bikini", price: 12000, description: "Bikini area hair removal" },
        { name: "Full Back", price: 6000, description: "Complete back hair removal" }
      ],
      frequency: "6+1 each",
      howItWorks: "Covers large & small zones for uniform smoothness",
      technology: "Soprano ICE Platinum® – Triple Wavelength Diode",
      resultsTimeline: {
        month2: "Finer regrowth",
        month4: "80% reduction",
        month6: "Near complete smoothness"
      },
      maintenance: "Yearly touch-up",
      individualTotal: 51000,
      packagePrice: 65000,
      savings: 14000, // As per your Excel data
      whyWorks: "Affordable way to tackle all major grooming areas at once",
      whyChoose: "Best value for full-body confidence without going Platinum",
      gradient: "from-rose-500 to-rose-700"
    },
    {
      tier: "Platinum",
      name: "Head-to-Toe Freedom",
      bestFor: "Men & women wanting full-body smoothness",
      services: [
        { name: "Full Body Female", price: 60000, description: "Complete female body coverage" },
        { name: "Full Body Male", price: 72000, description: "Complete male body coverage" },
        { name: "Full Face Female", price: 13200, description: "Complete facial hair removal" }
      ],
      frequency: "6+1 each",
      howItWorks: "Treats all coarse hair zones in one program",
      technology: "Lumenis LightSheer Duet® – High-Speed Diode",
      resultsTimeline: {
        month3: "60% reduction",
        month5: "90% reduction",
        month6: "Maintenance phase"
      },
      maintenance: "Maintenance 1–2x/year",
      individualTotal: 145200,
      packagePrice: 150000,
      savings: 0,
      whyWorks: "Complete freedom from all grooming hassles — face to toes",
      whyChoose: "Only choice for total smoothness everywhere in the shortest time",
      gradient: "from-fuchsia-500 to-fuchsia-700"
    }
  ]
};

// Your original estimator services (unchanged)
const estimatorServices = {
  facials: [
    { name: "HydraFacial", price: 2500, sessions: [1, 3, 6] },
    { name: "Vampire Facial", price: 4000, sessions: [1, 3, 6] },
    { name: "Korean Glass Facial", price: 4000, sessions: [1, 3, 6] },
    { name: "Age-Revive Facial", price: 4500, sessions: [1, 3, 6] },
  ],
  lhr: [
    { name: "Full Face", price: 2500, sessions: [6, 8, 10] },
    { name: "Underarms", price: 1500, sessions: [6, 8, 10] },
    { name: "Full Body", price: 10000, sessions: [6, 8, 10] },
    { name: "Full Legs", price: 4500, sessions: [6, 8, 10] },
  ],
  peels: [
    { name: "Glycolic Peel", price: 2200, sessions: [1, 3, 6] },
    { name: "TCA Peel", price: 2000, sessions: [1, 3, 6] },
    { name: "Yellow Peel", price: 3150, sessions: [1, 3, 6] },
    { name: "Lightening Peel", price: 2200, sessions: [1, 3, 6] },
  ],
  advanced: [
    { name: "Botox (per unit)", price: 400, units: [20, 30, 40, 50] },
    { name: "RF Treatment (Face)", price: 6000, sessions: [1, 3, 6] },
    { name: "HIFU Treatment", price: 12500, sessions: [1, 2, 3] },
    { name: "GFC Hair Therapy", price: 7000, sessions: [1, 3, 6] },
  ]
};

// Enhanced Package Card with proper tab structure
const EnhancedPackageCard = ({ package: pkg }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const getTierColor = (tier) => {
    switch(tier) {
      case 'Premium': return 'bg-blue-100 text-blue-800';
      case 'Deluxe': return 'bg-purple-100 text-purple-800';  
      case 'Platinum': return 'bg-amber-100 text-amber-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className={`bg-gradient-to-r ${pkg.gradient} p-5 text-white relative`}>
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-white/20`}>
            {pkg.tier}
          </span>
          {pkg.savings > 0 && (
            <span className="bg-green-400 text-green-900 px-3 py-1 rounded-full text-xs font-bold flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
              Save ₹{pkg.savings.toLocaleString()}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold mb-1">{pkg.name}</h3>
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold">₹{pkg.packagePrice.toLocaleString()}</span>
          {pkg.individualTotal !== pkg.packagePrice && pkg.savings > 0 && (
            <span className="text-sm line-through opacity-70">₹{pkg.individualTotal.toLocaleString()}</span>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="flex">
          {[
            { key: 'overview', label: 'Overview', icon: <StarIcon /> },
            { key: 'timeline', label: 'Timeline', icon: <ClockIcon /> },
            { key: 'technology', label: 'Technology', icon: <CogIcon /> }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 flex items-center justify-center space-x-1 ${
                activeTab === tab.key
                  ? 'text-[#C09A50] border-b-2 border-[#C09A50] bg-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-5">
        {activeTab === 'overview' && (
          <div className="space-y-4">
            {/* Best For */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center text-sm">
                <StarIcon />
                <span className="ml-2">Perfect For</span>
              </h4>
              <p className="text-blue-800 text-sm">{pkg.bestFor}</p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Treatment Package</h4>
              <div className="space-y-2">
                {pkg.services.map((service, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center flex-1">
                      <CheckCircleIcon />
                      <div className="ml-3">
                        <div className="font-medium text-gray-900 text-sm">{service.name}</div>
                        <div className="text-xs text-gray-600">{service.description}</div>
                      </div>
                    </div>
                    <div className="font-bold text-[#C09A50] text-sm">₹{service.price.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Cards */}
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-green-50 rounded-lg p-3">
                <h4 className="font-semibold text-green-900 mb-1 text-sm">Why This Works</h4>
                <p className="text-green-800 text-xs">{pkg.whyWorks}</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-3">
                <h4 className="font-semibold text-amber-900 mb-1 text-sm">Why Choose This</h4>
                <p className="text-amber-800 text-xs">{pkg.whyChoose}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'timeline' && (
          <div className="space-y-4">
            {/* Schedule */}
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2 flex items-center text-sm">
                <ClockIcon />
                <span className="ml-2">Treatment Schedule</span>
              </h4>
              <p className="text-purple-800 text-sm">{pkg.frequency}</p>
            </div>

            {/* Results Timeline */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Expected Results</h4>
              <div className="space-y-3">
                {Object.entries(pkg.resultsTimeline).map(([month, result], idx) => (
                  <div key={month} className="flex items-center p-3 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#C09A50] to-[#A0824A] rounded-full flex items-center justify-center text-white font-bold text-xs mr-3 flex-shrink-0">
                      {month.replace('month', 'M')}
                    </div>
                    <p className="text-gray-900 font-medium text-sm flex-1">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Maintenance */}
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-900 mb-2 text-sm">Maintenance Required</h4>
              <p className="text-yellow-800 text-sm">{pkg.maintenance}</p>
            </div>
          </div>
        )}

        {activeTab === 'technology' && (
          <div className="space-y-4">
            {/* How it Works */}
            <div className="bg-indigo-50 rounded-lg p-4">
              <h4 className="font-semibold text-indigo-900 mb-2 flex items-center text-sm">
                <CogIcon />
                <span className="ml-2">How It Works</span>
              </h4>
              <p className="text-indigo-800 text-sm">{pkg.howItWorks}</p>
            </div>

            {/* Technology */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Advanced Technology</h4>
              <div className="bg-gray-900 text-white rounded-lg p-4">
                <p className="text-sm">{pkg.technology}</p>
              </div>
            </div>

            {/* Pricing Comparison */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Investment Details</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 bg-gray-100 rounded-lg">
                  <div className="text-lg font-bold text-gray-600">₹{pkg.individualTotal.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Individual Services</div>
                </div>
                <div className="text-center p-3 bg-gradient-to-br from-[#C09A50] to-[#A0824A] text-white rounded-lg">
                  <div className="text-lg font-bold">₹{pkg.packagePrice.toLocaleString()}</div>
                  <div className="text-xs opacity-90">Package Price</div>
                </div>
              </div>
              {pkg.savings > 0 && (
                <div className="mt-3 text-center p-2 bg-green-100 rounded-lg">
                  <span className="text-green-800 font-semibold text-sm">You save ₹{pkg.savings.toLocaleString()}!</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* CTA Button */}
      <div className="p-5 border-t border-gray-100 bg-gray-50">
        <button className="w-full bg-gradient-to-r from-[#C09A50] to-[#A0824A] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 text-sm">
          Select {pkg.name} Package
        </button>
      </div>
    </div>
  );
};

// Your original PriceEstimator (unchanged)
const PriceEstimator = () => {
  const [selectedCategory, setSelectedCategory] = useState('facials');
  const [selectedService, setSelectedService] = useState(estimatorServices.facials[0]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [showBreakdown, setShowBreakdown] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSelectedService(estimatorServices[category][0]);
    setSelectedQuantity(1);
    setShowBreakdown(false);
  };

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setSelectedQuantity(1);
    setShowBreakdown(false);
  };

  const getQuantityOptions = () => {
    if (selectedService.sessions) return selectedService.sessions;
    if (selectedService.units) return selectedService.units;
    return [1, 2, 3, 4, 5];
  };

  const getQuantityLabel = () => {
    if (selectedService.sessions) return 'Sessions';
    if (selectedService.units) return 'Units';
    return 'Quantity';
  };

  const calculateTotal = () => {
    const basePrice = selectedService.price * selectedQuantity;
    const gst = basePrice * 0.18;
    return {
      basePrice,
      gst,
      total: basePrice + gst
    };
  };

  const categoryNames = {
    facials: 'Signature Facials',
    lhr: 'Laser Hair Reduction',
    peels: 'Chemical Peels',
    advanced: 'Advanced Treatments'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center mb-4">
        <CalculatorIcon />
        <h3 className="text-xl font-bold text-gray-900 ml-2">Treatment Price Estimator</h3>
      </div>
      
      <div className="space-y-4">
        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Category</label>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(estimatorServices).map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`p-2 rounded-lg border text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#C09A50] text-white border-[#C09A50]'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#C09A50] hover:bg-[#C09A50]/5'
                }`}
              >
                {categoryNames[category]}
              </button>
            ))}
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Select Treatment</label>
          <select
            value={selectedService.name}
            onChange={(e) => {
              const service = estimatorServices[selectedCategory].find(s => s.name === e.target.value);
              handleServiceChange(service);
            }}
            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C09A50] focus:border-[#C09A50]"
          >
            {estimatorServices[selectedCategory].map((service) => (
              <option key={service.name} value={service.name}>
                {service.name} - ₹{service.price.toLocaleString()}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{getQuantityLabel()}</label>
          <div className="flex flex-wrap gap-2">
            {getQuantityOptions().map((option) => (
              <button
                key={option}
                onClick={() => setSelectedQuantity(option)}
                className={`px-3 py-1 rounded-lg border text-sm font-medium transition-all duration-200 ${
                  selectedQuantity === option
                    ? 'bg-[#C09A50] text-white border-[#C09A50]'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-[#C09A50]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Price Display */}
        <div className="bg-gradient-to-r from-[#C09A50]/10 to-[#C09A50]/5 rounded-lg p-4">
          <div className="flex justify-between items-center mb-3">
            <span className="font-medium text-gray-700">
              {selectedService.name} × {selectedQuantity}
            </span>
            <span className="text-xl font-bold text-[#C09A50]">
              ₹{calculateTotal().total.toLocaleString()}
            </span>
          </div>
          
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="text-sm text-[#C09A50] hover:text-[#A0824A] transition-colors flex items-center"
          >
            {showBreakdown ? 'Hide' : 'Show'} Price Breakdown
            <svg className={`w-4 h-4 ml-1 transition-transform ${showBreakdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showBreakdown && (
            <div className="mt-3 space-y-1 text-sm border-t border-[#C09A50]/20 pt-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Base Price:</span>
                <span>₹{calculateTotal().basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">GST (18%):</span>
                <span>₹{calculateTotal().gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between font-semibold border-t border-[#C09A50]/20 pt-1">
                <span>Total Amount:</span>
                <span className="text-[#C09A50]">₹{calculateTotal().total.toLocaleString()}</span>
              </div>
            </div>
          )}
        </div>

        {/* Treatment Tips */}
        <div className="bg-blue-50 rounded-lg p-3 text-sm">
          <div className="flex items-start">
            <SparklesIcon />
            <div className="ml-2">
              <h4 className="font-medium text-blue-900 mb-1">Treatment Tip</h4>
              <p className="text-blue-700">
                {selectedCategory === 'lhr' && 'Multiple sessions ensure optimal results. Package deals available during consultation.'}
                {selectedCategory === 'facials' && 'For best results, we recommend a series of treatments spaced 2-4 weeks apart.'}
                {selectedCategory === 'peels' && 'Start with milder peels and progress to stronger formulations as your skin adapts.'}
                {selectedCategory === 'advanced' && 'Advanced treatments often require a consultation to determine the right approach for your skin.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const Pricing = () => {
  const [activeTab, setActiveTab] = useState('packages');
  const [selectedPackageCategory, setSelectedPackageCategory] = useState('skinTransformation');

  const packageCategoryNames = {
    skinTransformation: 'Complete Skin Transformation',
    hairRestoration: 'Hair Restoration & Growth',
    laserHairRemoval: 'Permanent Hair Freedom'
  };

  return (
    <div className="bg-[#FBF5E9] py-12 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-sm text-[#C09A50] font-semibold uppercase tracking-wide mb-2">Investment in Excellence</h2>
          <p className="text-3xl font-extrabold text-gray-900 mb-3">
            Premium Treatment Solutions
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from expertly designed packages or calculate individual treatment costs
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="flex rounded-xl border border-gray-200 p-1 bg-white shadow-md">
            <button
              onClick={() => setActiveTab('packages')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'packages'
                  ? 'bg-[#C09A50] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Curated Packages
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === 'individual'
                  ? 'bg-[#C09A50] text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Individual Calculator
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'packages' ? (
          <div>
            {/* Category Selection */}
            <div className="mb-6">
              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-3xl">
                  {Object.entries(packageCategoryNames).map(([category, name]) => (
                    <button
                      key={category}
                      onClick={() => setSelectedPackageCategory(category)}
                      className={`px-4 py-3 rounded-lg border text-center transition-all duration-200 text-sm ${
                        selectedPackageCategory === category
                          ? 'bg-[#C09A50] text-white border-[#C09A50] shadow-md'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-[#C09A50] hover:shadow-sm'
                      }`}
                    >
                      <div className="font-semibold">{name}</div>
                      <div className="text-xs opacity-75 mt-1">
                        {comprehensivePackages[category].length} packages
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Package Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {comprehensivePackages[selectedPackageCategory].map((pkg, index) => (
                <EnhancedPackageCard key={index} package={pkg} />
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <PriceEstimator />
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="bg-white rounded-xl p-6 shadow-md max-w-xl mx-auto">
            <p className="text-gray-600 mb-4">All prices exclusive of 18% GST. Consultations available.</p>
            <button className="bg-gradient-to-r from-[#C09A50] to-[#A0824A] text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;