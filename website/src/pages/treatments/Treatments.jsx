import React from 'react';
import { Link } from 'react-router-dom';

// Icons
const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// Enhanced Services Data
const servicesData = {
  skinCare: {
    title: "Advanced Skin Care Treatments",
    description: "Comprehensive skin rejuvenation and treatment solutions using cutting-edge technology and medical-grade procedures for radiant, healthy skin.",
    imageUrl: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop",
    icon: "✨",
    treatments: [
      {
        category: "Facials & Rejuvenation",
        services: [
          { name: "Medi-Facials", info: "Photo Facial, Korean Glass Facial, Fire N Ice, Age-Revive, Pumpkin & E-Facial", timing: "Results in 24-48 hours" },
          { name: "Vampire Facial (PRP)", info: "Regenerative treatment using your own platelets for collagen boost", timing: "Visible in 3-7 days, full results in 3-4 weeks" },
          { name: "HydraFacial", info: "Deep cleansing and hydration treatment for instant glow", timing: "Immediate results" },
          { name: "BB Glow Treatment", info: "Immediate brightness and even skin tone with deep hydration", timing: "Instant results" }
        ]
      },
      {
        category: "Anti-Aging Solutions",
        services: [
          { name: "Botox", info: "Reduces wrinkles and fine lines effectively", timing: "Effects in 3-5 days, full results in 10-14 days" },
          { name: "Dermal Fillers", info: "Restore volume and smooth wrinkles", timing: "Full results visible in 1-2 weeks" },
          { name: "Thread Lift", info: "Non-surgical lifting and tightening", timing: "Results apparent in 2-4 weeks" },
          { name: "HIFU Treatment", info: "High-intensity focused ultrasound for skin lifting", timing: "Gradual improvement over 2-3 months" }
        ]
      }
    ]
  },
  laserTreatments: {
    title: "Laser & Pigmentation Therapies",
    description: "US-FDA approved laser technologies targeting pigmentation, unwanted hair, and skin imperfections with precision and proven results.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    icon: "🔬",
    treatments: [
      {
        category: "Q-Switch Laser Treatments",
        services: [
          { name: "Pigmentation Removal", info: "Treats freckles, melasma, age spots, sun spots & hyperpigmented scars", timing: "4-6 sessions for visible improvement" },
          { name: "Laser Skin Brightening", info: "Instant glow facial using Q-Switch technology", timing: "Visible glow after first session" },
          { name: "Birthmark & Nevus Removal", info: "Safe removal of natural birthmarks and mole-type spots", timing: "4-8 sessions typically needed" },
          { name: "Area Brightening", info: "Underarm, neck, elbow brightening treatments", timing: "Visible changes after 4-6 sessions" }
        ]
      },
      {
        category: "Laser Hair Reduction",
        services: [
          { name: "Face Areas", info: "Upper lip, chin, jawline, side locks, full face treatment", timing: "6-8 sessions for optimal results" },
          { name: "Body Areas", info: "Arms, legs, underarms, bikini, chest, back, stomach", timing: "80-90% reduction typically achieved" },
          { name: "Men's Services", info: "Beard shaping and body hair reduction", timing: "Customized session count" },
          { name: "Triple Wavelength Tech", info: "Advanced US-FDA approved system for all skin types", timing: "Safe and effective for Indian skin" }
        ]
      }
    ]
  },
  hairRestoration: {
    title: "Hair Restoration & Regrowth",
    description: "Comprehensive hair loss solutions combining surgical excellence with regenerative therapies to restore natural hair growth and confidence.",
    imageUrl: "https://images.unsplash.com/photo-1596385212388-e2d8a6573589?q=80&w=1974&auto=format&fit=crop",
    icon: "💇‍♂️",
    treatments: [
      {
        category: "Surgical Hair Restoration",
        services: [
          { name: "FUE Hair Transplant", info: "Minimally invasive extraction with no linear scars", timing: "Natural growth in 6-12 months" },
          { name: "DHI Technique", info: "Advanced implanter pen for precision and higher density", timing: "Growth starts in 3-4 months" },
          { name: "Facial Hair Transplant", info: "Beard, moustache, and eyebrow restoration", timing: "Full results in 8-12 months" },
          { name: "Scalp Micropigmentation", info: "Creates appearance of denser hair follicles", timing: "2-3 sessions for completion" }
        ]
      },
      {
        category: "Regenerative Hair Therapies",
        services: [
          { name: "PRP & GFC Therapy", info: "Platelet-rich plasma and growth factor treatments", timing: "Visible improvement in 2-3 months" },
          { name: "Hair Mesotherapy", info: "Direct scalp injections of vitamins and nutrients", timing: "Results over 4-6 sessions" },
          { name: "LLLT (Low-Level Laser)", info: "US-FDA approved cold laser therapy", timing: "Improvement visible after 3-4 months" },
          { name: "Alopecia Areata Treatment", info: "Steroid injections and PRP for patchy hair loss", timing: "Regrowth typically in 2-4 months" }
        ]
      }
    ]
  },
  specialtyTreatments: {
    title: "Specialty Procedures & Aesthetics",
    description: "Specialized treatments for unique skin concerns, aesthetic enhancements, and semi-permanent makeup solutions with professional precision.",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2031&auto=format&fit=crop",
    icon: "🎯",
    treatments: [
      {
        category: "Skin Concern Treatments",
        services: [
          { name: "Chemical Peels", info: "Lactic, Glycolic, Kojic, Salicylic, Mandelic & TCA peels", timing: "Improvement visible after each session" },
          { name: "Mole & Wart Removal", info: "Safe removal including plantar warts", timing: "Single session, healing in 1-2 weeks" },
          { name: "Keloid & Scar Treatment", info: "Advanced scar revision and keloid management", timing: "Gradual improvement over months" },
          { name: "Specialized Removal", info: "Skin tags, milia, molluscum, xanthelasma treatment", timing: "Typically single session" }
        ]
      },
      {
        category: "Aesthetic Enhancements",
        services: [
          { name: "RF Treatments", info: "Radiofrequency for face, neck & tummy tightening", timing: "Results build over 2-3 months" },
          { name: "Full Body Polishing", info: "Comprehensive skin polishing for hands, legs, back", timing: "Immediate glow and smoothness" },
          { name: "Ear Lobe Repair", info: "Surgical repair of torn or stretched earlobes", timing: "Healing complete in 4-6 weeks" },
          { name: "Comedone Extraction", info: "Professional removal of blackheads and whiteheads", timing: "Immediate improvement" }
        ]
      }
    ]
  }
};

const TreatmentCard = ({ treatment }) => (
  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
    <h4 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
      {treatment.category}
    </h4>
    <div className="space-y-4">
      {treatment.services.map((service, index) => (
        <div key={index} className="group">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 h-5 w-5 text-[#C09A50] mt-0.5">
              <CheckCircleIcon />
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-gray-800 group-hover:text-[#C09A50] transition-colors">
                {service.name}
              </h5>
              <p className="text-sm text-gray-600 mt-1">{service.info}</p>
              {service.timing && (
                <div className="flex items-center mt-2 text-xs text-[#C09A50]">
                  <ClockIcon />
                  <span className="ml-1">{service.timing}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ServiceSection = ({ service }) => (
  <div className="mb-16 last:mb-0">
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <span className="text-3xl mr-3">{service.icon}</span>
        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
      </div>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {service.treatments.map((treatment, index) => (
        <TreatmentCard key={index} treatment={treatment} />
      ))}
    </div>
  </div>
);

const WhyChooseUs = () => (
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200/50 mt-20">
    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Skin Win Clinic?</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { icon: "👨‍⚕️", title: "Expert Specialists", desc: "Qualified dermatologists & plastic surgeons" },
        { icon: "🏆", title: "US-FDA Approved Tech", desc: "State-of-the-art equipment ensuring safety" },
        { icon: "📋", title: "Personalized Plans", desc: "Customized treatments based on thorough analysis" },
        { icon: "😊", title: "Proven Track Record", desc: "3000+ happy patients, 1000+ successful transplants" },
        { icon: "💰", title: "Affordable Care", desc: "Competitive pricing with EMI options available" },
        { icon: "🏥", title: "Premium Environment", desc: "Clean, hygienic, and welcoming clinic ambiance" }
      ].map((feature, index) => (
        <div key={index} className="text-center p-4">
          <div className="text-3xl mb-3">{feature.icon}</div>
          <h4 className="font-semibold text-gray-800 mb-2">{feature.title}</h4>
          <p className="text-sm text-gray-600">{feature.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const Treatments = () => {
  return (
    <div className="bg-gradient-to-br from-[#FBF5E9] via-[#F8F0E3] to-[#FBF5E9] py-20 sm:py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase mb-2">
            Our Comprehensive Services
          </h2>
          <p className="text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
            Expert Care for Skin & Hair
          </p>
          <p className="max-w-3xl text-xl text-gray-600 mx-auto leading-relaxed">
            From advanced laser therapies to surgical hair restoration, we offer a complete range of dermatological 
            and aesthetic treatments designed to help you look and feel your best.
          </p>
        </div>

        {/* Services Sections */}
        <div className="space-y-24">
          <ServiceSection service={servicesData.skinCare} />
          <ServiceSection service={servicesData.laserTreatments} />
          <ServiceSection service={servicesData.hairRestoration} />
          <ServiceSection service={servicesData.specialtyTreatments} />
        </div>

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#C09A50] to-[#B8903D] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Skin & Hair?</h3>
            <p className="text-lg mb-6 opacity-90">
              Book your free consultation today and discover the perfect treatment plan for your needs.
            </p>
            <Link to="/contact" className="bg-white text-[#C09A50] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;