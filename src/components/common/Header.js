import Link from 'next/link';
import Image from 'next/image';
import logo from '@/Assests/Branding/logo.svg';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-body-tertiary px-5 sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" href="javascript:void(0)">
          <Image src={logo} alt="logo" width={200} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="mynavbar">
          <ul className="navbar-nav   mx-auto">
            <li className="nav-item">
              <Link className="nav-link  text-dark" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-dark" href="/about">
                About-Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-dark" href="/our_projects">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-dark" href="/our_projects">
                Projects
              </Link>
            </li>
          </ul>
          <button className="btn btn-outline-dark btn-sm ">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
