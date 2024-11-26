import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

import React from 'react';
import AboutHero from '@/components/about/AboutHeroSection';

function page() {
  return (
    <>
      <Header />

      <AboutHero />
      <Footer />
    </>
  );
}

export default page;
