import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const servicesData = [
  {
    title: "Skin & Laser Treatments",
    description: "US-FDA approved laser rejuvenation, medical-grade facials, and advanced peels for flawless skin.",
    imageUrl: "/results/HeroCarousel/1/laser.png",
    path: "/treatments/skin-treatments",
  },
  {
    title: "Hair Restoration",
    description: "FUE & DHI hair transplant, PRP therapy, and comprehensive hair fall solutions.",
    imageUrl: "/results/HeroCarousel/1/HT.png",
    path: "/treatments/hair-treatments",
  },
  {
    title: "Plastic & Cosmetic Surgery",
    description: "Rhinoplasty, liposuction, breast surgery, and facial aesthetics by board-certified surgeons.",
    imageUrl: "/results/HeroCarousel/1/Gynecomastia.png",
    path: "/plastic-surgery",
  },
];

const SignatureServices = () => (
  <section className="bg-white py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Our Signature Services
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-relaxed">
            Explore our most sought-after treatments, each designed to deliver exceptional, transformative results.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, i) => (
          <AnimateOnScroll key={service.title} delay={120 + i * 100}>
          <Link
            to={service.path}
            className="group relative block h-64 sm:h-96 rounded-lg overflow-hidden"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              src={service.imageUrl}
              alt={service.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="gold-divider mb-4"></div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
                {service.description}
              </p>
              <span className="mt-4 inline-block text-[#C09A50] text-sm font-medium uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                Explore &rarr;
              </span>
            </div>
          </Link>
          </AnimateOnScroll>
        ))}       
      </div>
    </div>
  </section>
);

export default SignatureServices;