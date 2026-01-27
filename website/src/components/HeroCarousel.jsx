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
      subtitle: "Skin Win is a trusted destination for skin and hair excellence, offering state-of-the-art solutions to help you achieve your desired appearance and regain confidence.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      ctaPrimary: "Discover Our Treatments",
      ctaSecondary: "Book a Private Consultation"
    },
    {
      id: 2,
      title: "Transform Your Skin with Advanced Laser Technology",
      subtitle: "Experience the power of US-FDA approved laser treatments for flawless, radiant skin. From acne scars to pigmentation, we have the solution for you.",
      image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop",
      ctaPrimary: "Explore Laser Treatments",
      ctaSecondary: "Book Consultation"
    },
    {
      id: 3,
      title: "Restore Your Hair, Regain Your Confidence",
      subtitle: "Advanced hair restoration treatments combining cutting-edge technology with expert care. From transplants to PRP therapy, transform your hair journey.",
      image: "https://images.unsplash.com/photo-1596385212388-e2d8a6573589?q=80&w=1974&auto=format&fit=crop",
      ctaPrimary: "Hair Solutions",
      ctaSecondary: "Schedule Assessment"
    },
    {
      id: 4,
      title: "Personalized Skin Care for Lasting Beauty",
      subtitle: "Our expert dermatologists create bespoke treatment plans tailored to your unique skin concerns. Experience the difference of personalized care.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
      ctaPrimary: "Custom Treatment Plans",
      ctaSecondary: "Consult Our Experts"
    },
    {
      id: 5,
      title: "State-of-the-Art Plastic Surgery Excellence",
      subtitle: "Transform your appearance with our advanced plastic surgery procedures, performed by board-certified surgeons in a safe, luxurious environment.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=2069&auto=format&fit=crop",
      ctaPrimary: "Plastic Surgery Services",
      ctaSecondary: "Book Consultation"
    }
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

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <div
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
                {slide.title}
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl mb-10 animate-fade-in-up animation-delay-200">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-400">
                <Link
                  to="/treatments"
                  className="bg-[#C09A50] text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-[#B08A40] transition duration-300 transform hover:scale-105 text-center"
                >
                  {slide.ctaPrimary}
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 text-center"
                >
                  {slide.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-[#C09A50] scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black bg-opacity-20 z-20">
        <div
          className="h-full bg-[#C09A50] transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: isAutoPlaying ? 'width 5s linear' : 'none'
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroCarousel;