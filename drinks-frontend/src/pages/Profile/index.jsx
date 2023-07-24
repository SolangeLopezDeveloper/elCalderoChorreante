import { useEffect, useState } from "react"
import useUser from "../../hooks/useUser"
import { Link } from "react-router-dom"
import styles from './index.module.css'
import PropTypes from 'prop-types';
import { getRecipeService } from "../../services/drinks.services";
import { Card, /* Button, */ Row, Col } from "react-bootstrap";

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
    <>
      {user ? (
        <div className={styles.profile}>
          <div className="w-100">
            <h1>¡BIENVENIDO {user.name}!</h1>
            <hr />
            <h3>Tus Datos</h3>
            <h4>{user.email}</h4>
          </div>
          <div className="sectionFav">

            <h2>Tus Favoritos</h2>

            {
              favorites.length ? (<div className="contenedor_fav">
                <Row lg={3} md={2} className='d-flex justify-content-center'>

                  {recipes.map((recipeData, index) => (
                    <Col key={index} className={styles.strDrink}>
                      <Card className="w-75 border border-primary border-2 ">
                        <Card.Img variant="top" src={recipeData.strDrinkThumb}
                          alt={`Imagen`} className={styles.strImg} />
                        <Card.Body>

                          <Card.Text>
                            {recipeData.strDrink}
                          </Card.Text>
                          <h5>{`$ ${(recipeData.idDrink / 10).toFixed(0)}`}</h5>
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

                    </Col>
                  ))}
                </Row>
              </div>)
                :
                (<h5>¡Aún no tienes favoritos agregados!</h5>)
            }

          </div>


          <hr />
          <div className={styles.button}>
            <Link to={'/homeSearch'}>Descubre más...</Link>
          </div>
        </div>

      ) : (
        <div className={styles.button}>
          <Link to={'/login'}>Ingresá...</Link>
        </div>
      )}
    </>
  )
}
Profile.propTypes = {
  drinks: PropTypes.object



}
