import React, { useState, useEffect } from 'react'
import DashboardLayout from '../Layout/DashboardLayout'
import Suggestions from '../Components/Suggestions'
import Send from '../Assets/img/send.png'
import Ai from '../Assets/img/ai.png'
import ChatBox from '../Components/ChatBox'

export default function ChatPage() {
    const [chat, setChat] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSendMessage = () => {
        setChat(message); 
    };
    
    return (
        <DashboardLayout>
            <div className='flex flex-col h-full justify-center w-full'>
                <div className='flex-1 overflow-hidden w-full'>
                    {chat?.length <= 0 && (
                        <div className='h-full w-full flex flex-col gap-[91px] justify-center items-center'>
                            <div className='flex'>
                                <div className='w-[171px] h-[58px] absolute'>
                                    <img src={Ai} alt='medix' className='object-contain' />
                                </div>
                                <h1 className='text-[30px] font-medium text-center w-[399px]'>I am Medix! How can I help you today?</h1>
                            </div>
                            <div className='py-1 px-2 rounded-lg bg-green-200'>
                                <p className='text-green-600 text-sm font-normal'>Got some common fever? Click to see the right medication</p>
                            </div>
                        </div>
                    )}
                    {(chat?.length > 0) && <ChatBox chat={chat}/>}
                </div>
                <div className='pl-2 w-[calc(100%-.5rem)]'>
                    <div className='flex last:mb-6 mx-auto max-w-[53rem]'>
                        <div className='relative flex gap-6 h-full flex-1 items-stretch flex-col'>
                            {(chat?.length <= 0) && <Suggestions setChat={setChat} />}
                            <div className='flex w-full items-center py-3 px-4 border-[0.5px] border-Dark_Grey rounded-[20px]'>
                                {(chat?.length <= 0) ? (
                                    <input
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value); 
                                            console.log(e.target.value)
                                        }}
                                        className='flex-1 focus:outline-none border-0 bg-transparent' 
                                        placeholder='What’s your complain today'
                                    />
                                ): (
                                    <input
                                        value={''}
                                        // onChange={(e) => setChat(e.target.value)}
                                        className='flex-1 focus:outline-none border-0 bg-transparent' 
                                        placeholder='What’s your complain today?'
                                    />
                                )}
                                <div className='w-8 h-8 cursor-pointer' onClick={handleSendMessage}>
                                    <img src={Send} alt='send' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    )
}
