import React, { useState, useEffect } from 'react'
import User from '../Assets/img/user.png'
import Ai from '../Assets/img/ai.png'
import TypewriterComponent from 'typewriter-effect';

export default function ChatBox({ chat }) {
    const [loading, setLoading] = useState(false);
    const response = `
        A viral infection that affects the upper respiratory tract. Symptoms often include a runny or stuffy nose, sneezing, coughing, and sometimes a sore throat.
        Here are some common strategies to manage and alleviate symptoms of the common cold:
        Rest: Allow your body to rest to help it recover more quickly.
        Stay Hydrated: Drink plenty of fluids, such as water, herbal tea, and clear broths, to stay hydrated.
        Humidify the Air: Using a humidifier can add moisture to the air, which may help relieve nasal congestion and cough.
        Over-the-Counter Medications: Non-prescription cold medications may help alleviate symptoms. These may include decongestants, pain relievers, and cough suppressants. However, it's essential to use these medications as directed and consult with a healthcare professional if you have any concerns or if you are taking other medications.
        Saltwater Gargle: Gargling with warm saltwater may help soothe a sore throat.
        It's important to note that antibiotics are not effective against viral infections like the common cold. If symptoms persist or worsen, or if you experience severe symptoms, it's advisable to consult with a healthcare professional for guidance.
    `;

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
        setLoading(true)
    }, [])

    return (
        <div className='h-full w-full mx-auto max-w-[53rem] pt-10'>
            <div className='flex flex-col gap-8 w-full h-full'>
                {/* MY CHAT */}
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-2'>
                        <img src={User} alt='user' />
                        <p className='text-[16px] font-medium'>You</p>
                    </div>
                    <div className='bg-Primary rounded-[12px] px-4 py-[14px] w-fit'>
                        <p className='text-[16px] font-normal text-white'>{chat}</p>
                    </div>
                </div>
                
                {/* AI CHAT */}
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-2'>
                        <img src={Ai} alt='user' className='w-10 h-10 object-cover' />
                        <p className='text-[16px] font-medium'>Medix AI</p>
                    </div>
                    {loading ? (
                        <div className='flex gap-[9px] items-center'>
                            <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                            <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                            <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                        </div>
                    ) : (
                        <div className='bg-green-600 rounded-[12px] px-4 py-[14px] w-fit text-white font-normal text-[16px]'>
                            <TypewriterComponent
                                onInit={(typewriter) => {
                                    typewriter.typeString(response)
                                    .start();
                                }}
                                options={{
                                    loop: false, 
                                    delay: 20, 
                                }}
                            />
                        </div>
                    )}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}
