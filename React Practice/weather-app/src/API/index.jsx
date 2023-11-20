import axios from "axios";

export async function GetWeather(country){
    let weather;
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=afb395858d09642383985d2e18a7f6fa`)
    .then((result)=>{
        weather = result
    })
    return weather;
}