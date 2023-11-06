let country_cards = document.querySelector(".countries");
let Base_Url = "https://restcountries.com/v3.1/";
let current_country = new URLSearchParams(location.search).get("name");

axios.get(`${Base_Url}name/${current_country}`)
.then((result)=>{
    let countries = result.data
    countries.forEach(country => {
        country_cards.innerHTML = `
        <div class="col-12">
                <div class="image-wrapper-col12">
                    <img src="${country.flags.png}" alt="${country.name.common}">
                </div>
                <h1>${country.name.common}</h1>
                <h2 style="color: green;">${country.population}</h2>
                <h3>${country.capital}</h3>
                <p style="color: red;">${country.area}</p>
            </div>`
    });
})



axios.get(`${Base_Url}name/${current_country}`)
.then((result)=>{
    let countries = result.data
    countries.forEach(country => {
        country.borders.forEach((border)=>{
            axios.get(`${Base_Url}name/${border}`)
            .then((result)=>{
                let border_countries = result.data
                border_countries.forEach((border_country)=>{
                    console.log(border_country.name.common);
                    country_cards.innerHTML += `
                    <a href="./details.html?name=${border_country.name.common}">
                    <div class="col-3">
                        <div class="image-wrapper">
                            <img src="${border_country.flags.png}" alt="${border_country.name.common}">
                        </div>
                        <h1>${border_country.name.common}</h1>
                        <h2 style="color: green;">${border_country.population}</h2>
                        <h3>${border_country.capital}</h3>
                        <p style="color: red;">${border_country.area}</p>
                    </div>
                </a>`
                })
            })
        })
    });
})