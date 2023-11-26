import React, { createContext, useState } from 'react'
import axios from 'axios';
import { MEDIX_BASE_URL } from '../Utils/BaseURL';

export const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
    const [medix, setMedix] = useState()
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState(false);
    const chatId = localStorage.getItem('Medix_AI');

    const initializeMedix = async (input) => {
        setLoading(true);
        
        const data = {
            prompt: input
        }
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/assistant/chat`, data);
            if (res.data.message === "Conversation started") {
                const id = res.data.data.thread_id
                getMedixChat(id); 
                localStorage.setItem('Medix_AI', id) 
            }
        } catch (error) {
            setLoading(false);
            console.error('Error sending message:', error);
        }
    };
    
    const getMedixChat = async (thread) => {
        const data = {
            id: 'thread_KBUc6854nndvOayafLGTfc7C'
        }
        const res = await axios.post(`${MEDIX_BASE_URL}/assistant/threads`, data);
        console.log({res})
        if (res?.data?.message === 'Fetched all messages in thread') {
            setLoading(false);
            setConversation(true);
            setMedix(res?.data?.data)
            localStorage.setItem('Medix_data', JSON.stringify(res?.data?.data))
        }
    } 

    const conversateWithMedix = async (input) => {
        setLoading(true);
        
        const data = {
            prompt: input,
            id: chatId
        }
        
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/assistant/prompt`, data);
            if (res?.data?.message === "Updated Thread") {
                getMedixChat(chatId)
            }
        } catch (error) {
            setLoading(false);
            console.error('Error sending message:', error);
        }
    };
    
    return (
        <ChatContext.Provider value={{ loading, initializeMedix, conversateWithMedix, medix, conversation }}>
            {children}
        </ChatContext.Provider>
    )
}
