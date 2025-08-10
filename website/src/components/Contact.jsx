import React from 'react';

// Icons
const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
);

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

// Data
const contactData = [
  {
    city: "Jaipur (Nirman Nagar)",
    doctorName: "Dr. Rittika Walia",
    qualifications: "MBBS",
    phone: "+91 92564 44577",
    address: "121-122, Santosh Nagar, New Sanganer Road, Pandit TN Mishra Marg, Nirman Nagar, Jaipur-302020"
  },
  {
    city: "Jaipur (Vaishali Nagar)",
    doctorName: "Dr. Parul Verma",
    qualifications: "MDS",
    phone: "+91 92570 43182",
    address: "Gakkhar Complex, B-7, Hanuman Nagar, Khatipura, Sirsi Road, Vaishali Nagar, Jaipur 302021"
  },
  {
    city: "Kota",
    doctorName: "Dr. Diwakar Sharma",
    qualifications: "MBBS, MD Dermatology",
    phone: "+91 92570 33993",
    address: "Housing Board, 4-E-6, Rangbari, Kota, Rajasthan-3204010"
  },
  {
    city: "Ajmer",
    doctorName: "Dr. Raina Arora",
    qualifications: "MBBS, MD, DNB-Skin & VD, Fellowship in Laser & Hair Transplant",
    phone: "+91 97733 11106",
    address: "2nd Floor, Vijay ENT Hospital, St. Stephen Circle, Makarwali Road, Ajmer 305004"
  }
];

// Components
const ClinicCard = ({ clinic }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200/50">
    <h3 className="text-xl font-bold text-[#C09A50]">{clinic.city}</h3>
    <p className="mt-2 font-semibold text-gray-800">{clinic.doctorName}</p>
    <p className="text-sm text-gray-500">{clinic.qualifications}</p>
    <div className="mt-4 space-y-3 text-gray-600">
      <div className="flex items-start space-x-3">
        <LocationIcon className="text-gray-400 mt-1 flex-shrink-0" />
        <span>{clinic.address}</span>
      </div>
      <div className="flex items-center space-x-3">
        <PhoneIcon className="text-gray-400" />
        <a href={`tel:${clinic.phone}`} className="hover:text-[#C09A50]">{clinic.phone}</a>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message. We will be in touch shortly.");
    e.target.reset();
  };

  return (
    <div className="bg-[#FBF5E9] py-20 sm:py-24 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Begin Your Transformation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Reach out to schedule your private consultation at one of our clinics. Our team is ready to assist you with the utmost professionalism and discretion.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h3>
            <div className="space-y-6">
              <input type="text" required className="block w-full bg-gray-100 border-gray-300 rounded-md py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-[#C09A50] focus:border-[#C09A50]" placeholder="Full Name" />
              <input type="email" required className="block w-full bg-gray-100 border-gray-300 rounded-md py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-[#C09A50] focus:border-[#C09A50]" placeholder="Email Address" />
              <input type="tel" required className="block w-full bg-gray-100 border-gray-300 rounded-md py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-[#C09A50] focus:border-[#C09A50]" placeholder="Phone Number" />
              <textarea rows="4" required className="block w-full bg-gray-100 border-gray-300 rounded-md py-3 px-4 text-gray-900 placeholder-gray-500 focus:ring-[#C09A50] focus:border-[#C09A50]" placeholder="Briefly describe your concern"></textarea>
              <button onClick={handleSubmit} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-[#C09A50] hover:bg-[#B08A40] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C09A50] transition duration-300">Send Request</button>
            </div>
          </div>
          <div className="space-y-8">
            {contactData.map(clinic => <ClinicCard key={clinic.city} clinic={clinic} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;