import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";


import { Form, Button, Row, Col, Alert } from 'react-bootstrap'
import * as Yup from 'yup';
import { ErrorMessage, Field, Formik } from 'formik';

export const Login = () => {

  const { login, alert } = useUser()



  const initialValues = {
    email: "",
    password: ""
  }

  const validationsSchema = Yup.object({
    email: Yup.string().required('Debes colocar un email'),
    password: Yup.string().required('Debes ingresar tu contraseña')
  })

  const handleSubmit = (values) => {
    //console.log(values);
    login(values)
  }
  return (

    <>
      <h1>Ingresá</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationsSchema}>
      
          {
            (formik) => (
              <Form className="d-flex flex-column mb-5 mt-5 p-3 rounded-4 bg-secondary"
                onSubmit={formik.handleSubmit}>
                {alert && <Alert variant="danger">{alert}</Alert>}
                <Form.Group className="mb-5" controlId="formEmail">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Field id="email" type="email" placeholder="Ingresa tu email" name="email" as={Form.Control} style={{ width: '350px' }} />
                  <ErrorMessage
                    name="email"
                    component={Form.Text}
                    className="text-danger ms-2"
                  />
                </Form.Group>

                <Form.Group className="mb-5" controlId="formPassword">
                  <Form.Label htmlFor="password">Contraseña</Form.Label>
                  <Field id="password" name="password" type="password" placeholder="Ingresa tu contraseña" as={Form.Control} style={{ width: '350px' }} />
                  <ErrorMessage
                    name="password"
                    component={Form.Text}
                    className="text-danger ms-2"
                  />
                </Form.Group>

                <Row className="justify-content-end mt-3" >
                  <Col md={3}>
                    <Button variant="primary" type="submit" className="w-50" disabled={false}>
                      Entrar
                    </Button>
                  </Col>
                </Row>

              </Form>

            )}
      
      </Formik>


      <div className="contentsButonLogin"><Link to={'/home'} className="buttonLogin">Volver al Home</Link>
        <div className="contentsButonLogin"><Link to={'/register'} className="buttonLogin">¿No estás registrado?</Link>
        </div>
      </div>


    </>

  )
}
