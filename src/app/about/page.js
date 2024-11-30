import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';

import React from 'react';
import AboutHero from '@/components/about/AboutHeroSection';
import Accreditations from '@/components/about/Accreditations';
import History from '@/components/about/history';

function page() {
  return (
    <>
      <AboutHero />
      <History />
      <Accreditations />
    </>
  );
}

export default page;
