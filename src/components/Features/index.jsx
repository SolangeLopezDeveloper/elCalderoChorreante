import {Container, Row, Card, Col} from 'react-bootstrap'
//import useDrinks from '../../hooks/useDrinks'
import Image from '../../assets/images/bebidas-alcoholicas.jpg'

export const Features = () => {

    //const {getDrinks, loading} = useDrinks()


  return (
    <>
    <Container>
    <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={Image} />
            <Card.Body>
              <Card.Title>Bebida</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <h3>$2000</h3>
              <i className="fa-solid fa-cart-plus"></i>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  </>
  )
}
