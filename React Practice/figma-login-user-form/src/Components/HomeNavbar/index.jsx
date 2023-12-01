import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { UserContext } from "../../Services/Context/UserContext";

export default function HomeNavbar() {
  const {user} = useContext(UserContext)
  const {setUser} = useContext(UserContext)
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <div style={{display: 'flex', gap: '20px'}} className="links">
            {user.name == '' && <><Link to={"/register"}>Register</Link></>}
            {user.name == '' && <><Link to={"/login"}>Login</Link></>}
            {user.name !== '' && <><Link to={"/user-page"}>User</Link></>}
            {user.name !== '' && <><li style={{listStyle: 'none'}}>Basket<sup><span>{user.basket.length}</span></sup></li></>}
            {user.name !== '' && <><button onClick={()=>{
              setUser({name: '', email: '', basket: []})
              localStorage.removeItem('user')
              sessionStorage.removeItem('user')
            }}><Link to={"/login"}>Logout</Link></button></>}
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}
