import React, { useContext, useState } from 'react';
import {ReactComponent as SignUpLogo} from '../Assets/SignUp-LogIn_assets/sign-up-logo.svg';
import {ReactComponent as GoogleBtn} from '../Assets/SignUp-LogIn_assets/google-button.svg';
import {ReactComponent as FacebookBtn} from '../Assets/SignUp-LogIn_assets/facebook-button.svg';
import {ReactComponent as AppleBtn} from '../Assets/SignUp-LogIn_assets/apple-button.svg';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
import { CgSpinner } from 'react-icons/cg';

export default function SignUp() {
    const { 
        signupValue, 
        setSignupValue,
        signup,
        loading
    } = useContext(UserContext)

    const handleSubmit = (value) => {
        signup(value)
        setSignupValue({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <>
            <div className='flex'>
                <div className='flex-1 min-h-screen bg-[#067A50] bg-[url("../src/Assets/SignUp-LogIn_assets/login-img.png")] bg-cover hidden justify-center items-center phone:flex'>
                    <div className='h-[70%] flex flex-col justify-between'>
                        {/* Welcome message */}
                        <div className='flex flex-col items-center justify-center w-[50%] mx-auto gap-y-8'>
                            <div className='h-36 w-36 bg-white rounded-full flex justify-center items-center'>
                                <SignUpLogo className='' />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <h2 className='text-white font-bold text-4xl text-center'>Welcome</h2>
                                <p className='font-normal text-sm text-[#F4F9F6] text-center'>Medix is an AI Powered System developed to help you meet your health inquiries and recommendations in little to no time without visiting the hospital.</p>
                            </div>
                        </div>
                        {/* Let’s get you in quickly. */}
                        <div>
                            <p className='text-xl font-bold text-[#f4f9f6] text-center'>Let's get you in quickly.</p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 min-h-screen flex justify-center items-center'>
                    <div className='h-[65%] w-[70%] mx-auto'>
                        <div className='flex flex-row justify-between mb-3 mids:w-[50%]'>
                            <h5 className='relative sign-up-page-underline text-2xl font-bold text-[#067A50]'>Register</h5>
                            <Link to="login" className='relative sign-up-page-underline flex justify-center items-center text-[#067A50]'>Log In</Link>
                        </div>
                        <div className='flex flex-col gap-y-2'>
                            <div className='flex flex-col gap-y-3'>
                                <label htmlFor='name' className='text-[#067A50] font-normal text-base'>Name</label>
                                <input
                                    value={signupValue.name}
                                    onChange={(e) => setSignupValue({ ...signupValue, name: e.target.value })}
                                    type='text'
                                    name='name'
                                    id='name'
                                    className='w-full border border-[#C9E1D8] rounded-full px-4 py-2 shadow-[#BAB8B8_0.5px_0.5px_6px_0px] focus:bg-none focus:outline-none'
                                />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label htmlFor='email' className='text-[#067A50] font-normal text-base'>Email</label>
                                <input 
                                    value={signupValue.email}
                                    onChange={(e) => setSignupValue({...signupValue, email: e.target.value})}
                                    type='email' 
                                    name='email' 
                                    id='email' 
                                    className='w-full border border-[#C9E1D8] rounded-full px-4 py-2 shadow-[#BAB8B8_0.5px_0.5px_6px_0px] focus:bg-none focus:outline-none' 
                                />
                            </div>
                            <div className='flex flex-col gap-y-3'>
                                <label htmlFor='password' className='text-[#067A50] font-normal text-base'>Password</label>
                                <input 
                                    value={signupValue.password}
                                    onChange={(e) => setSignupValue({...signupValue, password: e.target.value})}
                                    type='password' 
                                    name='password' 
                                    id='password' 
                                    className='w-full border border-[#C9E1D8] rounded-full px-4 py-2 shadow-[#BAB8B8_0.5px_0.5px_6px_0px] focus:bg-none focus:outline-none'
                                />
                            </div>
                            <div className='flex gap-x-1'>
                                <input type='radio' name='terms_of_service' id='terms_of_service' className='cursor-pointer' />
                                <label htmlFor='terms_of_service' className='text-[#067A50] font-normal text-xs'>I have read and agreed with the <Link className='text-[#FBC507]'>Terms of Service</Link> and <Link className='text-[#FBC507]'>Privacy Policy</Link></label>
                            </div>
                        </div>
                        <div className='mt-10 flex flex-col gap-y-4'>
                            <div className='flex justify-center' onClick={() => handleSubmit(signupValue)}>
                                <button className='bg-[#067A50] rounded-full px-16 py-2 text-[#F4F9F6] flex'>
                                    {loading ? <CgSpinner className='animate-spin text-[24px]' /> : 'Register'}
                                </button>
                            </div>
                            <div className='flex items-start'>
                                <div className='basis-2/3 border-[1px] border-[#C9E1D8] flex self-center'></div>
                                <div className='basis-1/3 text-[#067A50] text-xs font-normal flex justify-center'>Or with</div>
                                <div className='basis-2/3 border-[1px] border-[#C9E1D8] flex self-center'></div>
                            </div>
                            <div className='flex gap-x-4 justify-center items-start'>
                                <div className='cursor-pointer'><GoogleBtn className=''/></div>
                                <div className='cursor-pointer'><FacebookBtn /></div>
                                <div className='cursor-pointer'><AppleBtn className=''/></div>
                            </div>
                            <div className='text-center text-xs font-normal text-[#067A50]'>Already have an account? <Link to="login" className='text-[#FBC507]'>Log In.</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
