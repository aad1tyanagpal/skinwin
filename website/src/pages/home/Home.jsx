import React from 'react';
import HeroCarousel from '../../components/HeroCarousel';
import CredibilityBar from './sections/CredibilityBar';
import SignatureServices from './sections/SignatureServices';
import DoctorProfiles from './sections/DoctorProfiles';
import BeforeAfterShowcase from './sections/BeforeAfterShowcase';
import WhyChooseUs from './sections/WhyChooseUs';
import Testimonials from './sections/Testimonials';
import LocationsStrip from './sections/LocationsStrip';
import CTABanner from './sections/CTABanner';

const Home = () => (
  <>
    <HeroCarousel />
    <CredibilityBar />
    <SignatureServices />
    <DoctorProfiles />
    <BeforeAfterShowcase />
    <WhyChooseUs />
    <Testimonials />
    <LocationsStrip />
    <CTABanner />
  </>
);

export default Home;