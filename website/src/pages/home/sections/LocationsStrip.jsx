import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../../components/AnimateOnScroll';

const locations = [
  { city: "Jaipur", areas: "Nirman Nagar & Vaishali Nagar", phone: "+91 92564 44577" },
  { city: "Kota", areas: "Rangbari", phone: "+91 92570 33993" },
  { city: "Ajmer", areas: "Makarwali Road", phone: "+91 97733 11106" },
];

const LocationsStrip = () => (
  <section className="bg-gray-900 py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimateOnScroll>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white">
            Visit Us
          </h2>
          <p className="mt-3 text-gray-400">
            Clinics across Rajasthan for your convenience
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {locations.map((loc, i) => (
          <AnimateOnScroll key={loc.city} delay={80 + i * 100}>
          <div
            className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-8 text-center hover:border-[#C09A50]/30 transition-colors duration-300"
          >
            <h3 className="font-serif text-2xl font-semibold text-white">
              {loc.city}
            </h3>
            <p className="text-gray-400 text-sm mt-2">{loc.areas}</p>
            <div className="gold-divider mx-auto my-4"></div>
            <a
              href={`tel:${loc.phone.replace(/\s/g, '')}`}
              className="text-[#C09A50] hover:text-[#D4B878] font-medium transition-colors"
            >
              {loc.phone}
            </a>
          </div>
          </AnimateOnScroll>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          to="/contact"
          className="text-sm text-gray-400 hover:text-white uppercase tracking-wider transition-colors"
        >
          View All Locations & Directions &rarr;
        </Link>
      </div>
    </div>
  </section>
);

export default LocationsStrip;