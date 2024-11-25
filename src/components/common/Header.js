import Link from 'next/link';
import Image from 'next/image';
import logo from '@/Assests/Branding/logo.svg';

const Header = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-body-tertiary px-5 sticky-top">
      <div class="container-fluid">
        <Link class="navbar-brand" href="javascript:void(0)">
          <Image src={logo} alt="logo" width={200} />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="mynavbar">
          <ul className="navbar-nav   mx-auto">
            <li class="nav-item">
              <Link class="nav-link  text-dark" href="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link  text-dark" href="/about">
                About-Us
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link  text-dark" href="/our_projects">
                Projects
              </Link>
            </li>
          </ul>
          <button class="btn btn-outline-dark btn-sm ">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
