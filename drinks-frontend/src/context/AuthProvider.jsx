import { createContext, useState } from 'react';
import Proptypes from 'prop-types'
import { loginAuthService, profileUserService } from '../services/auth.services';
import jwtDecoded from 'jwt-decode'


const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [alert, setAlert] = useState(null);

    const [userProfile, setUserProfile] = useState({})


    const handleAlert = (error) => {
        setAlert(error.message)
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }

    const login = async (info) => {
        try {
            const { token } = await loginAuthService(info)
            sessionStorage.setItem('drinkToken', token)
            const decodedToken = token ? jwtDecoded(token) : null;
            setUser(decodedToken.user)

        } catch (error) {
            //console.log(error);
            handleAlert(error)
        }
    }

    const getProfile = async () => {
        try {

            const token = sessionStorage.getItem('drinkToken')

            if (!token) { return null }

            const response = await profileUserService(token)
            //console.log(response);
            setUserProfile(response.user)
        } catch (error) {
            handleAlert(error)
        }
    }

    const logout = () => {
        setUser(null)
    }

    const contextValue = {
        user,
        userProfile,
        login,
        logout,
        alert,
        getProfile,

    }


    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: Proptypes.node.isRequired
}

export {
    AuthContext,
    AuthProvider
}
