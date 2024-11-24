import React from 'react';
import Image from 'next/image';
import Picture_1 from '@/Assests/Images/pexels-mali-69483.jpg';
import Picture_2 from '@/Assests/Images/pexels-yentl-jacobs-43020-157811.jpg';
import Picture_3 from '@/Assests/Images/pexels-willianjusten-28881035.jpg';

export default function OurProjects() {
  return (
    <section>
      <div className="container p-5">
        <div className="text-start mb-4">
          <h1 className="display-10 text-sm-left text-capitalize fw-normal mb-2">
            Projects <span className="line"></span>
          </h1>
          <p className="lead display-8 font-sm fw-light">
            Our projects reflect our pledge to foster excellence and innovation
            in the construction sector. We offer our clients project clarity,
            deeper insights, and unparalleled outcomes through thorough planning
            and execution. Our team of experts is committed to providing quality
            solutions that continuously exceed expectations.
          </p>
        </div>

        <div className="scroll-indicator d-none d-md-block ">
          <span>&larr; Scroll &rarr;</span>
        </div>

        <div className="container  row flex-nowrap overflow-auto project-scroll-container">
          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card  border-0">
              <Image
                src={Picture_1}
                className="card-img-top fixed-image"
                alt="Project 1 Image"
              />
              <div className="card-body">
                <h5 className="card-title">Moeng Civils & Construction</h5>
                <p className="card-text">
                  Construction of an additional building at Orbit...
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card  border-0">
              <Image
                src={Picture_2}
                className="card-img-top fixed-image"
                alt="Project 2 Image"
                priority={true}
              />
              <div className="card-body">
                <h5 className="card-title">Moeng Civils & Construction</h5>
                <p className="card-text">
                  Construction of an additional building at Orbit...
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 mb-3">
            <div className="card  border-0">
              <Image
                src={Picture_3}
                className="card-img-top fixed-image"
                alt="Project 2 Image"
                priority
              />
              <div className="card-body">
                <h5 className="card-title">Moeng Civils & Construction</h5>
                <p className="card-text">
                  Construction of an additional building at Orbit...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
