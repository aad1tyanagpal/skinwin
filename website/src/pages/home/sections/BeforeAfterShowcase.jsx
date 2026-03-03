import React from 'react';
import { Link } from 'react-router-dom';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const showcaseData = [
  {
    title: "Hair Transplant",
    before: "/results/Hair Transplant/1/1.png",
    after: "/results/Hair Transplant/1/1-1.png",
    category: "Hair Restoration",
  },
  {
    title: "Acne Scar Treatment",
    before: "/results/Acne Scars/1/1.png",
    after: "/results/Acne Scars/1/1-1.png",
    category: "Skin Treatments",
  },
  {
    title: "Pigmentation Removal",
    before: "/results/Pigmentation/1.png",
    after: "/results/Pigmentation/1-1.png",
    category: "Laser Treatments",
  },
];

const BeforeAfterShowcase = () => (
  <section className="bg-white py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AnimateOnScroll>
        <div className="text-center mb-16">
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
            Real Results, Real Confidence
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 leading-relaxed">
            See the transformative outcomes our patients have achieved through our advanced treatments.
          </p>
        </div>
      </AnimateOnScroll>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {showcaseData.map((item, i) => (
          <AnimateOnScroll key={item.title} delay={100 * i}>
            <div
              className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={item.before}
                    alt={`${item.title} before`}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-3 py-1 rounded-sm uppercase tracking-wider">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={item.after}
                    alt={`${item.title} after`}
                    className="w-full h-56 object-cover"
                  />
                  <span className="absolute bottom-2 left-2 bg-[#C09A50] text-white text-xs px-3 py-1 rounded-sm uppercase tracking-wider">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs text-[#C09A50] uppercase tracking-wider font-medium">
                  {item.category}
                </p>
                <h3 className="font-serif text-lg font-semibold text-gray-900 mt-1">
                  {item.title}
                </h3>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/results"
          className="inline-flex items-center text-[#C09A50] hover:text-[#B08A40] font-medium text-sm uppercase tracking-wider transition-colors"
        >
          View All Results &rarr;
        </Link>
      </div>
    </div>
  </section>
);

export default BeforeAfterShowcase;