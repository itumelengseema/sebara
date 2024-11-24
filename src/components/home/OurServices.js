import React from 'react';
import { Icon } from '@iconify/react';
export default function OurServices() {
  return (
    <section className="our-services py-5" id="#Services">
      <div className="container p-5">
        <h2 className="display-10 text-sm-left text-capitalize fw-normal mb-5">
          Our Services <span className="line"></span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center">
                <div className="icon mb-4">
                  <Icon
                    icon="healthicons:construction-worker-outline"
                    width="60"
                    height="60"
                    style={{ color: '#5f5f5f' }}
                  />
                </div>
                <h5 className="card-title">Construction</h5>
                <p className="card-text">
                  High-quality construction services for residential,
                  commercial, and industrial projects.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center">
                <div className="icon mb-4">
                  <Icon
                    icon="game-icons:suspension-bridge"
                    width="60"
                    height="60"
                  />
                </div>
                <h5 className="card-title">Civil Engineering</h5>
                <p className="card-text">
                  Expert civil engineering solutions, from roadways to bridges,
                  ensuring durability and safety.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center">
                <div className="icon mb-4">
                  <span
                    className="iconify"
                    data-icon="game-icons:crane"
                    data-width="60"
                    data-height="60"
                    style={{ color: '#5f5f5f' }}
                  ></span>

                  <Icon icon="game-icons:crane" width="60" height="60" />
                </div>
                <h5 className="card-title">Infrastructure Development</h5>
                <p className="card-text">
                  Comprehensive infrastructure development services to support
                  sustainable growth.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center">
                <div className="icon mb-4">
                  <Icon icon="la:project-diagram" width="60" height="60" />
                </div>
                <h5 className="card-title">Project Management</h5>
                <p className="card-text">
                  Professional project management for efficient, on-time project
                  delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center">
                <div className="icon mb-4">
                  <Icon icon="solar:delivery-outline" width="60" height="60" />
                </div>
                <h5 className="card-title">Supplies</h5>
                <p className="card-text">
                  Providing a wide range of industry supplies, such as
                  abrasives, valves, containers, machinery, and petroleum
                  products.
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card h-100 border-0 ">
              <div className="card-body text-center">
                <div className="icon mb-4">
                  <Icon icon="clarity:tools-line" width="60" height="60" />
                </div>
                <h5 className="card-title">Specialized Services</h5>
                <p className="card-text">
                  Offering expert services in plumbing, electrical works,
                  plastering, tiling, painting, paving, solar energy
                  installations, and drywall partitions and ceilings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
