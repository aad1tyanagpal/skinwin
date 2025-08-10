import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Pricing from './components/Pricing';
import AfterCare from './components/AfterCare/AfterCare.jsx';
import Contact from './components/Contact';


export default function App() {
  const [activePage, setActivePage] = useState('home');


  useEffect(() => {
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);


  const renderPage = () => {
    switch (activePage) {
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'why-us': return <WhyUs />;
      case 'pricing': return <Pricing />;
      case 'after-care': return <AfterCare />;
      case 'contact': return <Contact />;
      case 'home':
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };
  
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header setActivePage={setActivePage} activePage={activePage} />
      <main>
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
   </div>
 );
}
