import { Container, Button, Badge } from 'react-bootstrap';
import styles from './index.module.css';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CartCanvas } from '../CartCanvas';
import { useState } from 'react';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';


import useUser from '../../hooks/useUser';
/* import { SearchForm } from '../SearchForm'; */


export const Header = () => {

  const [showCart, setShowCart] = useState(false)



  const handleShowCart = () => setShowCart(true)
  const handleCloseCart = () => setShowCart(false)

  const { cart } = useCart()

  const { user, logout } = useUser()

  const handleLogout = () => {
logout()
  }
  return (
    <div>
      <header className={`{py-5} ${styles.header}`}>
        <h1>
          <Link to="/home"> El Caldero Chorreante <br />
            Magia Líquida</Link>
        </h1>
      </header>
      <div className=''>
        <Navbar expand="lg" className="navbarContent">
          <Container fluid>
            <Navbar.Brand as={Link} to="/productos">Productos</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavDropdown title="¿Qué buscás?" id="navbarScrollingDropdown" >
                  <NavDropdown.Item as={Link} to="/cervezas">Cervezas</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/vinos">Vinos</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/licores">Licores</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/picadas">Picadas</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/promos">Promos</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Usuarios" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/login">
                    Ingresá
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/register">
                    Registrate
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Conocé nuestros eventos
                  </NavDropdown.Item>
                </NavDropdown>

              </Nav>
              <div className='position-relative'>
                <Button variant="primary" onClick={handleShowCart} className="me-2">
                  <i className="fa-solid fa-cart-shopping"></i>

                </Button>
                <Badge bg="success" className='position-absolute top-50 end-0'>{cart.length}</Badge>
              </div>


              <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart} />

              <div>
                { user ?
                  (
                    <div className='d-flex gap-3'>
                      <Link to={'/user/profile'} className='btn btn-lg btn-outline-primary d-flex gap-2 align-items-center'>
                      <i className="fa-solid fa-user"></i>
                        <span>{user.name}</span>
                      </Link>
                      <Button variant="primary" className="me-2" onClick={handleLogout}>
                      <i className='fas fa-sign-out-alt fa-lg'></i>
                       </Button>
                    </div>
                  ) : (
                    <div className='d-flex gap-3'>
                      <Link to={'/login'} className='btn btn-primary '>
                      <Button variant="primary" className="me-2"> Ingresá 
                      <i className='fas fa-sign-in-alt fa-lg'></i>
                      </Button>
                      </Link>
                    </div>
                  )}

              </div>


            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}
