import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Calendar } from 'primereact/calendar';
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import { useFormik } from 'formik';
import { Toast } from 'primereact/toast';

import { Button } from 'primereact/button';
//import { classNames } from 'primereact/utils';

const Register = () => {

  const toast = useRef(null);
  const show = () => {
    toast.current.show({ severity: 'success', summary: 'Form Submitted', detail: formik.values.item });
};

  const formik = useFormik({
    initialValues: {
      item: ''
    },
    validate: (data) => {
      let errors = {};

      if (!data.item) {
        errors.item = 'Value is required.';
      }

      return errors;
    },
    onSubmit: (data) => {
      data.item && show(data);
      formik.resetForm();
    }
  });

  const isFormFieldInvalid = (name) => !!(formik.touched[name] && formik.errors[name]);

  const getFormErrorMessage = (name) => {
    return isFormFieldInvalid(name) ? <small className="p-error">{formik.errors[name]}</small> : <small className="p-error">&nbsp;</small>;
  };
  const [date, setDate] = useState(null);
  const [valueFirstName, setValueFirstName] = useState('');
  const [valuePass, setValuePass] = useState('');
  const [valuePassSec, setValuePassSec] = useState('');
  const [value, setValue] = useState('');


  return (
    <div className="w-100" style={{ maxWidth: '400px' }}>

      <form onSubmit={formik.handleSubmit} className="d-flex flex-column gap-2">
        <h2 className="mb-2">Registrate</h2>
        <Toast ref={toast} />
        <div className="card flex justify-content-center gap-2">
          Nombre
          <InputText id="firstname" value={valueFirstName} onChange={(e) => setValueFirstName(e.target.value)} />
          <label htmlFor="firstname" ></label>
          Apellido
          
          <InputText id="lastname" value={value} onChange={(e) => setValue(e.target.value)} />
 



          Fecha de Nacimiento
          <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon dateFormat="dd/mm/yy" readOnlyInput/>
        


          Ingresá una contraseña
          <span >
          <Password value={valuePass} onChange={(e) => setValuePass(e.target.value)} toggleMask />
          </span>
        


          Repite la contraseña
          <span>
          <Password value={valuePassSec} onChange={(e) => setValuePassSec(e.target.value)} toggleMask feedback={false} />
          </span>
         
        </div>

        {getFormErrorMessage('item')}
        <Button type="submit" label="Submit" className="mt-2 mb-3" />
      </form>

    </div>
  );
};
Register.propTypes = {
  register: PropTypes.func
}
export default Register;
