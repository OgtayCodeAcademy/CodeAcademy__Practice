import classes from './index.module.scss';
import { Field, Formik, useFormik } from "formik";
import { BasicSchema } from "../../Schema";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Register() {
  const navigate = useNavigate()
  const onSubmit =  (values, action) => {
     axios.post('https://6569644fde53105b0dd6f9e0.mockapi.io/users', {
      Firstname: values.Firstname,
      Lastname: values.Lastname,
      Email: values.Email,
      Phone: values.PhoneIndex + values.Phone,
      Password: values.Password,
      agreement: values.agreement
    })
    action.resetForm();
    console.log(values);
    navigate('/login')
  
   
  }
  const {values, handleSubmit, handleChange, errors, handleBlur, touched} = useFormik({
    initialValues: {
      Firstname: '',
      Lastname: '',
      Email : '',
      Phone: '',
      PhoneIndex: '+994',
      Password: '',
      agreement: false
    },
    onSubmit,
    validationSchema: BasicSchema,
  })
  return (
    <>
        <form className={`${classes.login_form}`} onSubmit={handleSubmit} action="">
            <div>
              <label htmlFor="Firstname"></label>
              <input onBlur={handleBlur} style={{borderColor: (errors.Firstname && touched.Firstname) && 'red'}} value={values.Firstname} onChange={handleChange} name="Firstname" type="text" placeholder="Firstname" />
              {((errors.Firstname && touched.Firstname) && <><span>{errors.Firstname}</span></>)}
            </div>
            <div>
              <label htmlFor="Lastname"></label>
              <input onBlur={handleBlur} style={{borderColor: (errors.Lastname && touched.Lastname) && 'red'}} value={values.Lastname} onChange={handleChange} name="Lastname" type="text" placeholder="Lastname"/>
              {((errors.Lastname && touched.Lastname) && <><span>{errors.Lastname}</span></>)}
            </div>
            <div>
              <label htmlFor="Email"></label>
              <input onBlur={handleBlur} style={{borderColor: (errors.Email && touched.Email) && 'red'}} value={values.Email} onChange={handleChange} name="Email" type="email" placeholder="Email"/>
              {((errors.Email && touched.Email) && <><span>{errors.Email}</span></>)}
            </div>
            <select name="PhoneIndex" onChange={handleChange}>
              <option value="">Select Your Country</option>
              <option value="+994">Azerbaijan</option>
            </select>
            <div>
              <label htmlFor="Phone"></label>
              <input onBlur={handleBlur} style={{borderColor: (errors.Phone && touched.Phone) && 'red'}} value={values.Phone} onChange={values.PhoneIndex !== '' && handleChange } name="Phone" type="text" placeholder="Phone"/>
              {((errors.Phone && touched.Phone) && <><span>{errors.Phone}</span></>)}
            </div>
            <div>
              <label htmlFor="Password"></label>
              <input onBlur={handleBlur} style={{borderColor: (errors.Password && touched.Password) && 'red'}} value={values.Password} onChange={handleChange} name="Password" type="text" placeholder="Password"/>
              {((errors.Password && touched.Password) && <><span>{errors.Password}</span></>)}
            </div>
            <div className={`${classes.agreement_input}`}>
              <label htmlFor="agreement">I'm agree</label>
              <input onBlur={handleBlur} value={values.agreement} onChange={handleChange} name="agreement" type="checkbox" />
            </div>
            <button type="submit">Register</button>
        </form>
    </>
  )
}
