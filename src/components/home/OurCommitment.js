'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function OurCommitment() {
  return (
    <section className="Commitment py-5 bg-primary">
      <div className="container px-5">
        <motion.h2
          className="display-10 text-sm-left text-capitalize fw-normal mb-5 text-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Commitment <span className="line"></span>
        </motion.h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {/* Card 1: Who We Are */}
          <motion.div
            className="col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="card h-100 border-0 bg-primary">
              <div className="card-body text-start">
                <h5 className="card-title text-light">Who We Are</h5>
                <p className="card-text">
                  As a national leader in our industry, Sebara Malele Projects
                  is redefining excellence in construction and civil
                  engineering.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Our Mission */}
          <motion.div
            className="col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }} // Delay to create staggered effect
          >
            <div className="card h-100 border-0 bg-primary">
              <div className="card-body text-start">
                <h5 className="card-title text-light">Our Mission</h5>
                <p className="card-text">
                  To provide innovative solutions and quality construction
                  services that exceed client expectations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Core Values */}
          <motion.div
            className="col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }} // Delay to create staggered effect
          >
            <div className="card h-100 border-0 bg-primary">
              <div className="card-body text-start">
                <h5 className="card-title text-light">Core Values</h5>
                <p className="card-text">
                  Integrity. Innovation. Sustainability. Professionalism.
                  Quality. Client Focus.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
