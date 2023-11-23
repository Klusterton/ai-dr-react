import React from 'react';
import {ReactComponent as Logo} from '../../assets/landing-assets/navbar-logo.svg';
import {ReactComponent as EmailSVG} from '../../assets/landing-assets/email-icon.svg';
import {ReactComponent as LocationSVG} from '../../assets/landing-assets/location-icon.svg';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <section className='bg-[#01160F]'>
        <div className='mx-[7%] py-10'>
            <div className='flex'>
                <div className='flex flex-col pt-4 gap-y-3 basis-[40%]'>
                    <div className='flex flex-col w-[85%] gap-y-5'>
                        <div>
                            <Logo />
                        </div>
                        <p className='text-white text-sm font-normal'>It was founded in 2023. The mission of the Organization is to equip individuals with adequate information with regards to their health for better living.</p>
                    </div>
                    <div className='flex flex-col gap-y-5'>
                        <div className='text-white'><span className='h-full bg-white rounded-full mr-4 overflow-clip'><EmailSVG className='inline-block' /></span>info@medix.com</div>
                        <div className='text-white'><span className='h-full bg-white rounded-full mr-4 overflow-clip'><LocationSVG className='inline-block'/></span>info@medix.com</div>
                    </div>
                </div>
                <div className='grid grid-cols-3 basis-[60%]'>
                    <div className='flex flex-col'>
                        <p className='footer-underline text-white mb-2'>Quick Links</p>
                        <ul className='flex flex-col gap-y-3'>
                            <li className='text-white font-normal text-sm'>Our Services</li>
                            <li className='text-white font-normal text-sm'>Our Blog</li>
                            <li className='text-white font-normal text-sm'>Testimonials</li>
                            <li className='text-white font-normal text-sm'>About Us</li>
                            <li className='text-white font-normal text-sm'>Contact Us</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='footer-underline text-white mb-2'>Policy</p>
                        <ul className='flex flex-col gap-y-3'>
                            <li className='text-white font-normal text-sm'>Terms of Use</li>
                            <li className='text-white font-normal text-sm'>Privacy policy</li>
                            <li className='text-white font-normal text-sm'>Contract Support</li>
                            <li className='text-white font-normal text-sm'>Faqs</li>
                            <li className='text-white font-normal text-sm'>Careers</li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='footer-underline text-white mb-2'>Speak to Us</p>
                        <div className='text-white'>
                            <p>For more enquiries. Reach out to us.</p>
                            <p>Call : +234 123 567 7890</p>
                            <Link className='rounded-full inline-block text-[#F4F9F6] bg-[#FBC507] px-6 py-2'>Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FooterComponent;