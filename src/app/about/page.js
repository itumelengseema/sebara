import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

import React from 'react';
import AboutHero from '@/components/about/AboutHeroSection';
import Accreditations from '@/components/about/Accreditations';

function page() {
  return (
    <>
      <AboutHero />
      <Accreditations />
    </>
  );
}

export default page;
