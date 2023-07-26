import { useNavigate } from 'react-router-dom'
import ImgBienvenida from '../assets/images/imgBienvenida.jpg'
import PropTypes from 'prop-types';
import { useState } from 'react';

export const MainLayout = ({ children }) => {

  const navigate = useNavigate()

  const [siClicked, setSiClicked] = useState(false);
  const handleSiClick = () => {
    setSiClicked(true)
    navigate('/homeSearch')
    const bienvenidaElement = document.getElementById('bienvenida');
    if (bienvenidaElement) {
      bienvenidaElement.style.display = 'none';
    }

  }
  const handleNoClick = () => {
    window.location.href = 'https://youtu.be/7ZH0mwW_g04'
  }

  return (

    <div className='text-center'>
      <div id='bienvenida'>
      <h1>Bienvenido a El Caldero Chorreante</h1>
      <div className='d-flex flex-column'>
        <h3>¿Sos Mayor de 18 años?</h3>

      </div>
      <div className='d-flex gap-5 mb-4 justify-content-center'>

        <button className='btn btn-primary' onClick={handleSiClick}>SI</button>

        <button onClick={handleNoClick} className='btn btn-danger'>NO</button>
       
      </div>
      </div>
  
      {siClicked ? (
        children
      ) : (
        <img src={ImgBienvenida} alt='' />
      )}

    </div>
  )
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired

}
