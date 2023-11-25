import React, { useState } from 'react'
import Logo from '../Assets/img/logo.png'
import User from '../Assets/img/user.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Chat, ChatActive, Intro, IntroActive, Logout } from '../Assets/svg'
import { CgMenuLeft } from 'react-icons/cg'

export default function Aside({ setHamburger }) {
    
    const navigate = useNavigate()
    const location = useLocation()
    const active = location.pathname

    return (
        <div className='flex mid:flex-col justify-between h-full w-full'>
            <section className='mid:flex hidden flex-col gap-[34px]'>
                <div className='py-[17px] cursor-pointer flex justify-center' onClick={() => navigate('/')}>
                    <img src={Logo} alt='logo' className='object-contain w-[60%] h-full' />
                </div>
                <ul className="flex flex-col gap-5 font-medium text-base w-full">
                    <Link to={'/chat-bot'}>
                        <li className={`${active === '/chat-bot' ? 'text-green-600' : 'text-[#A7A7A7]'} pl-[29px] pr-[10px] py-[10px] flex gap-[14px] items-center`}>
                            {active === '/chat-bot' ? (
                                <IntroActive />
                            ): (
                                <Intro />
                            )}
                            How it works
                        </li>
                    </Link>
                    <Link to={'/chat-bot/chat'}>
                        <li className={`${active === '/chat-bot/chat' ? 'text-green-600' : 'text-[#A7A7A7]'} pl-[29px] pr-[10px] py-[10px] flex gap-[14px] items-center`}>
                            {active === '/chat-bot/chat' ? (
                                <ChatActive />
                            ): (
                                <Chat />
                            )}
                            Chat
                        </li>
                    </Link>
                </ul>
            </section>
            <section className="flex-1 mid:flex hidden flex-col text-base justify-end gap-2 w-full">
                <div className="w-full py-[10px] pr-5 pl-[39px] flex gap-2 border-t border-[#E6E7EC] items-center cursor-pointer text-Dark_Grey text-[16px] font-normal" >
                    <img src={User} alt='user' />
                    <p>Test User</p>
                </div>
                <div className="w-full py-[10px] pr-5 pl-[39px] flex gap-[14px] border-t border-[#E6E7EC] items-center cursor-pointer text-Dark_Grey text-[16px] font-normal" >
                    <Logout />
                    <p>Log Out</p>
                </div>
            </section>
            <section className='mid:hidden flex w-full justify-between px-5 py-5 items-center'>
                <div className='w-[50px] h-[30px] flex items-center' onClick={() => setHamburger(true)}>
                    <CgMenuLeft />
                </div>
                <div className='cursor-pointer flex justify-center' onClick={() => navigate('/')}>
                    <img src={Logo} alt='logo' className='object-contain w-[30%] h-full' />
                </div>
                <div>
                    <Logout />
                </div>
            </section>
        </div>
    )
}
