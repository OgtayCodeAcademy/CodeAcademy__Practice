import classes from './index.module.scss';
import { Field, Formik, useFormik } from "formik";
import { BasicSchema } from "../../Schema";

const onSubmit = (values, action) => {
  action.handleReset();
  console.log(values);
}

export default function Login() {
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
            <button type="submit">Submit</button>
        </form>
    </>
  )
}
