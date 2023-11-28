import axios from "axios";

let Base_Url = "https://655ed1d4879575426b43fc3e.mockapi.io/users"

export async function GetUsers(){
    let users;
    await axios.get(`${Base_Url}`)
    .then((result)=>{
        users = result.data
    })
    return users;
}

export async function PutUser(id, payload){
    axios.put(`${Base_Url}/${id}`, payload)
}