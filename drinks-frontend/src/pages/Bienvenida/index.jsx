import { Link } from 'react-router-dom'
import ImgBienvenida from '../../assets/images/imgBienvenida.jpg'
export const Bienvenida = () => {


  return (
    <div>
      <h1>Bienvenido a El Caldero Chorreante</h1>
      <div className='d-flex flex-column'>
        ¿Sos Mayor de 18 años?
     
      </div>
      <div className='d-flex gap-5 mb-4'>
        <Link to={'/home'}>SI</Link>
        <Link to={'https://youtu.be/THNpbRrl0xo'}>NO</Link>
      </div>
      <img src={ImgBienvenida} alt="" />

    </div>
  )
}
