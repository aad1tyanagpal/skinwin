import React from 'react';
import AnimateOnScroll from '../../components/AnimateOnScroll';

const ShieldCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const ChipIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>
);

const BeakerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-2.02 1.272 6.023 6.023 0 01-2.02-1.272" />
  </svg>
);

const features = [
  {
    title: "Expert-Led Practice",
    description: "All treatments are performed or supervised by our highly qualified team of expert dermatologists and plastic surgeons.",
    icon: <ShieldCheckIcon />,
  },
  {
    title: "Advanced Technology",
    description: "We invest in state-of-the-art, US-FDA approved laser and diagnostic equipment for superior safety and results.",
    icon: <ChipIcon />,
  },
  {
    title: "Bespoke Treatment Plans",
    description: "We conduct thorough diagnostics to create personalized treatment plans tailored to your specific goals.",
    icon: <BeakerIcon />,
  },
  {
    title: "Proven Track Record",
    description: "With over 3,000 satisfied patients, our results speak for themselves. A trusted destination for skin and hair excellence.",
    icon: <TrophyIcon />,
  },
];

const WhyChooseUs = () => (
  <section className="bg-[#FBF5E9] py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image */}
        <AnimateOnScroll className="relative order-2 lg:order-1 slide-from-left">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              className="w-full h-[420px] lg:h-[500px] object-cover"
              src="/results/HeroCarousel/1/PRP.png"
              alt="Skin Win Clinic"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C09A50]/20 rounded-lg -z-10 hidden lg:block"></div>
        </AnimateOnScroll>

        {/* Right - Content */}
        <AnimateOnScroll className="order-1 lg:order-2 slide-from-right">
          <div className="gold-divider mb-6"></div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            The Skin Win Difference
          </h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            Our philosophy is rooted in medical expertise, cutting-edge technology, and a deep commitment to personalized care.
          </p>
          <div className="space-y-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#C09A50]/10 rounded-lg flex items-center justify-center text-[#C09A50]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;