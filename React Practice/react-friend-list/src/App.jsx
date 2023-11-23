//#region Material UI
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//#endregion


import { useEffect, useReducer, useState } from "react";
import { GetUsers, PutUser } from "./API";

let User = {
  logined: false,
  id: 0,
  friends: [],
  name: "",
  password: "",
  email: "",
};

function reducer(state, action) {
  const type = action.type;
  const user_id =
    JSON.parse(localStorage.getItem("user")) &&
    JSON.parse(localStorage.getItem("user")).id;
  switch (type) {
    case "login":
      localStorage.setItem(
        "user",
        JSON.stringify({ id: User.id, logined: true })
      );
      return {
        ...User,
        logined: action.logined,
        id: action.id,
        friends: action.friends,
        name: action.name,
        password: action.password,
        email: action.email
      };
    case "log-out":
      localStorage.removeItem("user");
      console.log(user_id);
      return { ...User, logined: false };
    case "Add-Friend":
      console.log(user_id, action.user);
      PutUser(user_id, action.user);
    default:
      break;
  }
}
function App() {
  let [user, dispatch] = useReducer(reducer, User);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    GetUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <>
      {/* Log In Button */}
      {JSON.parse(localStorage.getItem("user")) == undefined && (
        <>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => {
              User.email = e.target.value;
            }}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => {
              User.password = e.target.value;
            }}
          />
          <button
            onClick={() => {
              let suitable_user = users.find(
                (user) =>
                  user.email == User.email && user.password == User.password
              );
              if (suitable_user) {
                dispatch({
                  type: "login",
                  name: suitable_user.name,
                  id: suitable_user.id,
                  friends: suitable_user.friends,
                  email: suitable_user.email,
                  password: suitable_user.password,
                  logined: true,
                });
                User.name = suitable_user.name;
                User.id = suitable_user.id;
                User.friends = suitable_user.friends;
                User.email = suitable_user.email;
                User.password = suitable_user.password;
                User.logined = suitable_user.true;
              } else {
                window.alert("Wrond password or email");
              }
            }}
          >
            Log-in
          </button>
        </>
      )}
      {/* Log Out Button */}
      {JSON.parse(localStorage.getItem("user")) && (
        <>
          <span>{User.name}</span>
          <button
            onClick={() => {
              User.id = "";
              dispatch({ type: "log-out" });
            }}
          >
            Log-out
          </button>
        </>
      )}
      {JSON.parse(localStorage.getItem("user")) && (
        <>
          {users
            .filter((user) => user.id !== User.id)
            .map((user, idx) => {
              return (
                <Card key={idx} sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {user.name}
                    </Typography>
                    <Typography variant="body2">
                      <span>Friend</span>
                    </Typography>
                    <CardActions>
                      <Button
                        id={user.id}
                        onClick={(e) => {
                          User.friends.push({ id: e.target.id });
                          dispatch({
                            type: "Add-Friend",
                            friend_id: user.id,
                            array: User.friends,
                            user: User
                          });
                        }}
                      >
                        Add to Friend list
                      </Button>
                    </CardActions>
                  </CardContent>
                </Card>
              );
            })}
        </>
      )}
    </>
  );
}

export default App;
