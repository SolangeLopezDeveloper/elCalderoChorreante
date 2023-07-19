import { useState } from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'primereact/calendar';
import { Password } from 'primereact/password';
import { ErrorMessage, Field, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from 'primereact/button';
import { registerAuthService } from '../../services/auth.services';
import { useNavigate } from 'react-router-dom';
import { Form } from 'react-bootstrap'


//import { classNames } from 'primereact/utils';

const Register = () => {
  const navigate = useNavigate()

 
  const [date, setDate] = useState(null);
  //const [valueFirstName, setValueFirstName] = useState('');
  const [valuePass, setValuePass] = useState('');
  const [valuePassSec, setValuePassSec] = useState('');
 // const [value, setValue] = useState('');

  const initialValues = {
    firstname: '',
    lastname: '',
    valuePass: '',
    valuePassSec: ''
  }


  const validationsSchema = Yup.object({
    firstname: Yup.string().required('Debes colocar un nombre'),
    lastname: Yup.string().required('Debes colocar un apellido'),
    valuePass: Yup.string().required('Debes ingresar una contraseña'),
    valuePassSec: Yup.string().required('Debes repetir tu contraseña')
  })

  const handleSubmit = async (values) => {
    const response = await registerAuthService(values)
    console.log(response)
    navigate('/profile')

  }


  return (
     <div className="w-100" style={{ maxWidth: '400px' }}>
     <h2 className="mb-2">Registrate</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationsSchema}>

          
          {
            (formik) => (
              <Form onSubmit={formik.handleSubmit} >
                <div className="card flex justify-content-center gap-2">
                  <Form.Group className="mb-5" >
                  <Form.Label htmlFor="firstname">Nombre</Form.Label>
                    <Field id="firstname" as={Form.Control} 
                    name="firstname"
                    placeholder= "Ingresa tu nombre"/>
              
                    <ErrorMessage
                      name="firstname"
                      component={Form.Text}
                      className="text-danger ms-2"
                    />
                  </Form.Group>

                  <Form.Group className="mb-5" >
                  <Form.Label htmlFor="lastname">Apellido</Form.Label>
                    <Field id="lastname" as={Form.Control} 
                    name="lastname"
                    placeholder= "Ingresa tu nombre"/>
              
                    <ErrorMessage
                      name="lastname"
                      component={Form.Text}
                      className="text-danger ms-2"
                    />
                  </Form.Group>
                  Fecha de Nacimiento
                  <Calendar value={date} id='date' onChange={(e) => setDate(e.value)} showIcon dateFormat="dd/mm/yy" readOnlyInput />
                  Ingresá una contraseña
                  <span >
                    <Password value={valuePass} id='valuePass' onChange={(e) => setValuePass(e.target.value)} toggleMask />
                  </span>
                  Repite la contraseña
                  <span>
                    <Password value={valuePassSec} id='valuePassSec' onChange={(e) => setValuePassSec(e.target.value)} toggleMask feedback={false} />
                  </span>
                </div>


                <Button type="submit" label="Submit" className="mt-2 mb-3" disabled={false}/>


              </Form>
            )
          }

        </Formik>
       </div> 
  
  )
}

Register.propTypes = {
  register: PropTypes.func
}
export default Register;
