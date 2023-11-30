import React from 'react';
import { ReactComponent as Logo } from '../../Assets/landing-assets/navbar-logo.svg';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className='mx-[7%] flex justify-between py-4'>
      <div id='logo' className='mx-auto phones:mx-0'>
        <Logo />
      </div>

      <ul className='hidden gap-x-16 items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div className='hidden justify-center phones:flex'>
        <Link to="/auth" className='rounded-full text-white bg-[#067A50] px-6 py-2'>Get Started</Link>
      </div>
    </nav>
  );
};

export default NavbarComponent;
