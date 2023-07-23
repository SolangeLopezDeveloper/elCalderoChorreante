import { useEffect } from "react"
import useUser from "../../hooks/useUser"
import { Link } from "react-router-dom"
import styles from './index.module.css'
import PropTypes from 'prop-types';
import { getRecipeService } from "../../services/drinks.services";


export const Profile = () => {
  const { userProfile, getProfile, favorites } = useUser()

//const idDrink = userProfile.favorites.map(favorite => favorite.drink)


  const handleDrinksFav = async (idDrink) =>{
    const drink = await getRecipeService(idDrink)

    console.log(drink);
  }
 

  //const { strDrink, strDrinkThumb, idDrink, price } = drinks;

  useEffect(() => {
    getProfile()
  }, [])

  return (

    userProfile ? (
      <div className={styles.profile}>

        <h1>¡BIENVENIDO {userProfile.name}!</h1>
        <hr />
        <h2>Tus Datos</h2>
        <h3>{userProfile.email}</h3>

<h3>{favorites}</h3>

{/* {strDrink}{strDrinkThumb}{idDrink}{price} */}
        <h2>Tus Favoritos</h2>
        <button onClick={handleDrinksFav}>Ver Mis Favoritos</button>
        {
          favorites ? (<div>
            {favorites}
            </div>) : (
              <h3>¡Aún no tienes productos agregados!</h3>
            )
            
        }

        <hr />
        <div className={styles.button}>
          <Link to={'/homeSearch'}>Descubre más...</Link>
        </div>
      </div>

    ) : (
      <div className={styles.button}>
        <Link to={'/login'}>Ingresá...</Link>
      </div>
    )
  )
}
Profile.propTypes = {
 drinks: PropTypes.object

}
