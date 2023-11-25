import React, { createContext, useState } from 'react'
import axios from 'axios';
import { MEDIX_BASE_URL } from '../Utils/BaseURL';

export const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
    const [medix, setMedix] = useState('')
    const [otherMedix, setOtherMedix] = useState('')
    const [chatId, setChatId] = useState('');
    const [loading, setLoading] = useState(false);
    const [typing, setTyping] = useState(false);
    const [conversation, setConversation] = useState(false)
    
    const initializeMedix = async (input) => {
        setLoading(true);
        
        const data = {
            prompt: input
        }
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/assistant/chat`, data);
            if (res?.data?.message === "Conversation started") {
                setLoading(false)
                setConversation(!conversation)
                setMedix(res?.data?.data?.instructions)
                const threadId = res?.data?.data?.thread_id;
                setChatId(threadId);
                localStorage.setItem('Medix_AI', JSON.stringify({
                    id: res?.data?.data?.thread_id,
                    instructions: res?.data?.data?.instructions
                }))
            }
        } catch (error) {
            setLoading(false);
            console.error('Error sending message:', error);
        }
    };
    
    const conversateWithMedix = async (input) => {
        setTyping(true);
        
        const data = {
            prompt: input,
            id: chatId
        }
        
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/assistant/prompt`, data);
            if (res?.data?.message === "Updated Thread") {
                setTyping(false)
                setOtherMedix(res?.data?.data?.instructions)
            }
        } catch (error) {
            setTyping(false);
            console.error('Error sending message:', error);
        }
    };
    
    return (
        <ChatContext.Provider value={{ loading, typing, otherMedix, initializeMedix, conversateWithMedix, medix, conversation }}>
            {children}
        </ChatContext.Provider>
    )
}
