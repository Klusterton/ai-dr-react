import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'

export default function Auth() {
    return (
        <Routes>
            <Route exact path='' element={<SignUp />} />
            <Route path='login' element={<Login />} />
        </Routes>
    )
}
