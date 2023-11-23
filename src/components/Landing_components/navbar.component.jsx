import React from 'react';
import {ReactComponent as Logo} from '../../assets/landing-assets/navbar-logo.svg';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <nav className='mx-[7%] flex justify-between py-4'>
        <div id='logo'>
            <Logo />
        </div>
        <div>
            <ul className='flex gap-x-16'>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
            <Link className='rounded-full text-white bg-[#067A50] px-6 py-2'>Get Started</Link>
        </div>
    </nav>
  )
}

export default NavbarComponent