import { ListGroup, Offcanvas, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import useCart from '../../hooks/useCart'
import { CartItem } from '../CartItem'
import { types } from '../../types'
import styles from './index.module.css'

export const CartCanvas = ({ showCart, handleCloseCart }) => {

    const { cart, dispatch } = useCart()

    const cleanCart = () => {
        dispatch({
            type: types.cleanCart,
            payload: []
        })
    }


    return (
        <Offcanvas show={showCart} onHide={handleCloseCart} placement='end' className={styles.offCanvas}>

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>TU CARRITO</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offCanvasBody}>
                <ListGroup>
                    {cart.length ?
                        (
                            <div>{
                                cart.map(drink => <CartItem key={drink.idDrink} drink={drink} />)}

                                <div className='d-flex gap-3 justify-content-center mt-4'>
                                    <Button onClick={cleanCart}>Total</Button>
                                    <input type="text"
                                        style={{ width: "150px" }}
                                        className='form-control' />
                                </div>
                                <div className='d-flex justify-content-center mt-4'>
                                    <button className='btn btn-sm btn-primary'>
                                        Confirmar compra

                                    </button>
                                </div>
                            </div>
                        )
                        :
                        <p>No hay productos</p>
                    }
                </ListGroup>

            </Offcanvas.Body>



        </Offcanvas >
    )
}
CartCanvas.propTypes = {
    showCart: PropTypes.bool,
    handleCloseCart: PropTypes.func
}
