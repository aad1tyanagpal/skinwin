import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      title: "The Art of Radiance, Mastered by Science.",
      subtitle: "Advanced dermatology and skin treatments by expert doctors across Rajasthan.",
      image: "/results/HeroCarousel/1/Microtia%20Website%20Banner.png",
      ctaPrimary: { text: "Explore Treatments", path: "/treatments" },
      ctaSecondary: { text: "Book Consultation", path: "/contact" },
    },
    {
      id: 2,
      title: "Restore Your Hair. Regain Your Confidence.",
      subtitle: "FUE & DHI hair transplant with natural results. Over 3,000 successful procedures.",
      image: "/results/HeroCarousel/1/HT.png",
      ctaPrimary: { text: "Hair Transplant", path: "/treatments/hair-treatments/hair-loss/hair-transplant" },
      ctaSecondary: { text: "See Results", path: "/results" },
    },
    {
      id: 3,
      title: "Precision Plastic Surgery. Beyond Expectations.",
      subtitle: "Board-certified surgeons. US-FDA approved technology. Absolute confidentiality.",
      image: "/results/HeroCarousel/1/Gynecomastia.png",
      ctaPrimary: { text: "Plastic Surgery", path: "/plastic-surgery" },
      ctaSecondary: { text: "Meet Our Doctors", path: "/about" },
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) nextSlide();
    else if (distance < -50) prevSlide();
  };

  return (
    <div
      className="relative min-h-[calc(100vh-5rem)] overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
          </div>

          <div className="relative z-10 flex items-center justify-center h-full">
            {/* key forces remount on slide change, retriggering animations */}
            <div
              key={currentSlide}
              className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white"
            >
              <div className="gold-divider mx-auto mb-8"></div>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 animate-fade-in-up leading-tight">
                {slide.title}
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg lg:text-xl mb-10 animate-fade-in-up animation-delay-200 font-light leading-relaxed">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
                <Link
                  to={slide.ctaPrimary.path}
                  className="bg-gold text-white font-medium py-3 px-8 rounded-sm shadow-lg hover:bg-gold-hover transition duration-300 tracking-widest text-sm uppercase"
                >
                  {slide.ctaPrimary.text}
                </Link>
                <Link
                  to={slide.ctaSecondary.path}
                  className="border border-white/60 text-white font-medium py-3 px-8 rounded-sm hover:bg-white hover:text-gray-900 transition duration-300 tracking-widest text-sm uppercase"
                >
                  {slide.ctaSecondary.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'bg-gold w-10'
                : 'bg-white/40 w-4 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;