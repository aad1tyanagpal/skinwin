import React from 'react';

// Icons
const UserGroupIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V18h14v-1.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V18h6v-1.5c0-2.33-4.67-3.5-7-3.5z" />
  </svg>
);

const DnaIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
  </svg>
);

const StethoscopeIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4-2h-2V7h2v6zm0 4h-2v-2h2v2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const SparklesIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5L12 2z" />
  </svg>
);

const AcademicCapIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 8.69L6.23 8 12 5.31 17.77 8 12 11.69z" />
  </svg>
);

// Data
const whyUsData = [
  { title: "Expert-Led Practice", description: "All treatments are performed or supervised by our highly qualified team of expert dermatologists and plastic surgeons.", icon: <UserGroupIcon /> },
  { title: "Advanced Technology", description: "We invest in state-of-the-art, US-FDA approved laser and diagnostic equipment for superior safety and results.", icon: <DnaIcon /> },
  { title: "Bespoke Treatment Plans", description: "Your journey is unique. We conduct thorough diagnostics to create personalized treatment plans tailored to your specific goals.", icon: <StethoscopeIcon /> },
  { title: "Proven Track Record", description: "With over 3,000 satisfied patients, our results speak for themselves. We are a trusted destination for skin and hair excellence.", icon: <CheckCircleIcon /> },
  { title: "Absolute Confidentiality", description: "We uphold the strictest standards of privacy and discretion, ensuring a comfortable and secure experience for our clientele.", icon: <SparklesIcon /> },
  { title: "Holistic Post-Care", description: "Our commitment extends beyond the treatment room, with comprehensive after-care guidance to ensure optimal, lasting outcomes.", icon: <CheckCircleIcon /> },
];

const doctorsData = [
  {
    name: "Dr. Rittika Walia",
    qualifications: "MBBS",
    location: "Jaipur (Nirman Nagar)",
    image: "https://placehold.co/200x200/FBF5E9/333333?text=Dr.+Walia"
  },
  {
    name: "Dr. Parul Verma",
    qualifications: "MDS",
    location: "Jaipur (Vaishali Nagar)",
    image: "https://placehold.co/200x200/FBF5E9/333333?text=Dr.+Verma"
  },
  {
    name: "Dr. Diwakar Sharma",
    qualifications: "MBBS, MD Dermatology",
    location: "Kota",
    image: "https://placehold.co/200x200/FBF5E9/333333?text=Dr.+Sharma"
  },
  {
    name: "Dr. Raina Arora",
    qualifications: "MBBS, MD, DNB-Skin & VD, Fellowship in Laser & Hair Transplant",
    location: "Ajmer",
    image: "https://placehold.co/200x200/FBF5E9/333333?text=Dr.+Arora"
  }
];

const DoctorProfileCard = ({ doctor }) => (
  <div className="text-center">
    <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg" src={doctor.image} alt={`Dr. ${doctor.name}`} />
    <div className="mt-4">
      <h3 className="text-lg font-bold text-gray-900">{doctor.name}</h3>
      <p className="text-sm text-[#C09A50] font-semibold">{doctor.location}</p>
      <div className="mt-2 flex items-center justify-center space-x-2 text-gray-500">
        <AcademicCapIcon />
        <p className="text-xs">{doctor.qualifications}</p>
      </div>
    </div>
  </div>
);

const About = () => (
  <div className="bg-white py-20 sm:py-24 pt-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">About Skin Win</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          The Pinnacle of Dermatological Excellence
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Skin Win was founded on the principle of providing world-class skin and hair care with an unwavering commitment to quality, privacy, and personalized attention. We cater to a discerning clientele that values expertise and expects perfection.
        </p>
      </div>
      
      <div className="mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
        <div className="relative">
          <img className="rounded-lg shadow-xl w-full" src="https://images.unsplash.com/photo-1580281657527-47f249e8f5df?q=80&w=1974&auto=format&fit=crop" alt="Skin Win Clinic Interior" />
        </div>
        <div className="mt-10 lg:mt-0">
          <h3 className="text-2xl font-bold text-gray-900">Our Philosophy</h3>
          <p className="mt-3 text-gray-600">
            We believe that true beauty is a reflection of health and confidence. Our approach is not just to treat conditions, but to enhance your natural elegance through scientifically-backed procedures. Our team of renowned dermatologists and surgeons utilize cutting-edge technology to craft bespoke treatment journeys, ensuring results that are not only visible but also sustainable.
          </p>
          <h3 className="mt-8 text-2xl font-bold text-gray-900">Our Commitment to You</h3>
          <p className="mt-3 text-gray-600">
            Your trust is our most valued asset. From the moment you step into our serene and private clinic, your comfort and confidentiality are our highest priorities. We are dedicated to creating a sanctuary where you can achieve your aesthetic goals with peace of mind.
          </p>
        </div>
      </div>

      {/* Why Choose Skin Win Section */}
      <div className="mt-20 sm:mt-24">
        <div className="text-center">
          <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">Why Choose Skin Win</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            The Unmistakable Mark of Quality
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our reputation is built on a foundation of trust, expertise, and an unwavering dedication to excellence that sets us apart.
          </p>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsData.map((feature, index) => (
            <div key={index} className="bg-[#FBF5E9] p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#C09A50] text-white">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-base text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
        
      {/* Meet Our Experts Section */}
      <div className="mt-20 sm:mt-24">
        <div className="text-center">
          <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Experts
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our team of highly-credentialed doctors are leaders in their fields, dedicated to providing you with the highest standard of care.
          </p>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {doctorsData.map((doctor) => (
            <DoctorProfileCard key={doctor.name} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default About;