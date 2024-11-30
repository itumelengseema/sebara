'use client';
import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion'; // Import useInView from framer-motion
import { Icon } from '@iconify/react';

export default function OurServices() {
  const [inView, setInView] = useState(false);

  // Use the useInView hook to track if the element is in the viewport
  const inViewOptions = {
    triggerOnce: true, // Trigger only once when the element is in view
    threshold: 0.5, // Trigger when 50% of the element is in view
  };

  const ref = React.useRef(null);

  useInView(ref, inViewOptions, (inView) => {
    setInView(inView);
  });

  return (
    <motion.section
      className="our-services py-5"
      id="Services"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container p-5">
        <motion.h2
          className="display-10 text-sm-left text-capitalize fw-normal mb-5"
          ref={ref} // Reference the title element
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }} // Animate opacity based on inView state
          transition={{ duration: 1, delay: 0.2 }}
        >
          Our Services <span className="line"></span>
        </motion.h2>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {[
            {
              icon: 'healthicons:construction-worker-outline',
              title: 'Construction',
              text: 'High-quality construction services for residential, commercial, and industrial projects.',
            },
            {
              icon: 'game-icons:suspension-bridge',
              title: 'Civil Engineering',
              text: 'Expert civil engineering solutions, from roadways to bridges, ensuring durability and safety.',
            },
            {
              icon: 'game-icons:crane',
              title: 'Infrastructure Development',
              text: 'Comprehensive infrastructure development services to support sustainable growth.',
            },
            {
              icon: 'la:project-diagram',
              title: 'Project Management',
              text: 'Professional project management for efficient, on-time project delivery.',
            },
            {
              icon: 'solar:delivery-outline',
              title: 'Supplies',
              text: 'Providing a wide range of industry supplies, such as abrasives, valves, containers, machinery, and petroleum products.',
            },
            {
              icon: 'clarity:tools-line',
              title: 'Specialized Services',
              text: 'Offering expert services in plumbing, electrical works, plastering, tiling, painting, paving, solar energy installations, and drywall partitions and ceilings.',
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="col"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="card h-100 border-0">
                <div className="card-body text-center">
                  <div className="icon mb-4">
                    <Icon
                      icon={service.icon}
                      width="60"
                      height="60"
                      style={{ color: '#5f5f5f' }}
                    />
                  </div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
