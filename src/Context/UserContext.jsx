import { createContext, useState } from "react";
import axios from "axios";
import { MEDIX_BASE_URL } from "../Utils/BaseURL";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
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
        if (!signupValue.name || !signupValue.email || !signupValue.password) {
            enqueueSnackbar('Please fill all fields!', {
                variant: 'error',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
            })
            return;
        }
        setLoading(true);
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/users`, signupValue);
            console.log({res})
            if (res?.data?.status === 200) {
                setUser(res?.data?.data);
                setLoading(false);
                enqueueSnackbar('Account Created Successfully!', {
                    variant: 'success',
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                    },
                })
                setTimeout(() => {
                    navigate('/chat-bot')
                }, 1000)
            }
        } catch (error) {
            setLoading(false)
            enqueueSnackbar('Error creating account!', {
                variant: 'error',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
            })
            console.error(error, 'error')
        }
    }    
    
    const login = async (loginValue) => {
        if (!loginValue.email || !loginValue.password) {
            enqueueSnackbar('Please fill all fields!', {
                variant: 'error',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
            })
            return;
        }
        setLoading(true);
        try {
            const res = await axios.post(`${MEDIX_BASE_URL}/auth/login`, loginValue);
            console.log({res})
            if (res?.data?.status === 200) {
                setLoading(false)
                enqueueSnackbar('Logged in successfully!', {
                    variant: 'success',
                    anchorOrigin: {
                      vertical: 'top',
                      horizontal: 'right',
                    },
                })
                setTimeout(() => {
                    navigate('/chat-bot')
                }, 1000)
            }
        } catch (error) {
            setLoading(false)
            console.error(error, 'error')
            enqueueSnackbar('Error logging in!', {
                variant: 'error',
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right',
                },
            })
        }
    }    
    
    const value = {
        setSignupValue,
        signupValue,
        setLoginValue,
        loginValue,
        login,
        signup,
        loading
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}