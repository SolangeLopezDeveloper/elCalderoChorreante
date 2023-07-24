import { ListGroup, Offcanvas, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
import useCart from '../../hooks/useCart'
import { CartItem } from '../CartItem'
import { types } from '../../types'
import styles from './index.module.css'
import { useEffect, useState } from 'react'
import Swal from "sweetalert2";

export const CartCanvas = ({ showCart, handleCloseCart }) => {
    const { cart, dispatch } = useCart();

    const cleanCart = () => {
        dispatch({
            type: types.cleanCart,
            payload: {},
        });
    };

    const [total, setTotal] = useState(0);

    const calculateTotal = () => {
        const newTotal = cart.reduce((acc, drink) => acc + (drink.price * drink.quantity), 0);
        setTotal(newTotal);
    };

    useEffect(() => {
        calculateTotal();
    }, [cart]);




    const handleConfirm = () => {
        Swal.fire({
            
            icon: 'success',
            title: '¡Compra Realizada!',
            html: 'Recibirás tu cupón de pago en Mercado Pago',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3500
        })
        cleanCart()
    }



    return (
        <Offcanvas show={showCart} onHide={handleCloseCart} placement='end' className={styles.offCanvas}>

            <Offcanvas.Header closeButton>
                <Offcanvas.Title>TU CARRITO</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.offCanvasBody}>

                {cart.length ?
                    (<div>
                        <div>
                            <ListGroup>
                                {cart.map((drink) => (<CartItem key={drink.idDrink} drink={drink} calculateTotal={calculateTotal}/>))}
                            </ListGroup>
                        </div>
                        <Button onClick={cleanCart}>Vaciar</Button>

                        <div className='d-flex gap-3 justify-content-center mt-4'>
                            <Button>Total de tu compra</Button>

                            <input type="text"
                                style={{ width: "150px" }}
                                className='form-control'
                                value={`$${total}`}
                                readOnly />
                        </div>
                        <div className='d-flex justify-content-center mt-4'>
                            <Button onClick={handleConfirm} className='btn btn-sm btn-primary'>
                                Confirmar compra

                            </Button>
                        </div>
                    </div>)
                    :
                    <p>No hay productos</p>
                }


            </Offcanvas.Body>



        </Offcanvas >
    )
}
CartCanvas.propTypes = {
    showCart: PropTypes.bool,
    handleCloseCart: PropTypes.func

}
