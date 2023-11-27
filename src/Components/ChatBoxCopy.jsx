import React from 'react';
import User from '../Assets/img/avatar.png';
import AI from '../Assets/img/ai.png';
import TypewriterComponent from 'typewriter-effect';

export default function ChatBox({ Ai, typing }) {
    const medix = Ai?.slice().reverse();
    // console.log({medix})
    return (
        <div className='phone:h-full h-[500px] overflow-y-scroll flex flex-col gap-8 w-full mx-auto max-w-[53rem] pt-7 mb-7 phone:mb-0 phone:pt-10'>
            <div className='flex flex-col gap-8 w-full h-full'>

            </div>
        </div>
    );
}
