import { Container, Card, Row } from 'react-bootstrap'
import ImgCervezas from '../../assets/images/cervezas.jpg'
import Vinos from '../../assets/images/vinardos.webp'
import Licores from '../../assets/images/licores.jpg'
import Picadas from '../../assets/images/Veggie01.jpg'
import Promos from '../../assets/images/propmofernet.jpg'
import { Link } from 'react-router-dom'
import styles from './index.module.css';


export const Productos = () => {
    return (
        <Container >
            <Row  >
                <div className={styles.containerProduct}>
                    <Link to="/cervezas" className={styles.containerProductBox}>
                        <Card border="warning" style={{ width: '18rem', backgroundColor: 'orange' }}>

                            <Card.Title className='text-white text-center'>Cervezas</Card.Title>
                            <div className="position-relative">
                                <Card.Img src={ImgCervezas} className="w-100" />
                                <Card.Body className="position-absolute top-0 start-0">


                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                    <Link to="/vinos"className={styles.containerProductBox}>
                        <Card border="danger" style={{ width: '18rem', backgroundColor: 'red' }}>
                            <Card.Title className="text-white text-center">Vinos</Card.Title>
                            <div className="position-relative">
                                <Card.Img src={Vinos} className="w-100" />
                                <Card.Body className="position-absolute top-0 start-0">

                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                    <Link to="/licores" className={styles.containerProductBox}>
                        <Card border="info" style={{ width: '18rem', backgroundColor: 'blue' }}>
                            <Card.Title className='text-white text-center'>Licores</Card.Title>
                            <div className="position-relative">
                                <Card.Img src={Licores} className='w-100' />
                                <Card.Body className="position-absolute top-0 start-0">

                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                </div>
            </Row>
            <Row className='mt-4'>
                <div className={styles.containerProduct}>
                    <Link to="/picadas" className={styles.containerProductBox}>
                        <Card border="dark" style={{ width: '18rem', backgroundColor: 'black' }}>
                            <Card.Title className='text-white text-center'>Picadas</Card.Title>
                            <div className="position-relative">
                                <Card.Img src={Picadas} className="w-100" />
                                <Card.Body className="position-absolute top-0 start-0">


                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                    <Link to="/promos" className={styles.containerProductBox}>
                        <Card border="success" style={{ width: '18rem', backgroundColor: 'green' }}>
                            <Card.Title className='text-white text-center'>Promos</Card.Title>
                            <div className="position-relative">
                                <Card.Img src={Promos} className="w-100" />
                                <Card.Body className="position-absolute top-0 start-0">


                                </Card.Body>
                            </div>
                        </Card>
                    </Link>
                </div>

            </Row>
        </Container>
    )
}
