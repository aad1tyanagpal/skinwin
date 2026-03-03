import React from 'react';
import { Link } from 'react-router-dom';

// Icons
const ShieldCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const ChipIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const BeakerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.02 1.272 6.023 6.023 0 01-2.02-1.272" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const HeartIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

const whyUsData = [
  { title: "Expert-Led Practice", description: "All treatments are performed or supervised by our highly qualified team of expert dermatologists and plastic surgeons.", icon: <ShieldCheckIcon /> },
  { title: "Advanced Technology", description: "We invest in state-of-the-art, US-FDA approved laser and diagnostic equipment for superior safety and results.", icon: <ChipIcon /> },
  { title: "Bespoke Treatment Plans", description: "Your journey is unique. We conduct thorough diagnostics to create personalized treatment plans tailored to your specific goals.", icon: <BeakerIcon /> },
  { title: "Proven Track Record", description: "With over 3,000 satisfied patients, our results speak for themselves. We are a trusted destination for skin and hair excellence.", icon: <TrophyIcon /> },
  { title: "Absolute Confidentiality", description: "We uphold the strictest standards of privacy and discretion, ensuring a comfortable and secure experience for our clientele.", icon: <LockIcon /> },
  { title: "Holistic Post-Care", description: "Our commitment extends beyond the treatment room, with comprehensive after-care guidance to ensure optimal, lasting outcomes.", icon: <HeartIcon /> },
];

const doctorsData = [
  {
    name: "Dr. Vijay Gakhar",
    qualifications: "— (To be updated)",
    initials: "VG",
    role: "Senior Consultant",
    about: "Dr. Vijay Gakhar is a founding member of Skin Win Clinic and plays a key role in shaping the clinical direction of the practice. His expertise spans advanced aesthetic and dermatological procedures, ensuring every patient receives personalised, result-oriented care.",
    expertise: ["Hair Transplant", "Laser Treatments", "Aesthetic Procedures", "Patient Consultation"],
    photo: null,
  },
  {
    name: "Dr. Vibhuti Gakhar",
    qualifications: "— (To be updated)",
    initials: "VBG",
    role: "Consultant Dermatologist",
    about: "Dr. Vibhuti Gakhar brings a meticulous and patient-first approach to every consultation. As a co-founder of Skin Win, she has been instrumental in building a clinic culture rooted in transparency, ethical practice, and long-term skin health.",
    expertise: ["Skin Care & Treatments", "Cosmetology", "Pigmentation & Acne", "Medi-Facials"],
    photo: null,
  },
  {
    name: "Dr. Raina Arora",
    qualifications: "MBBS · MD (Skin & VD) · DNB (Skin & VD) · Fellowship in Laser & Hair Transplant",
    initials: "RA",
    role: "Dermatologist & Hair Transplant Surgeon",
    about: "Dr. Raina Arora holds a rare dual postgraduate qualification — MD and DNB in Skin & VD — along with a dedicated Fellowship in Laser procedures and Hair Transplant Surgery. Her advanced training makes her one of the most qualified specialists on our team for hair restoration and laser treatments.",
    expertise: ["Hair Transplant (FUE/DHI)", "Laser Hair Reduction", "PRP Therapy", "Skin & VD"],
    photo: null,
  },
  {
    name: "Dr. Diwakar Sharma",
    qualifications: "MBBS · MD – Dermatology",
    initials: "DS",
    role: "Consultant Dermatologist",
    about: "Dr. Diwakar Sharma is an experienced dermatologist with strong grounding in both clinical and cosmetic dermatology. He is known for accurate diagnosis, effective treatment planning, and a calm, reassuring approach that puts patients at ease.",
    expertise: ["Clinical Dermatology", "Hair Loss Management", "Skin Disorders", "Laser Treatments"],
    photo: null,
  },
  {
    name: "Dr. Deeksha Sharma",
    qualifications: "BDS · SMS · Cosmetologist",
    initials: "DKS",
    role: "Aesthetic Cosmetologist",
    about: "Dr. Deeksha Sharma combines her training from SMS with specialized cosmetology expertise to deliver refined facial aesthetic treatments. Her understanding of facial structure and skin physiology makes her highly effective in non-surgical aesthetic procedures.",
    expertise: ["Botox & Fillers", "Anti-Aging Treatments", "Medi-Facials", "Skin Brightening"],
    photo: null,
  },
  {
    name: "Dr. Sonali Gupta",
    qualifications: "MBBS – Gold Medalist, SMS Jaipur · MD (Skin & VD) – SMS Jaipur",
    initials: "SG",
    role: "Senior Dermatologist & Venereologist",
    about: "Dr. Sonali Gupta is a Gold Medalist from the prestigious Sawai Man Singh Medical College, Jaipur, with postgraduate specialization in Skin & VD from the same institution. Prior to joining Skin Win, she served as a Consultant at SVP Hospital and Shardaben Hospital, Ahmedabad — bringing institutional-level clinical depth to our practice.",
    expertise: ["Acne & Pigmentation", "Cosmetic Dermatology", "Laser Procedures", "Hair & Scalp Treatments"],
    photo: null,
  },
];

const About = () => (
  <div>
    {/* Hero Banner */}
    <section className="bg-[#FBF5E9] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold text-[#C09A50] uppercase tracking-widest mb-3">
          Behind the Clinic
        </p>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
          About Skin Win
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-700 font-light">
          Founded on the principle of providing world-class skin and hair care with an unwavering commitment to quality, privacy, and personalized attention.
        </p>
      </div>
    </section>

    {/* Philosophy Section */}
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                className="w-full h-[420px] lg:h-[500px] object-cover"
                src="/results/HeroCarousel/1/PRP.png"
                alt="Skin Win Clinic"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C09A50]/20 rounded-lg -z-10 hidden lg:block"></div>
          </div>
          <div>
            <div className="gold-divider mb-6"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that true beauty is a reflection of health and confidence. Our approach is not just to treat conditions, but to enhance your natural elegance through scientifically-backed procedures.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team of renowned dermatologists and surgeons utilize cutting-edge technology to craft bespoke treatment journeys, ensuring results that are not only visible but also sustainable.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-gray-900 mb-4">
              Our Commitment to You
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your trust is our most valued asset. From the moment you step into our serene and private clinic, your comfort and confidentiality are our highest priorities. We are dedicated to creating a sanctuary where you can achieve your aesthetic goals with peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="bg-gray-900 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { number: "3,000+", label: "Satisfied Patients" },
          { number: "4", label: "Clinic Locations" },
          { number: "15+", label: "Expert Doctors" },
          { number: "50+", label: "Treatments Offered" },
        ].map((stat, i) => (
          <div key={i}>
            <p className="font-serif text-4xl md:text-5xl font-semibold text-[#C09A50]">{stat.number}</p>
            <p className="mt-2 text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Meet Our Experts */}
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-relaxed">
            A team of qualified, experienced, and dedicated doctors — committed to delivering safe, ethical, and personalised care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctorsData.map((doctor) => (
            <div key={doctor.name} className="group bg-[#FBF5E9] rounded-2xl overflow-hidden border border-[#C09A50]/10 hover:border-[#C09A50]/40 hover:shadow-xl transition-all duration-300">

              {/* Photo Area */}
              <div className="relative h-56 bg-gray-900 overflow-hidden">
                {doctor.photo ? (
                  <img
                    src={doctor.photo}
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-serif text-6xl font-semibold text-[#C09A50]">
                        {doctor.initials}
                      </span>
                    </div>
                  </div>
                )}
                {/* Gold bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C09A50] to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">

                {/* Name & Role */}
                <h3 className="font-serif text-xl font-semibold text-gray-900 leading-tight">
                  {doctor.name}
                </h3>
                <p className="text-[#C09A50] text-sm font-medium mt-1">{doctor.role}</p>

                {/* Qualifications */}
                <p className="text-gray-400 text-xs mt-2 leading-relaxed border-t border-[#C09A50]/10 pt-3">
                  {doctor.qualifications}
                </p>

                {/* About */}
                <p className="text-gray-600 text-sm leading-relaxed mt-3">
                  {doctor.about}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {doctor.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white text-gray-600 border border-[#C09A50]/20 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>



      </div>
    </section>

    {/* Why Choose Us */}
    <section className="bg-[#FBF5E9] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            The Unmistakable Mark of Quality
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-relaxed">
            Our reputation is built on a foundation of trust, expertise, and an unwavering dedication to excellence.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsData.map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#C09A50]/10 rounded-lg flex items-center justify-center text-[#C09A50] mb-5">
                {feature.icon}
              </div>
              <h3 className="font-serif text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>



    {/* CTA */}
    <section className="bg-[#FBF5E9] py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="gold-divider mx-auto mb-6"></div>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Begin Your Journey With Us
        </h2>
        <p className="text-gray-600 leading-relaxed mb-8">
          Schedule a private consultation with one of our experts and discover the Skin Win difference.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-[#C09A50] text-white font-medium py-3 px-8 rounded-sm shadow-lg hover:bg-[#B08A40] transition duration-300 tracking-widest text-sm uppercase"
        >
          Book Consultation
        </Link>
      </div>
    </section>
  </div>
);

export default About;