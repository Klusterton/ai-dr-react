import React from 'react'
import Aside from '../Components/Aside'

export default function DashboardLayout({ children }) {
    return (
        <div className='flex h-screen relative'>
            <aside className='flex-[2] h-screen bg-white border-r-[0.5px] border-[#D9D9D9]'>
                <Aside />
            </aside>
            <div className="flex-[10] overflow-y-scroll pt-[18px] flex flex-col rounded relative bg-[#FBFBFB]">
                {children}
            </div>
        </div>
    )
}
