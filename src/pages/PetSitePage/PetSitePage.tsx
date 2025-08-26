import React from 'react';
import Header from '../../components/Header/Header';
import PetSite from '../../components/PetSite/PetSite';
import Footer from '../../components/Footer/Footer';

const PetSitePage: React.FC = () => {
  return (
    <div className="pet-site-page">
      <Header />
      <PetSite />
      <Footer />
    </div>
  );
};

export default PetSitePage;
