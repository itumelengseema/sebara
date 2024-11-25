import React from 'react';

function HeroSection() {
  return (
   
  
  <section>    

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
              <button className="btn btn-outline-light d-inline-block">
                Learn More
              </button>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
