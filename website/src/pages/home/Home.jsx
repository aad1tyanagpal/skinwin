import React from 'react';
import { Link } from 'react-router-dom';
import HeroCarousel from '../../components/HeroCarousel';

// Icons
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

// Data
const servicesData = {
  laser: {
    title: "Laser Rejuvenation",
    description: "Harnessing the power of light for flawless skin. Our advanced, US-FDA approved laser technologies target concerns with precision, ensuring safe, effective, and lasting results.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
  },
  skin: {
    title: "Advanced Skin Artistry",
    description: "Revitalize your skin with our bespoke treatments, from medical-grade facials to advanced peels, designed to restore your natural glow and address specific concerns.",
    imageUrl: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop",
  },
  hair: {
    title: "Hair Restoration",
    description: "A bespoke journey to reclaim your hair's natural vitality and density. We combine advanced diagnostics with proven treatments to restore hair and confidence.",
    imageUrl: "https://images.unsplash.com/photo-1596385212388-e2d8a6573589?q=80&w=1974&auto=format&fit=crop",
  }
};

const whyUsData = [
  { title: "Expert-Led Practice", description: "All treatments are performed or supervised by our highly qualified team of expert dermatologists and plastic surgeons.", icon: <UserGroupIcon /> },
  { title: "Advanced Technology", description: "We invest in state-of-the-art, US-FDA approved laser and diagnostic equipment for superior safety and results.", icon: <DnaIcon /> },
  { title: "Bespoke Treatment Plans", description: "Your journey is unique. We conduct thorough diagnostics to create personalized treatment plans tailored to your specific goals.", icon: <StethoscopeIcon /> },
  { title: "Proven Track Record", description: "With over 3,000 satisfied patients, our results speak for themselves. We are a trusted destination for skin and hair excellence.", icon: <CheckCircleIcon /> },
];

const testimonialsData = [
  { quote: "The professionalism and attention to detail at Skin Win are unmatched. My hair transplant results have exceeded all my expectations. It's been a life-changing experience.", author: "A. Sharma, Entrepreneur", image: "https://placehold.co/100x100/FBF5E9/333333?text=AS" },
  { quote: "I came for a Laser Skin Brightening facial before a major event, and the glow was instantaneous. The clinic is serene, and the staff is incredibly discreet and professional.", author: "R. Kapoor, Socialite", image: "https://placehold.co/100x100/FBF5E9/333333?text=RK" },
  { quote: "After years of struggling with pigmentation, the Q-Switch laser treatment here has given me the clear skin I always dreamed of. Truly remarkable results and care.", author: "M. Singh, CEO", image: "https://placehold.co/100x100/FBF5E9/333333?text=MS" },
];

// Components

const SignatureServices = () => (
  <div className="bg-white py-20 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">A Curated Experience</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our Signature Services
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
          Explore a selection of our most sought-after treatments, each designed to deliver exceptional, transformative results.
        </p>
      </div>
      <div className="mt-16 grid gap-10 md:grid-cols-1 lg:grid-cols-3">
        {Object.values(servicesData).map(service => (
          <div key={service.title} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200/50 transform hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img className="h-56 w-full object-cover" src={service.imageUrl} alt={service.title} />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <Link to="/treatments" className="mt-6 text-sm font-semibold text-[#C09A50] hover:text-[#B08A40]">Learn More &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const WhyUsTeaser = () => (
  <div className="bg-[#FBF5E9] py-20 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-3 lg:gap-x-12 items-center">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">The Skin Win Difference</h2>
          <p className="mt-4 text-lg text-gray-600">
            Our philosophy is rooted in a combination of medical expertise, cutting-edge technology, and a deep commitment to personalized care.
          </p>
          <Link to="/results" className="mt-6 bg-[#C09A50] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-[#B08A40] transition duration-300">
            Discover Why We're Trusted
          </Link>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {whyUsData.slice(0, 4).map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#C09A50] text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="bg-white py-20 sm:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base text-[#C09A50] font-semibold tracking-wide uppercase">Testimonials</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Voices of Our Valued Clientele
        </p>
      </div>
      <div className="mt-16 grid gap-10 lg:grid-cols-3">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-[#FBF5E9] p-8 rounded-lg shadow-md">
            <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            <div className="mt-6 flex items-center">
              <img className="h-12 w-12 rounded-full" src={testimonial.image} alt={testimonial.author} />
              <div className="ml-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CallToActionBanner = () => (
  <div className="bg-[#FBF5E9]">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        <span className="block">Ready to Begin Your Transformation?</span>
      </h2>
      <p className="mt-4 text-lg leading-6 text-gray-600">
        Schedule a private and confidential consultation with one of our experts today.
      </p>
      <Link to="/contact" className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#C09A50] hover:bg-[#B08A40] sm:w-auto transition-colors duration-300">
        Book Your Consultation
      </Link>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <SignatureServices />
      <WhyUsTeaser />
      <Testimonials />
      <CallToActionBanner />
    </>
  );
};

export default Home;