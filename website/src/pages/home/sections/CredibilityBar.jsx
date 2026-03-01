import React from 'react';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const stats = [
  { number: "3,000+", label: "Satisfied Patients" },
  { number: "4", label: "Clinic Locations" },
  { number: "15+", label: "Expert Doctors" },
  { number: "50+", label: "Treatments Offered" },
];

const CredibilityBar = () => (
  <section className="bg-gray-900 py-12 sm:py-16">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {stats.map((stat, i) => (
        <AnimateOnScroll key={i} delay={i * 80}>
          <div>
            <p className="font-serif text-4xl md:text-5xl font-semibold text-[#C09A50]">
              {stat.number}
            </p>
            <p className="mt-2 text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-medium">
              {stat.label}
            </p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  </section>
);

export default CredibilityBar;