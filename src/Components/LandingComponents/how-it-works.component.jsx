import React from 'react';
import { ReactComponent as ClickOnGetStartedSVG } from '../../Assets/LandingAssets/click-on-get-started.svg';
import { ReactComponent as LogInSVG } from '../../Assets/LandingAssets/log-in-how-it-works-icon.svg';
import { ReactComponent as ExploreSVG } from '../../Assets/LandingAssets/explore-how-it-works-icon.svg';
import { ReactComponent as BgYellowSquareSVG } from '../../Assets/LandingAssets/bg-yellow-square.svg';
import { ReactComponent as BgWhiteSquareSVG } from '../../Assets/LandingAssets/bg-white-square.svg';
import { ReactComponent as BgWavyWhiteLineSVG } from '../../Assets/LandingAssets/bg-wavy-white-line.svg';
import { ReactComponent as BgWavyYellowLineSVG } from '../../Assets/LandingAssets/bg-wavy-yellow-line.svg';

const HowItWorksComponent = () => {
  return (
    <section className='how-it-works relative'>
      <div className='flex flex-col mx-[7%] px-16 pt-5 pb-16 gap-y-10'>
        <div className='gap-y-4'>
          <h3 className='text-[#067A50] text-xl text-center font-bold'>HOW IT WORKS</h3>
          <p className='text-[#090701] text-4xl font-bold text-center'>3 Simple and Easy Steps</p>
        </div>
        <div className='flex flex-row justify-between flex-wrap'>
          <BgYellowSquareSVG className='absolute top-8 left-[2%] mids:left-56' />
          <BgWhiteSquareSVG className='absolute top-1 right-[3%] mids:right-96' />
          <div className='flex flex-col gap-y-4 flex-1 text-center items-center basis-44'>
            <div><ClickOnGetStartedSVG /></div>
            <p className='text-[#090701] font-bold text-base mids:text-lg'>Click on Get Started</p>
          </div>
          <BgWhiteSquareSVG className='absolute bottom-1 left-[2%] mids:left-56' />
          <BgWavyYellowLineSVG className='absolute hidden top-[45%] desktop:inline-block mids:left-[33%]' />
          <div className='flex flex-col gap-y-4 flex-1 text-center items-center basis-44'>
            <div><LogInSVG /></div>
            <p className='text-[#090701] font-bold text-base mids:text-lg'>Create an account/ Login</p>
          </div>
          <BgWavyWhiteLineSVG className='absolute right-[33%] top-[30%]' />
          <div className='flex flex-col gap-y-4 flex-1 text-center items-center basis-44'>
            <div><ExploreSVG /></div>
            <p className='text-[#090701] font-bold text-base mids:text-lg px-4'>Explore dashboard to make Inquiry or consult a Doctor</p>
          </div>
          <BgYellowSquareSVG className='absolute bottom-16 right-24' />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksComponent;
