import React from 'react'
import Gastro from '../Assets/img/gastro.png'
import Cold from '../Assets/img/cold.png'
import Flu from '../Assets/img/flu.png'
import Headache from '../Assets/img/headache.png'

export default function Suggestions({ setChat }) {
    return (
        <div className='flex flex-col phone:flex-row mids:grid mids:grid-cols-2 mids:grid-rows-2 gap-[14px] w-full'>
            <div onClick={() => setChat('Get me the appropriate cure for common cold')} className="w-full animate__animated animate__fadeInUp animate__delay-1s hover:bg-green-600 group hover:text-white hover:ease-in-out duration-300 cursor-pointer py-4 px-[10px] rounded-lg border-[0.5px] border-[#909090] flex gap-2 items-center">
                <div className='w-[50px] h-[50px]'>
                    <img src={Cold} alt='cold' className='object-cover' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[16px] font-medium'>Have Common Cold?</p>
                    <p className='group-hover:text-[#D9D9D9] font-normal text-sm text-Dark_Grey'>Get the appropriate cure for common cold</p>
                </div>
            </div>
            <div onClick={() => setChat('Get me the appropriate cure for Influenza (Flu)')} className="w-full animate__animated animate__fadeInUp animate__delay-1s hover:bg-green-600 group hover:text-white hover:ease-in-out duration-300 cursor-pointer py-4 px-[10px] rounded-lg border-[0.5px] border-[#909090] mids:flex hidden gap-2 items-center">
                <div className='w-[50px] h-[50px]'>
                    <img src={Flu} alt='flu' className='object-cover' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[16px] font-medium'>Influenze (Flu)</p>
                    <p className='group-hover:text-[#D9D9D9] font-normal text-sm text-Dark_Grey'>Get the appropriate cure for Influenza (Flu)</p>
                </div>
            </div>
            <div onClick={() => setChat('Get me the appropriate cure for Gastroenteritis')} className="w-full animate__animated animate__fadeInUp animate__delay-2s hover:bg-green-600 group hover:text-white hover:ease-in-out duration-300 cursor-pointer py-4 px-[10px] rounded-lg border-[0.5px] border-[#909090] mids:flex hidden gap-2 items-center">
                <div className='w-[50px] h-[50px]'>
                    <img src={Gastro} alt='gastro' className='object-cover' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[16px] font-medium'>Gastroenteritis</p>
                    <p className='group-hover:text-[#D9D9D9] font-normal text-sm text-Dark_Grey'>Get the appropriate cure for Gastroenteritis</p>
                </div>
            </div>
            <div onClick={() => setChat('Get me the appropriate cure for Headaches/Migraines')} className="w-full animate__animated animate__fadeInUp animate__delay-2s hover:bg-green-600 group hover:text-white hover:ease-in-out duration-300 cursor-pointer py-4 px-[10px] rounded-lg border-[0.5px] border-[#909090] flex gap-2 items-center">
                <div className='w-[50px] h-[50px]'>
                    <img src={Headache} alt='headache' className='object-cover' />
                </div>
                <div className='flex flex-col gap-2'>
                    <p className='text-[16px] font-medium'>Headaches/Migraines:</p>
                    <p className='group-hover:text-[#D9D9D9] font-normal text-sm text-Dark_Grey'>Get the appropriate cure for Headaches/Migraines</p>
                </div>
            </div>
        </div>
    )
}
