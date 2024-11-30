'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'; // Import the specific icons

import logo from '@/Assests/Branding/logo.svg';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'About-Us', link: '/about' },
  { name: 'Services', link: '/#Services' },
  { name: 'Projects', link: '/our_projects' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-body-tertiary px-5 sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" href="javascript:void(0)">
          <Image src={logo} alt="logo" width={200} />
        </Link>

        {/* Hamburger Menu Button: visible on small screens only */}
        <button
          className=" d-lg-none" // This ensures it only appears on screens smaller than large (lg)
          onClick={toggleMenu}
          aria-expanded={isOpen}
          style={{ border: 'none', background: 'transparent' }}
        >
          {/* Toggle between fa-bars and fa-x using FontAwesomeIcon */}
          <FontAwesomeIcon
            icon={isOpen ? faX : faBars}
            style={{ fontSize: '30px' }}
          />
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="mynavbar"
        >
          <ul className="navbar-nav mx-auto">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <Link
                  className="nav-link text-dark"
                  href={link.link}
                  onClick={handleLinkClick}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hide "Contact Us" button on mobile */}
          <Link
            href="/#footer"
            className="btn btn-outline-dark btn-sm d-none d-lg-block" // This will hide on small screens and show on large screens
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
