import React from 'react';
import HeroImg from '../../Assets/landing-assets/doctor-smiling.png';

const HeroSectionComponent = () => {
  return (
    <section className='bg-gradient-to-br from-[#067A50] to-[#07FFA6] py-3 max-h-[100%] overflow-hidden'>
        <div className='flex mx-[7%]'>
            <div className='flex flex-col basis-1/2 py-4 gap-y-5'>
                <div className='flex flex-col gap-y-6'>
                    <p className='text-sm font-normal text-[#F4F9F6]'>YOUR HEALTH IS TOP PRIORITY</p>
                    <h2 className='text-4xl text-[#F4F9F6] font-bold'>
                        Get <span className='relative inline-block italic text-[#FBC507] font-normal quick'>quick</span> and reliable medical recommendations in less than one minute.
                    </h2>
                    <p className='text-sm font-normal text-[#F4F9F6]'>Maintaining a good health status requires you to always be in check. There is no better way to do this than having the right information you need at the tip of your fingers.</p>
                </div>
                <div>
                    <button className='bg-[#FBC507] rounded-full px-4 py-2 text-[#F4F9F6] text-l font-bold'>Get Started for free</button>
                </div>
            </div>
            <div id='hero-img' className='relative h-full -z-0 basis-1/2'>
                <img src={HeroImg} className='w-full h-full' alt='hero'/>
            </div>
        </div>
    </section>
  )
}

export default HeroSectionComponent