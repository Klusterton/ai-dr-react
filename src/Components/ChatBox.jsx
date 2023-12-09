import React, { useRef, useEffect } from 'react';
import User from '../Assets/img/avatar.png';
import AI from '../Assets/img/ai.png';

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
    const scrollRef = useRef(null);
    console.log({medix})

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [medix]);

    return (
        <div ref={scrollRef} className='h-full overflow-y-scroll flex flex-col gap-8 w-full mx-auto max-w-[53rem] pb-7 phone:pb-0 phone:pt-10'>
            <div className='flex flex-col gap-8 w-full h-full'>
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
