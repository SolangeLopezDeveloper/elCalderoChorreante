import { Link,/*  useNavigate */ } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { Form, Button, Alert } from 'react-bootstrap'
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

    <div className="d-flex flex-column">
      <h1>Ingresá</h1>
      <hr />

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationsSchema}
      >

        {
          (formik) => (
            <Form className="d-flex flex-column align-items-center mb-4 p-3 rounded-4 "
              onSubmit={formik.handleSubmit}>
              {alert && <Alert variant="danger">{alert}</Alert>}
              <Form.Group className="mb-4">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Field id="email" type="email"
                  placeholder="Ingresa tu email"
                  name="email"
                  as={Form.Control}
                  style={{ width: '350px' }} />
                <ErrorMessage
                  name="email"
                  component={Form.Text}
                  className="text-danger ms-2"
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                <Field id="password"
                  name="password"
                  type="password"
                  placeholder="Ingresa tu contraseña"
                  as={Form.Control}
                  style={{ width: '350px' }} />
                <ErrorMessage
                  name="password"
                  component={Form.Text}
                  className="text-danger ms-2"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-50 mt-2 mb-3" disabled={false}>
                Entrar
              </Button>
            </Form>

          )}

      </Formik>


      <div className="contentsButonLogin ">
        <Link to={'/homeSearch'} className="buttonLogin">Volver al Home</Link>

        <Link to={'/register'} className="buttonLogin">¿No estás registrado?</Link>
      </div>



    </div>

  )
}
