import { createContext, useEffect, useState } from 'react';
import {PropTypes} from 'prop-types'
import { loginAuthService, profileUserService, toggleFavoriteService } from '../services/auth.services';
import jwtDecoded from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const [alert, setAlert] = useState(null);

    const [userProfile, setUserProfile] = useState({})

    const [favorites, setFavorites] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
    const token = sessionStorage.getItem('DrinksToken')
    if(token){
        const decodedToken = jwtDecoded(token)
        setUser(decodedToken.user)
        
        setFavorites(decodedToken.user.favorites)

    }
    }, [])
    

    const handleToggleFavorite = (idDrink) => {
        if (!favorites.includes(idDrink)) {
            setFavorites([
                ...favorites,
                idDrink
            ])

        } else {
            setFavorites(favorites.filter(favorite => favorite !== idDrink))
        }
console.log(favorites);
        toggleFavoriteService(idDrink)

    }

    const handleAlert = (error) => {
        setAlert(error.message)
        setTimeout(() => {
            setAlert(null)
        }, 3000);
    }


    const login = async (info) => {
        try {
            const { token } = await loginAuthService(info)
            sessionStorage.setItem('DrinksToken', token)
            const decodedToken = token ? jwtDecoded(token) : null;
            setUser(decodedToken.user)
            setFavorites(decodedToken.user.favorites)
            //console.log(decodedToken.user);
            //console.log(decodedToken);
         
   
         
            navigate('/user/profile')

        } catch (error) {
            //console.log(error);
            handleAlert(error)
        }
    }

    const getProfile = async () => {
        try {

            const token = sessionStorage.getItem('DrinksToken')

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
        setUserProfile({})
        setFavorites([])
        sessionStorage.removeItem('DrinksToken')
    }

    const contextValue = {
        user,
        userProfile,
        login,
        logout,
        alert,
        getProfile,
        handleToggleFavorite,
        favorites

    }


    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {
    AuthContext,
    AuthProvider
}
