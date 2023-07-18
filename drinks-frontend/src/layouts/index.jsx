import styles from './index.module.css';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";

export const MainLayout = ({ children }) => {
  return (
    <div className={styles.main}>
      <Header />
      <Container className={styles.container}>
        {children}
      </Container>
      <Footer />
    </div>
  )
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired

}
