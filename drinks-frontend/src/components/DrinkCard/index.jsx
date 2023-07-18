import {  /* Container, Row, */  Card, Col, Button, /* Modal */ } from "react-bootstrap";
import PropTypes from 'prop-types'
import useDrinks from "../../hooks/useDrinks";
import styles from './index.module.css'
import useCart from '../../hooks/useCart'
import { types } from '../../types'
import Swal from "sweetalert2";





export const DrinkCard = ({ drink }) => {
    /* console.log(drink); */
    const { strDrink, strDrinkThumb, idDrink, price } = drink;
    const { handleDrinkIdClick } = useDrinks()


    const { dispatch } = useCart()

    const handleAddCart = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡Tu producto se agregó al carrito!',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch({
            type: types.addItemToCart,
            payload: drink
        })
    }

    return (
        <>
            {/*   <Container>
         <Row xs={1} md={2} lg={3} className="g-4">  */}

            <Col md={4} lg={3}>
                <Card className={styles.strDrink}>
                    <Card.Img variant="top" src={strDrinkThumb}
                        alt={`Imagen de ${strDrink}`} className={styles.strImg} />
                    <Card.Body>
                        <Card.Title>{strDrink}</Card.Title>
                        <Card.Text>
                            {strDrink}


                        </Card.Text>
                        <h5>{`$ ${price}`}</h5>
                        <div className="d-grid gap-2">
                            <Button
                                variant={'secondary'}
                                className='w-100 text-uppercase mt-2 mb-3'
                                onClick={() => {
                                    handleDrinkIdClick(idDrink);
                                    /*   handleShowModalClick(); */
                                }}> Desplegar Receta

                            </Button>
                            <Button
                                variant={'success'}
                                className='w-100 text-uppercase mt-2 mb-3'
                                onClick={handleAddCart} >
                                Añadir al Carrito
                                <i className="fa-solid fa-cart-plus ms-3"></i>
                            </Button>
                        </div>

                    </Card.Body>
                </Card>
            </Col >

        </>
        /*     </Row> 
              </Container>  */
    )
}
DrinkCard.propTypes = {
    drink: PropTypes.object.isRequired,
    idDrink: PropTypes.number,

    getRecipe: PropTypes.func,
    strInstructions: PropTypes.string
}
DrinkCard.defaultProps = {
    strDrink: 'https://www.supercoloring.com/es/dibujos-para-colorear/emoji-jarra-de-cerveza',
    strDrinkThumb: PropTypes.string,
}