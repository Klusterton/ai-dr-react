import React from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import { Play } from '../Assets/svg'
import ManualVideo from '../Assets/img/manual.png'
import Hamburger from '../Components/Hamburger'

export default function Manual({ hamburger, setHamburger }) {
    return (
        <DashboardLayout setHamburger={setHamburger}>
            {hamburger && (<Hamburger setHamburger={setHamburger}/>)}
            <div className='flex flex-col justify-center w-full h-full items-center'>
                <div className='flex flex-col h-[40%] justify-center'>
                    <div className='w-full flex flex-col gap-7'>
                        <h1 className='text-[30px] font-medium text-center mid:w-[399px] w-full'>How it works?</h1>
                        <div className='py-1 px-2 rounded-lg bg-green-200 flex justify-center'>
                            <p className='text-green-600 text-sm font-normal'>Play the video below to see how Medix works</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 mid:mt-0 mt-20 mb-6'>
                    <div className='h-full desktop:w-[894px] mids:w-[620px] w-full'>
                        <img src={ManualVideo} alt='video' className='rounded-lg cursor-pointer' />
                        {/* <Play /> */}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
