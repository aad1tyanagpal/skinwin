import React from 'react';

// Icons
const UserGroupIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-3-3h-1m-4-4a4 4 0 100-8 4 4 0 000 8zM3 20v-2a3 3 0 013-3h1m4-4a4 4 0 100-8 4 4 0 000 8z" /></svg>;
const BeakerIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a4 4 0 00-5.656 0M15 12l-2 2-2-2m-2-2l2-2 2 2m7.5-3.5l-1-1a4 4 0 00-5.656 0l-1.414 1.414a4 4 0 000 5.656l1 1" /></svg>;
const ClipboardListIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>;
const CheckCircleIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LockClosedIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const HeartIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.672l1.318-1.354a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>;
const AcademicCapIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" /></svg>;


// Data
const whyUsData = [
  { title: "Expert-Led Practice", description: "All treatments are performed or supervised by our highly qualified team of expert dermatologists and plastic surgeons.", icon: <UserGroupIcon className="h-8 w-8" /> },
  { title: "Advanced Technology", description: "We invest in state-of-the-art, US-FDA approved laser and diagnostic equipment for superior safety and results.", icon: <BeakerIcon className="h-8 w-8" /> },
  { title: "Bespoke Treatment Plans", description: "Your journey is unique. We conduct thorough diagnostics to create personalized treatment plans for you.", icon: <ClipboardListIcon className="h-8 w-8" /> },
  { title: "Proven Track Record", description: "With over 3,000 satisfied patients, our results speak for themselves. A trusted destination for excellence.", icon: <CheckCircleIcon className="h-8 w-8" /> },
  { title: "Absolute Confidentiality", description: "We uphold the strictest standards of privacy and discretion, ensuring a comfortable and secure experience.", icon: <LockClosedIcon className="h-8 w-8" /> },
  { title: "Holistic Post-Care", description: "Our commitment extends beyond the treatment room, with comprehensive after-care guidance for lasting outcomes.", icon: <HeartIcon className="h-8 w-8" /> },
];

const doctorsData = [
  { name: "Dr. Rittika Walia", qualifications: "MBBS", location: "Jaipur (Nirman Nagar)", image: "https://placehold.co/200x200/E9E9E9/333333?text=RW" },
  { name: "Dr. Parul Verma", qualifications: "MDS", location: "Jaipur (Vaishali Nagar)", image: "https://placehold.co/200x200/E9E9E9/333333?text=PV" },
  { name: "Dr. Diwakar Sharma", qualifications: "MBBS, MD Dermatology", location: "Kota", image: "https://placehold.co/200x200/E9E9E9/333333?text=DS" },
  { name: "Dr. Raina Arora", qualifications: "MBBS, MD, DNB-Skin & VD", location: "Ajmer", image: "https://placehold.co/200x200/E9E9E9/333333?text=RA" },
];

const DoctorProfileCard = ({ doctor }) => (
  <div className="text-center p-4">
    <img className="mx-auto h-40 w-40 rounded-full object-cover shadow-lg" src={doctor.image} alt={`Dr. ${doctor.name}`} />
    <div className="mt-6">
      <h3 className="text-lg font-bold text-text-primary">{doctor.name}</h3>
      <p className="text-sm text-primary font-semibold mt-1">{doctor.location}</p>
      <div className="mt-2 flex items-center justify-center space-x-2 text-text-secondary">
        <AcademicCapIcon className="h-5 w-5" />
        <p className="text-xs">{doctor.qualifications}</p>
      </div>
    </div>
  </div>
);

const WhyUs = () => {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Why Choose Skin Win</h2>
          <p className="mt-2 text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl">
            The Mark of Quality
          </p>
          <p className="mt-6 max-w-2xl text-xl text-text-secondary mx-auto">
            Our reputation is built on trust, expertise, and an unwavering dedication to excellence that sets us apart.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsData.map((feature) => (
            <div key={feature.title} className="bg-surface p-8 rounded-lg border border-gray-200/80">
                <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                        {feature.icon}
                    </div>
                </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-text-primary">{feature.title}</h3>
                <p className="mt-2 text-base text-text-secondary">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 sm:mt-32">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
              Meet Our Experts
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-text-secondary mx-auto">
              Our team of highly-credentialed doctors are leaders in their fields, dedicated to providing the highest standard of care.
            </p>
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {doctorsData.map((doctor) => (
              <DoctorProfileCard key={doctor.name} doctor={doctor} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;