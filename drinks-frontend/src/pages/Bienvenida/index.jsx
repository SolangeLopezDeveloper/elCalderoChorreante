import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
export const Bienvenida = ({ children }) => {

  return (

    <div >
      <Header />
      <Container >
        {children}
      </Container>

      <Footer />
    </div>
  )
}
Bienvenida.propTypes = {
  children: PropTypes.node

}