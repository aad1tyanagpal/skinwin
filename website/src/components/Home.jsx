import React from 'react';
import { Link } from 'react-router-dom';

// Icons (using a more consistent style)
const CheckCircleIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SparklesIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M19 3v4M17 5h4M12 3v4M10 5h4M5 17v4M3 19h4M19 17v4M17 19h4M12 17v4M10 19h4M12 9a3 3 0 100-6 3 3 0 000 6zM12 15a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

const UserGroupIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-3-3h-1m-4-4a4 4 0 100-8 4 4 0 000 8zM3 20v-2a3 3 0 013-3h1m4-4a4 4 0 100-8 4 4 0 000 8z" />
  </svg>
);

const BeakerIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a4 4 0 00-5.656 0M15 12l-2 2-2-2m-2-2l2-2 2 2m7.5-3.5l-1-1a4 4 0 00-5.656 0l-1.414 1.414a4 4 0 000 5.656l1 1" />
    </svg>
);

const AcademicCapIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l7-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm7-13L9 3m0 0L2 6" />
    </svg>
);


// Data
const servicesData = {
  laser: {
    title: "Laser Rejuvenation",
    description: "Harnessing light for flawless skin. Our advanced, US-FDA approved lasers ensure safe, precise, and lasting results.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870&auto=format&fit=crop",
  },
  skin: {
    title: "Advanced Skin Artistry",
    description: "Bespoke treatments, from medical-grade facials to advanced peels, designed to restore your natural glow.",
    imageUrl: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=870&auto=format&fit=crop",
  },
  hair: {
    title: "Hair Restoration",
    description: "A bespoke journey to reclaim your hair's natural vitality. We combine advanced diagnostics with proven treatments.",
    imageUrl: "https://images.unsplash.com/photo-1596385212388-e2d8a6573589?q=80&w=774&auto=format&fit=crop",
  }
};

const whyUsData = [
  { title: "Expert-Led Practice", description: "All treatments supervised by our highly qualified team of expert dermatologists.", icon: <AcademicCapIcon className="h-6 w-6" /> },
  { title: "Advanced Technology", description: "We invest in state-of-the-art, US-FDA approved equipment for superior safety and results.", icon: <BeakerIcon className="h-6 w-6" /> },
  { title: "Bespoke Treatment Plans", description: "Your journey is unique. We create personalized treatment plans for your specific goals.", icon: <UserGroupIcon className="h-6 w-6" /> },
  { title: "Proven Track Record", description: "With over 3,000 satisfied patients, our results speak for themselves.", icon: <CheckCircleIcon className="h-6 w-6" /> },
];

const testimonialsData = [
    { quote: "The professionalism and attention to detail at Skin Win are unmatched. My results have exceeded all my expectations. A life-changing experience.", author: "A. Sharma, Entrepreneur", image: "https://placehold.co/100x100/E9E9E9/333333?text=AS" },
    { quote: "I came for a facial before a major event, and the glow was instantaneous. The clinic is serene, and the staff is incredibly professional.", author: "R. Kapoor, Socialite", image: "https://placehold.co/100x100/E9E9E9/333333?text=RK" },
    { quote: "After years of struggling with pigmentation, the laser treatment here has given me the clear skin I always dreamed of. Truly remarkable.", author: "M. Singh, CEO", image: "https://placehold.co/100x100/E9E9E9/333333?text=MS" },
  ];

// Components
const Hero = () => (
  <div className="bg-background">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text-primary">
        The Art of Radiance, Mastered by Science.
      </h1>
      <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-text-secondary">
        A trusted destination for skin and hair excellence, offering state-of-the-art solutions to help you achieve your desired appearance and regain confidence.
      </p>
      <div className="mt-10 flex justify-center gap-4">
        <Link to="/services" className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary-dark transition duration-300">
          Our Treatments
        </Link>
        <Link to="/contact" className="bg-transparent border-2 border-primary text-primary font-bold py-3 px-8 rounded-lg hover:bg-primary hover:text-white transition duration-300">
          Book a Consultation
        </Link>
      </div>
    </div>
  </div>
);

const SignatureServices = () => (
  <div className="bg-surface py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">A Curated Experience</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
          Signature Services
        </p>
        <p className="mt-4 max-w-2xl text-xl text-text-secondary mx-auto">
          Explore our most sought-after treatments, each designed to deliver exceptional, transformative results.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {Object.values(servicesData).map(service => (
          <div key={service.title} className="bg-background rounded-lg overflow-hidden border border-gray-200/80">
            <img className="h-56 w-full object-cover" src={service.imageUrl} alt={service.title} />
            <div className="p-6">
              <h3 className="text-xl font-bold text-text-primary">{service.title}</h3>
              <p className="mt-3 text-text-secondary">{service.description}</p>
              <Link to="/services" className="mt-6 inline-block text-sm font-semibold text-primary hover:text-primary-dark">Learn More &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const WhyUsTeaser = () => (
  <div className="bg-background py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">The Skin Win Difference</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                Why Choose Us
            </p>
            <p className="mt-4 max-w-2xl text-xl text-text-secondary mx-auto">
                Our philosophy is rooted in medical expertise, cutting-edge technology, and a deep commitment to personalized care.
            </p>
        </div>
      <div className="mt-16">
          <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {whyUsData.map((feature) => (
              <div key={feature.title} className="text-center">
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white mx-auto">
                    {feature.icon}
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-text-primary">{feature.title}</p>
                </dt>
                <dd className="mt-2 text-base text-text-secondary">{feature.description}</dd>
              </div>
            ))}
          </dl>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
    <div className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-text-primary sm:text-4xl">
                Voices of Our Valued Clientele
            </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="bg-background p-8 rounded-lg border border-gray-200/80">
              <p className="text-text-secondary italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center">
                <img className="h-12 w-12 rounded-full bg-gray-200" src={testimonial.image} alt={testimonial.author} />
                <div className="ml-4">
                  <p className="font-semibold text-text-primary">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

const CallToActionBanner = () => (
  <div className="bg-background">
    <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
        <span className="block">Ready to Begin Your Transformation?</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-text-secondary">
        Schedule a private and confidential consultation with one of our experts today.
      </p>
      <div className="mt-8">
        <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-dark">
            Book Your Consultation
        </Link>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <Hero />
      <SignatureServices />
      <WhyUsTeaser />
      <Testimonials />
      <CallToActionBanner />
    </>
  );
};

export default Home;