import React from 'react';
import { Link } from 'react-router-dom';

const skinConcerns = [
  {
    title: "Acne & Acne Scars",
    description: "Advanced treatments to clear active acne and reduce scarring using laser therapy, chemical peels, and PRP.",
    path: "/treatments/skin-treatments/skin-concerns/acne",
    image: "/results/Acne Scars/1/1.png",
  },
  {
    title: "Pigmentation & Melasma",
    description: "Q-Switch laser and advanced peels to treat dark spots, sun damage, and uneven skin tone.",
    path: "/treatments/skin-treatments/skin-concerns/pigmentation",
    image: "/results/Pigmentation/1/1.png",
  },
  {
    title: "Ageing & Fine Lines",
    description: "Botox, fillers, HIFU, and thread lifts to restore youthful volume and smooth wrinkles.",
    path: "/treatments/skin-treatments/anti-ageing/botox",
    image: "/results/HIFU/1/1.png",
  },
  {
    title: "Moles & Warts",
    description: "Safe and precise removal of moles, warts, and skin tags using laser and radiofrequency technology.",
    path: "/treatments/skin-treatments/skin-concerns/mole",
    image: "/results/Mole Removal/1/1.png",
  },
  {
    title: "Psoriasis & Eczema",
    description: "Medical management and advanced therapy for chronic skin conditions with lasting relief.",
    path: "/treatments/skin-treatments/skin-concerns/psoriasis",
    image: null,
  },
  {
    title: "Freckles & Sun Damage",
    description: "Laser-based treatments to clear freckles, sun spots, and restore an even complexion.",
    path: "/treatments/skin-treatments/skin-concerns/freckles",
    image: "/results/Freckles/1/1.png",
  },
];

const hairConcerns = [
  {
    title: "Hair Loss & Thinning",
    description: "Comprehensive diagnostics and treatments including PRP, GFC, mesotherapy, and medical therapy.",
    path: "/treatments/hair-treatments/therapies/prp",
    image: "/results/Hair Fall/1/1.png",
  },
  {
    title: "Baldness & Receding Hairline",
    description: "FUE & DHI hair transplant for natural-looking, permanent hair restoration.",
    path: "/treatments/hair-treatments/hair-loss/hair-transplant",
    image: "/results/Hair Transplant/1/1.png",
  },
  {
    title: "Dandruff & Scalp Issues",
    description: "Medical-grade scalp treatments to address dandruff, dryness, and irritation at the root cause.",
    path: "/treatments/hair-treatments/scalp-care/dandruff",
    image: null,
  },
  {
    title: "Unwanted Body Hair",
    description: "Permanent laser hair reduction for face, underarms, legs, and full body using US-FDA approved lasers.",
    path: "/treatments/laser-treatments/hair-removal/laser-hair-reduction",
    image: "/results/Laser Hair Reduction/1/1.png",
  },
];

const bodyConcerns = [
  {
    title: "Unwanted Tattoos",
    description: "Safe, multi-session laser tattoo removal with minimal scarring using Q-Switch technology.",
    path: "/treatments/laser-treatments/advanced-laser/tattoo-removal",
    image: null,
  },
  {
    title: "Birthmarks",
    description: "Laser treatment for port-wine stains, nevus of Ota, and other congenital skin marks.",
    path: "/treatments/laser-treatments/skin-concerns/laser-birthmark",
    image: "/results/Nevus of OTA/1/1.png",
  },
  {
    title: "White Spots (Vitiligo)",
    description: "Advanced phototherapy and medical management for vitiligo and leukoderma.",
    path: "/treatments/skin-treatments/skin-concerns/white-spots",
    image: "/results/Vitiligo/1/1.png",
  },
  {
    title: "Burn & Surgical Scars",
    description: "CO2 fractional laser, subcision, and PRP to improve the appearance of scars.",
    path: "/plastic-surgery/reconstructive/scar-revision",
    image: "/results/Burn Scar/1/1.png",
  },
];

const ConcernCard = ({ concern }) => (
  <Link
    to={concern.path}
    className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#C09A50]/20 transition-all duration-300"
  >
    {concern.image ? (
      <div className="h-44 overflow-hidden">
        <img
          src={concern.image}
          alt={concern.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    ) : (
      <div className="h-44 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
        <span className="font-serif text-5xl text-[#C09A50]/20">+</span>
      </div>
    )}
    <div className="p-6">
      <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#C09A50] transition-colors">
        {concern.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
        {concern.description}
      </p>
      <span className="mt-3 inline-block text-[#C09A50] text-sm font-medium uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
        Learn More &rarr;
      </span>
    </div>
  </Link>
);

const ConcernSection = ({ title, subtitle, concerns }) => (
  <div className="mb-20 last:mb-0">
    <div className="mb-10">
      <div className="gold-divider mb-4"></div>
      <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-gray-900">
        {title}
      </h2>
      <p className="mt-2 text-gray-500 leading-relaxed max-w-2xl">
        {subtitle}
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {concerns.map((concern) => (
        <ConcernCard key={concern.title} concern={concern} />
      ))}
    </div>
  </div>
);

const Concerns = () => (
  <div>
    {/* Hero Banner */}
    <section className="relative bg-gray-900 py-20 sm:py-28 -mt-20">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="gold-divider mx-auto mb-6"></div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6">
          Concerns We Treat
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
          Whatever your skin, hair, or body concern, our team of experts has the advanced solutions to help you look and feel your best.
        </p>
      </div>
    </section>

    {/* Main Content */}
    <section className="bg-[#FBF5E9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ConcernSection
          title="Skin Concerns"
          subtitle="From acne to ageing, our dermatologists provide targeted treatments for every skin concern."
          concerns={skinConcerns}
        />
        <ConcernSection
          title="Hair Concerns"
          subtitle="Comprehensive hair solutions from medical therapy to surgical transplants for lasting results."
          concerns={hairConcerns}
        />
        <ConcernSection
          title="Body & Scar Concerns"
          subtitle="Advanced laser and surgical solutions for tattoos, birthmarks, scars, and skin conditions."
          concerns={bodyConcerns}
        />
      </div>
    </section>

    {/* CTA */}
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gold-divider mx-auto mb-6"></div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Not Sure Which Treatment Is Right for You?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Book a consultation and let our experts guide you to the best treatment plan for your specific concerns.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/919773311102?text=Hello!%20I%20need%20help%20choosing%20the%20right%20treatment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white font-medium py-3 px-8 rounded-sm hover:bg-green-700 transition duration-300 tracking-widest text-sm uppercase"
          >
            Chat on WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center border-2 border-[#C09A50] text-[#C09A50] font-medium py-3 px-8 rounded-sm hover:bg-[#C09A50] hover:text-white transition duration-300 tracking-widest text-sm uppercase"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Concerns;