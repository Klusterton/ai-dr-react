import React from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import Logo from '../Assets/img/logo.png'
import User from '../Assets/img/avatar.png'
import { Logout } from "../Assets/svg";

export default function Hamburger({setHamburger}){
    const navigate = useNavigate()

    return (
            <div className="fixed top-0 w-[100%] left-0 h-[100vh] animate__animated animate__fadeInLeftBig" style={{zIndex:9999}} onClick={(e) => {
                e.stopPropagation()
                setHamburger(false)
            }}>
                <div  className="bg-[#f5f5f5] w-[85%] h-full absolute px-[29px] py-[32px] left-0 top-0" onClick={(e) => {
                    e.stopPropagation()
                    setHamburger(true)
                }}>
                    <div className="flex justify-between items-center">
                        <img src={Logo} alt='logo' className='object-contain w-[40%] h-full' />
                        <IoCloseCircleOutline className="cursor-pointer text-[30px]" onClick={(e) => {
                            e.stopPropagation()
                            setHamburger(false)
                        }} />
                    </div>
                    <ul className="mt-[32px] flex flex-col gap-y-[24px] pb-[16px]" style={{borderBottom:'1px solid #024355'}}>
                        <li className="font-medium text-[16px]" onClick={(e) => {
                            e.stopPropagation()
                            setHamburger(false)
                            navigate('/chat-bot')
                        }}>How it works</li>
                        <li className="font-medium text-[16px]" onClick={(e) => {
                            e.stopPropagation()
                            setHamburger(false)
                            navigate('/chat-bot/chat')
                        }}>Chat</li>
                    </ul>
                    <div className="mt-[16px] flex flex-col gap-4">
                        <div className="w-full py-[10px] flex gap-2 items-center cursor-pointer text-[16px] font-normal" >
                            <img src={User} alt='user' className="w-[30px] h-[30px] object-contain rounded-full" />
                            <p>Test User</p>
                        </div>
                        <div onClick={() => navigate('/auth/login')} className="w-full py-[10px] flex gap-[14px] items-center cursor-pointer text-[16px] font-normal" >
                            <Logout />
                            <p>Log Out</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}