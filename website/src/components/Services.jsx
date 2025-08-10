import React from 'react';

// Icons
const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

// Data
const servicesData = {
  laser: {
    title: "Laser Rejuvenation",
    description: "Harnessing the power of light for flawless skin. Our advanced, US-FDA approved laser technologies target concerns with precision, ensuring safe, effective, and lasting results.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    details: [
      { name: "Q-Switch Laser", info: "Targets and breaks down unwanted pigmentation, dark spots, and tattoos safely. Expect visibly clearer skin in 4-6 sessions." },
      { name: "Laser Hair Reduction", info: "A long-lasting solution for unwanted hair using a Triple Wavelength Diode Laser, safe for all Indian skin types." },
    ]
  },
  skin: {
    title: "Advanced Skin Artistry",
    description: "Revitalize your skin with our bespoke treatments, from medical-grade facials to advanced peels, designed to restore your natural glow and address specific concerns.",
    imageUrl: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop",
    details: [
      { name: "Chemical Peels", info: "Customized peels to exfoliate the skin, revealing a brighter, smoother complexion. Effective for pigmentation and acne marks." },
      { name: "Vampire Facial (PRP)", info: "A regenerative treatment using your own blood's platelets to stimulate collagen and improve skin texture for a youthful look." },
    ]
  },
  hair: {
    title: "Hair Restoration",
    description: "A bespoke journey to reclaim your hair's natural vitality and density. We combine advanced diagnostics with proven treatments to restore hair and confidence.",
    imageUrl: "https://images.unsplash.com/photo-1596385212388-e2d8a6573589?q=80&w=1974&auto=format&fit=crop",
    details: [
      { name: "PRP & GFC Therapy", info: "Non-surgical treatments using your blood's own growth factors to nourish follicles, reduce hair fall, and stimulate new growth." },
      { name: "Hair Transplant (FUE/DHI)", info: "A permanent surgical solution for baldness, creating a natural-looking, permanent hairline with advanced, minimally invasive techniques." },
    ]
  }
};

const ServiceCard = ({ service }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200/50">
    <img className="h-64 w-full object-cover" src={service.imageUrl} alt={service.title} />
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
      <p className="mt-4 text-gray-600">{service.description}</p>
      <div className="mt-6 space-y-4">
        {service.details.map((detail, index) => (
          <div key={index} className="flex items-start">
            <div className="flex-shrink-0 h-6 w-6 text-[#C09A50] pt-0.5">
              <CheckCircleIcon />
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-800">{detail.name}</h4>
              <p className="text-sm text-gray-500">{detail.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="bg-[#FBF5E9] py-20 sm:py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Bespoke Treatments for Discerning Individuals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            We offer a curated selection of premier services, each performed with meticulous attention to detail and the highest standards of care.
          </p>
        </div>
        <div className="mt-16 grid gap-12 lg:grid-cols-1">
          <ServiceCard service={servicesData.laser} />
          <ServiceCard service={servicesData.skin} />
          <ServiceCard service={servicesData.hair} />
        </div>
      </div>
    </div>
  );
};

export default Services;