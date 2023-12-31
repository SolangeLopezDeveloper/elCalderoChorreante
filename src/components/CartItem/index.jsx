import { ListGroup, Image } from 'react-bootstrap'
import PropTypes from 'prop-types'
import useCart from '../../hooks/useCart'
import { types } from '../../types'

export const CartItem = ({ drink, calculateTotal }) => {

    const { strDrink, strDrinkThumb, price, quantity } = drink

    const { dispatch } = useCart();



    const handleAddItem = () => {
        dispatch({
            type: types.addItemToCart,
            payload: drink
        })
        calculateTotal()
    }
    const handleRemoveItem = () => {
        dispatch({
            type: types.removeItemFromCart,
            payload: drink
        })
        calculateTotal()
    }

    const handleRemoveAllItem = () => {
        dispatch({
            type: types.removeAllItemsFromCart,
            payload: drink
        })
        calculateTotal()
    }

    return (

        <ListGroup.Item className='d-flex'>
            <Image src={strDrinkThumb} width={"150px"} />
            <div style={{ width: "100%", display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center' }}>
                <h6>{strDrink}</h6>
                <hr />
                <div className='d-flex justify-content-between'>
                    <h5>${price * quantity}</h5>
                </div>
                <div className='d-flex gap-2'>
                    <button className='btn btn-sm btn-danger'
                        onClick={handleRemoveItem}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <input type="text"
                        style={{ width: "50px" }}
                        className='form-control'
                        value={quantity}
                        readOnly />
                    <button className='btn btn-sm btn-success'
                        onClick={handleAddItem}>
                        <i className="fas fa-plus"></i>
                    </button>
                    <h4 className='btn btn-sm btn-danger'
                        style={{ cursor: 'pointer' }}
                        onClick={handleRemoveAllItem}>
                        <i className="fas fa-trash-alt"></i>
                    </h4>

                </div>

                <hr />


            </div >
        </ListGroup.Item >



    )
}
CartItem.propTypes = {
    drink: PropTypes.shape({
        strDrink: PropTypes.string,
        strDrinkThumb: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number
    }),
    calculateTotal: PropTypes.func,
    product: PropTypes.object
}