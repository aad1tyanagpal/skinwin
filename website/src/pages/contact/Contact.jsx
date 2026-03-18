import React from 'react';

const PhoneIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
  </svg>
);

const EmailIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const ClockIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
  </svg>
);

const MapPinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const clinics = [
  {
    city: "Jaipur",
    area: "Nirman Nagar",
    phones: ["+91 92564 44577", "+91 97733 11102", "+91 97733 11103"],
    address: "121-122, Santosh Nagar, New Sanganer Road, Nirman Nagar, Jaipur – 302020",
    timing: "10:00 AM – 7:00 PM",
    mapUrl: "https://maps.app.goo.gl/JsFVcb7rpx3AMrXz9",
    services: ["Skin", "Hair", "Laser"],
    highlight: false,
  },
  {
    city: "Jaipur",
    area: "Vaishali Nagar",
    phones: ["+91 92570 43182"],
    address: "Gakkhar Complex, Sirsi Rd, Hanuman Nagar, Vaishali Nagar, Jaipur – 302021",
    timing: "10:00 AM – 7:00 PM",
    mapUrl: "https://maps.app.goo.gl/M2bd8sJRNRrquSHP9",
    services: ["Skin", "Hair", "Laser", "Plastic Surgery"],
    highlight: true,
  },
  {
    city: "Ajmer",
    area: "",
    phones: ["+91 97733 11106", "+91 97733 11108"],
    address: "2nd Floor, Vijay ENT Hospital, St. Stephen Circle, Makarwali Road, Ajmer – 305004",
    timing: "9:00 AM – 6:00 PM",
    mapUrl: "https://maps.app.goo.gl/EjvtMNzxo1bffn8U7",
    services: ["Skin", "Hair", "Laser", "Plastic Surgery"],
    highlight: false,
  },
  {
    city: "Kota",
    area: "",
    phones: ["+91 92570 33993"],
    address: "Housing Board, 4-E-6, Rangbari, Kota, Rajasthan – 324010",
    timing: "10:00 AM – 7:00 PM",
    mapUrl: "https://maps.app.goo.gl/A9eXPHAniTLmEUkG8",
    services: ["Skin", "Hair", "Laser"],
    highlight: false,
  },
];

const serviceColors = {
  "Skin": "bg-pink-50 text-pink-700 border border-pink-100",
  "Hair": "bg-amber-50 text-amber-700 border border-amber-100",
  "Laser": "bg-blue-50 text-blue-700 border border-blue-100",
  "Plastic Surgery": "bg-purple-50 text-purple-700 border border-purple-100",
};

const ClinicCard = ({ clinic }) => (
  <div className={`relative bg-white rounded-2xl p-8 border transition-all duration-300 hover:shadow-xl group ${clinic.highlight ? 'border-[#C09A50]/40 shadow-md' : 'border-gray-100 shadow-sm'}`}>
    {clinic.highlight && (
      <span className="absolute top-4 right-4 text-xs font-semibold bg-[#C09A50]/10 text-[#C09A50] border border-[#C09A50]/20 px-3 py-1 rounded-full">
        Full Services
      </span>
    )}

    {/* City */}
    <div className="mb-5">
      <p className="text-xs font-semibold text-[#C09A50] uppercase tracking-widest mb-1">Skin Win Clinic</p>
      <h3 className="text-2xl font-bold text-gray-900">
        {clinic.city}{clinic.area ? ` – ${clinic.area}` : ''}
      </h3>
    </div>

    {/* Services badges */}
    <div className="flex flex-wrap gap-2 mb-5">
      {clinic.services.map((s, i) => (
        <span key={i} className={`text-xs px-2.5 py-1 rounded-full font-medium ${serviceColors[s]}`}>{s}</span>
      ))}
    </div>

    {/* Address */}
    <div className="flex items-start gap-3 mb-4">
      <MapPinIcon className="w-4 h-4 text-[#C09A50] mt-0.5 flex-shrink-0" />
      <p className="text-gray-600 text-sm leading-relaxed">{clinic.address}</p>
    </div>

    {/* Timing */}
    <div className="flex items-center gap-3 mb-5">
      <ClockIcon className="w-4 h-4 text-[#C09A50] flex-shrink-0" />
      <p className="text-gray-600 text-sm">{clinic.timing}</p>
    </div>

    {/* Divider */}
    <div className="w-12 h-0.5 bg-[#C09A50]/30 mb-5"></div>

    {/* Phones */}
    <div className="space-y-2 mb-6">
      {clinic.phones.map((phone, i) => (
        <a
          key={i}
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="flex items-center gap-2 text-[#C09A50] hover:text-[#B08A40] font-semibold text-sm transition-colors"
        >
          <PhoneIcon className="w-4 h-4" />
          {phone}
        </a>
      ))}
    </div>

    {/* Directions */}
    <a
      href={clinic.mapUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#C09A50] transition-colors group-hover:text-[#C09A50]"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/>
      </svg>
      Get Directions
    </a>
  </div>
);

const Contact = () => {
  const whatsappMessage = encodeURIComponent("Hello! I'm interested in your services and would like to know more.");

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-[#FBF5E9] py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="gold-divider mx-auto mb-6"></div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-5">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We're here to help you begin your journey to healthier skin and hair. Reach out or visit us at a clinic near you.
          </p>

          {/* Quick contact buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/919773311102?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-7 rounded-xl shadow-md transition duration-300"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919773311102"
              className="inline-flex items-center gap-3 bg-[#C09A50] hover:bg-[#B08A40] text-white font-semibold py-3 px-7 rounded-xl shadow-md transition duration-300"
            >
              <PhoneIcon className="w-5 h-5" />
              Call Us
            </a>
            <a
              href="mailto:info@skinwin.co.in"
              className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-[#C09A50] text-gray-700 hover:text-[#C09A50] font-semibold py-3 px-7 rounded-xl shadow-sm transition duration-300"
            >
              <EmailIcon className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Clinic Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
            Visit Our Clinics
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Four centres across Rajasthan — find the one most convenient for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinics.map((clinic, i) => (
            <ClinicCard key={i} clinic={clinic} />
          ))}
        </div>
      </div>

      {/* Bottom CTA strip */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4">
            Ready to Begin Your Transformation?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Talk to our experts and get the right solution for your concern.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/919773311102?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C09A50] hover:bg-[#B08A40] text-white font-bold py-3 px-8 rounded-xl transition duration-300"
            >
              Book Free Consultation
            </a>
            <a
              href="tel:+919773311102"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-[#C09A50] text-gray-300 hover:text-[#C09A50] font-bold py-3 px-8 rounded-xl transition duration-300"
            >
              Call / WhatsApp Now
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;