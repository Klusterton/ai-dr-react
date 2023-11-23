import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './SignUp'
import Login from './Login'
import ResetPassword from './ResetPassword'

export default function Auth() {
    return (
        <Routes>
            <Route exact path='' element={<SignUp />} />
            <Route path='login' element={<Login />} />
            <Route path='reset-password' element={<ResetPassword />} />
        </Routes>
    )
}
