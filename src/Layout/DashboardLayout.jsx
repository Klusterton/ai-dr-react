import React from 'react'
import Aside from '../Components/Aside'

export default function DashboardLayout({ setHamburger, children }) {
    return (
        <div className='flex flex-col mid:flex-row h-screen mid:h-screen relative'>
            <aside className='mid:w-[260px] border-b-[0.5px] mid:border-b-0 mid:h-screen bg-[#FBFBFB] mid:bg-white mid:border-r-[0.5px] border-[#D9D9D9]'>
                <Aside setHamburger={setHamburger}/>
            </aside>
            <div className="mid:flex-[10] mid:flex flex-1 mid:overflow-y-scroll mid:pt-[18px] p-[18px] rounded relative bg-[#FBFBFB]">
                {children}
            </div>
        </div>
    )
}
