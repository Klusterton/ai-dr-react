import React from 'react';
import {ReactComponent as CheckMarkSVG} from '../../assets/landing-assets/who-we-are-checkmark.svg';
import {ReactComponent as HeroImgSVG} from '../../assets/landing-assets/who-we-are-img.svg';

const WhoWeAreComponent = () => {
  return (
    <section className='mx-[7%] mb-40 mt-[17%] flex gap-x-5'>
        <div className='flex-1 '>
            <h6 className='font-bold text-sm text-[#FBC507]'>WHO WE ARE</h6>
            <h2 className='text-[#090701] font-bold text-4xl'>Welcome to Medix</h2>
            <p className='text-sm font-normal'>Medix is an AI Powered System developed to help you meet your health inquiries and recommendations in little to no time without visiting the hospital.</p>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-y-2'>
                    <div className='font-normal text-sm'><span className='mr-2'><CheckMarkSVG className='inline' /></span>24/7 Rapid Response</div>
                    <div className='font-normal text-sm'><span className='mr-2'><CheckMarkSVG className='inline' /></span>24/7 Rapid Response</div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='font-normal text-sm'><span className='mr-2'><CheckMarkSVG className='inline' /></span>24/7 Rapid Response</div>
                    <div className='font-normal text-sm'><span className='mr-2'><CheckMarkSVG className='inline' /></span>24/7 Rapid Response</div>
                </div>
            </div>
        </div>
        <div className='flex-1 flex justify-end'>
            <HeroImgSVG className='w-full'/>
        </div>
    </section>
  )
}

export default WhoWeAreComponent;