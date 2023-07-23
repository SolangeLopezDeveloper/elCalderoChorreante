import PropTypes from 'prop-types';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import { registerAuthService } from '../../services/auth.services';
import {Link} from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()

  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    password: ""

  }

  const validationsSchema = Yup.object({
    name: Yup.string().required('Debes colocar un nombre'),
    lastname: Yup.string().required('Debes colocar un apellido'),
    email: Yup.string().required('Debes colocar un email'),
    password: Yup.string().required('Debes ingresar una contraseña')

  })

  const handleSubmit = async (values) => {
    const response = await registerAuthService(values)

    console.log(response);
    navigate('/login')
  }

  return (
    
    <div className="w-100 mb-3" style={{ maxWidth: '400px' }}>
      <h2 className="mb-2">Registrate</h2>
      <hr />
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationsSchema}>


        {
          (formik) => (
            <Form onSubmit={formik.handleSubmit} className="flex justify-content-center gap-2">

              <Form.Group className="mb-2" >
                <Form.Label htmlFor="name">Nombre</Form.Label>
                <Field id="name"
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  as={Form.Control} />
                <ErrorMessage
                  name="name"
                  component={Form.Text}
                  className="text-danger ms-2"
                />
              </Form.Group>

              <Form.Group className="mb-2" >
                <Form.Label htmlFor="lastname">Apellido</Form.Label>
                <Field id="lastname" as={Form.Control}
                  name="lastname"
                  placeholder="Ingresa tu apellido" />

                <ErrorMessage
                  name="lastname"
                  component={Form.Text}
                  className="text-danger ms-2"
                />
              </Form.Group>

              <Form.Group className="mb-2" >
                <Form.Label htmlFor="email">Email</Form.Label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ingresa tu email"
                  as={Form.Control}
                />

                <ErrorMessage
                  name="email"
                  component={Form.Text}
                  className="text-danger ms-2"
                />
              </Form.Group>
             
              <Form.Group className="mb-2">
                <Form.Label htmlFor="password">Contraseña</Form.Label>
                <Field
                  id="password"
                  name="password"
                  type="password"
                  as={Form.Control}
                  style={{ width: '400px' }} />
                <ErrorMessage
                  name="password"
                  component={Form.Text}
                  className="text-danger ms-2"
                />
              </Form.Group>
              <Button type="submit" className="mt-2 mb-3" disabled={false}>Registrarme</Button>
            </Form>
          )
        }

      </Formik>
      <div className="contentsButonLogin ">
 <Link to={'/homeSearch'} className="buttonLogin">Volver al Home</Link>

   <Link to={'/login'} className="buttonLogin">¿Ya estás registrado?</Link>
 </div>
    </div>


  )
}

Register.propTypes = {
  register: PropTypes.func
}
export default Register;
