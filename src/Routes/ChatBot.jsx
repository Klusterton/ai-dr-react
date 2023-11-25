import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Manual from './Manual'
import ChatPage from './ChatPage'

export default function ChatBot() {
    return (
        <Routes>
            <Route exact path='/' element={<Manual />} />
            <Route exact path='/chat' element={<ChatPage />} />
        </Routes>
    )
}
