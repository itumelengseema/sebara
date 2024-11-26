import React from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
export default function page() {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h1>Projects Page</h1>
      </div>
      <Footer />
    </>
  );
}
