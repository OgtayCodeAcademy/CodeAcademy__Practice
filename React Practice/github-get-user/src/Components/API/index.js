import axios from "axios";
let Base_URl = "https://api.github.com/users"

export async function GetUser(user){
    let profile;
    await axios.get(`${Base_URl}/${user}`)
    .then((result)=>{
        profile = result.data
    })
    return profile
}