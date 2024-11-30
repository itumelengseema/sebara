import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import ProjectHistory from '@/components/projectsHistory/ProjectHistory';
import FAQSection from '@/components/projectsHistory/FAQSection';
export default function page() {
  return (
    <>
      <ProjectHistory />
      <FAQSection />
    </>
  );
}
