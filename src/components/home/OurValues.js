import React from 'react';

export default function OurValues() {
  return (
    <section className="Values py-5">
      <div className="container p-5 ">
        <div className="row align-items-center  justify-content-around ">
          <div className="col-12 col-lg-6">
            <div>
              <div>
                <h1 className="display-5 text-light">100%</h1>
                <h2 className="text-capitalize lead text-light fw-light">
                  Black Youth Owned
                </h2>
                <hr className="thick-hr" />
              </div>
              <div>
                <h1 className="display-5 text-light">100%</h1>
                <h3 className="text-capitalize lead text-light fw-light">
                  Client satisfaction
                </h3>
                <hr className="thick-hr" />
              </div>
              <div>
                <h1 className="display-5 text-light">11</h1>
                <h3 className="text-capitalize lead text-light fw-light">
                  With nearly over 11 years in business
                </h3>
                <hr className="thick-hr" />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <h1 className="display-7 text-light fw-bold text-capitalize pb-3">
              Where We come From.
              <span
                className="line"
                style={{ border: '#ffffffb9 1px solid' }}
              ></span>
            </h1>

            <p className=" text-light font">
              Sebara Malele Projects is a premier construction and civil
              engineering company founded in 2013. We are 100% Black youth-owned
              and a Level 1 BBBEE contributor. Our vision is to set the
              benchmark for excellence in the construction industry, driven by
              our mission to deliver innovative and quality solutions that
              exceed client expectations. With a team of experienced
              professionals, we offer comprehensive services in general
              construction, project management, road and bridge construction,
              water and sanitation projects, renovation, and design-build
              solution
            </p>
            <button className="btn btn-outline-light btn-sm">Lean More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
