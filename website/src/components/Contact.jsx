import React from 'react';

// --- ICONS (No changes) ---

const PhoneIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
);



const EmailIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
);

const DirectionsIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z"/></svg>
);

const WhatsAppIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.48 1.32 4.95L2 22l5.25-1.38c1.41.79 3.02 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM16.56 14.81c-.22-.11-.76-.38-1.04-.44-.28-.07-.49-.07-.69.28-.2.35-.69.88-.84 1.05-.15.17-.3.19-.55.07-.25-.11-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.1-.51.11-.11.25-.28.38-.42.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.42s-.69-1.65-.94-2.27c-.25-.62-.5-.53-.69-.53h-.3c-.19 0-.49.07-.69.31-.2.25-.79.76-.79 1.85s.81 2.15.91 2.3s1.59 2.44 3.86 3.43c.54.24.96.38 1.29.48.55.17 1.05.14 1.44.09.44-.06 1.35-.55 1.54-1.08.19-.53.19-.98.13-1.08c-.06-.11-.22-.17-.44-.28z"/></svg>
);


// --- DATA (No changes) ---
const contactData = [
  {
    city: "Jaipur (Nirman Nagar)",
    phone: "+91 92564 44577",
    address: "121-122, Santosh Nagar, New Sanganer Road, Nirman Nagar, Jaipur-302020",
    mapUrl: "https://maps.app.goo.gl/cTTHE5Vt4SMmWB6X60"
  },
  {
    city: "Jaipur (Vaishali Nagar)", 
    phone: "+91 92570 43182",
    address: "Gakkhar Complex, B-7, Hanuman Nagar, Sirsi Road, Vaishali Nagar, Jaipur 302021",
    mapUrl: "https://maps.app.goo.gl/cTTHE5Vt4SMmWB6X61"
  },
  {
    city: "Ajmer",
    phone: "+91 97733 11106", 
    address: "2nd Floor, Vijay ENT Hospital, St. Stephen Circle, Makarwali Road, Ajmer 305004",
    mapUrl: "https://maps.app.goo.gl/cTTHE5Vt4SMmWB6X62"
  },
  {
    city: "Kota",
    phone: "+91 92570 33993",
    address: "Housing Board, 4-E-6, Rangbari, Kota, Rajasthan-3204010",
    mapUrl: "https://maps.app.goo.gl/cTTHE5Vt4SMmWB6X63"
  },
];


// --- REUSABLE COMPONENTS (Updated) ---

const ClinicListItem = ({ clinic }) => (
  <div className="bg-white/50 border border-transparent hover:border-[#C09A50] hover:bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
    <h3 className="text-xl font-bold text-gray-800 mb-2">{clinic.city}</h3>
    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{clinic.address}</p>
    <div className="flex justify-between items-center mt-auto pt-4">
        <a href={`tel:${clinic.phone}`} className="text-md font-semibold text-[#C09A50] hover:text-[#A07A30] transition-colors flex items-center space-x-2">
            <PhoneIcon className="w-4 h-4" />
            <span>{clinic.phone}</span>
        </a>
        <a 
          href={clinic.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center space-x-2 bg-gray-100 group-hover:bg-gradient-to-r from-[#C09A50] to-[#B08A40] text-[#B08A40] group-hover:text-white px-4 py-2 rounded-lg font-semibold transform group-hover:scale-105 transition-all duration-300 text-sm"
        >
          <DirectionsIcon className="w-4 h-4" />
          <span>Directions</span>
        </a>
    </div>
  </div>
);

const ContactButton = ({ icon, title, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-gray-200 bg-white hover:border-[#C09A50] hover:bg-[#FBF5E9]/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg h-36"
    >
        <div className="w-14 h-14 bg-gradient-to-br from-[#C09A50] to-[#B08A40] rounded-full flex items-center justify-center mb-3 flex-shrink-0">
            {icon}
        </div>
        <p className="font-bold text-gray-800 text-md leading-tight">{title}</p>
    </a>
);

const DirectContactCard = () => {
    const primaryPhoneNumber = "919256444577";
    const primaryEmail = "info@skinwin.com";
    const whatsappMessage = "Hello! I'm interested in your services and would like to know more.";

    return (
        <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 h-full">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Reach Out Directly</h2>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                    Choose your preferred way to connect. Our team is ready to assist you.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <ContactButton 
                    title="Chat on WhatsApp"
                    href={`https://wa.me/${primaryPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                    icon={<WhatsAppIcon className="w-7 h-7 text-white" />}
                />
                <ContactButton 
                    title="Call Our Helpline"
                    href={`tel:${primaryPhoneNumber}`}
                    icon={<PhoneIcon className="w-6 h-6 text-white" />}
                />
                <ContactButton 
                    title="Email for Enquiries"
                    href={`mailto:${primaryEmail}`}
                    icon={<EmailIcon className="w-6 h-6 text-white" />}
                />
            </div>
        </div>
    );
};


// --- MAIN PAGE COMPONENT (Updated with reduced spacing) ---

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FBF5E9] via-white to-[#FBF5E9] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Simplified Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C09A50] to-[#B08A40]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're here to help you on your journey to flawless skin and hair. Connect with us or find a clinic near you.
          </p>
        </div>

        {/* Main Content: Sequential Layout */}
        <div className="space-y-12 lg:space-y-16">
            
            {/* Section 1: Direct Contact */}
            <div className="max-w-4xl mx-auto">
                <DirectContactCard />
            </div>

            {/* Section 2: Clinic Locations */}
            <div>
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Visit Our Clinic Locations</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the most convenient location for your visit from our centers across Rajasthan.
                    </p>
                </div>
                <div className="mt-8 max-w-5xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {contactData.map((clinic, index) => (
                        <ClinicListItem key={index} clinic={clinic} />
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;