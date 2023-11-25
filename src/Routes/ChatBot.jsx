import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Manual from './Manual'
import ChatPage from './ChatPage'

export default function ChatBot() {
    const [hamburger, setHamburger] = useState(false)
    return (
        <Routes>
            <Route exact path='/' element={<Manual hamburger={hamburger} setHamburger={setHamburger} />} />
            <Route exact path='/chat' element={<ChatPage hamburger={hamburger} setHamburger={setHamburger}/>} />
        </Routes>
    )
}
