import React from 'react';
import {ReactComponent as CheckMarkSVG} from '../../assets/landing-assets/who-we-are-checkmark.svg';
import {ReactComponent as HeroImgSVG} from '../../assets/landing-assets/who-we-are-img.svg';

const WhoWeAreComponent = () => {
  return (
    <section className='mx-[7%] mt-[17%] pb-16 flex'>
        <div className='flex flex-col flex-1 gap-y-7'>
            <div className='flex flex-col gap-y-4 w-[68%]'>
                <h6 className='font-bold text-xl text-[#FBC507]'>WHO WE ARE</h6>
                <h2 className='text-[#090701] font-bold text-5xl'>Welcome to Medix</h2>
                <p className='text-sm font-normal'>Medix is an AI Powered System developed to help you meet your health inquiries and recommendations in little to no time without visiting the hospital.</p>
            </div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col gap-y-2'>
                    <div className='font-normal text-sm'><span className='mr-2'><CheckMarkSVG className='inline' /></span>24/7 Rapid Response</div>
                    <div className='font-normal text-sm'><span className='mr-2'><CheckMarkSVG className='inline' /></span>A team of professionals</div>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <div className='font-normal text-sm'><span className='mr-2'><CheckMarkSVG className='inline' /></span>One month free consultation</div>
                    <div className='font-normal text-sm'><span className='mr-2'><CheckMarkSVG className='inline' /></span>Correct information powered by AI</div>
                </div>
            </div>
            <div>
                <button className='bg-[#067A50] rounded-full px-10 py-3 text-[#F4F9F6] text-base font-normal'>Get Started</button>
            </div>
        </div>
        <div className='flex-1 flex justify-end'>
            <HeroImgSVG className='w-full'/>
        </div>
    </section>
  )
}

export default WhoWeAreComponent;