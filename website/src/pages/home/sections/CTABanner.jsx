import React from 'react';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.48 1.32 4.95L2 22l5.25-1.38c1.41.79 3.02 1.22 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM16.56 14.81c-.22-.11-.76-.38-1.04-.44-.28-.07-.49-.07-.69.28-.2.35-.69.88-.84 1.05-.15.17-.3.19-.55.07-.25-.11-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.1-.51.11-.11.25-.28.38-.42.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.42s-.69-1.65-.94-2.27c-.25-.62-.5-.53-.69-.53h-.3c-.19 0-.49.07-.69.31-.2.25-.79.76-.79 1.85s.81 2.15.91 2.3 1.59 2.44 3.86 3.43c.54.24.96.38 1.29.48.55.17 1.05.14 1.44.09.44-.06 1.35-.55 1.54-1.08.19-.53.19-.98.13-1.08-.06-.11-.22-.17-.44-.28z" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

const CTABanner = () => (
  <section className="bg-[#FBF5E9] py-16 sm:py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll>
        <div>
          <div className="gold-divider mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900">
            Ready to Begin Your Transformation?
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Schedule a private consultation with one of our expert dermatologists or surgeons. Your journey to confidence starts with a conversation.
          </p>
        </div>
        </AnimateOnScroll>
        <AnimateOnScroll delay={150}>
        <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
          <a
            href="https://wa.me/919256444577?text=Hello!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-600 text-white font-medium py-4 px-8 rounded-sm hover:bg-green-700 transition duration-300 text-sm uppercase tracking-wider"
          >
            <WhatsAppIcon className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </a>
          <a
            href="tel:+919256444577"
            className="inline-flex items-center justify-center border-2 border-[#C09A50] text-[#C09A50] font-medium py-4 px-8 rounded-sm hover:bg-[#C09A50] hover:text-white transition duration-300 text-sm uppercase tracking-wider"
          >
            <PhoneIcon className="w-5 h-5 mr-2" />
            Call Now
          </a>
        </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default CTABanner;