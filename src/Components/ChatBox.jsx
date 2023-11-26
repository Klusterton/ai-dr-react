import React from 'react'
import User from '../Assets/img/avatar.png'
import AI from '../Assets/img/ai.png'
import TypewriterComponent from 'typewriter-effect';

export default function ChatBox({ Ai, typing }) {
    const medix = Ai?.slice().reverse();
    // console.log({medix})
    return (
        <div className='phone:h-full h-[500px] overflow-y-scroll flex flex-col gap-8 w-full mx-auto max-w-[53rem] pt-7 mb-7 phone:mb-0 phone:pt-10'>
            <div className='flex flex-col gap-8 w-full h-full'>
                {medix.map((m, index) => {
                    const recentResponse = index === medix.length - 1;
                    
                    return (
                        <div key={m.id}>
                            {m.assistant_id === null ? (
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='flex items-center gap-2'>
                                        <img src={User} alt='user' className='w-[30px] h-[30px] rounded-full object-contain'/>
                                        <p className='text-[16px] font-medium'>You</p>
                                    </div>
                                    <div className='bg-Primary rounded-[12px] px-4 py-[14px] w-fit'>
                                        <p className='text-[16px] font-normal text-white'>{m.content[0].text.value}</p>
                                    </div>
                                </div>
                            ): (
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='flex items-center gap-2'>
                                        <img src={AI} alt='user' className='w-10 h-10 object-cover' />
                                        <p className='text-[16px] font-medium'>Medix AI</p>
                                    </div>
                                    {recentResponse ? (
                                        <>
                                            {typing ? (
                                                <div className='flex gap-[9px] items-center'>
                                                    <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                                                    <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                                                    <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                                                </div>
                                            ) : (
                                                <div className='bg-green-600 rounded-[12px] px-4 py-[14px] w-fit text-white font-normal text-[16px]'>
                                                    <TypewriterComponent
                                                        onInit={(typewriter) => {
                                                            typewriter.typeString(m.content[0].text.value)
                                                            .start();
                                                        }}
                                                        options={{
                                                            loop: false, 
                                                            delay: 1, 
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div className='bg-green-600 rounded-[12px] px-4 py-[14px] w-fit text-white font-normal text-[16px]'>
                                            {m.content[0].text.value}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
