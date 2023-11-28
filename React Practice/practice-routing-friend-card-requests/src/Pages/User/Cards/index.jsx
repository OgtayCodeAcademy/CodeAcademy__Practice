import axios from "axios";
import { useEffect, useReducer, useState } from "react"
import SendCard from "../SendCard";
import AdminPanel from "./Companents/AdminPanel";

let CurrentUser = {
  name: (JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).name : ""),
  email: (JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).email : ""),
  password: (JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).password : ""),
  id: (JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).id : ""),
  cards: (JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).cards : []),
  isAdmin: (JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')).isAdmin : false)
}
function reducer(state, action){
  const type = action.type
  switch (type) {
    case 'login':
      localStorage.setItem('currentUser', JSON.stringify({
        name: action.currentName,
        email: action.currentEmail,
        password: action.currentPassword,
        id: action.currentID,
        cards: action.cards,
        isAdmin: action.currentAdmin
      }))
      break;
    case 'logout':
      localStorage.removeItem('currentUser')
      break;
    default:
      return state
  }
}

function Cards() {
  let [showLoginForm, setShowLoginInput] = useState(true)
  let [currentUser, dispatch] = useReducer(reducer, CurrentUser)
  let [loginInput, setLoginInput] = useState({email: "", password: ""})
  let [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get("https://6564178bceac41c0761d637a.mockapi.io/users")
    .then((result)=>{
      setUsers(result.data)
    })
  }, [])

  return (
    <>
      {((!JSON.parse(localStorage.getItem('currentUser')) && showLoginForm == true) && <form action="">
        <input type="text" placeholder="Email" onChange={(e)=>{
          setLoginInput({...loginInput, email: e.target.value})
        }}/>
        <input type="text" placeholder="Password" onChange={(e)=>{
          setLoginInput({...loginInput, password: e.target.value})
        }}/>
        <button onClick={(e)=>{
          e.preventDefault();
          let founded_user = users.find((user)=>user.email == loginInput.email && user.password == loginInput.password)
            if (founded_user) {
              dispatch({
                type: 'login', 
                currentName: founded_user.name,
                currentEmail: founded_user.email,
                currentPassword: founded_user.password,
                currentID: founded_user.id,
                cards: founded_user.cards,
                currentAdmin: founded_user.isAdmin
              })
              setShowLoginInput(false)
            }else{
              alert("Wrong Password or Email")
            }

        }}>log in</button>
      </form>)}
      {((JSON.parse(localStorage.getItem('currentUser'))) && <>
        <span>{(JSON.parse(localStorage.getItem('currentUser')).isAdmin == true ? "Admin:" : "User:")}</span>
        <span style={{margin: '0 10px', color: (JSON.parse(localStorage.getItem('currentUser')).isAdmin == true ? "green" : "black")}}>{CurrentUser.name}</span>
        <button onClick={()=>{
          dispatch({ type: 'logout'})
          setShowLoginInput(true)
        }}>Log Out</button>
      </>)}
      {((JSON.parse(localStorage.getItem('currentUser')))?.isAdmin == false && <SendCard CurrentUser={CurrentUser}/>)}
      {((JSON.parse(localStorage.getItem('currentUser')))?.isAdmin == true && <AdminPanel CurrentUser={CurrentUser} users={users}></AdminPanel>)}
    </>
  )
}

export default App
