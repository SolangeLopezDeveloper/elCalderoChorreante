import { useEffect, useState } from "react"
import useUser from "../../hooks/useUser"
import { Link } from "react-router-dom"
import styles from './index.module.css'


export const Profile = () => {


  const { profile } = useUser()

  const token = sessionStorage.getItem('drinkToken')

  const [userProfile, setUserProfile] = useState(null)

  useEffect(() => {
    /*    const response = profile(token)
       setUserProfile(response.user) */
    setUserProfile(profile(token))

  }, [])

  return (
    <>
      {
        userProfile && (
          <div>

            <h1>BIENVENIDO!{userProfile.name}</h1>
            <hr />
            <h3>{userProfile.email}</h3>
          </div>

        )
      }
      <div className={styles.profile}>
        <h2>Tus Favoritos</h2>
        <h3>¡Aún no tienes productos agregados!</h3>
        <hr />
        <div className={styles.button}>
          <Link to={'/home'}>Descubre más...</Link>
        </div>
      </div>


    </>


  )
}
