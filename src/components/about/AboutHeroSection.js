import React from 'react';

export default function AboutHeroSection() {
  return (
    <section className="about_hero">
      <div className="container p-5 ">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-lg-6">
            <h1 className="display-5 fw-bold text-light">
              <span className="bg-span"> Our Story </span>
              <span className="line"></span> and What We Stand for
            </h1>

            <p className=" text-light font-sm fw-light">
              Our journey began in 2013, transitioning from courier company to
              telecommunications to supplying for Eskom.We have since evolved
              into a premier construction and civil engineering company,driven
              by our commitment to excellence and innovation.
            </p>
            <button className="btn btn-secondary  d-inline-block">
              Contact Us
            </button>
          </div>
          <div className="col-12 col-lg-6"></div>
        </div>
      </div>
    </section>
  );
}
