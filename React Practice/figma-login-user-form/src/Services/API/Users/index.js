import axios from "axios";
const Base_Url = 'https://6569644fde53105b0dd6f9e0.mockapi.io/users'

export async function GetAllUsers(){
    let users;
    await axios.get(Base_Url)
    .then((response)=>{
        users = response.data
    })
    return users
}