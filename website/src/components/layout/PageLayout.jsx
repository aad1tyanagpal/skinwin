import React from 'react';
import { useLocation } from 'react-router-dom';
import MegaMenu from '../navigation/MegaMenu';
import Footer from './Footer';
import FloatingWhatsApp from '../FloatingWhatsApp';

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <MegaMenu />
      <main key={pathname} className="pt-20 page-transition">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PageLayout;