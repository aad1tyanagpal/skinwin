import React, { useState } from 'react';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const testimonials = [
  {
    quote: "The professionalism and attention to detail at Skin Win are unmatched. My hair transplant results have exceeded all my expectations. It's been a life-changing experience.",
    author: "A. Sharma",
    treatment: "Hair Transplant, Jaipur",
    initials: "AS",
  },
  {
    quote: "I came for a Laser Skin Brightening facial before a major event, and the glow was instantaneous. The clinic is serene and the staff incredibly discreet and professional.",
    author: "R. Kapoor",
    treatment: "Laser Facial, Jaipur",
    initials: "RK",
  },
  {
    quote: "After years of struggling with pigmentation, the Q-Switch laser treatment here has given me the clear skin I always dreamed of. Truly remarkable results and care.",
    author: "M. Singh",
    treatment: "Pigmentation Treatment, Kota",
    initials: "MS",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-16">
            What Our Patients Say
          </h2>
        </AnimateOnScroll>

        {/* Featured testimonial */}
        <AnimateOnScroll delay={150}>
        <div className="relative mb-16 min-h-[200px]">
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-serif text-[120px] md:text-[160px] text-[#C09A50]/10 leading-none select-none pointer-events-none">
            &ldquo;
          </span>
          <blockquote className="relative z-10">
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-gray-800 italic leading-relaxed font-light">
              {testimonials[activeIndex].quote}
            </p>
            <footer className="mt-8">
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-[#C09A50]/10 rounded-full flex items-center justify-center">
                  <span className="font-serif text-[#C09A50] text-lg font-semibold">
                    {testimonials[activeIndex].initials}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900 text-sm">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {testimonials[activeIndex].treatment}
                  </p>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        </AnimateOnScroll>

        {/* Navigation dots */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                i === activeIndex
                  ? 'bg-[#C09A50] w-8'
                  : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;