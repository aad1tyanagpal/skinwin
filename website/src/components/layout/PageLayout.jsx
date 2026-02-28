import React from 'react';
import MegaMenu from '../navigation/MegaMenu';
import Footer from './Footer';
import FloatingWhatsApp from '../FloatingWhatsApp';

const PageLayout = ({ children }) => {
  return (
    <div>
      <MegaMenu />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default PageLayout;