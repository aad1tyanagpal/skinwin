import React from 'react';
import MegaMenu from '../navigation/MegaMenu';
import Footer from './Footer';

const PageLayout = ({ children }) => {
  return (
    <div>
      <MegaMenu />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;