import { useEffect, useState } from "react"
import useUser from "../../hooks/useUser"
import { Link } from "react-router-dom"
import styles from './index.module.css'
import PropTypes from 'prop-types';
import { getRecipeService } from "../../services/drinks.services";
import { Card, /* Button,  Row, Col, Container*/ } from "react-bootstrap";

/* import useCart from '../../hooks/useCart'
import Swal from "sweetalert2";
import { types } from '../../types' */

export const Profile = () => {

  const { user, getProfile, favorites /* handleToggleFavorite */ } = useUser()
  const [recipes, setRecipes] = useState([])

  //const { dispatch } = useCart()

  useEffect(() => {
    getProfile()
    const fetchRecipes = async () => {
      try {
        const recipePromises = favorites.map((id) => getRecipeService(id));
        const recipesData = await Promise.all(recipePromises);
        setRecipes(recipesData.flat());

      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);


  /*  const handleAddCart = (product) => {
 console.log(product.idDrink);
 const idDrinkParse = parseInt(product.idDrink)
 console.log(idDrinkParse);
     Swal.fire({
       position: 'top-end',
       icon: 'success',
       title: '¡Tu producto se agregó al carrito!',
       showConfirmButton: false,
       timer: 1500
     })
     dispatch({
       type: types.addItemToCart,
       payload: {...product, idDrink: idDrinkParse}
     })
   }
  */
  return (
    user ? (
      <div className={styles.profile}>
        <div>
          <h1>¡BIENVENIDO {user.name}!</h1>
          <hr />
          <h3>Tus Datos</h3>
          <h4>{user.email}</h4>
        </div>
        <hr />
        <h2>Tus Favoritos</h2>
        {
          favorites.length ? (
            <div className={styles.contenedor_fav}>
              {recipes.map((recipeData, index) => (
                  <Card key={index} className={styles.strDrink}>
                    <Card.Img variant="top" src={recipeData.strDrinkThumb}
                      alt={`Imagen`} className={styles.strImg} />
                    <Card.Body className="d-flex p-0">

                      <Card.Text>
                        {recipeData.strDrink}
                        <h5>{`$ ${(recipeData.idDrink / 10).toFixed(0)}`}</h5>
                      </Card.Text>
                  
                      {/*  <div className="d-flex justify-content-around align-text-center btn btn-lg p-2">
                           <a
                                  style={{ cursor: "pointer" }}
                                   onClick={handleFavorite} >
                            {
                                  favorites.includes(recipes.strDrink) ? (<i className="fa-solid fa-star fa-lg"></i>)
                                          :
                                   (<i className="fa-regular fa-star fa-lg"></i>)
                            }
                                        </a>

                                      </div>

                          <div className="d-grid gap-2">
                            <Button
                              variant={'success'}
                              className='w-100 text-uppercase'
                              onClick={() => handleAddCart(recipeData)} >
                              Añadir al Carrito
                              <i className="fa-solid fa-cart-plus ms-3"></i>
                            </Button>
                          </div>*/}
                    </Card.Body>
                  </Card>
              ))}

            </div>)
            :
            (<h5>¡Aún no tienes favoritos agregados!</h5>)
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
