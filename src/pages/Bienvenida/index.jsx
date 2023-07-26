import PropTypes from 'prop-types';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
export const Bienvenida = ({ children }) => {

  return (

    <div >
      <Header />
      <div className='d-flex justify-content-center m-3' >
        {children}
      </div>

      <Footer />
    </div>
  )
}
Bienvenida.propTypes = {
  children: PropTypes.node

}