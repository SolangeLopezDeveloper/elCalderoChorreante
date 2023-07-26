import { Container, Row, Col } from "react-bootstrap";
import ImageNotFound from '../../assets/images/NotFound.jpg'
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={6}>
          <img src={ImageNotFound} alt="" />
          <h1 className='text-black'>404</h1>
          <h1 className='text-center text-black'>Página no encontrada!</h1>
          <Link to={'/'}>Volver al inicio</Link>
        </Col>
      </Row>

    </Container>
  )
}
