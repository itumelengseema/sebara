'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function OurValues() {
  // State to handle whether the count-up animation has started
  const [hasStarted, setHasStarted] = useState(false);

  // Use intersection observer to trigger when the section is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  // Effect to start count-up when the section is in view
  useEffect(() => {
    if (inView) {
      setHasStarted(true); // Start animation when section is in view
    }
  }, [inView]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }} // Fade-in effect when in view
      transition={{ duration: 1 }} // Animation duration for fade-in
      className="Values py-5"
    >
      <div className="container p-5">
        <div className="row align-items-center justify-content-around">
          <div className="col-12 col-lg-6">
            <div>
              <div>
                <h1 className="display-5 text-light">
                  {/* CountUp only starts when hasStarted is true */}
                  {hasStarted && <CountUp start={0} end={100} duration={2} />}%
                </h1>
                <h2 className="text-capitalize lead text-light fw-light">
                  Black Youth Owned
                </h2>
                <hr className="thick-hr" />
              </div>
              <div>
                <h1 className="display-5 text-light">
                  {hasStarted && <CountUp start={0} end={100} duration={2} />}%
                </h1>
                <h3 className="text-capitalize lead text-light fw-light">
                  Client satisfaction
                </h3>
                <hr className="thick-hr" />
              </div>
              <div>
                <h1 className="display-5 text-light">
                  {hasStarted && <CountUp start={0} end={11} duration={3} />}
                </h1>
                <h3 className="text-capitalize lead text-light fw-light">
                  With nearly over 11 years in business
                </h3>
                <hr className="thick-hr" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h1 className="display-7 text-light fw-bold text-capitalize pb-3">
              Where We Come From.
              <span
                className="line"
                style={{ border: '#ffffffb9 1px solid' }}
              ></span>
            </h1>

            <p className="text-light font">
              Sebara Malele Projects is a premier construction and civil
              engineering company founded in 2013. We are 100% Black youth-owned
              and a Level 1 BBBEE contributor. Our vision is to set the
              benchmark for excellence in the construction industry, driven by
              our mission to deliver innovative and quality solutions that
              exceed client expectations. With a team of experienced
              professionals, we offer comprehensive services in general
              construction, project management, road and bridge construction,
              water and sanitation projects, renovation, and design-build
              solutions.
            </p>
            <Link href="/about" className="btn btn-outline-light btn-sm">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
