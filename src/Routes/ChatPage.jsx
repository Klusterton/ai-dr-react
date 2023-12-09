import React, { useEffect, useState, useContext } from 'react';
import DashboardLayout from '../Layout/DashboardLayout';
import Suggestions from '../Components/Suggestions';
import Send from '../Assets/img/send.png';
import Ai from '../Assets/img/ai.png';
import ChatBox from '../Components/ChatBox';
import Hamburger from '../Components/Hamburger';
import { ChatContext } from '../Context/ChatContext';
import { CgSpinner } from 'react-icons/cg';
import MakeChoice from '../Components/MakeChoice';


export default function ChatPage({ hamburger, setHamburger }) {
    const {
        loading,
        typing,
        getMedixChat,
        updateUserInput,
        userInput,
        messages,
        manageChatInteraction,
        isConversationStarted
    } = useContext(ChatContext);
    const id = localStorage.getItem('Medix_AI');
    const [MedixData, SetMedixData] = useState(messages);
    const [hasChatHistory, setHasChatHistory] = useState(true);

    const sendMessage = () => {
        if (userInput.trim() !== '') {
            manageChatInteraction({ prompt: userInput });
            updateUserInput('');
        }
    };

    const promptMessage = () => {
        const threadId = localStorage.getItem('thread_id');
        if (userInput.trim() !== '') {
            manageChatInteraction({ id: threadId, prompt: userInput });
            updateUserInput('');
        }
    };

    const toggleChatHistory = (val) => val ? setHasChatHistory(val) : setHasChatHistory(false);

    useEffect(() => {
        isConversationStarted() ? toggleChatHistory(true) : toggleChatHistory(false);
    }, []);

    useEffect(() => {
        SetMedixData(messages);
    }, [messages]);

    return (
        <DashboardLayout setHamburger={setHamburger}>
            {hamburger && <Hamburger setHamburger={setHamburger} />}
            <div className='flex-1 flex flex-col h-full justify-center w-full gap-[1rem]'>
                <div className='mids:overflow-hidden w-full mid:h-[80vh] h-[75vh]'>
                    {
                        hasChatHistory
                            ? <MakeChoice toggleChatHistory={toggleChatHistory} />
                            : (
                                <>
                                    {(!MedixData || MedixData?.length <= 0) && (
                                        <div className='h-full w-full flex flex-col mids:gap-[91px] phone:gap-[50px] gap-[25px] justify-center items-center'>
                                            <div className='flex'>
                                                <div className='phone:w-[171px] w-[140px] h-[58px] absolute'>
                                                    <img src={Ai} alt='medix' className='object-contain -ml-5 phone:ml-0 -mt-[57px] phone:mt-0 animate__animated animate__pulse animate__infinite animate__slow' />
                                                </div>
                                                <h1 className='phone:text-[30px] text-[25px] font-medium text-center phone:w-[399px]'>I am Medix! <br className='phone:hidden' />How can I help you today?</h1>
                                            </div>
                                            <div onClick={() => { getMedixChat(id); console.log('update'); }} className='py-1 px-2 rounded-lg bg-green-200'>
                                                <p className='text-green-600 text-sm font-normal text-center'>Got some common fever? Click to see the right medication</p>
                                            </div>
                                        </div>
                                    )}
                                    {(MedixData && MedixData?.length > 0) && <ChatBox typing={typing} data={MedixData} />}
                                </>
                            )
                    }
                </div>
                <div className='flex-1 flex items-end pl-2 w-[calc(100%-.5rem)]'>
                    <div className='flex mx-auto w-full phone:max-w-[53rem]'>
                        <div className='relative flex gap-6 h-full flex-1 items-stretch flex-col'>
                            {(!MedixData || MedixData?.length <= 0) && <Suggestions setChat={updateUserInput} />}
                            <div className='flex w-full items-center py-3 px-4 border-[0.5px] border-Dark_Grey rounded-[20px]'>
                                <textarea
                                    rows={1}
                                    value={userInput}
                                    onChange={(e =>
                                        updateUserInput(e?.target?.value)
                                    )}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            isConversationStarted() ? promptMessage() : sendMessage();
                                        }
                                    }}
                                    className='flex-1 focus:outline-none border-0 bg-transparent'
                                    placeholder='What’s your complain today'
                                />
                                <div className='w-8 h-8 cursor-pointer' onClick={() => isConversationStarted() ? promptMessage() : sendMessage()}>
                                    {loading ? (<CgSpinner className='animate-spin text-[32px]' />) : (
                                        <img src={Send} alt='send' />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DashboardLayout>
    );
}
