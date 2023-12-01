import { useContext } from 'react'
import classes from './index.module.scss'
import { useFormik } from 'formik'
import { GetAllUsers } from '../../Services/API/Users'
import LoginNavbar from '../../Components/LoginNavbar'
import { UserContext } from "../../Services/Context/UserContext";
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()
  const onSubmit = (values, action) => {
    GetAllUsers().then((users)=>{
      let founded_user = users.find((user)=> user.Email == values.email && user.Password == values.password)
      if (founded_user) {
        if (values.rememberMe === true) {
          localStorage.setItem('user', JSON.stringify({name: founded_user.Firstname + " " + founded_user.Lastname, email: founded_user.Email, phone: founded_user.Phone, password: founded_user.Password}))
        }else{
          sessionStorage.setItem('user', JSON.stringify({name: founded_user.Firstname + " " + founded_user.Lastname, email: founded_user.Email, phone: founded_user.Phone, password: founded_user.Password}))
        }  
        setUser({...user, name: founded_user.Firstname + " " + founded_user.Lastname, email: founded_user.Email})
        navigate('/')
      }else{
        window.alert('Email or password is incorrect')
      }
    })
    
    
  }
  const {values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false
    },
    onSubmit
  })
  return (
    <>
        <LoginNavbar></LoginNavbar>
        <div className={classes.container}>
          <form onSubmit={handleSubmit} action="">
            <label htmlFor="email"></label>
            <input name='email' value={values.email} type="email" onChange={handleChange} placeholder='email'/>
            <label htmlFor="password"></label>
            <input name='password' value={values.password} type="password" onChange={handleChange}  placeholder='passowrd'/>
            <label htmlFor="rememberMe">Remember Me: </label>
            <input name='rememberMe' value={values.rememberMe} type="checkbox" onChange={handleChange}/>
            <button type='submit'>Log In</button>
          </form>
        </div>
    </>
  )
}
