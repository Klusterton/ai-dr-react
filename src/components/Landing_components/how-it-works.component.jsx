import React from 'react';
import {ReactComponent as ClickOnGetStartedSVG} from '../../assets/landing-assets/click-on-get-started.svg';
import {ReactComponent as LogInSVG} from '../../assets/landing-assets/log-in-how-it-works-icon.svg';
import {ReactComponent as ExploreSVG} from '../../assets/landing-assets/explore-how-it-works-icon.svg';
import {ReactComponent as BgYellowSquareSVG} from '../../assets/landing-assets/bg-yellow-square.svg';
import {ReactComponent as BgWhiteSquareSVG} from '../../assets/landing-assets/bg-white-square.svg';
import {ReactComponent as BgWavyWhiteLineSVG} from '../../assets/landing-assets/bg-wavy-white-line.svg';
import {ReactComponent as BgWavyYellowLineSVG} from '../../assets/landing-assets/bg-wavy-yellow-line.svg';

const HowItWorksComponent = () => {
  return (
    <section className='how-it-works relative'>
      <div className='flex flex-col mx-[7%] px-16 pt-5 pb-16 gap-y-10'>
        <div className='gap-y-4'>
          <h3 className='text-[#067A50] text-xl text-center font-bold'>HOW IT WORKS</h3>
          <p className='text-[#090701] text-4xl font-bold text-center'>3 Simple and Easy Steps</p>
        </div>
        <div className='flex justify-between'>
          <BgYellowSquareSVG className='absolute top-8 left-56'/>
          <BgWhiteSquareSVG className='absolute top-1 right-96'/>
          <div className='flex flex-col gap-y-4 flex-1 text-center items-center'>
            <div><ClickOnGetStartedSVG /></div>
            <p className='text-[#090701] font-bold text-lg'>Click on Get Started</p>
          </div>
          <BgWhiteSquareSVG className='absolute bottom-1 left-56'/>
          <BgWavyYellowLineSVG className='absolute left-[33%] top-[45%]'/>
          <div className='flex flex-col gap-y-4 flex-1 text-center items-center'>
            <div><LogInSVG /></div>
            <p className='text-[#090701] font-bold text-lg'>Create an account/ Login</p>
          </div>
          <BgWavyWhiteLineSVG className='absolute right-[33%] top-[30%]'/>
          <div className='flex flex-col gap-y-4 flex-1 text-center items-center'>
            <div><ExploreSVG /></div>
            <p className='text-[#090701] font-bold text-lg px-12'>Explore dashboard to make Inquiry or consult a Doctor</p>
          </div>
          <BgYellowSquareSVG className='absolute bottom-16 right-24'/>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksComponent;