import React from 'react';

const About = () => (
  <div className="bg-background py-24 sm:py-32">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-primary font-semibold tracking-wide uppercase">About Skin Win</h2>
        <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-text-primary sm:text-4xl">
          The Pinnacle of Dermatological Excellence
        </p>
        <p className="mt-4 max-w-2xl text-xl text-text-secondary lg:mx-auto">
          Founded on the principle of providing world-class skin and hair care with an unwavering commitment to quality, privacy, and personalized attention.
        </p>
      </div>
      <div className="mt-20">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
          <div className="relative">
            <img className="rounded-lg shadow-lg w-full" src="https://images.unsplash.com/photo-1580281657527-47f249e8f5df?q=80&w=1974&auto=format&fit=crop" alt="Skin Win Clinic Interior" />
          </div>
          <div className="mt-10 lg:mt-0">
            <h3 className="text-2xl font-bold text-text-primary">Our Philosophy</h3>
            <p className="mt-4 text-lg text-text-secondary">
              We believe that true beauty is a reflection of health and confidence. Our approach is not just to treat conditions, but to enhance your natural elegance through scientifically-backed procedures. Our team of renowned dermatologists and surgeons utilize cutting-edge technology to craft bespoke treatment journeys.
            </p>
            <h3 className="mt-10 text-2xl font-bold text-text-primary">Our Commitment</h3>
            <p className="mt-4 text-lg text-text-secondary">
              Your trust is our most valued asset. From the moment you step into our serene and private clinic, your comfort and confidentiality are our highest priorities. We are dedicated to creating a sanctuary where you can achieve your aesthetic goals with peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;