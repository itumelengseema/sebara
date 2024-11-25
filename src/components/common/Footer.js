import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Icon } from '@iconify/react';
import logo_white from '@/Assests/Branding/white_logo.svg';

export default function Footer() {
  return (
    <footer className=" bg-primary text-light ">
      <div className="container p-5 align-items-center justify-content-between px-5">
        <div className="row ">
          <div className="col-md-4 ">
            <h5 className="text-uppercase text-light fw-bold">Contact Us</h5>
            <p>
              <Icon icon="ic:round-home" width="1.2em" height="20" />
              14 Audrey St, eMalahleni, 1044
            </p>
            <p>
              <Icon icon="ic:baseline-phone" width="1.2em" height="20" />
              (+27) 084 698 0161
            </p>
            <p>
              <Icon icon="ic:baseline-mail" width="1.2em" height="20" />
              info@sebara.co.za
            </p>
          </div>

          <div className="col-md-4 ">
            <h5 className="text-uppercase text-light fw-bold">Quick Links</h5>
            <ul className="list-unstyled ">
              <li>
                <Link href="/about" className="text-light text-decoration-none">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our_projects"
                  className="text-light text-decoration-none"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#Services"
                  className="text-light text-decoration-none"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="text-light text-decoration-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-2">
            <h5 className="text-uppercase text-light fw-bold">Follow Us</h5>
            <div className="d-flex">
              <Link href="#" className="text-light me-3">
                <Icon
                  icon="ic:baseline-facebook"
                  width="1.2em"
                  height="1.2em"
                />
              </Link>
              <Link href="#" className="text-light me-3">
                <Icon icon="prime:twitter" width="1.2em" height="1.2em" />
              </Link>
              <Link href="#" className="text-light me-3">
                <Icon icon="mdi:linkedin" width="1.2em" height="1.2em" />
              </Link>
            </div>

            <div className="py-4">
              <Link href="/" className="text-light ">
                <Image src={logo_white} alt="Facebook" width="200" />
              </Link>
            </div>
          </div>

          <div className="col-md-4 mb-2"></div>
        </div>
        <hr />
        <div className="text-start text-sm mt-4 display-10">
          <p className="text-sm">
            Copyright &copy; 2024 Sabara Malele Projects (PTY) LTD | All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
