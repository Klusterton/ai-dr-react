import React from 'react';
import HeroImg from '../../Assets/landing-assets/doctor-smiling.png';
import { Link } from 'react-router-dom';

const HeroSectionComponent = () => {
  return (
    <section className='bg-gradient-to-br from-[#067A50] to-[#07FFA6]'>
        <div className='flex mx-[7%] pt-5'>
            <div className='flex flex-col basis-full pt-4 pb-14 gap-y-5 items-center mids:items-start mids:basis-1/2'>
                <div className='flex flex-col gap-y-6 text-center mids:text-left'>
                    <p className='text-sm font-normal text-[#F4F9F6]'>YOUR HEALTH IS TOP PRIORITY</p>
                    <h2 className='text-4xl text-[#F4F9F6] font-bold'>
                        Get <span className='relative inline-block italic text-[#FBC507] font-normal quick'>quick</span> and reliable medical recommendations in less than one minute.
                    </h2>
                    <p className='text-sm font-normal text-[#F4F9F6]'>Maintaining a good health status requires you to always be in check. There is no better way to do this than having the right information you need at the tip of your fingers.</p>
                </div>
                <div>
                    <Link to="/auth" className='bg-[#FBC507] rounded-full px-4 py-3 text-[#F4F9F6] text-l font-bold'>Get Started for free</Link>
                </div>
            </div>
            <div id='hero-img' className='relative items-stretch basis-1/2 overflow-hidden hidden mids:block'>
                <img src={HeroImg} className='absolute right-4' alt='hero'/>
            </div>
        </div>
    </section>
  )
}

export default HeroSectionComponent