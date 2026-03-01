import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'skin',
    title: 'Skin Treatments',
    subtitle: 'Face Rejuvenation · Anti-Ageing · Skin Concerns · Glow & Health',
    description: 'Medical-grade facials, peels, anti-ageing solutions, and targeted treatments for every skin concern — personalized for your skin type.',
    path: '/treatments/skin-treatments',
    color: 'from-rose-50 to-pink-50',
    border: 'border-rose-100',
    accent: 'text-rose-600',
    badge: 'bg-rose-50 text-rose-700 border-rose-100',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    groups: [
      {
        label: 'Face Rejuvenation',
        items: [
          { name: 'HydraFacial', path: '/treatments/skin-treatments/face-rejuvenation/hydra-facial' },
          { name: 'Chemical Peel', path: '/treatments/skin-treatments/face-rejuvenation/chemical-peel' },
          { name: 'Carbon Facial', path: '/treatments/skin-treatments/face-rejuvenation/carbon-facial' },
        ]
      },
      {
        label: 'Anti-Ageing',
        items: [
          { name: 'Botox', path: '/treatments/skin-treatments/anti-ageing/botox' },
          { name: 'Fillers', path: '/treatments/skin-treatments/anti-ageing/fillers' },
          { name: 'HIFU (Skin Tightening)', path: '/treatments/skin-treatments/anti-ageing/hifu' },
        ]
      },
      {
        label: 'Skin Concerns',
        items: [
          { name: 'Acne & Pimples', path: '/treatments/skin-treatments/skin-concerns/acne' },
          { name: 'Pigmentation & Melasma', path: '/treatments/skin-treatments/skin-concerns/pigmentation' },
          { name: 'Mole', path: '/treatments/skin-treatments/skin-concerns/mole' },
          { name: 'Warts', path: '/treatments/skin-treatments/skin-concerns/warts' },
          { name: 'Psoriasis', path: '/treatments/skin-treatments/skin-concerns/psoriasis' },
          { name: 'Eczema', path: '/treatments/skin-treatments/skin-concerns/eczema' },
          { name: 'White Spots', path: '/treatments/skin-treatments/skin-concerns/white-spots' },
          { name: 'Freckles', path: '/treatments/skin-treatments/skin-concerns/freckles' },
          { name: 'Fungal Infection', path: '/treatments/skin-treatments/skin-concerns/fungal-infection' },
        ]
      },
      {
        label: 'Glow & Skin Health',
        items: [
          { name: 'Glutathione Therapy', path: '/treatments/skin-treatments/glow-skin-health/glutathione-therapy' },
        ]
      },
    ]
  },
  {
    id: 'hair',
    title: 'Hair Treatments',
    subtitle: 'Hair Transplant · Therapies · Scalp Care',
    description: 'FUE & DHI hair transplant, PRP, GFC, mesotherapy, and scalp care solutions — from surgical restoration to regenerative therapies.',
    path: '/treatments/hair-treatments',
    color: 'from-amber-50 to-yellow-50',
    border: 'border-amber-100',
    accent: 'text-amber-600',
    badge: 'bg-amber-50 text-amber-700 border-amber-100',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    groups: [
      {
        label: 'Hair Loss Solutions',
        items: [
          { name: 'Hair Transplant (FUE/DHI)', path: '/treatments/hair-treatments/hair-loss/hair-transplant' },
          { name: 'Beard Transplant', path: '/treatments/hair-treatments/hair-loss/beard-transplant' },
          { name: 'Eyebrow Transplant', path: '/treatments/hair-treatments/hair-loss/eyebrow-transplant' },
        ]
      },
      {
        label: 'Hair Strength & Growth',
        items: [
          { name: 'PRP Therapy', path: '/treatments/hair-treatments/therapies/prp' },
          { name: 'GFC PRP Therapy', path: '/treatments/hair-treatments/therapies/gfc-prp' },
          { name: 'Mesotherapy', path: '/treatments/hair-treatments/therapies/mesotherapy' },
          { name: 'LLLT (Low Level Laser)', path: '/treatments/hair-treatments/therapies/lllt' },
          { name: 'Medical Therapy', path: '/treatments/hair-treatments/therapies/medical-therapy' },
        ]
      },
      {
        label: 'Scalp Care',
        items: [
          { name: 'Dandruff Treatment', path: '/treatments/hair-treatments/scalp-care/dandruff' },
        ]
      },
    ]
  },
  {
    id: 'laser',
    title: 'Laser Treatments',
    subtitle: 'Hair Removal · Skin Concerns · Advanced Laser',
    description: 'US-FDA approved laser technology for permanent hair reduction, pigmentation, scars, tattoo removal and skin tightening.',
    path: '/treatments/laser-treatments',
    color: 'from-blue-50 to-sky-50',
    border: 'border-blue-100',
    accent: 'text-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    groups: [
      {
        label: 'Hair Removal',
        items: [
          { name: 'Laser Hair Reduction', path: '/treatments/laser-treatments/hair-removal/laser-hair-reduction' },
        ]
      },
      {
        label: 'Skin Concerns',
        items: [
          { name: 'Laser Acne Treatment', path: '/treatments/laser-treatments/skin-concerns/laser-acne' },
          { name: 'Laser Scar Revision', path: '/treatments/laser-treatments/skin-concerns/laser-scar' },
          { name: 'Laser Birthmark Removal', path: '/treatments/laser-treatments/skin-concerns/laser-birthmark' },
        ]
      },
      {
        label: 'Advanced Laser',
        items: [
          { name: 'Laser Tattoo Removal', path: '/treatments/laser-treatments/advanced-laser/tattoo-removal' },
          { name: 'Laser Skin Tightening', path: '/treatments/laser-treatments/advanced-laser/skin-tightening' },
        ]
      },
    ]
  },
  {
    id: 'plastic',
    title: 'Plastic Surgery',
    subtitle: 'Face · Body · Breast · Reconstructive',
    description: 'Board-certified surgeons performing surgical and non-surgical aesthetic procedures — from rhinoplasty to body contouring.',
    path: '/plastic-surgery',
    color: 'from-purple-50 to-violet-50',
    border: 'border-purple-100',
    accent: 'text-purple-600',
    badge: 'bg-purple-50 text-purple-700 border-purple-100',
    availableAt: 'Vaishali Nagar & Ajmer only',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    groups: [
      {
        label: 'Face Aesthetic',
        items: [
          { name: 'Rhinoplasty', path: '/plastic-surgery/face-aesthetic/rhinoplasty' },
          { name: 'Eyelid Surgery', path: '/plastic-surgery/face-aesthetic/eyelid-surgery' },
          { name: 'Face & Neck Lift', path: '/plastic-surgery/face-aesthetic/face-neck-lift' },
          { name: 'Brow Lift', path: '/plastic-surgery/face-aesthetic/brow-lift' },
          { name: 'Chin Implant', path: '/plastic-surgery/face-aesthetic/chin-implant' },
          { name: 'Lip Augmentation', path: '/plastic-surgery/face-aesthetic/lip-augmentation' },
          { name: 'Dimple Creation', path: '/plastic-surgery/face-aesthetic/dimple-creation' },
        ]
      },
      {
        label: 'Body Contouring',
        items: [
          { name: 'Liposuction', path: '/plastic-surgery/body-contouring/liposuction' },
          { name: 'Tummy Tuck', path: '/plastic-surgery/body-contouring/tummy-tuck' },
          { name: 'Arm Lift', path: '/plastic-surgery/body-contouring/arm-lift' },
          { name: 'Thigh Lift', path: '/plastic-surgery/body-contouring/thigh-lift' },
          { name: 'Mommy Makeover', path: '/plastic-surgery/body-contouring/mommy-makeover' },
        ]
      },
      {
        label: 'Breast Surgery',
        items: [
          { name: 'Breast Augmentation', path: '/plastic-surgery/breast-surgery/breast-augmentation' },
          { name: 'Breast Reduction', path: '/plastic-surgery/breast-surgery/breast-reduction' },
          { name: 'Breast Lump', path: '/plastic-surgery/breast-surgery/breast-lump' },
        ]
      },
      {
        label: 'Reconstructive',
        items: [
          { name: 'Gynecomastia', path: '/plastic-surgery/reconstructive/gynecomastia' },
          { name: 'Scar Revision', path: '/plastic-surgery/reconstructive/scar-revision' },
          { name: 'Cyst Removal', path: '/plastic-surgery/reconstructive/cyst-removal' },
        ]
      },
    ]
  },
];

const CategoryCard = ({ cat, isActive, onClick }) => (
  <button
    onClick={() => onClick(cat.id)}
    className={`w-full text-left rounded-2xl border p-6 transition-all duration-300 ${
      isActive
        ? `bg-gradient-to-br ${cat.color} ${cat.border} shadow-lg scale-[1.02]`
        : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-md'
    }`}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
      isActive ? `bg-white/70 ${cat.accent}` : 'bg-gray-50 text-gray-400'
    }`}>
      {cat.icon}
    </div>
    <h3 className={`font-serif text-lg font-semibold mb-1 ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
      {cat.title}
    </h3>
    <p className={`text-xs leading-relaxed ${isActive ? 'text-gray-500' : 'text-gray-400'}`}>
      {cat.subtitle}
    </p>
    {cat.availableAt && isActive && (
      <span className={`inline-block mt-3 text-xs px-2.5 py-1 rounded-full border font-medium ${cat.badge}`}>
        📍 {cat.availableAt}
      </span>
    )}
  </button>
);

const TreatmentPanel = ({ cat }) => (
  <div className={`bg-gradient-to-br ${cat.color} rounded-2xl border ${cat.border} p-8 sm:p-10`}>
    {/* Header */}
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
      <div>
        <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${cat.accent}`}>
          Skin Win Clinic
        </p>
        <h2 className="font-serif text-3xl font-semibold text-gray-900">{cat.title}</h2>
        <p className="text-gray-500 mt-2 max-w-xl leading-relaxed">{cat.description}</p>
      </div>
      <Link
        to={cat.path}
        className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C09A50] hover:bg-[#B08A40] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow transition-colors duration-200"
      >
        View All
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>

    {/* Treatment Groups */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cat.groups.map((group, i) => (
        <div key={i}>
          <h4 className={`text-xs font-semibold uppercase tracking-wider mb-3 ${cat.accent}`}>
            {group.label}
          </h4>
          <ul className="space-y-1.5">
            {group.items.map((item, j) => (
              <li key={j}>
                <Link
                  to={item.path}
                  className="flex items-center gap-2 text-sm text-gray-700 hover:text-[#C09A50] group transition-colors duration-200 py-1"
                >
                  <span className="h-1 w-1 bg-gray-300 group-hover:bg-[#C09A50] rounded-full flex-shrink-0 transition-colors"></span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Treatments = () => {
  const [activeId, setActiveId] = useState('skin');
  const activeCat = categories.find(c => c.id === activeId);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-divider mx-auto mb-6"></div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-5">
            Our Treatments
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Advanced, doctor-supervised aesthetic care across four specialities — personalized for your concern, skin type, and goals.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

        {/* Category Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categories.map(cat => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              isActive={activeId === cat.id}
              onClick={setActiveId}
            />
          ))}
        </div>

        {/* Active Treatment Panel */}
        {activeCat && <TreatmentPanel cat={activeCat} />}

      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Not Sure Which Treatment Is Right?
          </h2>
          <p className="text-gray-400 mb-8">
            Our doctors will assess your concern and recommend the most suitable treatment plan — honestly and transparently.
          </p>
          <a
            href="https://wa.me/919773311102?text=Hello%21+I%27d+like+to+book+a+consultation+at+Skin+Win+Clinic."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C09A50] hover:bg-[#B08A40] text-white font-bold py-3 px-10 rounded-xl shadow-md transition duration-300"
          >
            Book Free Consultation
          </a>
        </div>
      </div>

    </div>
  );
};

export default Treatments;