import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

const accreditations = [
  { title: 'Electical Conformance Bord', Img: '/AC_3.svg' },
  { title: 'Construction Industry Development Board', Img: '/AC_4.svg' },
  { title: 'National Home Builders Registration Council', Img: '/AC_2.svg' },
  { title: 'Quality Policy', Img: '/AC_1.svg' },
  { title: 'Level 1 B-BBEE ', Img: '/AC_5.svg' },
  { title: 'Environmental Policy', Img: '/AC_6.svg' },
];

export default function Accreditations() {
  return (
    <section className="our-services py-0 bg-light" id="Services">
      <div className="container p-5">
        <h2 className="display-10 text-sm-left text-capitalize fw-normal mb-5">
          Accreditations & Certificates <span className="line"></span>
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="col">
              <div className="card  border-0 ">
                <div className="card-body text-center">
                  <>
                    <div className="icon mb-2">
                      <Image
                        src={accreditation.Img}
                        width="100"
                        height="90"
                        alt={accreditation.title}
                      />
                    </div>
                    <p className="card-title lead ">{accreditation.title}</p>
                  </>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
