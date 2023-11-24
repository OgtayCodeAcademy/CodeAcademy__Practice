import React, { useEffect, useReducer, useState } from 'react'
import { GetUsers, PutUser } from './API';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

let Currentuser = {
  name: (JSON.parse(localStorage.getItem('current-user')) ? JSON.parse(localStorage.getItem('current-user')).name : ''),
  email: (JSON.parse(localStorage.getItem('current-user')) ? JSON.parse(localStorage.getItem('current-user')).email : ''),
  password: (JSON.parse(localStorage.getItem('current-user')) ? JSON.parse(localStorage.getItem('current-user')).password : ''),
  friends: (JSON.parse(localStorage.getItem('current-user')) ? JSON.parse(localStorage.getItem('current-user')).friends : ''),
  id: (JSON.parse(localStorage.getItem('current-user')) ? JSON.parse(localStorage.getItem('current-user')).id : "0")
}

function reducer(state, action){
  const type = action.type
  switch (type) {
    case "login":
      localStorage.setItem('current-user', JSON.stringify({
        name: action.name,
        email: action.email, 
        password: action.password,
        friends: action.friends,
        id:action.id
        }))
      break;
    case "logout":
      localStorage.removeItem('current-user')
    case "add-friend":
      let USER = JSON.parse(localStorage.getItem('current-user'));
      if (JSON.parse(localStorage.getItem('current-user'))) {
        if (JSON.parse(localStorage.getItem('current-user')).friends.find((friend)=> friend.id === action.added_user_id)) {
          alert("user already in your friend list")
        }else{
          localStorage.setItem('current-user', JSON.stringify({...USER, friends: [...USER.friends, {id: action.added_user_id, name: action.added_user_name}]}))
          PutUser(JSON.parse(localStorage.getItem('current-user')).id, JSON.parse(localStorage.getItem('current-user')))
        }  
      }
      
    default:
      return state
  }
}

export default function App() {
  let [loginedUser, dispatch] = useReducer(reducer, Currentuser)
  let [users, setusers] = useState([]);
  let[showLoginForm, setShowLoginForm] = useState((JSON.parse(localStorage.getItem('current-user')) ? true :  false))
  useEffect(()=>{
    GetUsers().then((data)=>{
      setusers(data)
    })
  }, [])
  
  return (
    <>
      {/* Log In Form */}
      {(!showLoginForm && <form action="">
        <input type="text" placeholder='email' onChange={(e)=>{
          Currentuser.email = e.target.value
        }}/>
        <input type="text" placeholder='password' onChange={(e)=>{
          Currentuser.password = e.target.value
        }}/>
        <button onClick={(e)=>{
          e.preventDefault();
          let succes_logined_user = users.find((user)=> user.email == Currentuser.email && user.password == Currentuser.password)
          if (succes_logined_user) {
            Currentuser.name = succes_logined_user.name
            Currentuser.email = succes_logined_user.email
            Currentuser.password = succes_logined_user.password
            Currentuser.friends = succes_logined_user.friends
            Currentuser.id = succes_logined_user.id
            dispatch({
            type: 'login', 
            name: succes_logined_user.name, 
            email: succes_logined_user.email,
            password: succes_logined_user.password,
            friends: succes_logined_user.friends,
            id:succes_logined_user.id
           })
           setShowLoginForm(true)
          }else{
            window.alert("Wrong Password or Email")
          }
        }}>Login</button>
      </form>)}
      {/* Log Out Button */}
      {(showLoginForm &&
        <>
          <span style={{marginRight: "20px"}}>{Currentuser.name}</span>
          <button onClick={()=>{
            Currentuser.name = ""
            Currentuser.email = ""
            Currentuser.password = ""
            Currentuser.friends = []
            Currentuser.id = "0"
            dispatch({type: 'logout'})
            setShowLoginForm(false)
        }}>Log-Out</button>
        </>
      )}
      {/* Cards */}
      {(showLoginForm && 
        users.filter((user)=> user.id !== Currentuser.id && user.name !== Currentuser.name).map((user, idx)=>{
          return <Card style={{margin: '20px 0', backgroundColor: "##C5C5C5"}} key={idx} sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography variant="h5" component="div">
              <span>{user.name}</span>
            </Typography>
            <Typography variant="body2">
              <span style={{color: (
                JSON.parse(localStorage.getItem('current-user')).friends.find((friend)=> friend.id === user.id)
                ? 
                "green"
                :
                "red"
              )}}>Friend (<button>Y</button> / <button>N</button>)</span>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>{
              dispatch({type: 'add-friend', added_user_id: user.id, added_user_name: user.name})
            }}>Add to Friends</Button>
            <Button style={{color: "red"}}>Delete Friend</Button>
          </CardActions>
        </Card>
        })
      )}
    </>
  )
}