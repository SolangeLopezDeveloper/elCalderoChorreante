import { Container, Row, Col, Card, /* Button */ } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios'
import styles from './index.module.css';
/* import useCart from '../../hooks/useCart'
import { types } from '../../types'
import Swal from "sweetalert2"; */

const apiURL = import.meta.env.VITE_API_URL_PRODUCTS;

export const Cervezas = () => {

  const [cervezas, setCervezas] = useState([]);

  //const { dispatch } = useCart()

  useEffect(()=>{
    axios.get(`${apiURL}cervezas`)
    .then((response)=>{
      setCervezas(response.data.cervezas)
      console.log(response.data);
    })
    .catch((error) =>{
      console.error('ocurrió un error',error)
    })
  
  },[])
 console.log(cervezas);
 /*  const handleAddCart = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: '¡Tu producto se agregó al carrito!',
        showConfirmButton: false,
        timer: 1500
    })
    dispatch({
        type: types.addItemToCart,
        payload: cervezas
    })
}
 */
  return (
    <div className={styles.product}>
      <h1>Cervezas</h1>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
         {cervezas.map((product) => (
              <Col key={product._id}>
                <Card className={styles.cardProduct}>
                  <Card.Img variant="top" src= {`${product.urlImage}`} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      
                      {`$ ${product.price}`}
                     
                    </Card.Text>
                  {/* <Button   onClick={handleAddCart} >Agregar al carrito
                  <i className="fa-solid fa-cart-plus"></i>
                 
                  </Button> */}
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>

  )
}
