import React from 'react'
import Logo from '../Assets/img/logo.png'
import User from '../Assets/img/user.png'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Chat, Intro, Logout } from '../Assets/svg'

export default function Aside() {
    const navigate = useNavigate()
    const location = useLocation()
    const active = location.pathname
    console.log(active)
    return (
        <div className='flex flex-col justify-between h-full w-full'>
            <section className='flex flex-col gap-[34px]'>
                <div className='px-10 py-[17px] cursor-pointer' onClick={() => navigate('/')}>
                    <img src={Logo} alt='logo' className='object-contain w-full h-full' />
                </div>
                <ul className="flex flex-col gap-5 font-medium text-base text-[#A7A7A7] w-full">
                    <Link to={'/chat-bot'}>
                        <li className={`pl-[29px] pr-[10px] py-[10px] flex gap-[14px] items-center`}>
                            <Intro />
                            How it works
                        </li>
                    </Link>
                    <Link to={'/chat-bot/chat'}>
                        <li className={`pl-[29px] pr-[10px] py-[10px] flex gap-[14px] items-center`}>
                            <Chat />
                            Chat
                        </li>
                    </Link>
                </ul>
            </section>
            <section className="flex-1 flex flex-col text-base justify-end gap-2 w-full">
                <div className="w-full py-[10px] pr-5 pl-[39px] flex gap-[14px] border-t border-[#E6E7EC] items-center cursor-pointer text-Dark_Grey text-[16px] font-normal" >
                    <img src={User} alt='user' />
                    <p>Test User</p>
                </div>
                <div className="w-full py-[10px] pr-5 pl-[39px] flex gap-[14px] border-t border-[#E6E7EC] items-center cursor-pointer text-Dark_Grey text-[16px] font-normal" >
                    <Logout />
                    <p>Log Out</p>
                </div>
            </section>
        </div>
    )
}
