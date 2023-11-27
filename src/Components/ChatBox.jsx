import React, { useState, useEffect, useContext } from 'react';
import User from '../Assets/img/avatar.png';
import AI from '../Assets/img/ai.png';
import TypewriterComponent from 'typewriter-effect';
import { ChatContext } from '../Context/ChatContext';

const MakeChoice = () => {
    return (
        <div>
            <h3 className='text-2xl'>Reload Chat?</h3>
            <span>Do you want to load previous chat or start a new one</span>
            <section className='flex gap-2'>
                <button>Load Previous Chat</button>
                <button className="bg-slate-700 text-white rounded-lg py-2 px-4">Start New Chat</button>
            </section>
        </div>
    );
};

const YouChatBubble = ({ content }) => {
    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='flex items-center gap-2'>
                <img src={User} alt='user' className='w-[30px] h-[30px] rounded-full object-contain' />
                <p className='text-[16px] font-medium'>You</p>
            </div>
            <div className='bg-Primary rounded-[12px] px-4 py-[14px] w-fit'>
                <p className='text-[16px] font-normal text-white'>{content.content[0].text.value}</p>
            </div>
        </div>
    );
};

const AIChatBubble = ({ content }) => {
    return (
        <div className='flex flex-col gap-[10px]'>
            <div className='flex flex-col gap-[10px]'>
                <div className='flex items-center gap-2'>
                    <img src={AI} alt='user' className='w-10 h-10 object-cover' />
                    <p className='text-[16px] font-medium'>Medix AI</p>
                </div>
                <div className='bg-green-600 rounded-[12px] px-4 py-[14px] w-fit text-white font-normal text-[16px]'>
                    {content.content[0].text.value}
                </div>
            </div>
        </div>
    );
};

export default function ChatBox({ typing, data }) {
    const medix = data?.slice().reverse();
    console.log({medix})

    const isThereAThread = () => {
        const threadId = localStorage.getItem('thread_id');

        if (threadId) return true;
        return false;
    };



    return (
        <div className='h-[80vh] overflow-y-scroll flex flex-col gap-8 w-full mx-auto max-w-[53rem] pt-7 mb-7 phone:mb-0 phone:pt-10'>
            <div className='flex flex-col gap-8 w-full h-full'>
                {/* Only show this when there are threadMessages in local storage */}
                {isThereAThread() ? <MakeChoice /> : null}
                {medix.map((message, id) => {
                    return (
                        <React.Fragment key={id}>
                            {message.assistant_id === null ? (
                                <YouChatBubble content={message} />
                            ) : (
                                <AIChatBubble content={message} />
                            )}
                        </React.Fragment>
                    )}
                )}
                {typing && (
                    <div className='pl-1 flex gap-[9px] items-center'>
                        <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                        <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                        <div className='animated-dot bg-green-600 rounded-[12px] w-[14px] h-[14px]'></div>
                    </div>
                )}
            </div>
        </div>
    );
}
