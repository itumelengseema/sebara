// Code: About page
import React from 'react';
import AboutHero from '@/components/about/AboutHeroSection';
import Accreditations from '@/components/about/Accreditations';
import History from '@/components/about/History';

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
