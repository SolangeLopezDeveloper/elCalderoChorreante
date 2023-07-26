import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import useCategories from '../../hooks/useCategories';
import useDrinks from '../../hooks/useDrinks';


export const SearchForm = () => {

  const { categories } = useCategories()
  /*  console.log(categories); */

const {getDrinks, loading} = useDrinks()


  const initialValues = {
    ingredient: "",
    category: ""
  }

  const validationsSchema = Yup.object({
    ingredient: Yup.string().required('Debes colocar un nombre'),
    category: Yup.string().required('Debes seleccionar una categoría')
  })

  const handleSubmit = (values) => {
    getDrinks(values)
  }
  return (
    <>
      <br />
      <br />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationsSchema}>
        {
          (formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor='ingredient'>Nombre de la Bebida   </Form.Label>
                    <Field
                      id="ingredient"
                      type="text"
                      placeholder="Ej: Cerveza, Vodka, Tequila, etc"
                      name="ingredient"
                      as={Form.Control}
                    />
                    <ErrorMessage
                      name='ingredient'
                      component={Form.Text}
                      className='text-danger ms-2' />

                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label htmlFor='category'>Categoría de la Bebida</Form.Label>
                    <Field
                      id="category"
                      name="category"
                      as={Form.Select}
                    >
                      <option value="" defaultValue="" hidden>-Seleccione Categoría-</option>
                      {
                        categories.sort((a, b) => (a.strCategory > b.strCategory ? 1 : a.strCategory < b.strCategory ? -1 : 0)).map(category => (
                          <option 
                          value={category.strCategory} 
                          key={category.strCategory}>
                            {category.strCategory}
                          </option>
                        ))
                      }
                    </Field>
                    <ErrorMessage
                      name='category'
                      component={Form.Text}
                      className='text-danger ms-2' />
                  </Form.Group>
                </Col>
              </Row>
              <Row className='justify-content-end mt-3'>
                <Col md={3}>
                  <Button
                    variant='primary'
                    disabled={loading}
                    className='w-100'
                    type='submit'>
                  {loading ? "Buscando..." : "Buscar Bebidas"}
                  </Button> 
                  </Col>
              </Row>
            </Form>
          )}
      </Formik>

<hr />


    </>
  )
}
