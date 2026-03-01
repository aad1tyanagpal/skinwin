import React, { useEffect } from 'react';
import AnimateOnScroll from '../../../components/AnimateOnScroll';

const Testimonials = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widget.senja.io/widget/0e602a7b-225d-434d-be2c-8dbe56ec50ce/platform.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimateOnScroll>
          <div className="gold-divider mx-auto mb-6"></div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-16">
            What Our Patients Say
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll delay={150}>
          <div
            className="senja-embed"
            data-id="0e602a7b-225d-434d-be2c-8dbe56ec50ce"
            data-mode="shadow"
            data-lazyload="false"
            style={{ display: 'block', width: '100%' }}
          ></div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default Testimonials;