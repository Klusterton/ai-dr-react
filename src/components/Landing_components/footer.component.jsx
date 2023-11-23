import React from 'react';
import {ReactComponent as Logo} from '../../assets/landing-assets/navbar-logo.svg';
import {ReactComponent as EmailSVG} from '../../assets/landing-assets/email-icon.svg';
import {ReactComponent as LocationSVG} from '../../assets/landing-assets/location-icon.svg';
import {ReactComponent as FacebookSVG} from '../../assets/landing-assets/facebook-icon-footer.svg';
import {ReactComponent as InstagramSVG} from '../../assets/landing-assets/instagram-icon-footer.svg';
import {ReactComponent as TwitterSVG} from '../../assets/landing-assets/x-icon-footer.svg';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <section className='bg-[#01160F]'>
        <div className='mx-[7%] py-16 flex flex-col gap-y-28'>
            <div className='flex'>
                <div className='flex flex-col pt-4 gap-y-3 basis-[40%]'>
                    <div className='flex flex-col w-[85%] gap-y-5'>
                        <div>
                            <Logo />
                        </div>
                        <p className='text-white text-sm font-normal'>It was founded in 2023. The mission of the Organization is to equip individuals with adequate information with regards to their health for better living.</p>
                    </div>
                    <div className='flex flex-col gap-y-1'>
                        <div className='text-white'><span className='h-full bg-white rounded-full mr-4 overflow-clip'><EmailSVG className='inline-block' /></span>info@medix.com</div>
                        <div className='text-white'><span className='h-full bg-white rounded-full mr-4 overflow-clip'><LocationSVG className='inline-block'/></span>Lagos, Nigeria.</div>
                    </div>
                </div>
                <div className='grid grid-cols-3 basis-[60%]'>
                    <div className='flex flex-col'>
                        <p className='relative footer-underline text-white mb-2'>Quick Links</p>
                        <ul className='flex flex-col gap-y-3'>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Our Services </Link></li>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Our Blog </Link></li>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Testimonials </Link></li>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>About Us </Link></li>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Contact Us </Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='relative footer-underline text-white mb-2'>Policy</p>
                        <ul className='flex flex-col gap-y-3'>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Terms of Use </Link></li>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Privacy policy </Link></li>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Contract Support </Link></li>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Faqs </Link></li>
                            <li className='text-white font-normal text-sm cursor-pointer'><Link>Careers</Link></li>
                        </ul>
                    </div>
                    <div className='flex flex-col'>
                        <p className='relative footer-underline text-white mb-2'>Speak to Us</p>
                        <div className='text-white flex flex-col gap-y-3'>
                            <p>For more enquiries. Reach out to us.</p>
                            <p>Call : +234 123 567 7890</p>
                            <div><Link className='rounded-full inline-block text-[#F4F9F6] bg-[#FBC507] px-6 py-2'>Get Started</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-y-3'>
                <div className='border border-t-2 border-[#F4F9F6] w-full'>
                    {/* <FooterDivideLineSVG className=''/> */}
                </div>
                <div className='flex flex-row'>
                    <div className='flex gap-x-5 text-white'>
                        <p>All rights reserved. Company 2023.</p>
                        <div className='mt-1'><svg width="2" height="18" viewBox="0 0 2 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.5V18" stroke="#F4F9F6" stroke-width="2"/></svg></div>
                        <p>Terms and conditions</p>
                        <div className='mt-1'><svg width="2" height="18" viewBox="0 0 2 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0.5V18" stroke="#F4F9F6" stroke-width="2"/></svg></div>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='ml-auto flex gap-x-4'>
                        <div className='cursor-pointer'><FacebookSVG className=''/></div>
                        <div className='cursor-pointer'><InstagramSVG className=''/></div>
                        <div className='cursor-pointer'><TwitterSVG className=''/></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}



export default FooterComponent;