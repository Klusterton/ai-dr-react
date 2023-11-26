import React, { createContext, useState } from 'react'
import axios from 'axios';
import { MEDIX_BASE_URL } from '../Utils/BaseURL';

export const ChatContext = createContext()

export const ChatProvider = ({ children }) => {
    const [medix, setMedix] = useState()
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState(false);
    const [messages, setMessages] = useState([]);
    const chatId = localStorage.getItem('Medix_AI');

    const getLastMessage = async (data) => {
        return data?.data?.data?.[0];
    }

    const updateMessageThread = (data) => {
        console.log(data)
        setMessages((_messages) => [data, ...messages])
    }

    const initializeMedix = async (input) => {
        const msg = {
            assistant_id: null,
            content: [
                {
                    text: {
                        value: input
                    }
                }
            ], 
            id: 0
        }
        setLoading(true);
        updateMessageThread(msg)
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
    
    const getThreadMessages = async (data) => await axios.post(`${MEDIX_BASE_URL}/assistant/threads`, data);
    
    const getMedixChat = async (thread) => {
        const data = {
            id: thread
        }
        let res = await getThreadMessages(data);
        let i = 0;
        console.log({res, i})
        while (!res.data.data && i <= 5) {
            res = await getThreadMessages(data);
            i++;
        }
        if (res?.data?.message === 'Fetched all messages in thread') {
            setLoading(false);
            setConversation(true);
            setMedix(res?.data?.data)
            localStorage.setItem('Medix_data', JSON.stringify(messages))
        }
        if (res.data.data) {
            const lastMessage = await getLastMessage(res);
            updateMessageThread(lastMessage)
            console.log({messages})
        }
    } 

    const conversateWithMedix = async (input) => {
        const msg = {
            assistant_id: null,
            content: [
                {
                    text: {
                        value: input
                    }
                }
            ], 
            id: 0
        }
        setLoading(true);
        updateMessageThread(msg)
        
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
        <ChatContext.Provider value={{ loading, initializeMedix, conversateWithMedix, getMedixChat, medix, conversation }}>
            {children}
        </ChatContext.Provider>
    )
}
