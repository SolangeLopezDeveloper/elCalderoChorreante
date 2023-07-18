import {Container,Row,Col,Card} from 'react-bootstrap'
import Image from '../../assets/images/vinos.webp'

export const Vinos = () => {
  return (
    <>
    <div>Vinos</div>
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
