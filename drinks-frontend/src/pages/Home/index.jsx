import { SearchForm } from '../../components/SearchForm'
import { DrinksList } from '../../components/DrinksList'
import { DrinkModalDetail } from '../../components/DrinkModalDetail'
import styles from './index.module.css'

export const Home = () => {


  return (
    <div className={styles.boxSearchHome}>
      <div className={styles.containerBody}>
        <div className='boxTituloHome'><h1>¡Bienvenidos!</h1>
        </div>
        <hr />
        <div>    <h3>¿Qué buscas?</h3></div>
        <h6>En esta sección encontrarás todas recetas de bebidas que tenemos disponibles ¡Descúbrelas ingresando una categoría!</h6>
        <SearchForm />
        <DrinksList />


        <DrinkModalDetail />

        <hr />
      </div>
    </div>





  )
}
