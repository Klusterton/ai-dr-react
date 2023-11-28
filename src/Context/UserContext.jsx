import { createContext, useState } from "react";
import axios from "axios";
import { MEDIX_BASE_URL } from "../Utils/BaseURL";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [signupValue, setSignupValue] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [loginValue, setLoginValue] = useState({
        email: '',
        password: ''
    })

    const signup = async (signupValue) => {
        setLoading(true);
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/users`, signupValue);
            console.log({res})
            if (res?.status === 200) {
                setLoading(false);
                setUser(res?.data);
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                    navigate('/chat-bot')
                }, 1000)
            }
        } catch (error) {
            setLoading(false)
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 1000)
            console.error(error, 'error')
        }
    }    
    
    const login = async (loginValue) => {
        setLoading(true);
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/auth/login`, loginValue);
            if (res?.status === 200) {
                setLoading(false)
                setSuccess(true)
                setUser(res?.data)
                setTimeout(() => {
                    setSuccess(false)
                    navigate('/chat-bot')
                }, 1000)
            }
        } catch (error) {
            setLoading(false)
            setError(true);
            setTimeout(() => {
                setError(false)
            }, 1000)
            console.error(error, 'error')
        }
    }    
    
    const value = {
        setSignupValue,
        signupValue,
        setLoginValue,
        loginValue,
        login,
        signup,
        loading,
        user,
        success,
        error
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}