import { Container, Row, Col, Card } from 'react-bootstrap'
import Image from '../../assets/images/Veggie01.jpg'
import usePicadas from '../../hooks/usePicadas'
export const Picadas = () => {


  const { name, price, urlImage } = usePicadas()

  return (
    <>
      <div>Picadas</div>
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top" src={Image} />
                <Card.Body>
                  <Card.Title>Bebida</Card.Title>
                  <Card.Text>
                    {name}
                    {price}
                    {urlImage}
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
