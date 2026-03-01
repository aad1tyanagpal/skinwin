import React from 'react';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const doctors = [
  {
    name: "Dr. Vijay Gakhar",
    qualifications: "Senior Consultant",
    initials: "VG",
  },
  {
    name: "Dr. Vibhuti Gakhar",
    qualifications: "Consultant Dermatologist",
    initials: "VBG",
  },
  {
    name: "Dr. Raina Arora",
    qualifications: "MBBS, MD, DNB – Skin & VD, Fellowship in Laser & Hair Transplant",
    initials: "RA",
  },
  {
    name: "Dr. Diwakar Sharma",
    qualifications: "MBBS, MD – Dermatology",
    initials: "DS",
  },
  {
    name: "Dr. Deeksha Sharma",
    qualifications: "BDS, SMS, Cosmetologist",
    initials: "DKS",
  },
  {
    name: "Dr. Sonali Gupta",
    qualifications: "MBBS (Gold Medalist), MD – Skin & VD, SMS Jaipur",
    initials: "SG",
  },
];

const DoctorProfiles = () => (
  <section className="bg-[#FBF5E9] py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Meet Our Experts
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-relaxed">
            Our team of qualified dermatologists and surgeons brings years of expertise to every consultation.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
        {doctors.map((doctor, i) => (
          <AnimateOnScroll key={doctor.name} delay={80 * i}>
          <div className="group text-center">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 rounded-full overflow-hidden ring-2 ring-[#C09A50]/20 group-hover:ring-[#C09A50] transition-all duration-300 bg-gray-900 flex items-center justify-center">
              <span className="font-serif text-3xl sm:text-4xl font-semibold text-[#C09A50]">
                {doctor.initials}
              </span>
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-gray-900">
              {doctor.name}
            </h3>
            <p className="text-[#C09A50] text-sm font-medium mt-1">
              {doctor.qualifications}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {doctor.location}
            </p>
          </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  </section>
);

export default DoctorProfiles;