import React from 'react';
import Image from 'next/image';
import picture from '../../Assests/Images/Construction-pana.svg';

/**
 * History component renders a section that provides information about the company's background and values.
 * It includes a title, subtitle, and descriptive paragraphs about the company's mission and approach.
 */
export default function History() {
  return (
    <section className="history-section">
      <div className="container p-4">
        <div className="row align-items-center justify-content-center g-4">
          {/* Image Section */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <Image
              src={picture}
              alt="History illustration"
              className="img-fluid"
              width={500}
              height={300}
            />
          </div>

          {/* Text Section */}
          <div className="col-12 col-md-6">
            <h2 className="display-5 fw-bold d-none d-md-block">
              <span className="bg-span">Who we Are</span>
            </h2>
            <h2 className="display-6 fw-bold d-md-none">
              <span className="bg-span">Who we Are</span>
            </h2>
            <h3 className="fw-bold text-capitalize pb-2 d-none d-md-block">
              Cultivating Excellence from the Ground Up
            </h3>
            <h3 className="fw-bold text-capitalize pb-2 d-md-none">
              Cultivating Excellence from the Ground Up
            </h3>
            <p className="font-sm fw-light">
              Today, we deliver tailored solutions across residential,
              commercial, and industrial sectors. Our team is grounded in
              expertise and collaboration, embracing each project with integrity
              and a forward-thinking mindset.
            </p>
            <p className="font-sm fw-light">
              We see every challenge as an opportunity to innovate, creating
              lasting impact and building with purpose. Our work is more than
              construction—it's about making a difference for our clients and
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
