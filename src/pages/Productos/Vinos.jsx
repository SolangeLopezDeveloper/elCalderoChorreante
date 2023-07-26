import { Container, Row, Col, Card, /* Button */ } from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';

const apiURL = import.meta.env.VITE_API_URL_PRODUCTS;



export const Vinos = () => {

  const [vinos, setVinos] = useState([]);

useEffect(()=>{
  axios.get(`${apiURL}vinos`)
  .then((response)=>{
    setVinos(response.data.vinos)
    console.log(response.data);
  })
  .catch((error) =>{
    console.error('ocurrió un error',error)
  })

},[])

  return (
    <>
    <div className={styles.product}>
        <h1>Vinos</h1>
        <Container>
          <Row xs={1} md={2} lg={4} className="g-4">
          {vinos.map((product) => (
              <Col key={product._id}>
                <Card>
                  <Card.Img variant="top" src= {`${product.urlImage}`} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      
                      {`$ ${product.price}`}
                     
                    </Card.Text>
                 {/*  <Button>Agregar al carrito
                  <i className="fa-solid fa-cart-plus"></i>
                  </Button> */}
                   
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  )
}
