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
                        <div style={{position: "relative", paddingBottom: "56.25%", height: 0}}>
                            <iframe src="https://www.loom.com/embed/e9458abc167447418750375595082465?sid=d35a4ad4-2775-4470-91a3-d59b2d82ab0c" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}></iframe>
                        </div>
                        {/* <img src={ManualVideo} alt='video' className='rounded-lg cursor-pointer' /> */}
                        {/* <Play /> */}
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}
