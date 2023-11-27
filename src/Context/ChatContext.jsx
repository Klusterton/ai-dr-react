import React, { createContext, useState } from 'react';
import axios from 'axios';
import { MEDIX_BASE_URL } from '../Utils/BaseURL';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [medix, setMedix] = useState();
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState(false);
    const [messages, setMessages] = useState([]);
    const chatId = localStorage.getItem('Medix_AI');
    const [startedChat, setStartedChat] = useState(false);
    const [userInput, setUserInput] = useState('');

    const updateUserInput = input => setUserInput(input);

    const getLastMessage = async (data) => {
        return data?.data?.data?.[0];
    };

    const updateMessageThread = (data) => {
        console.log(data);
        setMessages((_messages) => [data, ...messages]);
    };

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
        };
        setLoading(true);
        updateMessageThread(msg);
        const data = {
            prompt: input
        };
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/assistant/chat`, data);
            if (res.data.message === "Conversation started") {
                const id = res.data.data.thread_id;
                getMedixChat(id);
                localStorage.setItem('Medix_AI', id);
            }
        } catch (error) {
            setLoading(false);
            console.error('Error sending message:', error);
        }
    };

    const getThreadMessages = async (id) => await axios.post(`${MEDIX_BASE_URL}/assistant/threads`, { id });

    const getMedixChat = async (thread) => {
        const data = {
            id: thread
        };
        let res = await getThreadMessages(data);
        let i = 0;
        console.log({ res, i });
        while (!res.data.data && i <= 5) {
            res = await getThreadMessages(data);
            i++;
        }
        if (res?.data?.message === 'Fetched all messages in thread') {
            setLoading(false);
            setConversation(true);
            setMedix(res?.data?.data);
            localStorage.setItem('Medix_data', JSON.stringify(messages));
        }
        if (res.data.data) {
            const lastMessage = await getLastMessage(res);
            updateMessageThread(lastMessage);
            console.log({ messages });
        }
    };

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
        };
        setLoading(true);
        updateMessageThread(msg);

        const data = {
            prompt: input,
            id: chatId
        };

        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/assistant/prompt`, data);
            if (res?.data?.message === "Updated Thread") {
                getMedixChat(chatId);
            }
        } catch (error) {
            setLoading(false);
            console.error('Error sending message:', error);
        }
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
        console.log('INIT CHAT', result);
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
        console.log('Chat init Info', chatInitInfo);
        // get back response and store thread id to local storage
        if (chatInitInfo.thread_id) {
            localStorage.setItem('thread_id', chatInitInfo.thread_id);
            setMessages(oldMessages => [generateUserInput(input), ...oldMessages]);
            console.log('Start New Chat');
        }
        // update threadMessages with my message
        // then call the threads endpoint to get ai response and update threadMessages with ai response

        localStorage.setItem('chatStarted', 1);
    };

    const promptThread = async (data) => {
        // use the api to prompt the thread
        const res = await axios.post(`${MEDIX_BASE_URL}/assistant/prompt`, { id: data.id, prompt: data.prompt });
        // extract the last message
        // include with the threadMessages[]
        if (res.data.data.thread_id) {
            setMessages(oldMessages => [generateUserInput(data.input), ...oldMessages]);
            console.log('UUpdate Messages');
        }
        console.log('Not Prompt Thread');
    };

    const isConversationStarted = () => {
        const hasPreviousChat = localStorage.getItem('chatStarted');
        if (parseInt(hasPreviousChat) == 1 || startedChat) return true;
        return false;
    };

    const manageChatInteraction = (chat) => {
        // have state to track if a chat has started so it will call promptThread method instead of startNewChatconsole.log('Manage Chat Interaction');
        if (isConversationStarted()) {
            // prompt thread instead of
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
                initializeMedix,
                conversateWithMedix,
                getMedixChat,
                medix,
                conversation,
                manageChatInteraction,
                promptThread,
                startNewchat,
                messages,
                loadOldChat,
                userInput,
                updateUserInput,
                isConversationStarted
            }}>
            {children}
        </ChatContext.Provider>
    );
};
