import axios from "axios";

let Base_url = "https://655d9a3e9f1e1093c5998e73.mockapi.io/films"

export async function getFilms(){
    let films;
    await axios.get("https://655d9a3e9f1e1093c5998e73.mockapi.io/films")
    .then((result)=>{
        films = result.data
    })
    return films
}