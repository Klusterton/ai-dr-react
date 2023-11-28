import React, { createContext, useState } from 'react';
import axios from 'axios';
import { MEDIX_BASE_URL } from '../Utils/BaseURL';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [typing, setTyping] = useState(false)
    const [messages, setMessages] = useState([]);
    const [startedChat, setStartedChat] = useState(false);
    const [userInput, setUserInput] = useState('');
    localStorage.setItem('Medix_Chat', JSON.stringify(messages));
    
    const updateUserInput = input => setUserInput(input);
    
    const getLastMessage = async (data) => {
        return data?.data?.data?.[0];
    };

    const updateMessageThread = (data) => {
        setMessages((prevMessages) => [data, ...prevMessages]);
        setTyping(false);
    };
  
    const getThreadMessages = async (id) => await axios.post(`${MEDIX_BASE_URL}/assistant/threads`, id);

    const getMedixChat = async (thread) => {
        setTyping(true);
        const data = {
            id: thread
        };
        let res = await getThreadMessages(data);
        let i = 0;
        while (res.data.data === null) {
            res = await getThreadMessages(data);
            i++;
        }
        if ((res?.data?.message === 'Fetched all messages in thread') && res.data.data) {
            const lastMessage = await getLastMessage(res);
            updateMessageThread(lastMessage);
        }
    };

    const conversateWithMedix = async (input) => {
        setTyping(true);
        let res = null;
        try {
            res = await axios.post(`${MEDIX_BASE_URL}/assistant/prompt`, { id: input.id, prompt: input.prompt });
        } catch (error) {
            console.log('Error prompting thread');
        }
        return res?.data?.data;
    };

    const loadOldChat = () => {
        // go into local storage and pull old chat
    };

    const initializeChat = async (prompt) => {
        let result = null;
        try {
            result = await axios.post(`${MEDIX_BASE_URL}/assistant/chat`, { prompt });
        } catch (error) {
            console.log('Error Initializing chat');
        }
        return result?.data?.data;
    };

    // Returns an object structured like a user response
    const generateUserInput = (input, id) => ({
        assistant_id: null,
        content: [
            {
                text: {
                    value: input
                }
            }
        ],
        id: id ?? 0
    });
    
    const startNewchat = async (input) => {
        // clear local storage
        // talk to API
        const chatInitInfo = await initializeChat(input.prompt);
        // get back response and store thread id to local storage
        if (chatInitInfo) {
            setMessages(oldMessages => [generateUserInput(input.prompt), ...oldMessages]);
            localStorage.setItem('thread_id', chatInitInfo);
            setLoading(false)
            getMedixChat(chatInitInfo)
        }
        // update threadMessages with my message
        // then call the threads endpoint to get ai response and update threadMessages with ai response

        localStorage.setItem('chatStarted', 1);
    };

    const promptThread = async (data) => {
        setMessages(oldMessages => [generateUserInput(data.prompt), ...oldMessages]);
        setLoading(false)
        // use the api to prompt the thread
        const chatInfo = await conversateWithMedix(data);
        console.log('Chat init Info', chatInfo);
        // extract the last message
        // include with the threadMessages[]
        if (chatInfo.length > 0) {
            getMedixChat(data.id)
        }
    };

    const isConversationStarted = () => {
        const hasPreviousChat = localStorage.getItem('chatStarted');
        if (parseInt(hasPreviousChat) == 1 || startedChat) return true;
        return false;
    };

    const manageChatInteraction = (chat) => {
        setLoading(true)
        // have state to track if a chat has started so it will call promptThread method instead of startNewChatconsole.log('Manage Chat Interaction');
        if (isConversationStarted()) {
            // prompt thread
            promptThread({ id: chat.id, prompt: chat.prompt });
        } else {
            setStartedChat(true);
            // start chat
            startNewchat(chat);
        }
    };

    return (
        <ChatContext.Provider value={
            {
                loading,
                getMedixChat,
                manageChatInteraction,
                messages,
                typing,
                loadOldChat,
                userInput,
                updateUserInput,
                isConversationStarted
            }}>
            {children}
        </ChatContext.Provider>
    );
};
