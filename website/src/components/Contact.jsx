import React from 'react';

// Icons
const PhoneIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const LocationMarkerIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// Data
const contactData = [
  { city: "Jaipur (Nirman Nagar)", doctorName: "Dr. Rittika Walia", qualifications: "MBBS", phone: "+91 92564 44577", address: "121-122, Santosh Nagar, New Sanganer Road, Nirman Nagar, Jaipur" },
  { city: "Jaipur (Vaishali Nagar)", doctorName: "Dr. Parul Verma", qualifications: "MDS", phone: "+91 92570 43182", address: "Gakkhar Complex, B-7, Hanuman Nagar, Vaishali Nagar, Jaipur" },
  { city: "Kota", doctorName: "Dr. Diwakar Sharma", qualifications: "MBBS, MD Dermatology", phone: "+91 92570 33993", address: "Housing Board, 4-E-6, Rangbari, Kota" },
  { city: "Ajmer", doctorName: "Dr. Raina Arora", qualifications: "MBBS, MD, DNB-Skin & VD", phone: "+91 97733 11106", address: "2nd Floor, Vijay ENT Hospital, St. Stephen Circle, Ajmer" },
];

const ClinicCard = ({ clinic }) => (
    <div className="bg-surface p-6 rounded-lg shadow-sm border border-gray-200/80">
      <h3 className="text-xl font-bold text-primary">{clinic.city}</h3>
      <p className="mt-2 font-semibold text-text-primary">{clinic.doctorName}</p>
      <p className="text-sm text-text-secondary">{clinic.qualifications}</p>
      <div className="mt-4 space-y-3 text-text-secondary">
        <div className="flex items-start space-x-3">
          <LocationMarkerIcon className="text-gray-400 mt-1 flex-shrink-0 h-5 w-5" />
          <span>{clinic.address}</span>
        </div>
        <div className="flex items-center space-x-3">
          <PhoneIcon className="text-gray-400 h-5 w-5" />
          <a href={`tel:${clinic.phone}`} className="hover:text-primary transition-colors">{clinic.phone}</a>
        </div>
      </div>
    </div>
  );

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We will be in touch shortly.");
        e.target.reset();
      };

    return (
        <div className="bg-surface p-8 rounded-lg shadow-sm border border-gray-200/80">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Request a Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" required className="block w-full bg-background border-gray-300/80 rounded-md py-3 px-4 text-text-primary placeholder-text-secondary focus:ring-primary focus:border-primary" placeholder="Full Name" />
                <input type="email" required className="block w-full bg-background border-gray-300/80 rounded-md py-3 px-4 text-text-primary placeholder-text-secondary focus:ring-primary focus:border-primary" placeholder="Email Address" />
                <input type="tel" required className="block w-full bg-background border-gray-300/80 rounded-md py-3 px-4 text-text-primary placeholder-text-secondary focus:ring-primary focus:border-primary" placeholder="Phone Number" />
                <textarea rows="4" required className="block w-full bg-background border-gray-300/80 rounded-md py-3 px-4 text-text-primary placeholder-text-secondary focus:ring-primary focus:border-primary" placeholder="Briefly describe your concern"></textarea>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
                    Send Request
                </button>
            </form>
        </div>
    )
}

const Contact = () => {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Contact Us</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            Begin Your Transformation
          </p>
          <p className="mt-6 max-w-2xl text-xl text-text-secondary mx-auto">
            Reach out to schedule your private consultation. Our team is ready to assist you with the utmost professionalism and discretion.
          </p>
        </header>
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            {contactData.map(clinic => <ClinicCard key={clinic.city} clinic={clinic} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;