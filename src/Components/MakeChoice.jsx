import { useContext } from "react";
import { ChatContext } from "../Context/ChatContext";

const MakeChoice = ({ toggleChatHistory }) => {
    const { clearConversationCache } = useContext(ChatContext);
    return (
        <div className='flex flex-col justify-center items-center mt-48'>
            <h2 className="text-2xl">Start New Chat?</h2>
            <p className="text-slate-600 text-center">We see you have an ongoing conversation, want to start a new one?</p>
            <section className='flex gap-4 mt-6 md:mt-4 md:flex-row flex-col-reverse'>
                <button onClick={() => toggleChatHistory(false)}>No, Continue chat</button>
                <button className='px-4 py-2 bg-slate-800 text-white rounded-lg' onClick={clearConversationCache}>Yes, I want a new chat</button>
            </section>
        </div>
    );
};

export default MakeChoice;
