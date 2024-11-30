'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Residential Complex',
    description:
      'A modern residential complex with state-of-the-art amenities.',
    imageUrl: 'https://images.pexels.com/photos/93400/pexels-photo-93400.jpeg',
    details:
      'This residential complex includes 50 luxury apartments, a rooftop swimming pool, and a community gym.',
    projectValue: '1.5M',
  },
  {
    id: 2,
    title: 'Commercial Building',
    description: 'A commercial building with office spaces and retail outlets.',
    imageUrl:
      'https://images.pexels.com/photos/3184356/pexels-photo-3184356.jpeg',
    details:
      'This commercial building has 5 floors of office spaces, 2 floors of retail outlets, and a basement parking lot.',
    projectValue: '2.5M',
  },
  {
    id: 3,
    title: 'Industrial Warehouse',
    description:
      'An industrial warehouse with storage and logistics facilities.',
    imageUrl: 'https://images.pexels.com/photos/38000/pexels-photo-38000.jpeg',
    details:
      'This industrial warehouse includes storage facilities, loading docks, and logistics offices.',
    projectValue: '3.5M',
  },
  {
    id: 4,
    title: 'Hospital Building',
    description:
      'A hospital building with medical facilities and patient rooms.',
    imageUrl:
      'https://images.pexels.com/photos/29533760/pexels-photo-29533760/free-photo-of-modern-skyscraper-against-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"',
    details:
      'This hospital building has 10 floors of medical facilities, patient rooms, and emergency services.',
    projectValue: '5M',
  },
];

export default function ProjectHistory() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-history-section py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold">Our Past Projects</h2>
          <p className="text-muted">
            Explore our journey of excellence and dedication in building
            remarkable spaces.
          </p>
        </div>

        {/* Project Gallery */}
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-sm-6 col-lg-4">
              <div
                className="card border-0 project-card "
                onClick={() => setSelectedProject(project)}
                style={{ cursor: 'pointer' }}
              >
                <div className="image-container">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    className="card-img-top"
                    width={400}
                    height={200}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text text-muted">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="modal-dialog modal-dialog-centered"
              role="document"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setSelectedProject(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="img-fluid mb-3"
                    width={500}
                    height={300}
                  />
                  <p className="mb-2">{selectedProject.details}</p>
                  <p>
                    <strong>Project Value: </strong>R
                    {selectedProject.projectValue}
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
