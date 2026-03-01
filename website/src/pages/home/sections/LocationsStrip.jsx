import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const locations = [
  { city: "Jaipur – Nirman Nagar", areas: "121-122, Santosh Nagar, New Sanganer Road", phone: "+91 92564 44577" },
  { city: "Jaipur – Vaishali Nagar", areas: "Gakkhar Complex, Sirsi Road, Hanuman Nagar", phone: "+91 92570 43182"},
  { city: "Ajmer", areas: "Vijay ENT Hospital, St. Stephen Circle, Makarwali Road", phone: "+91 97733 11106" },
  { city: "Kota", areas: "Housing Board, 4-E-6, Rangbari", phone: "+91 92570 33993" },
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {locations.map((loc, i) => (
          <AnimateOnScroll key={loc.city} delay={80 + i * 100}>
          <div
            className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-8 text-center hover:border-[#C09A50]/30 transition-colors duration-300 flex flex-col justify-between h-full"
          >
            <h3 className="font-serif text-2xl font-semibold text-white min-h-[4rem] flex items-center justify-center">
              {loc.city}
            </h3>
            <p className="text-gray-400 text-sm mt-2">{loc.areas}</p>
  <div className="gold-divider mx-auto my-4"></div>

  <a
    href={`tel:${loc.phone.replace(/\s/g, '')}`}
    className="text-[#C09A50] hover:text-[#D4B878] font-medium transition-colors block"
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