import { Col, Modal, Row, Image, Button } from 'react-bootstrap'
import useDrinks from '../../hooks/useDrinks'
import useCart from '../../hooks/useCart'
import styles from './index.module.css'
import { types } from '../../types'
import { getDrinkById } from "../../helpers";
import Swal from 'sweetalert2'

export const DrinkModalDetail = () => {

    const { showModal, handleShowModalClick, recipe, loading, drinks } = useDrinks();

    const { strDrink, strDrinkThumb, strInstructions, idDrink } = recipe;

    const showIngredients = () => {
        const ingredients = []
        for (let i = 1; i < 15; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={recipe[`strIngredient${i}`]}>
                        {recipe[`strIngredient${i}`]} -- {recipe[`strMeasure${i}`]}
                    </li>
                )
            }


        }
        return ingredients
    }

    const { dispatch } = useCart()

    const handleAddCart = () => {
        const drink = getDrinkById(drinks, idDrink)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡Tu producto se agregó al carrito!',
            showConfirmButton: false,
            timer: 1500
          })
        dispatch({
            type: types.addItemToCart,
            payload: drink,

        })
    }


    return (
        loading ?
            <p>Cargando...</p> :
            (

                <Modal show={showModal} onHide={handleShowModalClick} >
                    <Row className={styles.modalDrink}>
                        <Modal.Header closeButton> <Modal.Title>{`Receta de ${strDrink}`}</Modal.Title>
                        </Modal.Header>
                        <Col>
                            <Image src={strDrinkThumb}
                                alt={`imagen de ${strDrink}`}
                                
                                className={`${styles.imgModal} rounded-circle`}
                            />
                        </Col>
                    </Row>

                    <Modal.Body className='d-flex flex-column justify-contant-beetween'>
                        <h4>Instrucciones</h4>
                        <p>{strInstructions}</p>
                        <h4>Ingredients & measures</h4>
                        <ul>
                            {showIngredients()}
                        </ul>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant={'warning'}
                            className='w-100 text-uppercase mt-2 mb-3 d-flex align-items-center justify-content-center'
                            onClick=
                            {handleAddCart}>
                           Agregar al Carrito
                            <i className="fa-solid fa-cart-plus ms-2"></i>
                        </Button>
                    </Modal.Footer>
                </Modal>
                )

    )
}
