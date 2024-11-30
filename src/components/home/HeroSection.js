'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <section className="hero  ">
        <div className="container p-5  ">
          <div className="row row-col-3  align-items-center justify-content-center vh-100  ">
            <div className="col-sm-8">
              <h1 className="display-4 fw-bold text-light">
                <span className="bg-span">Pioneering</span>
                <span className="line"></span>Excellence in Construction &
                Supplies
              </h1>
              <p className="lead text-light font-sm fw-light">
                We are committed to delivering superior construction and civil
                engineering solutions that stand the test of time.
              </p>

              <Link
                href="/#projects"
                className="btn btn-outline-light d-inline-block"
              >
                Learn More
              </Link>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
    </motion.section>
  );
}

export default HeroSection;
